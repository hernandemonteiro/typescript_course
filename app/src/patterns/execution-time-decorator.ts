export function logOfExecutionTime(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
  ) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const returned = originalMethod.apply(this, args);
      const t2 = performance.now();
      emSegundos && console.log(`${propertyKey} execution time: ${(t2 - t1) / 1000}s`);
      !emSegundos && console.log(`${propertyKey} execution time: ${t2 - t1}ms`);

      returned;
    };
    return propertyDescriptor;
  };
}
