const products= require('../products.json')

module.exports = {
    getProducts: (req, res) => res.status(200).send(products),

    getProductsById: (req, res) => {
    const { id } = req.params
    const productsToSend = products.find((item) => item.id == id)
    if(!productsToSend){
        return res.status(404).send("Item not in list")
    }
    res.status(200).send(productsToSend)
    },

    getProductByPrice: (req, res) => {
        const { price } = req.query
        const prodPrice = products.filter((item) => item.price >= parseInt(price))
        if(!prodPrice){
            return res.status(500).send(products)
        }
        res.status(200).send(prodPrice)
    }
    
}

// getUserByID: (req, res) => {
//     const { id } = req.params
//     const user = users.filter((person) => person.id === id * 1)
//     res.status(200).send(user)



//     const { id } =req.params
//     const user = users.filter((person) => person.id == id)
//     res.status(200).send(user)
// })