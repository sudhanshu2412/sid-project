const newHero= ["Hulk","Spiderman"];

function multipleBy5(num){
    return num*5

}

multipleBy5.power=2;
console.log(multipleBy5(5));

console.log(multipleBy5.power);

setTimeout(() => {
    console.log("i am sudhanshu");
    
}, 3000);

 let promise = new promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("i am sudhanshu");
        resolve("sudhannshu");
        
    }, 3000);
 }) 

 promise.then = (a) => {
    console.log(a);
 }
 promise.catch = (err)=>{
    console.log(err);
 }
 