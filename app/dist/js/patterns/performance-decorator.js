export function logOfExecutionTime(emSegundos = false) {
    return function (target, propertyKey, propertyDescriptor) {
        const originalMethod = propertyDescriptor.value;
        propertyDescriptor.value = function (...args) {
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
