function iterativeLog(array){
  array.forEach((index, element) => {
    console.log(`${element}: ${index}!`)
  })
}


function iterate(callback){
 var numbers = ['1', "2", "3"];

 numbers.forEach(callback)

 return numbers
}

function doToArray(array, callback){
  array.forEach(callback)
}
