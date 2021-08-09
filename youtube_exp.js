function removeDistractions(){
    document.querySelector('#secondary').classList.toggle('display-none');
    document.querySelector('#masthead-container').classList.toggle('display-none');
    document.querySelector('#comments').classList.toggle('display-none');
    document.querySelector('#meta').classList.toggle('display-none');
    document.querySelector('#info').classList.toggle('display-none');
}

function addButton(){
    let buttonWrapper=document.createElement('div');
    buttonWrapper.className='button-wrapper';
    let button=document.createElement('button');
    button.innerText='Click Me!';
    button.className='clear-button';
    buttonWrapper.appendChild(button);
    document.getElementById('player-container-outer').appendChild(buttonWrapper);
}

function styles(){
    let style=`
    .display-none{
        display:none!important;
    }
    .button-wrapper{
        max-width:800px;
        margin: 1rem auto;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .clear-button{
        padding:1.5rem 2rem;
        background:skyblue;
        color:#333;
        font-family:inherit;
        font-size:2rem;
        border:none;
        outline:none;
        transition: all 0.1s ease;
        cursor:pointer;
    }

    .clear-button:hover{
        background:lightblue;
        color:#000;
    }
    `;
    let stylesheet=document.createElement('style');
    stylesheet.type='text/css';
    stylesheet.innerText=style;
    document.head.appendChild(stylesheet);
}


addButton();
styles();
document.querySelector('.clear-button').addEventListener('click',()=>{
    removeDistractions();
})
