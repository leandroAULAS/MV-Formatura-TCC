const target5 = document.querySelectorAll('[data-anime]')

const animationClass5 = 'animate'

function anime5(){
    const windowTop = window.scrollY;
    target5.forEach(function(element){
        if((windowTop) > element.offsetTop - (window.innerHeight * 0.6)){
            element.classList.add(animationClass5)
        }
        else{
            element.classList.remove(animationClass5)
        }
        console.log(element.offsetTop);
    })
} 

window.addEventListener('scroll', function(){
    anime5();
})