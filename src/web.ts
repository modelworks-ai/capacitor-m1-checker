import { WebPlugin } from '@capacitor/core';

import type { M1CheckerPlugin } from './definitions';

export class M1CheckerWeb extends WebPlugin implements M1CheckerPlugin {
  runningOnM1(): Promise<{result: boolean}> {
    return Promise.resolve({result: false});
  }

}
