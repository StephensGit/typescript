let greet: Function;

greet = () => {
    console.log("First Function");
}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}

add(10, 20, '25');

// By placing a ': number ' after the () it is explicilty saying that this function returns a value of type number
// However, this is unnecessary because  typescript assigns the type to the return value of the function
const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(5, 15);

