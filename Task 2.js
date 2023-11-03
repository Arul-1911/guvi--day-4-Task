//Print odd numbers in an array using arrow function

let oddNumbers = (array) => {
    for(let i=0;i<array.length;i++){
        if( array[i]%2!=0){
      console.log(array[i]);
        }
    }
}

//Convert all the strings to title caps in a string array using arrow function

let caps = (str) => {
    str =  str.toUpperCase();  
for (let i=0;i<str.length;i++){
    console.log(str);
}
}

//Sum of all numbers in an array using arrow function

let  sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }

//Return all the prime numbers in an array using arrow function

let  primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}

//Return all the palindromes in an array using arrow function

let Palindrome = (arr, n) =>
{
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
//all output is achieved
