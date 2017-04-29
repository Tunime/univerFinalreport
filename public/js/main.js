window.onload = function() {
  //funciones a ejecutar
  var d = document.getElementsByClassName('titula');
  console.log(d[0].textContent);
  console.log("lo que buscas no esta aqui para descargar la BD dale a alt+F4")
  $(".button-collapse").sideNav();
  $(document).ready(function(){
      $('.parallax').parallax();
    });
    url = '/datos';
    datos = {};
    $.getJSON(url, datos, function(response){
        //console.log(response);
        ///console.log(JSON.stringify(response));
        //for de jquieri
        $.each(response.libros,function(key,value){
            $("#titulo-a").append(value['titulo']);
            if(d[0].textContent=='Practicas'){
                    if(value['tipo']=='practica'){
                        URLimagen="./images/purpura.png"
                        $("#contenido-a").append('<div class="card horizontal">'+'<div class="card-image">'+'<img src="'+URLimagen+'" alt="univer-foto">'+'</div>'+'<div class="card-stacked">'+'<div class="card-content">'+'<h5>'+value['titulo']+'</h5>'+'<h6>'+value['carrera']+'</h6>'+'<h6>'+value['curso']+'</h6>'+'<h8>'+value['fecha']+'</h8>'+'<h6>'+value['univercidad']+'</h6>'+'</div>'+'<div class="card-action">'+'<a href="'+value['url']+'">Ver</a>'+'</div>'+'</div>'+'</div>');
                    }
            }
            else{
                if(d[0].textContent=='Examenes'){
                    if(value['tipo']=='Examen'){
                        URLimagen="./images/rojo.png"
                        $("#contenido-a").append('<div class="card horizontal">'+'<div class="card-image">'+'<img src="'+URLimagen+'" alt="univer-foto">'+'</div>'+'<div class="card-stacked">'+'<div class="card-content">'+'<h5>'+value['titulo']+'</h5>'+'<h6>'+value['carrera']+'</h6>'+'<h6>'+value['curso']+'</h6>'+'<h8>'+value['fecha']+'</h8>'+'<h6>'+value['univercidad']+'</h6>'+'</div>'+'<div class="card-action">'+'<a href="'+value['url']+'">Ver</a>'+'</div>'+'</div>'+'</div>');
                    }
                }
                else{
                        if(d[0].textContent=='Silabus'){
                        if(value['tipo']=='silabus'){
                            URLimagen="./images/amarillo.png"
                            $("#contenido-a").append('<div class="card horizontal">'+'<div class="card-image">'+'<img src="'+URLimagen+'" alt="univer-foto">'+'</div>'+'<div class="card-stacked">'+'<div class="card-content">'+'<h5>'+value['titulo']+'</h5>'+'<h6>'+value['carrera']+'</h6>'+'<h6>'+value['curso']+'</h6>'+'<h8>'+value['fecha']+'</h8>'+'<h6>'+value['univercidad']+'</h6>'+'</div>'+'<div class="card-action">'+'<a href="'+value['url']+'">Ver</a>'+'</div>'+'</div>'+'</div>');
                        }
                    }
                    else{
                                if(d[0].textContent=='Trabajos'){
                                    if(value['tipo']=='trabajo'){
                                       URLimagen="./images/amarillo.png"
                                        $("#contenido-a").append('<div class="card horizontal">'+'<div class="card-image">'+'<img src="'+URLimagen+'" alt="univer-foto">'+'</div>'+'<div class="card-stacked">'+'<div class="card-content">'+'<h5>'+value['titulo']+'</h5>'+'<h6>'+value['carrera']+'</h6>'+'<h6>'+value['curso']+'</h6>'+'<h8>'+value['fecha']+'</h8>'+'<h6>'+value['univercidad']+'</h6>'+'</div>'+'<div class="card-action">'+'<a href="'+value['url']+'">Ver</a>'+'</div>'+'</div>'+'</div>');
                                            }
                                        }
                                        else{
                                            if(value['tipo']=='Examen')
                            {
                                URLimagen="./images/rojo.png"
                            }
                            else
                            {
                                if(value['tipo']=='silabus'){
                                    URLimagen="./images/amarillo.png"
                                }
                                else{
                                    if(value['tipo']=='practica'){
                                        URLimagen="./images/purpura.png"
                                    }
                                    else{
                                        URLimagen="./images/verde.png"
                                    }
                                }
                            }
                            $("#contenido-a").append('<div class="card horizontal">'+'<div class="card-image">'+'<img src="'+URLimagen+'" alt="univer-foto">'+'</div>'+'<div class="card-stacked">'+'<div class="card-content">'+'<h5>'+value['titulo']+'</h5>'+'<h6>'+value['carrera']+'</h6>'+'<h6>'+value['curso']+'</h6>'+'<h8>'+value['fecha']+'<h6>'+value['univercidad']+'</h6>'+'</h8>'+'</div>'+'<div class="card-action">'+'<a href="'+value['url']+'">Ver</a>'+'</div>'+'</div>'+'</div>');

                        }
                    }
                }
            }
        });
    });

};