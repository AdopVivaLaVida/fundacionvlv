const swiper = new Swiper('.swiper', {

    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.boton').on('click', function(){
    $('.formulario-apadrinar').show(500);
  });
  $('.button1').on('click', function(){
    $('.formulario-apadrinar').hide();
  });
  $('.button1').on('click', function(){
    $('.formulario-apadrinar2').show();
  });
  $('.button2').on('click', function(){
    $('.formulario-apadrinar2').hide();
  });
  $('.button2').on('click', function(){
    $('.formulario-apadrinar3').show();
  });
  $('.button3').on('click', function(){
    $('.formulario-apadrinar3').hide(1000);
  });
  $('.formularioclose-apadrinar').on('click', function(){
    $('.formulario-apadrinar').hide(1000);
  });
  $('.formularioclose-apadrinar2').on('click', function(){
    $('.formulario-apadrinar2').hide(1000);
  });
  $('.formularioclose-apadrinar3').on('click', function(){
    $('.formulario-apadrinar3').hide(1000);
  });