function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    //console.log("house:",s,t,"dist:",s-t)
    // console.log("apple tree:",a," no:",apples)
    // console.log("orange tree:",b," no:",oranges)
    let count = [0, 0]
    let max = Math.max(apples.length, oranges.length)
    for (let i = 0; i < max; i++) {
        if (apples[i]) {
            let dist = a + apples[i]
            count[0] = !(dist >= s && dist <= t) ? count[0] : count[0] + 1
        }
        if (oranges[i]) {
            let dist = b + oranges[i]
            count[1] = !(dist >= s && dist <= t) ? count[1] : count[1] + 1
        }
    }

    console.log(count[0])
    console.log(count[1])

}

