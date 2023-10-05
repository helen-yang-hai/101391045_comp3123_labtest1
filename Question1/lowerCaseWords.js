function lowerCaseWords(arr) {
    return new Promise(function(resolve, reject){
        var newArr = arr.filter(checkType);
        var finalArr = newArr.map(element => element.toLowerCase())
        if(finalArr.length != 0){
            resolve(finalArr);
        }else{
            reject("No String in Array");
        }
    })
}

function checkType(element){
    if (typeof element === "string"){
        return element;
    }
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then((value) => {
    console.log(value);
})

