const fs=require("fs")

// console.log("hello world")

// const data=fs.readFileSync("./file.txt","utf-8")
// console.log(data)

console.log("hello again")

fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err)throw err;
    console.log(data)
})

console.log("hello world")
