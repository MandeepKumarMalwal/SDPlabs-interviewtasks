//sum odd

let oddsum = 0
let i
for(i=1;i<=100;i++){
    if(i % 2 == 1){
        oddsum += i
    }
}
console.log(oddsum)
document.write(oddsum)

//even sum

let evensum = 0
let j
for(j=1;j<=100;j++){
    if(j % 2 == 0){
        evensum += j
    }
}
console.log(evensum)