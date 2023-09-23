import { registerPlugin } from '@capacitor/core';

import type { M1CheckerPlugin } from './definitions';

const M1Checker = registerPlugin<M1CheckerPlugin>('M1Checker', {
  web: () => import('./web').then(m => new m.M1CheckerWeb()),
});

export * from './definitions';
export { M1Checker };
