function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails"
}

function fiveHeadsSync() {
    let headCount = 0;
    let attempts = 0;

    while (headCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        result === "heads"
            ? headCount++
            : headCount = 0
    }
    return `it took ${attempts} tries to flip five "heads"`;
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headCount = 0;
        let attempts = 0;

        while (headCount < 5 && attempts <= 100) {
            attempts++;
            let result = tossCoin()
            result === "heads" ? headCount++ : headCount = 0;
        }

        if (headCount === 5) {
            resolve(`Success to hit head count 5 times with ${attempts} attempts`)
        } else if (attempts > 100) {
            reject("it's been over 100 times")
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err))
// this will print without waiting fiveHeads result
console.log("when does this run now")