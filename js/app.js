 let precoTotal 
limpar()

function adicionar() {
    let produto = document.getElementById('produto').value
    let nomeProduto = produto.split(' - ')[0];
    let valorUnitario = produto.split('R$')[1];


    let quantidade = document.getElementById('quantidade').value

    let preco = quantidade * valorUnitario;


    let carItens = document.getElementById('lista-produtos')
    carItens.innerHTML = carItens.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    precoTotal = precoTotal + preco
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$ ${precoTotal}`
    document.getElementById('quantidade').value = 0
}





function limpar() {
precoTotal = 0
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').textContent = 'R$ 0'

}