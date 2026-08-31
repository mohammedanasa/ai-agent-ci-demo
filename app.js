function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

GPUShaderModule.export = { calculateTotal };