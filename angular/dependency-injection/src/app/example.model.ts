export interface ExampleDef {
  label: string;  // link label
  path: string;   // route path
  name?: string;   // route name of the example
  dev?: boolean;  // is it an intermediate step?
}
