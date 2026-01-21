type user = {
    type: string,
    name: string,
    age: number
}
function VerifyUser(data: object): data is user {
    return (
        typeof data === "object" &&
        data != null &&
        typeof data.type === "admin" || "user" &&
        typeof data.name === "string" &&
        typeof data.age === "number"
    )
}

function createUser(input_data:object): string{
    if(VerifyUser(input_data)){
        return `User created successful! with Role of ${input_data.type}`
    }
    return "User created successful! with Role of guest"
}

const user_data = {
    type: "admin",
    name: "raj",
    age: 15
}

console.log(createUser(user_data));
