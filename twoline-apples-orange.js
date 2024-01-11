function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_count = apples.filter(value => value + a >= s && value + a <= t).length
    let orange_count = oranges.filter(value => value + b >= s && value + b <= t).length

    console.log(apple_count)
    console.log(orange_count)

}