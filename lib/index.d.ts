import { MidwareSystem, RealMicroApp, NextFn } from '@satumjs/types';

declare function singleSpaMidware(system: MidwareSystem, microApps: RealMicroApp[], next: NextFn): void;

export { singleSpaMidware as default };
