let n = 0
let qt = 0
let cart=  []


// Initial Data
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
    n = 0
})

document.querySelector('.images-layout svg').addEventListener('click', ()=>{
    document.querySelector('.images-layout').style.display = 'none'
    document.querySelector('.back').style.display = 'none'
    n= 0
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

document.querySelector('.product svg').addEventListener('click', ()=>{
    cart.pop()
    let cartSec = document.querySelector('.cart-section .products')
    cartSec.style.display = 'none'
    document.querySelector('#empty').innerHTML = 'Your cart is empty'
    n = 0
    document.querySelector('#num').innerHTML = n
    document.querySelector('.cart-qntd').style.display = 'none'
    
})

document.querySelector('.images-layout .arrows #right').addEventListener('click', ()=>{
    qt ++
    if(qt >4){
        qt = 0
        
    }
    document.querySelector('.active-image-layout').src = sneakers[qt].img
    document.querySelector('.thumbnail-imgs-layout img.active').classList.remove('active')
    document.querySelectorAll('.thumbnail-imgs-layout img')[qt].classList.add('active')
})

document.querySelector('.images-layout .arrows #left').addEventListener('click', ()=>{
    if(qt > 0){
        qt--
        document.querySelector('.active-image-layout').src = sneakers[qt].img
        document.querySelector('.thumbnail-imgs-layout img.active').classList.remove('active')
        document.querySelectorAll('.thumbnail-imgs-layout img')[qt].classList.add('active')
    }
})

    



//Functions

function openCart(){

}

function replaceThumbImg (e){
    let imgs = document.querySelector('.thumbnail-imgs img.active ')
    let bigImg = document.querySelector('.active-image')
    imgs.classList.remove('active')
    e.target.classList.add('active')
    let imgAttribute = e.target.getAttribute('data-key')
    bigImg.src = sneakers[parseInt(imgAttribute)].img
    
}

function addCart(){
    let cartSec = document.querySelector('.cart-section .products')
    let priceX = sneakers[0].price * n
    if(n > 0){
        cart.push({
            cartImg : sneakers[0].img,
            cartName : sneakers[0].name,
            cartPrice : sneakers[0].price,
            cartTotal : priceX,
            n
        })

    }
    for(let i in cart){
        if(cart.length >= 1){
            
            if(cart[i].n > 0){
                cartSec.style.display = 'block'
                document.querySelector('.cart-section').classList.add('show')
                cartSec.querySelector('#name').innerHTML = cart[i].cartName
                cartSec.querySelector('#price-cart').innerHTML = `<p>$${cart[i].cartPrice} x ${cart[i].n} <span>$${cart[i].cartTotal}`
                cartSec.querySelector('img').src = cart[i].cartImg
                document.querySelector('#empty').innerHTML = ' '
                document.querySelector('.cart-qntd').style.display = 'block'
                document.querySelector('.cart-qntd').innerHTML = cart[i].n
            }else{

            }
        }
    }

}
