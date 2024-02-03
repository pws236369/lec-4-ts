export function balagan() {
  console.log('balagan');

  /**
   * TS gives us the power of static typing.
   * We can start from the basic types:
   * any, string, number, boolean, object, undefined, null, void, never, unknown
   */

  // Give some type to each variable:
  let appName: string = 'COOL APP!';

  appName = 5; // TS will complain here

  const appVersion: number = 1.0;
  const newVersion = appVersion + 0.1; // TS will infer the type

  // You can go crazy with the 'any' type. Buy its not recommended:
  let crazy: any = 5;
  crazy = 'hello'; // No complaints from TS
}
