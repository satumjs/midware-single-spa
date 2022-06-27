jest.mock('single-spa');
import { registerApplication, setBootstrapMaxTime, setMountMaxTime, setUnloadMaxTime, setUnmountMaxTime, start } from 'single-spa';
import singleSpaMidware, { addErrorHandler, removeErrorHandler } from '.';

describe('@satumjs/midware-single-spa test', () => {
  test('addErrorHandler/removeErrorHandler', () => {
    expect(typeof addErrorHandler).toBe('function');
    expect(typeof removeErrorHandler).toBe('function');
  });

  test('singleSpaMidware default', () => {
    const set = jest.fn();
    const fakeSystem = { options: {}, set } as any;
    const microApps = [{ name: 'foo' }, { name: 'bar' }] as any;
    const next = jest.fn();

    singleSpaMidware(fakeSystem, microApps, next);
    expect(setBootstrapMaxTime).toBeCalledTimes(1);
    expect(setBootstrapMaxTime).toBeCalledWith(4000);
    expect(setMountMaxTime).toBeCalledTimes(1);
    expect(setUnmountMaxTime).toBeCalledTimes(1);
    expect(setUnloadMaxTime).toBeCalledTimes(1);

    expect(set).toBeCalled();
    const fnStart = set.mock.calls[0][1];
    fnStart();
    expect(registerApplication).toBeCalledTimes(2);
    expect(start).toBeCalledTimes(1);
  });

  test('singleSpaMidware options', () => {
    const set = jest.fn();
    const fakeSystem = { options: { urlRerouteOnly: true, errorHandler: jest.fn(), bootstrapMaxTime: 1000 }, set } as any;
    const microApps: any[] = [{ name: 'foo' }, { name: 'bar' }];
    const next = jest.fn();

    singleSpaMidware(fakeSystem, microApps, next);
    const fnStart = set.mock.calls[0][1];
    fnStart();

    expect(setBootstrapMaxTime).toBeCalledWith(1000);
    expect(start).toBeCalledWith({ urlRerouteOnly: true });
    expect(addErrorHandler).toBeCalledTimes(1);
    expect(next).toBeCalledTimes(1);
  });
});
