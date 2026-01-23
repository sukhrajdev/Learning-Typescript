type Role =  "Admin" | "User"
type user = {
    id: number;
    name: string;
    role: Role;
    orderId?: string[]
}
let users:Array<Object> = []
function createUser(id:number,name:string,role: Role,orderId?: string[]): object{
    let createdUser: user = {
        id,
        name,
        role,
        orderId: []
    }
    users.push(createdUser)
    return createdUser
}

console.log(createUser(1,"sukhraj","Admin"));

function isAdmin(id:number):boolean {
    for(let user of users){
        if(user.id === id){
            return (user.role === "Admin")
        }
    }
    return false
}
type Order = {
    id: number;
    name: string;
    price: number
}
function createOrder(userId: number,orderData:Order):object {
    if(!isAdmin(userId)){
        return {
            success: false,
            message: "You are not a Admin"
        }
    }
    let newOrder: Order = {
        id: orderData.id,
        name: orderData.name,
        price: orderData.price
    }
    return {
        success: true,
        message: "Order create Successful!",
        data: newOrder
    }
}

const OrderData = {
    id: 1,
    name: "Iphone 15 Pro",
    price: 120000
}
console.log("New Order");
console.log(createOrder(1,OrderData));


