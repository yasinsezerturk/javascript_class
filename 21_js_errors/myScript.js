// try {
//     //code lar yazılır...   
// }
// catch (err){
//     console.log(err.message)
// }

// try {
//     console.log("message")   
// }
// catch (err){
//     console.log(err.message)
// }

// let x=""
// try{
//     if(x.trim()=="") throw "empty"
// }
// catch(err){console.log(err)}
// finally{
//     console.log("çalışma işlemi bitti")
// }

// let x=NaN
// try{
//     if(isNaN(x)) throw "not a number"
// }
// catch(err){console.log(err)}
// finally{
//     console.log("çalışma işlemi bitti")
// }

let x="7"
try{
    x=Number(x);
    if(x<5) throw "çok küçük"
    if(x>10) throw "çok büyük"
    if(x=7) throw "doğru!!!"
}
catch(err){console.log(err)}
finally{
    console.log("çalışma işlemi bitti")
}