const html = document.querySelector('html')
const botao = document.querySelector('input[name=tema]')

const getEstilo = (elemento, estilo) =>
    window.getComputedStyle(elemento).getPropertyValue(estilo)

const temaClaro = {
    tema: getEstilo(html, '--tema'),
    corCabecalho: getEstilo(html, '--cor-cabecalho'),
    corTitulo: getEstilo(html, '--cor-titulo'),
    corTexto: getEstilo(html, '--cor-texto'),
}

const temaEscuro = {
    tema: "#222222",
    corCabecalho: "#3C3B3A",
    corTitulo: "#FAF4E6",
    corTexto: "#FAF4E6",
}

const tranformarchave = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const trocarTema = (tema) => {
    Object.keys(tema).map(
        chave => html.style.setProperty(tranformarchave(chave), tema[chave])
    )
}

botao.addEventListener('change', ({ target }) => {
    target.checked ? trocarTema(temaEscuro) : trocarTema(temaClaro)
})

// MENU HAMBURGUER
const menuMobile = document.querySelector('.menuHamburguer')

const alterarMenu = () => {
    const cabecalho = document.querySelector('.cabecalho')
    cabecalho.classList.toggle('ativado')
}

menuMobile.addEventListener('click', alterarMenu)