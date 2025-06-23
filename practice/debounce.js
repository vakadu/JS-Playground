function debounce(cb) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, 3000)
    }
}

console.log(debounce());

