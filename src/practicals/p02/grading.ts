export {};
const arg = process.argv[2];
const score = Number(arg);


if (
  arg === undefined ||
  Number.isNaN(score) ||
  score < 0 ||
  score > 100
) {
  console.log("Invalid Input");
}

if (score < 0){
    console.log("Invalid input")
}else if(score > 0 && score <= 49){
    console.log("F")
}else if(score > 49 && score <= 59){
    console.log("D")
}else if(score > 59 && score <= 69){
    console.log("C")
}else if(score >69 && score <= 79){
    console.log("B")
}else if(score > 79 && score <= 100){
    console.log("A")
}else{
    console.log("Invalid input")
}
