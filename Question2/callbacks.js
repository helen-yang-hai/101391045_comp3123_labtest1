let resolvedPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {resolve({'message': 'delayed success!'});}, 500);
})

resolvedPromise.then(value => {
    console.log(value);
});


let rejectedPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {reject({'error': 'delayed exception!'});}, 500);
})

rejectedPromise.then(value => {
    console.log(value);
})
.catch(error => {
    console.error(error);
});