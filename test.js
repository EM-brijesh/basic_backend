// const users = {
//     username: 'Brijesh',
//     price: 99,
//     greet : function (){
//         console.log(`${this.username} hello` )

//     }
// }

// users.greet();

// const addThree = (a,b,c) => {
//    return sum = a + b + c
// }

// console.log(addThree(1,2,3))

//Largest Element 

// const num1 = [10, 15, 18, 29, 23];
// const result = bigNumber(num1);




// function largestElement(arr){
//    let Largest = arr[0];
//    for (let i = 1; i < arr.length; i++){
//     if(arr[i] > Largest){
//         Largest = arr[i];

//     }
//    }
//    return Largest;
// }

//count vowels

// function countVowels(str){
//   const vowels = 'aeiouAEIOU'
//   let count = 0;
  
//   for(char of str){
//     if(vowels.includes(char)){
//         count++
//     }
//   }
//   return count;
// }

// console.log(countVowels('Brijesh'))

//isPalindrome

// function isPalindrome(str){
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const revStr = cleanedStr.split('').reverse().join('');
//     return revStr === cleanedStr
// }

// console.log(isPalindrome("Nan"));          // true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("hello"));       // false
// console.log(isPalindrome("No 'x' in Nixon")); // true

//times

// function calculateTime(n){
//   const startTime = performance.now()
//   let sum = 0;
//   for(i=0;i<n;i++){
//     sum = sum + i;
//   }
//   const endTime = performance.now()

//   return (endTime - startTime) / 1000;

  
// }
// console.log('Time for sum from 1 to 100:', calculateTime(100));
// console.log('Time for sum from 1 to 100000:', calculateTime(100000));
// console.log('Time for sum from 1 to 1000000000:', calculateTime(1000000000));

//async 
let counter = 0;

function updateCounter(){
    counter++
    console.log(counter);
    
}
setInterval(updateCounter,1000)