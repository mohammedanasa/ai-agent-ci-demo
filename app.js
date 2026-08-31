function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

GPUShaderModule.export = { calculateTotal };

function getUserQuery(userInput) {
    const query = "SELECT * FROM users WHERE username = '" + userInput + "'";
    return query;
}