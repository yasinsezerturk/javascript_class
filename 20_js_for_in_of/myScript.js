//daha çok objeler için kullanılır
// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// }
// for (let x in person){
//     console.log(x)
// }

// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// }
// let =text=""
// for (let x in person){
//     text += person[x] +"\n";
// }
// console.log(text)

// const number=[1,2,3,4,5]

// for (let x in number){
//     console.log(x)
// }

// const numbers=[1,2,3,4,5]
// let text=""
// for (let x in numbers){
//     text += numbers[x] +"\n"
// }
// console.log(text)

// numbers.forEach(myFunction);
// function myFunction(value,index,array){
//     numbers[index]=value+1
// }

// console.log(numbers)

// let language="javascript"
// let text=""
// for(let x in language){
//     console.log(x)
// }

// let language="javascript"
// let text=""
// for(let x of language){
//     console.log(x)
// }

// const cars=["BMW", "Volvo","Fiat"]
// for(let x of cars){
//     console.log(x)
// }

// let language="javascript" 
//  let text=""
//  for(let x of language){
//      console.log(x)
//  }

// let i=0
// while (i<10){
//     console.log(i)
//     i++
// }

//do-while
//önce bir kere yap sonra kontrol et

// let ii=0
// do{
//     console.log(ii)
//     ii++
// }
// while(ii<10)

// for(let i =0;10;i++){
//     if(i===3){
//         break;
//     }
//     console.log(i)
// }

for(let i =0;i<10;i++){
    if(i===3){
        continue;
    }
    console.log(i)
}