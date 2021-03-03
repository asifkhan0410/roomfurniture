const upperAppLeftCover = document.querySelector('.upper__appleft');
const upperAppRightBodyHeader = document.querySelector('.upper__apprightbodyheader')
const upperAppRightBodyInfo = document.querySelector('.upper__apprightbodyinfo');

const buttons =document.querySelectorAll('button')

const afterButton = document.querySelector('.after');

const navOpen =document.querySelector('.navopen');
const navClose =document.querySelector('.navclose');
const navOpenbox =document.querySelector('.nav-open');

const images = ['desktop-image-hero-2.jpg','desktop-image-hero-3.jpg','desktop-image-hero-1.jpg'];
const mobileimages = ['mobile-image-hero-2.jpg','mobile-image-hero-3.jpg','mobile-image-hero-1.jpg'];
const header = ['We are available all across the globe','Manufactured with the best materials','Discover innovative ways to decorate'];

const info = ["With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.","Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.","We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love."];
var flag = 0;

if(window.screen.width<=375){
    upperAppLeftCover.style.backgroundImage = `url(./images/${mobileimages[2]})`
}

function handleChange(){
    if(window.screen.width<=375){
        upperAppLeftCover.style.backgroundImage = `url(./images/${mobileimages[flag]})`
        if(flag===1){
            buttons.forEach(button => button.style.transform = 'translate(284px, -360px)')
        }else{
            buttons.forEach(button => button.style.transform = 'translate(284px, -345px)')
        }

    }else { 
        upperAppLeftCover.style.backgroundImage = `url(./images/${images[flag]})`
    }
    upperAppRightBodyHeader.innerHTML = `${header[flag]}`
    upperAppRightBodyInfo.innerHTML =`${info[flag]}`
    flag++;
    if(flag>2){
        flag=0;
    }
}

afterButton.addEventListener('click', handleChange);

navOpen.addEventListener('click', ()=>{
   navOpenbox.style.display='flex' 
})

navClose.addEventListener('click', ()=>{
    navOpenbox.style.display='none'
})