function Order(Order: string | number) {
    if (typeof Order === 'string') {
        console.log(`The Length of String is ${Order.length}`);

        console.log(`The Uppercase of String is ${Order.toUpperCase()}`);
        return;
    }
    return `The Order Number is ${Order}`;
}
console.log(Order("hello world"));
console.log(Order(12345));