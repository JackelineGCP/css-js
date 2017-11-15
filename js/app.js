window.addEventListener('load', function(){
    //declaro la variables
    var title = document.getElementsByTagName('h1')[0];
    var image = document.getElementsByTagName('img')[0];
    
    //manejadores de eventos para el title
    title.addEventListener('mouseover',function(){
        title.classList.add('changeColor');
        title.textContent = 'soy el futuro del peru';   
    })

    //manejadores de eventos para la imagen
    images.addEventListener('mauseover', function(event){
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(event.target.src = 'assets/images/gato2.jpg');
    })

    image.addEventListener('mouseout', function(event){
        console.log(event.target);
        //console.log(event.currentTarget);
        event.target.src = 'assets/images/gato.jpg';
    })

    //manejador de eventos para el div
    div.addEventListener('click',function(){
        div.classList.toggle('big');
    })

})
