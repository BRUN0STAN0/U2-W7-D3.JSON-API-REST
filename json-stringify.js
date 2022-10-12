class Product {
    constructor(nome,prezzo) {
        this.nome = nome
        this.prezzo = prezzo
    }
}

let products = [
    new Product("iPhone", 800),
    new Product("Asus Laptop", 1500),
    new Product("Sony bluetooth headphones", 200)
]


let productsJson = JSON.stringify(products)

console.log(productsJson)