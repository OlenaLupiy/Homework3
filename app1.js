// Task1
let arr = [2, 3, 4, 5];
let multi =1;
for (let i = 0; i< arr.length; i++){
    multi*=arr[i];
}
console.log(multi);

 let m= 1;
for(let i in arr){
    m*=arr[i];
}
console.log(m);


let count = 0;
let m1=1;
while (count<arr.length){
    m1*=arr[count];
    count++;
}
console.log(m1);

//Task2

for (let i = 0; i<=15; i++){
    if (i%2===0) { 
        console.log(i + ' is even')
    }
    else {console.log(i + ' is odd')}
};

//Task3
function randArray (k){
    const arr1=[];
    for (let i=0; i<k; i++){
        arr1[i] = Math.floor(Math.random()*500) +1
            }
            console.log(arr1);}
            randArray(5);




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

// Task 6

function findUnique(A)
{   
   
    for (let i = 0; i < A.length; i++){
      for (let j = (i+1); j < A.log; j++){
         if (A[i] === A[j]){ 
             return false;
             }
     }
}
return true;}
console.log(findUnique([1, 2, 3]));
console.log(findUnique([1, 2, 3, 1]))


function findUnique1(arr){
    for (let i =0; i<arr.length; i++)
    {
        for (let j = (i+1); j<arr.length; j++){
        if (arr[i] === arr[j]){
            return false;
        }
        }
}
return true;}
 console.log(findUnique1([1,2,3,2]));

// Task 7
 let arrReturn = [1, 2, 3, 4, 5, 6];
 function lastElem(arr)
  {
     return arrReturn[arrReturn.length - 1];
    }
    console.log(lastElem(arrReturn));

// Task 7.1
let array = [1,2,3,4,5,6,7,8,9];

function getLastElem(array, n) {
    if (array == null) return false;
    if (n == null) return array[array.length - 1];    
  return array.slice(Math.max(array.length - n, 0));
};

console.log(getLastElem(array));    // 9
console.log(getLastElem(array, 4)); // 6,7,8,9
console.log(getLastElem(array, 12));       // 1,2,3,4,5,6,7,8,9

//Task 7.2
let array1 = [1,2,3,4,5,6,7,8,9];

function getLastElem1(array1, n) {
    if (n == null) {
        console.log(array1.pop()); 
    }   
    else {
        console.log(array1.slice(-n));
    }
}
  

console.log(getLastElem1(array1));    // 9
console.log(getLastElem1(array1, 4)); // 6,7,8,9
console.log(getLastElem1(array1, 12));       // 1,2,3,4,5,6,7,8,9


// Task 8



function CapitalLetter(str)
{
    let arr = str.split(' ');  
    let newarr = [];

  for(let i = 0; i< arr.length; i++) 
  {
     newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
       return newarr.join(' ');
     }
     console.log(CapitalLetter('i love java script'))
