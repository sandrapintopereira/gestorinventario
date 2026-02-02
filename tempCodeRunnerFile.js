
function produtosSemStock(inventario) {
    let listaSemStock = [];
    const produtoSemStock = inventario.some(produto => produto.emStock == false);
    listaSemStock = inventario.filter(produto => produto.emStock == false);
    return listaSemStock;
}

console.log(produtosSemStock(inventario));