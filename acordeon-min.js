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
 */jQuery.fn.acordeon=function(e){var t={claseActivo:"active",claseAplicado:"acordeon-on",contenedor:".acordeon-content",first:!0,slideToggle:!0,trigger:"h3"},n={onClick:function(){$(this).next(t.contenedor).slideToggle();t.slideToggle&&$(this).next(t.contenedor).siblings(t.contenedor+":visible").slideToggle();$(this).toggleClass(t.claseActivo);$(this).siblings(t.trigger).removeClass(t.claseActivo)}};return this.each(function(){e&&(t=$.extend(t,e));var r=$(this),i=0;if(!r.hasClass(t.claseAplicado)){if(r.css("display")==="none"){r.css("display","block");i=1}i===1&&r.css("display","none");if(t.first){r.find(t.trigger).first().addClass(t.claseActivo);r.find(t.contenedor).not(":first").hide()}else r.find(t.contenedor).hide();$(this).find(t.trigger).click(n.onClick);r.addClass(t.claseAplicado)}})};