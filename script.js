/*FORMULARIO*/


var inputs = document.getElementsByClassName('formulario__input');
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
    }   else{
        this.nextElementSibling.classList.remove('fijar');
    }

    });
}


$(document).ready(function(){
    //AGREGANDO LA CLASE ACTIVE AL PRIMER ENLACE ========
   $('.category-list .category_item[category="all"]').addClass('ct_item-active');
   $('.category_item').click(function(){
       var catProduct = $(this).attr('category');
       console.log(catProduct);


    //AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
   $('.category_item').removeClass('ct_item-active');
   $(this).addClass('ct_item-active');

    //OCULTANDO PRODUCTOS =============================
    $('.libro-item').css('transform','scale(0)');


    //$('.libro-item').hide();

    //MOSTRANDO PRODUCTOS ==========================
    $('.libro-item[category="'+catProduct+'"]').css('transform','scale(1)');

   });
    
    //MOSTRANDO TODOS LOS PRODUCTOS

   $('.category_item[category="all"]').click(function(){
    $('.libro-item').show();
   });

});


/*TIENDA*/

