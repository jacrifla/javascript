function tabuada() {
    let numero = document.getElementById('num')
    let tabuada = document.getElementById('seltab')
    let resultado = document.getElementById('resultado')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let num = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}