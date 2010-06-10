(function($){

$.fn.addhyphens = function(settings)
{
	var config = {'foo': 'bar'};

	if (settings) $.extend(config, settings);
 
	this.find('.cufon.first').each(function(i,e)
	{
		var precedent = e;
		var toppos = $(e).position();
		text = $("<span>-</span>").css('position', 'absolute');

		while(!$(e).hasClass('last'))
		{
			e = $(e).next();
			mypos = $(e).position();
			
			if(mypos.top > toppos.top)
			{
				$(precedent).after($(text));
				toppos = mypos;
			}

			precedent = e;
		}
	});
	return this;
};

})(jQuery);