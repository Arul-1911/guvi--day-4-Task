// 1.printing odd numbers in anonymous function
let odd = function (array){
    for(let i=0;i <=array.length;i++){
      if(array[i] %2 !=0){
        console.log(array[i]);
      }
    }
  }

  //1.printing odd numbers in IIFE function

  (function odd (array){
    for(let i=0;i <=array.length;i++){
      if(array[i] %2 !=0){
        console.log(array[i])
      }
    }
  })
  ([1,2,3,4,5]);

  //2.capitalize the string in anonymous function

  let caps = function (str){
    for(let i=0;i<str.length;i++){
      console.log(str[i].toUpperCase());
    }
    
  }

  //2.capitalize the string in IIFE function

  (function caps(str){
    for(let i=0;i<str.length;i++){
        console.log(str[i].toUpperCase());
    }

  })
( ["hello"]);



//3.sum of all numbers in an array using anonymous function

let sum = function(array){
    let sum=0;
    for (let i=0;i<array.length;i++){
      sum += array[i];
    }
    return sum;
  }

//3.sum of all numbers in an array using IIFE function

(function sum(array){
    let sum=0;
  for (let i=0;i<array.length;i++){
    sum += array[i];
  }
})
([1,2,3,4,5]);

//4.Return all the prime numbers in an array using anonymous function

let prime = function (n){
    if (n < 2)
    return false;
    
    for (let i=2;i<n;i++){
      if (n % 2==0 ){
      return false;
        
      }
    }
    return true;
  }
  console.log (prime(5));

  //4.Return all the prime numbers in an array using IIFE function

 (function  prime(n){
    if (n < 2)
    return false;
    
    for (let i=2;i<n;i++){
      if (n % 2==0 ){
      return false;
        
      }
    }
    return true;
  })
  ([5]);

//5.Return all the palindromes in an array  using anonymous function


let palnd = function (palandrome){
    palandrome = palandrome.replace(" ","");
    let palnd = '';
    for (let i=palandrome.length-1;i>=0;i--){
      palnd += palandrome.charAt(i)
    }
    return palnd;
  }
  console.log(palnd());
  
  //5.Return all the palindromes in an array  using IIFE function

(function paland(n){
    palandrome = palandrome.replace(" ","");
    let palnd = '';
    for (let i=palandrome.length-1;i>=0;i--){
      palnd += palandrome.charAt(i)
    }
    return palnd;
  }  
 )
 (["madam"]);

 //6.Remove duplicates from an array  using anonymous function

 let arr = [];

let sort = function (arr){
  return [...new set[arr]];
}
console.log(sort[arr]);

//6.Remove duplicates from an array using IIFE function

(function sort(arr){
    return [...new set[arr]];
})
([1,2,2,3,4,5]);

// Q.Rotate an array by K times

function reverse(array , li , ri){
 while(li < ri){
       temp = a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
}
// Anonymous function :
 function rotate(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          };
                          
//    IIFE : 
     (function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          })([1,2,3,4] , 2)
 

  