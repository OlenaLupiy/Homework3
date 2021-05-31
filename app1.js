// Task1
let arr = [2, 3, 4, 5];
let multi =1;
for (let i = 0; i< arr.length; i++){
    multi*=arr[i];
}
console.log(multi);

 m= 1;
for(let i in arr){
    m*=arr[i];
}
console.log(m);


let count = 0;
m=1;
while (count<arr.length){
    m*=arr[count];
    count++;
}
console.log(m);

//Task2

for (let i = 0; i<=15; i++){
    if (i%2===0) { 
        console.log(i + ' is even')
    }
    else {console.log(i + ' is odd')}
};

//Task3
function randArray (min, max){
    return parseInt(min + Math.random() * (max-min))};
    let arr1=[];
    for (let i=0; i<5; i++){
            arr1.push(randArray(1, 1500));
            }
            console.log(arr1);




// Task 4
function raiseToDegree (){
    let a = parseInt(+prompt('Enter number', ''));
    let b = parseInt(+prompt('Enter another number', ''));
    let rez = a ** b;
    return rez;
}
alert(raiseToDegree());

//Task 5
function findMin() {
    let min =0;
       for (let i = 0; i <arguments.length; i++){
        if (arguments[i] <m){
           m = arguments[i];
        }}
        console.log(m);
    }

findMin(3, 17, 9, 0.55, -7);

//Task 6

// function findUnique(...a, b, c) {      
//      if (a!= b && b != c && a!=c ){
//          console.log(true)}
//      else console.log(false)};
    
// let arr2 = [2, 3, 2]
// findUnique(...arr2);



function findUnique1(...x){
    for (let i =0; i < arr2.length; i++){
        for (let j = (i+1); j< arr2.length; j++){
        if (arr2[j] != arr2[j+1] && arr2[i] != arr2[i+1] && arr2[i] != arr2[j+1] && arr2[j] != arr2[i+1]){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
}};
let arr2=[1, 2, 3, 2]
findUnique1 (...arr2);
//for(let i = 0; i < arr.length; i++){
    //for(let j = (i + 1); j < arr.length; j++){
        


// Task 7
// let arr = [];
// let count1;
// function lastElem(a, b) {
//     if ()
    
// }

// Task 8
function capitalLetters(...x) {
    
}