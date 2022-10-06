const book: string = "English"
const shop: string[]=["lala","khala","pala"];
let nothing: (string | number | boolean)[];



let arr:{
    name:string,
    age:number,
    adult:boolean
};
arr={
    name:"ashik",
    age:23,
    adult:true
}

nothing=["how",3,false];
console.log(nothing);

const my:Function =(first:number, second:number, third?:string)=>{
    console.log(first,second)
}

my(12,30)