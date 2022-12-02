const body = document.querySelector('body')
const sidebar = document.querySelector('.sidebar')  
const toggle = document.querySelector('.toggle')
const searchBtn = document.querySelector('.search-box')
const modeText = document.querySelector('.mode-text')
const modeSwitch = document.querySelector('.toggle-switch')

toggle.addEventListener('click',function(){
    sidebar.classList.toggle('close');
})

searchBtn.addEventListener('click',function(){
    sidebar.classList.remove('close');
})


modeSwitch.addEventListener('click',function(){
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        modeText.innerText = 'Light Mode'
    }else{
        modeText.innerText = 'Dark Mode'
    }
})




