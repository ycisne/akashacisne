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
	(function($){
		var methods = {
			init: function(options){
				var defaults = {
					claseActivo: 'active',
					contenedor: '.acordeon-content',
					dataTag: 'acordeon-abierto',
					dataTitle: 'inicializado',
					first: true,
					trigger: 'h3',
					visibilidad: 0
				};
				return this.each(function(){
					if(options){
						defaults = $.extend(defaults, options);
					}
					var $this = $(this),
						data = $this.data(defaults.dataTag);
					if(!data){
						if($this.css('display') === 'none') {
							$this.css('display','block');
							defaults.visibilidad = 1;
						}
						if(defaults.visibilidad === 1) {
							$this.css('display','none');
						}
						if(defaults.first) {
							$this.find(defaults.trigger).first().addClass(defaults.claseActivo);
							$this.find(defaults.contenedor).not(':first').hide();
						} else {
							$this.find(defaults.contenedor).hide();
						}
						$this.find(defaults.trigger).bind({
							click: function(){
								$(this).next(defaults.contenedor).slideDown().siblings(defaults.contenedor+':visible').slideUp();
								$(this).toggleClass(defaults.claseActivo);
								$(this).siblings(defaults.trigger).removeClass(defaults.claseActivo);
							}
						});
						data = $this.data(defaults.dataTag, defaults.dataTitle);
					}
				});
			}
		};
		$.fn.acordeon = function (method){
			if(methods[method]){
				return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
				return methods.init.apply( this, arguments );
			} else {
				$.error('El método que intenta utilizar no existe en jQuery.acordeon: '+method);
			}
		};
	})(jQuery);