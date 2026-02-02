
function precosComIva(inventario) {
    const listaPrecoIVA = inventario.map(function(inventario){ 
        let precoIVA = inventario.preco * 1.23;
    })
}

console.log(precosComIva(inventario));