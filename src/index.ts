import { MidwareSystem, RealMicroApp, NextFn } from '@satumjs/types';
import {
  registerApplication,
  start as sspaStart,
  setBootstrapMaxTime,
  setMountMaxTime,
  setUnmountMaxTime,
  setUnloadMaxTime,
  RegisterApplicationConfig,
  addErrorHandler,
  removeErrorHandler,
} from 'single-spa';

export { addErrorHandler, removeErrorHandler };
export default function singleSpaMidware(system: MidwareSystem, microApps: RealMicroApp[], next: NextFn) {
  const defaultTimeout = 4000; // single-spa default timeout
  const { timeout, bootstrapMaxTime, mountMaxTime, unmountMaxTime, unloadMaxTime, errorHandler } = system.options;

  setBootstrapMaxTime(bootstrapMaxTime || timeout || defaultTimeout);
  setMountMaxTime(mountMaxTime || timeout || defaultTimeout);
  setUnmountMaxTime(unmountMaxTime || timeout || defaultTimeout);
  setUnloadMaxTime(unloadMaxTime || timeout || defaultTimeout);

  microApps.forEach(({ name, app, activeWhen, customProps }) => {
    registerApplication({ name, app, activeWhen, customProps } as RegisterApplicationConfig);
  });

  system.set('start', sspaStart);

  if (errorHandler) {
    addErrorHandler(errorHandler);
  }

  next();
}
