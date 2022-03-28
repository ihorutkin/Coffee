let nav = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('active')
    searchItem.classList.remove('active')
    cartItem.classList.remove('active')
}

let searchItem = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    searchItem.classList.toggle('active')
    nav.classList.remove('active')
    cartItem.classList.remove('active')
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    nav.classList.remove('active')
    searchItem.classList.remove('active')
}

window.onscroll = () => {
    nav.classList.remove('active')
    searchItem.classList.remove('active')
    cartItem.classList.remove('active')
}