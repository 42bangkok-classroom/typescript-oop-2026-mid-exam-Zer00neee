export {};
const arg = process.argv[2];
const score = Number(arg);



if (score < 0){
    console.log("Invalid input")
}else if(score >= 0 && score <= 49){
    console.log("Grade is F")
}else if(score > 49 && score <= 59){
    console.log("Grade is D")
}else if(score > 59 && score <= 69){
    console.log("Grade is C")
}else if(score >69 && score <= 79){
    console.log("Grade is B")
}else if(score > 79 && score <= 100){
    console.log("Grade is A")
}else{
    console.log("Invalid input")
}
