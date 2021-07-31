const hamburgerMenu=document.querySelector('.hamburger-menu');
const overlay=document.querySelector('.overlay');

function whenClicked(){
    if(hamburgerMenu.classList.contains('clicked')){
        hamburgerMenu.classList.remove('clicked');
    }
    else{
        hamburgerMenu.classList.add('clicked')
    }

    if(overlay.classList.contains('clicked')){
        overlay.classList.remove('clicked');
    }
    else{
        overlay.classList.add('clicked');
    }
}

hamburgerMenu.addEventListener('click',()=>{
    whenClicked();
})