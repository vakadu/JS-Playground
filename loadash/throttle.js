function customThrottle(fn, delay) {
    let lastCall = 0
    return function(...args) {
        let now = new Date().getTime();
        console.log(now, lastCall);
        
        if(now-lastCall >= delay) {
            fn(...args);
            lastCall = now
        }
    }
}


const logMessage = () => console.log('Function called');
const throttledLog = customThrottle(logMessage, 2000);
throttledLog();
throttledLog();
// Output: 'Function called' (called only once within the 2-second limit)
