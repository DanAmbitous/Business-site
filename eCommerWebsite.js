var products = [
    {
        id: 1,
        category:"outfit",
        name: "Shirt",
        price: 10,
        stock: 100,
        image: "shirt.png"
    }, 
    {
        id: 2,
        category:"outfit",
        name: "Pants",
        price: 12,
        stock: 1000,
        image: "pants.png"
    }, 
    {
        id: 3,
        category:"outfit",
        name: "Shoes",
        price: 15,
        stock: 500,
        image: "shoes.png"
    }, 
    {
        id: 4,
        category:"electronic",
        name: "Shoes",
        price: 15,
        stock: 500,
        image: "shoes.png"
    }, 
];

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    let theProduct = 

    `
    <div class="col-xs-12 col-sm-6 col-lg-3 col-xl-2 block-section text-center" data-id="${product.id}" data-price="${product.price}" data-name="${product.name}">
        <div class="gallery-image">
            <img src="${product.image}" alt="image">
        </div>
        <p>${product.name}<p>
        <p>Price: ${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <button type="button" class="btn btn-success ">Buy</button>
    </div>
    `
    $("#shop-page").append(theProduct)
}