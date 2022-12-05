const iconMenu = document.getElementById('iconMenu')
const iconClose = document.getElementById('iconClose')
const menu = document.querySelector('.navigation-page')
const body = document.querySelector('body')
const header = document.getElementById('header')
const backToTop = document.getElementById('backToTop')
const form = document.getElementById('form')
const links = document.querySelectorAll('.navigation-page ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('show')
    body.classList.remove('hidden')
  })
}

iconMenu.addEventListener('click', () => {
  menu.classList.add('show')
  body.classList.add('hidden')
})

iconClose.addEventListener('click', () => {
  menu.classList.remove('show')
  body.classList.remove('hidden')
})


window.addEventListener('scroll', () => {
  activeHeader()
  showBackToTop()
})


function activeHeader() {
  if (scrollY > 1) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

function showBackToTop() {
  if (scrollY > 500) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

backToTop.addEventListener('click', () => {
  window.scroll({
    top: 0
  })
})


form.addEventListener('submit', (event) => {
  event.preventDefault()

  const nome = document.querySelector('.inputNome').value
  const email = document.querySelector('.inputEmail').value
  const title = document.querySelector('.inputTitle').value
  const message = document.querySelector('textarea').value

  const textAlert = document.getElementById('textAlert')

  if (nome === '' || email === "" || title === "" || message === "") {
    textAlert.innerText = "Preencha todos os campos corretamente"
    textAlert.style.color = 'red'

    textAlert.style.opacity = 1
    setTimeout(function () {
      textAlert.style.opacity = 0
    }, 5000)
  } else {


    textAlert.innerText = "Mensagem enviada"
    textAlert.style.color = 'green'


    textAlert.style.opacity = 1
    setTimeout(function () {
      textAlert.style.opacity = 0
    }, 5000)


    document.querySelector('.inputNome').value = ''
    document.querySelector('.inputEmail').value = ''
    document.querySelector('.inputTitle').value = ''
    document.querySelector('textarea').value = ''
  }


})




