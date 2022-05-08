jest.mock('single-spa');
import { MidwareName } from '@satumjs/types';
import { registerApplication, start, setBootstrapMaxTime, setMountMaxTime, setUnmountMaxTime, setUnloadMaxTime } from 'single-spa';
import singleSpaMidware, { addErrorHandler, removeErrorHandler } from '.';

describe('@satumjs/midware-single-spa test', () => {
  test('addErrorHandler/removeErrorHandler', () => {
    expect(typeof addErrorHandler).toBe('function');
    expect(typeof removeErrorHandler).toBe('function');
  });

  test('singleSpaMidware', () => {
    const configs = {} as any;
    const set = (cfgName: MidwareName, cfgValue: any) => (configs[cfgName] = cfgValue);
    const fakeSystem = { options: {}, set } as any;
    const microApps: any[] = [{ name: 'test' }, { name: 'foo' }];
    const next = jest.fn();

    singleSpaMidware(fakeSystem, microApps, next);
    expect(setBootstrapMaxTime).toHaveBeenCalledTimes(1);
    expect(setBootstrapMaxTime).toHaveBeenCalledWith(4000);
    expect(setMountMaxTime).toHaveBeenCalledTimes(1);
    expect(setUnmountMaxTime).toHaveBeenCalledTimes(1);
    expect(setUnloadMaxTime).toHaveBeenCalledTimes(1);
    expect(MidwareName.start in configs).toBe(true);

    configs[MidwareName.start]();
    expect(registerApplication).toHaveBeenCalledTimes(2);
    expect(start).toHaveBeenCalledTimes(1);

    fakeSystem.options.urlRerouteOnly = true;
    fakeSystem.options.errorHandler = jest.fn();
    fakeSystem.options.bootstrapMaxTime = 1000;
    singleSpaMidware(fakeSystem, microApps, next);
    expect(setBootstrapMaxTime).toHaveBeenCalledWith(1000);
    configs[MidwareName.start]();
    expect(start).toHaveBeenCalledWith({ urlRerouteOnly: true });
    expect(addErrorHandler).toBeCalledTimes(1);
    expect(next).toHaveBeenCalledTimes(2);
  });
});
