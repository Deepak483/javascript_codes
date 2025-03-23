function fetchPromise(url, option) {
    return new Promise((resolve, reject) => {
        fetch(url, option).then(
            response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('HTTP error! status: ' + response.status))
                }
            }
        ).catch(err => reject(err));
    })
}

fetchPromise('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res)).catch(err => console.log(err));

//promisified version of settimeout
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

delay(2000).then(() => console.log("I am delayed!"));

