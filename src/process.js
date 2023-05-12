require('dotenv').config()

// console.log(process.argv)
// console.log(process.argv[0])
// console.log(process.argv[1])

const name=process.argv[2]
// console.log(`hi iam ${name}`)
const location=process.argv[3]
// console.log(`hi iam ${name} i live at ${location}`)

// console.log("process.env :",process.env)
console.log("process.env.NODE_ENV :",process.env.NODE_ENV)