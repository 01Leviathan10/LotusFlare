
function attachEvent(){
    var x = document.querySelector('#submit')
    var y = document.querySelector('#input')
    var z = document.querySelector('#display')
    x.addEventListener('click', function(){
        if(y.value){
            var div = document.createElement('div')
            div.innerHTML = y.value
            if(z.childElementCount % 3 === 2){
            div.classList.add('red')
            }
            z.appendChild(div)
            console.log(z.childElementCount)
        }
    })
}
attachEvent()