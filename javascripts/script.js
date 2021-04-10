window.addEventListener("load", function(){
	

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