let arr = [0, 1]

let temp

for (let i = 1; i < 5; i++) {
    temp = arr[i - 1] + arr[i]
    arr.push(temp)
}

console.log(arr)
