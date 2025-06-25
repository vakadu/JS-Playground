function delay(d) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, d)
    })
}

delay(1000).then(() => console.log("1 second passed")); // Output: "1 second passed" after 1 second
