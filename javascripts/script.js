window.addEventListener("load", function(){

	$('.count').each(function() {

		$(this).prop('counter', 0).animate({
	  
		  counter: $(this).text()
	  
		}, {
	  
		  duration: 1200,
	  
		  easing: 'swing',
	  
		  step: function(now) {
	  
			$(this).text(Math.ceil(now));
		  }
		});
	  });

	$(function(){
		setTimeout(function(){
		  $('#cargando').addClass("inactivo").removeClass("activo");
		},1300);
	});
	$(function(){
		setTimeout(function(){
		  $('#cargando2').addClass("inactivo").removeClass("activo");
		},1300);
	});
	


	const spans = document.querySelectorAll('.word span');

	spans.forEach((span, idx) => {
		span.addEventListener('mouseover', (e) => {
			e.target.classList.add('active');
		});
		span.addEventListener('animationend', (e) => {
			e.target.classList.remove('active');
		});
		
		// Initial animation
		setTimeout(() => {
			span.classList.add('active');
		}, 750 * (idx+1))
	});







	$("#bt-menu-mobile").click(function(){
  
		$(this).toggleClass("close-bt-hamburguer");
		$(".naranja").toggleClass("abierto");
		$(".azul").toggleClass("abierto");
	  
		  return false;
		
	  });
	  
})