console.log('Hello,world')

function add(a,b) {
    return a+b
}
const r = 10
const s = 5
const array = [0,1,2,3,4,5]
var total = 0
for (let index = 0; index < array.length; index++) {
    total = add(total,array[index])
}