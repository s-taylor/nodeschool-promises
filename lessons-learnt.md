* a promise can either return a promise, or a value (which will be converted into a promise)
* you can use .then either nester, or external
* you can manually resolve a promise using .resolve(x), this will trigger .then
* you can manually reject a promise using .reject(x), this will find the next reject handler in the promise chain (e.g. .then(success,reject))
* it is good practice to always end your promise chain with an empty reject handler .then(null,console.error) and then a .done() to handle otherwise unhandled exceptions
* errors are suppressed unless they reach the global scope (outside the promise chain)