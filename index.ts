console.log("Typescript 😍😍");

const numb:number = 30;
const stringed:string = "thirty";
const truthy : boolean = false;
const anyDataType : any = true;

const arrayVal:number[] = [30, 40, 56, 54]
console.log(numb);

let personTuple: [string, number] = ["Osas", 29]

enum Color {
    RED = "red",
    Black = "black",
    White = "white"
}

let favColor : Color  = Color.RED
console.log(favColor);

// name export
export const add = (a : number, b : number) => {
    return a + b
}

console.log(add(30, 40));

export interface Person {
    name : string;
    age: number;
    complexion: string;
    hasACar?: boolean;
}

interface school {
    schoolName : string;
    schoolAddress : string
}

const david: Person | school = {
    name : "David",
    age : 30,
    complexion : "Black",
    hasACar : true,
    schoolAddress : "30 Arravo street"
}

const osas: Person & school = {
    name : "Osas",
    age : 60,
    complexion : "Fair",
    schoolAddress : "30 Arravo street",
    schoolName : "Arravo academy"
}

console.log(david);
console.log(osas);
