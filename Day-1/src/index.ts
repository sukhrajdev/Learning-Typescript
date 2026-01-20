function isEven(num:number):boolean {
    const isEven = num % 2==0 ? true : false
    return isEven
}
console.log("is Even");

console.log(isEven(4));
console.log(isEven(5));

function isLoggedIn(status: boolean): boolean {
    return status;
}

console.log("isLoggedIn");

console.log(isLoggedIn(false));
console.log(isLoggedIn(true));


function canVote(age: number): boolean {
    return age >=18
}

console.log("Can Vote~!");

console.log(canVote(13));
console.log(canVote(19));


function checkUsername(useranme: string):boolean {
    return useranme.length >=5 ? true : false
}

console.log("~~Check Username~~");

console.log(checkUsername("sukhraj"));
console.log(checkUsername("pora"));

// Union Types
function getLength(user_input: string | number): number {
    if (typeof user_input === "string") {
        return user_input.length;
    }

    return user_input.toString().length;
}

console.log(getLength("hello")); // 5
console.log(getLength(12345));   // 5

function formatValue(input: string | boolean):string {
    if(typeof input === "string"){
        return input.toUpperCase()
    }
    return input ? "YES" : "NO"
}

console.log(formatValue("Hello"));
console.log(formatValue(false));


function parseInput(input:string): string | number {
    let parseNumber = Number(input)
    if(Number.isNaN(parseNumber)){
        return input
    }
    return parseNumber
}

console.log(parseInput("908"));
console.log(parseInput("Hello"));
