let arr = [10,30,40,56,89,89,3,5]

let newarr = arr.map((e)=>{

return e**2;

})

console.log(newarr)


const returnValue =  (e)=>{

   if(e>73){
      return true
   }
   
      return false
   

}
console.log(arr.filter(returnValue))

let arr4 = [2,4,5,7,9]

const red = (a,b)=>{
   return a*b;



}

console.log(arr4.reduce(red))

let arr5 = Array.from("Harry")
console.log(arr5)

