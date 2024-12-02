// b.addEventListener('mouseover', function(){
//     var numero = document.querySelector('#b')
//     var min = 1
//     var max = 5000
    
//     for(var i = min; i <= max; i++){
//         setTimeout(function(nr){
//             numero.innerHTML = nr;
//         }, i * 2000 / max, i);
//     }

// })

// c.addEventListener('mouseover', function(){
//     var numero = document.querySelector('#c')
//     var min = 1
//     var max = 12
    
//     for(var i = min; i <= max; i++){
//         setTimeout(function(nr){    
//             numero.innerHTML = nr;
//         }, i * 700 / max, i);
//     }

// })

const card = document.querySelector('#card')

card.addEventListener("click", (e) =>{
    card.classList.toggle("flip")
})
    
const card2 = document.querySelector('#card2')
    
card2.addEventListener("click", (e) =>{
    card2.classList.toggle("flip")
})    