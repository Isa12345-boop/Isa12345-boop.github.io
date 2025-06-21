$(document).ready(function(){

	// Slider
	if(window.location.href.indexOf('index') > -1){
	  
	  $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });

	}


	// Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Panes',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'El pan, del latín panis, es comida de la dieta humana que se suele preparar mediante el horneado de una masa, elaborada fundamentalmente de cereal, agua y sal. La mezcla, en la mayoría de las ocasiones, suele contener levaduras para que se fermente la masa y sea más esponjosa y tierna. El cereal más utilizado para la elaboración del pan es la harina de trigo, aunque también se utiliza el centeno, la cebada, el maíz y el arroz. La adición de la levadura provoca la fermentación de la masa antes del horneado, y como consecuencia, le proporciona un volumen y una esponjosidad debido a la producción de pequeñas burbujas de dióxido de carbono (CO2) que se quedan inmersas entre la masa húmeda de la harina.'
			},
			{
				title: 'Cafe',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'El café es una bebida que se obtiene mediante el percolado de agua caliente a través de los granos tostados y molidos de los frutos de la planta del café (cafeto);es altamente estimulante por su contenido de cafeína,una sustancia psicoactiva.Es uno de los productos más comercializados a nivel mundial, además de estar entre las tres bebidas más consumidas por el ser humano (junto con el agua y el té).'
			},
			{	
				title: 'Gaseosa',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Una gaseosa, refresco, fresco, soda o cola es una bebida hecha a base de agua carbonatada, edulcorantes naturales como fructosa o sacarosa o sintéticos como el ciclamato (E952), acidulantes, colorantes, antioxidantes, estabilizadores de acidez y conservantes. Se ofrecen en infinidad de sabores como cola, naranja, lima, limón, uva, cereza, cerveza de raíz, frambuesa y sabores propios de algunos países como guaraná, azaí, vainilla, entre otros.'
			},
			{
				title: 'Jugos',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'El zumo o jugo de frutas es una bebida hecha a base de frutas, generalmente al exprimirlas por presión. Sin embargo, puede incluir un conjunto de procesos intermedios como la cocción, molienda o centrifugación del producto original. Actualmente , es habitual su venta y consumo en formato envasado y, durante la elaboración, pasa por un proceso que hace que pierda parte de sus propiedades nutricionales.'
			},
			{
				title: 'Sandwiches',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Un sándwich es un plato que suele consistir en carne, queso, salsas y verduras que se utiliza como relleno entre rebanadas de pan o se coloca encima de una rebanada de pan; O, más en general, cualquier plato en el que el pan sirva como recipiente o envoltura para otro tipo de alimento, y permita que sea un bocadillo. El sándwich comenzó como un alimento portátil y conveniente en el mundo occidental, aunque con el tiempo se ha vuelto frecuente en todo el mundo.'
			},
			{
				title: 'Pasteles',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Pastel o tarta es una masa de harina y manteca, cocida al horno, en el que ordinariamente se envuelve crema o dulce, y a veces fruta, pescado o carne.'
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			$("#posts").append(post);
		});
	}


	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});
	
	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	
	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}

	// Acordeon

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	// Reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}

});

