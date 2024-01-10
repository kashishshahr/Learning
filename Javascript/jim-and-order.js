
function jimOrders(orders) {
    return orders.map((item, index) => [index + 1, item[0] + item[1]])
        .sort((a, b) => a[1] - b[1])
        .map(element => element[0])
}
console.log(jimOrders([
    [8, 1],
    [4, 2],
    [5, 6],
    [3, 1],
    [4, 3],
]))

// Sample Input 1

// 5
// 8 1
// 4 2
// 5 6
// 3 1
// 4 3
// Sample Output 1

// 4 2 5 1 3