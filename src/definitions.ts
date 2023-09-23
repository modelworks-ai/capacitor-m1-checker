export interface M1CheckerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
