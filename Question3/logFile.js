const fs = require('fs');
const path = require('path');
const process = require('process');

//Create Log files
const dirName = "./Logs";

try{
    if (!fs.existsSync(dirName)){
        fs.mkdirSync(dirName);
        console.log("Logs directory created");
        process.chdir("./Logs");
        for(let i = 0; i < 10; i++){
            fs.writeFile(`log${i}.txt`, `This is log${i}`, err => {
                if(err){
                    console.log(err.message);
                }
            });
            console.log(`log${i}.txt`);
        }
    }else{
        console.log("Logs directory already existed");
        process.chdir("./Logs");
        for(let i = 0; i < 10; i++){
            fs.writeFile(`log${i}.txt`, `This is log${i}`, err => {
                if(err){
                    console.log(err.message);
                }
            });
            console.log(`log${i}.txt`);
        }
    }
}catch(err){
    console.log(err);
}