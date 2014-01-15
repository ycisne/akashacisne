/*
 *	acordeon - jQueryPlugin
 *	version: 1.0 (Wed, 14 Jan 2014)
 *	@requires jQuery v1.8.3 or later
 *
 *	Examples at:
 *	Licence:
 *
 *	Copyright 2014 Yadira Cisneros - ycisne@gmail.com
 */(function(e){var t={init:function(t){var n={claseActivo:"active",contenedor:".acordeon-content",dataTag:"acordeon-abierto",dataTitle:"inicializado",first:!0,trigger:"h3",visibilidad:0};return this.each(function(){t&&(n=e.extend(n,t));var r=e(this),i=r.data(n.dataTag);if(!i){if(r.css("display")==="none"){r.css("display","block");n.visibilidad=1}n.visibilidad===1&&r.css("display","none");if(n.first){r.find(n.trigger).first().addClass(n.claseActivo);r.find(n.contenedor).not(":first").hide()}else r.find(n.contenedor).hide();r.find(n.trigger).bind({click:function(){e(this).next(n.contenedor).slideDown().siblings(n.contenedor+":visible").slideUp();e(this).toggleClass(n.claseActivo);e(this).siblings(n.trigger).removeClass(n.claseActivo)}});i=r.data(n.dataTag,n.dataTitle)}})}};e.fn.acordeon=function(n){if(t[n])return t[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="object"||!n)return t.init.apply(this,arguments);e.error("El método que intenta utilizar no existe en jQuery.acordeon: "+n)}})(jQuery);