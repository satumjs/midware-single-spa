import {
  registerApplication,
  start as sspaStart,
  setBootstrapMaxTime,
  setMountMaxTime,
  setUnmountMaxTime,
  setUnloadMaxTime,
  RegisterApplicationConfig,
  navigateToUrl,
  pathToActiveWhen,
  getMountedApps,
  getAppNames,
  getAppStatus,
  unloadApplication,
  unregisterApplication,
  checkActivityFunctions,
  addErrorHandler,
  removeErrorHandler,
} from 'single-spa';
import { MidwareSystem, RealMicroApp, NextFn } from '@satumjs/types';

export default function singleSpaMidware(system: MidwareSystem, microApps: RealMicroApp[], next: NextFn) {
  const defaultTimeout = 4000; // single-spa default timeout
  const { timeout, bootstrapMaxTime, mountMaxTime, unmountMaxTime, unloadMaxTime } = system.options;
  setBootstrapMaxTime(bootstrapMaxTime || timeout || defaultTimeout);
  setMountMaxTime(mountMaxTime || timeout || defaultTimeout);
  setUnmountMaxTime(unmountMaxTime || timeout || defaultTimeout);
  setUnloadMaxTime(unloadMaxTime || timeout || defaultTimeout);

  microApps.forEach(({ name, app, activeWhen, customProps }) => {
    registerApplication({ name, app, activeWhen, customProps } as RegisterApplicationConfig);
  });

  system.set('start', sspaStart);

  next();
}

export {
  navigateToUrl,
  pathToActiveWhen,
  getMountedApps,
  getAppNames,
  getAppStatus,
  unloadApplication,
  unregisterApplication,
  checkActivityFunctions,
  addErrorHandler,
  removeErrorHandler,
};
