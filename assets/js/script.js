let n = 0
let cart=  []
// Initial Data
document.querySelector('#cart-header').addEventListener('click', ()=>{
   // if
})

document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelector('nav').style.marginLeft = '0vw'
    setTimeout(()=>{
        document.querySelector('.back').style.display = 'block'
    },250)
})

document.querySelector('.cart svg').addEventListener('click', ()=>{
    
   if(document.querySelector('.cart-section').classList.contains('show')){
        document.querySelector('.cart-section').classList.remove('show')
   }else{

       document.querySelector('.cart-section').classList.add('show')
   }
})

document.querySelector('#close').addEventListener('click', ()=>{
    document.querySelector('nav').style.marginLeft = '-100vw'
    document.querySelector('.back').style.display = 'none'
})

document.querySelector('.active-image').addEventListener('click', ()=>{
    document.querySelector('.images-layout').style.display = 'block'
    document.querySelector('.back').style.display = 'block'
})

document.querySelector('.images-layout svg').addEventListener('click', ()=>{
    document.querySelector('.images-layout').style.display = 'none'
    document.querySelector('.back').style.display = 'none'
})

document.querySelector('#minus').addEventListener('click', ()=>{
    if(n >= 1){
        n--
        document.querySelector('#num').innerHTML = n
    }
})

document.querySelector('#plus').addEventListener('click', ()=>{
    n++
    document.querySelector('#num').innerHTML = n
})

document.querySelectorAll('.thumbnail-imgs img ').forEach(item =>{
    item.addEventListener('click', replaceThumbImg)
})

document.querySelector('.infos button').addEventListener('click', addCart)




//Functions

function openCart(){

}

function replaceThumbImg (e){
    let imgs = document.querySelector('.thumbnail-imgs img.active ')
    let bigImg = document.querySelector('.active-image')
    imgs.classList.remove('active')
    e.target.classList.add('active')
    let imgAttribute = e.target.getAttribute('src')
    bigImg.src = imgAttribute
}

function addCart(){
    let cartSec = document.querySelector('.cart-section .products')
    let priceX = sneakers[0].price * n
    cart.push({
        cartImg : sneakers[0].img,
        cartName : sneakers[0].name,
        cartPrice : sneakers[0].price,
        cartTotal : priceX,
        n
    })
    for(let i in cart){
        if(cart.length >= 1){
            cartSec.style.display = 'block'
            document.querySelector('.cart-section').classList.add('show')
            cartSec.querySelector('#name').innerHTML = cart[i].cartName
            cartSec.querySelector('#price-cart').innerHTML = `<p>$${cart[i].cartPrice} x ${cart[i].n} <span>$${cart[i].cartTotal}`
            cartSec.querySelector('img').src = cart[i].cartImg
        }
        
        
    }
   
    
}