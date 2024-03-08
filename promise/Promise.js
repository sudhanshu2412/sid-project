console.log("aaeran is aaerni");
console.log("Sudhanshu is a hecker");

// setTimeout(() => {
//   console.log("I am sudhanshu");
// }, 2000);

// console.log("The End");

// const Callback = (arg) => {
//   console.log(arg);
// };
// const loadScript = (src, Callback) => {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = Callback("Harry");
//   document.head.append(sc);
// };

let prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("yes I am done")
        resolve("Sudhanshu");
        
    }, 3000);
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})