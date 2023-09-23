export interface M1CheckerPlugin {
  runningOnM1(): Promise<{result: boolean}>;
}
