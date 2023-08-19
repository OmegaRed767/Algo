let arr = ["max", "jane", "alice", "jane", "alice", "alice"]

let obj = {}

let max = 0

let name = ""

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]] += 1
        if (obj[arr[i]] > max) {

            max = obj[arr[i]]
            name = arr[i]
        }
    }
    else {
        obj[arr[i]] = 1
    }
}

console.log(name)