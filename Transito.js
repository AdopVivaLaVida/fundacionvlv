const swiper = new Swiper('.swiper', {

    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $(".boton-transito").on("click", function(){
    $('.ficha').show(600);
});

$(".ficha-close").on("click", function(){
	$('.ficha').hide(500);
});

$(".button1").on("click", function(){
	$('.ficha2').show();
});

$(".button1").on("click", function(){
	$('.ficha').hide();
});
$(".button2").on("click", function(){
	$('.ficha2').hide();
});
$(".ficha-close2").on("click", function(){
	$('.ficha2').hide();
});

$(".button2").on("click", function(){
	$('.ficha3').show();
});

$(".ficha-close3").on("click", function(){
	$('.ficha3').hide();
});
$(".button3").on("click", function(){
	$('.ficha3').hide(500);
});







