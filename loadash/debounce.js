function customDebounce(fn, delay) {
    let timeout;
    return function(...args) {        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const logMessage = () => console.log('Function called');
const debouncedLog = customDebounce(logMessage, 2000);
debouncedLog("hi");
debouncedLog();
// Output after 2 seconds: 'Function called' (only called once)

