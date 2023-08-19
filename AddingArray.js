let arr = [1, 3, 4, 9]


let prev = 0


for (let i = 0; i < arr.length; i++) {
    prev += arr[i]
    arr[i] = prev
}

console.log(arr)