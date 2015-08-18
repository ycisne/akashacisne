/*
 *
 *	customCheckbox - jQueryPlugin
 *	version: 1.0 (Wed, 14 Jan 2014)
 *	@requires jQuery v1.8.3 or later
 *
 *	Examples at:
 *	Licence:
 *
 *	Copyright 2014 Yadira Cisneros - ycisne@gmail.com
 *
 */jQuery.fn.customCheckbox=function(e){var t={icon:"check-icon",spanIcon:"check-spanicon",selectClass:"check-select",unSelectClass:"check-unselect",wrapper:"check-wrapper"},n={onClick:function(){if($(this).prop("checked")){$(this).removeClass(t.selectClass);$(this).addClass(t.unSelectClass);$(this).attr("checked",!1)}else{$(this).removeClass(t.unSelectClass);$(this).addClass(t.selectClass);$(this).attr("checked",!0)}}};return this.each(function(){e&&(t=$.extend(t,e));var r=$(this),i;r.prop("checked")?i=t.selectClass:i=t.unSelectClass;r.next().andSelf().wrapAll('<div class="'+t.wrapper+'"/>');r.parent().prepend('<span class="'+t.icon+" "+t.spanIcon+" "+i+'"/>');r.parent().find("."+t.spanIcon).click(n.onClick)})};