import { MidwareSystem, IMicroApp, NextFn, MidwareName } from '@satumjs/types';
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
export default function singleSpaMidware(system: MidwareSystem, microApps: IMicroApp[], next: NextFn) {
  const defaultTimeout = 4000; // single-spa default timeout
  const { timeout, bootstrapMaxTime, mountMaxTime, unmountMaxTime, unloadMaxTime, errorHandler, urlRerouteOnly } = system.options;

  setBootstrapMaxTime(bootstrapMaxTime || timeout || defaultTimeout);
  setMountMaxTime(mountMaxTime || timeout || defaultTimeout);
  setUnmountMaxTime(unmountMaxTime || timeout || defaultTimeout);
  setUnloadMaxTime(unloadMaxTime || timeout || defaultTimeout);

  system.set(MidwareName.start, () => {
    microApps.forEach(({ name, app, activeWhen, customProps }) => {
      const config = { name, app, activeWhen, customProps } as RegisterApplicationConfig;
      registerApplication(config);
    });
    typeof urlRerouteOnly === 'undefined' ? sspaStart() : sspaStart({ urlRerouteOnly });
  });

  if (errorHandler) {
    addErrorHandler(errorHandler);
  }

  next();
}
