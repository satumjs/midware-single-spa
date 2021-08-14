import { registerApplication, start as sspaStart, setMountMaxTime, setUnmountMaxTime } from 'single-spa';
import { MidwareSystem, RealMicroApp, NextFn } from '@satumjs/types';

export default function singleSpaMidware(system: MidwareSystem, microApps: RealMicroApp[], next: NextFn) {
  const defaultTimeout = 5 * 60 * 1000;
  setMountMaxTime(defaultTimeout);
  setUnmountMaxTime(defaultTimeout);

  microApps.forEach(({ name, app, activeWhen, customProps }) => {
    registerApplication({ name, app, activeWhen, customProps } as any);
  });
  system.set('start', sspaStart);
  next();
}
