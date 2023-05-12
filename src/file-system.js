const { writeFile } = require("fs");

const fs = require("fs").promises;

//stats on file
const getStats = async (path) => {
  try {
    const stats=await fs.stat(path)
    // console.log(stats);
    console.log(`isFile: ${stats.isFile()}`)
    console.log(`isDirectory: ${stats.isDirectory()}`)

    // const info = await fs.readFile(path, "utf-8", (data) => {
    //   if (err) throw err;
    //   return data;
    // });
    // console.log(info);
  } catch (error) {
    console.error(error);
  }
};


//read file through file system promises
const readFile=async (path) => {
  try{
    const contents=await fs.readFile(path,"utf8")
    console.log(contents)
  }catch(error){
    console.log(error)
  }
}

//writing a file
// fs.writeFile("./file.txt","hello world!!!")

//append file or update file
const appendFile=async(path,data)=>{
  try{
    await fs.appendFile(path,data)
  }catch(error){
    console.log(error)
  }
}

// appendFile("./file.txt","12344335")
getStats("./file.txt");
readFile("./file.txt")

