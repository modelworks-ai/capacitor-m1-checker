import { WebPlugin } from '@capacitor/core';

import type { M1CheckerPlugin } from './definitions';

export class M1CheckerWeb extends WebPlugin implements M1CheckerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
