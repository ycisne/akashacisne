/*
 *
 *	acordeon - jQueryPlugin
 *	version: 1.0 (Wed, 14 Jan 2014)
 *	@requires jQuery v1.8.3 or later
 *
 *	Examples at:
 *	Licence:
 *
 *	Copyright 2014 Yadira Cisneros - ycisne@gmail.com
 *
 */
jQuery.fn.acordeon = function(options){
	var defaults = {
		claseActivo: 'active', // Clase para el trigger que este activo
		claseAplicado: 'acordeon-on', // Clase para saber si esta activado el acordeón
		contenedor: '.acordeon-content', // Clase para el contenedor de cada uno de los div's que abre el contenedor
		first: true, // Por default, el primer elemento estará abierto. False para que este cerrado al inicio
		slideToggle: true, // Por default, se abre uno y se cierran los otros. False para que se abran en el click y no se cierren los otros
		trigger: 'h3' // Objeto trigger
	},
	methods = {
		onClick: function(){
			$(this).next(defaults.contenedor).slideToggle();
			if(defaults.slideToggle){
				$(this).next(defaults.contenedor).siblings(defaults.contenedor+':visible').slideToggle();
			}
			$(this).toggleClass(defaults.claseActivo);
			$(this).siblings(defaults.trigger).removeClass(defaults.claseActivo);
		}
	};
	return this.each(function(){
		if(options){
			defaults = $.extend(defaults, options);
		}
		var $this = $(this),
			visibilidad = 0;
		if(!$this.hasClass(defaults.claseAplicado)){
			if($this.css('display') === 'none') {
				$this.css('display','block');
				visibilidad = 1;
			}
			if(visibilidad === 1) {
				$this.css('display','none');
			}
			if(defaults.first) {
				$this.find(defaults.trigger).first().addClass(defaults.claseActivo);
				$this.find(defaults.contenedor).not(':first').hide();
			} else {
				$this.find(defaults.contenedor).hide();
			}
			$(this).find(defaults.trigger).click(methods.onClick);
			$this.addClass(defaults.claseAplicado);
		}
	});
};