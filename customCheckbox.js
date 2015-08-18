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
 */
jQuery.fn.customCheckbox = function(options){
	var defaults = {
		icon: 'check-icon',
		spanIcon: 'check-spanicon',
		selectClass: 'check-select',
		unSelectClass: 'check-unselect',
		wrapper: 'check-wrapper'
	},
	methods = {
		onClick: function(){
			if($(this).prop('checked')){
				$(this).removeClass(defaults.selectClass);
				$(this).addClass(defaults.unSelectClass);
				$(this).attr('checked', false);
			} else {
				$(this).removeClass(defaults.unSelectClass);
				$(this).addClass(defaults.selectClass);
				$(this).attr('checked', true);
			}
		}
	};
	return this.each(function(){
		if(options){
			defaults = $.extend(defaults, options);
		}
		var $this = $(this),
			$clase;
		if($this.prop('checked')){
			$clase = defaults.selectClass;
		} else {
			$clase = defaults.unSelectClass;
		}
		$this.next().andSelf().wrapAll('<div class="'+ defaults.wrapper +'"/>');
		$this.parent().prepend('<span class="'+ defaults.icon +' '+ defaults.spanIcon +' '+$clase+'"/>');
		$this.parent().find('.'+ defaults.spanIcon).click(methods.onClick);
	});
};