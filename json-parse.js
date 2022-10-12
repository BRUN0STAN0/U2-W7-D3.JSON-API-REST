let datiGrezzi = `[
            {"nome":"iPhone","prezzo":800},
            {"nome":"Asus Laptop","prezzo":1500},
            {"nome":"Sony bluetooth headphones","prezzo":200}
            ]`

let products = JSON.parse(datiGrezzi)

for (let product of products) {
    console.log(product.nome)
    console.log(product.prezzo)
}