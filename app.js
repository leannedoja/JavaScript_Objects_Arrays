console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers){
 let sum = 0;   
 numbers.forEach((numbers) => {
    sum += numbers;
 });

 return sum;
}
console.log(arraySum(numbers));

//Another method for solving:

function sumNums(arr){
return arr.reduce((x,y) => (x+y), 0)
}
console.log(sumNums([10, 20, 30]))


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book={}

book.title="Rewiring The Soul";
book.author="Gabrielle Kortesch";
book.pages=300;
book.readCount=3;

function info(){
    return `${this.title} written by ${this.author} is my favorite book. It has ${this.pages} pages and I have read it ${this.readCount} times.`
};
book.info=info;

console.log(book.info());

let book2={

 title: "Wizard Of Oz",
 author: "Dorothy",
 pages: 400,
 readCount: 1,
 info,
};

console.log(book2.info());  


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";


function wordsReverser(sentence){
    return sentence.split("").reverse().join("").split(" ").reverse().join(" ")
};

console.log(wordsReverser(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");



let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function conversion(csvData){
   let headers = csvData.slice(0,csvData.indexOf("\n")).split(",");
   let values = csvData.slice(csvData.indexOf("\n") + 1).split("\n");
   const output = values.map((row) =>{
    let values = row.split(",");
    let obj = {}

    values.forEach((value, idx)=>{
        if(idx < headers.length){
            obj[headers[idx]] = value;
        }
    });
    return obj
   });
   return output
}



console.log(conversion(csvData))


