// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {

    data = JSON.parse(json);
    
    return data.products;
}

function renderProductsCards(json) {
    
    clearProducts();
    
    let products = parseProducts(json);
    for (let prod of products) {
        addProduct(prod);
    }
}
