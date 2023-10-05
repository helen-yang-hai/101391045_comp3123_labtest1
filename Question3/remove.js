//Remove
const fs = require('fs');
const path = require('path');
const process = require('process');

fs.readdir("./Logs", function(err, data) {
    if (!fs.existsSync("./Logs")) {
        console.log("The directory is not existed");
      }else{
        if (!data.length){
            fs.rm("./Logs", {recursive: true}, (err) => {
                if(err){
                    console.error(err);
                }
                console.log("Directory deleted")
            })
        }else{
            fs.readdir("./Logs", (err, files) => {
                if(err){
                    console.log(err);
                }
                console.log("Logs to be deleted:");

                files.forEach(file => {
                    console.log(file);
                })
                fs.rm("./Logs", {recursive: true}, (err) => {
                    if(err){
                        console.error(err);
                    }
                    console.log("Files and Directory Deleted");
                })
            })
        }
    }
});