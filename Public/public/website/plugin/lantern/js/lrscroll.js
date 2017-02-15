(function($){

	$.fn.kxbdMarquee = function(options){
		var opts = $.extend({},$.fn.kxbdMarquee.defaults, options);
		
		return this.each(function(){
			var $marquee = $(this);//婊氬姩鍏冪礌瀹瑰櫒
			var func=function(){
				var _scrollObj = $marquee.get(0);//婊氬姩鍏冪礌瀹瑰櫒DOM
				var scrollW = $marquee.width();//婊氬姩鍏冪礌瀹瑰櫒鐨勫搴�
				var scrollH = $marquee.height();//婊氬姩鍏冪礌瀹瑰櫒鐨勯珮搴�

				if(!$marquee.is(':visible')){
					setTimeout(func,100);
					return;
				}
				var $element = $marquee.children(); //婊氬姩鍏冪礌
				var $kids = $element.children();//婊氬姩瀛愬厓绱�
				var scrollSize=0;//婊氬姩鍏冪礌灏哄
				var _type = (opts.direction == 'left' || opts.direction == 'right') ? 1:0;//婊氬姩绫诲瀷锛�1宸﹀彸锛�0涓婁笅

				$element.css(_type?'width':'height',10000);
				if (opts.isEqual) {
					scrollSize = $kids[_type?'outerWidth':'outerHeight']() * $kids.length;
				}else{
					$kids.each(function(){
						scrollSize += $(this)[_type?'outerWidth':'outerHeight']();
					});
				}

				if (scrollSize<(_type?scrollW:scrollH)&&scrollSize>0){
					var thesize=(_type?scrollW:scrollH);
					var num=Math.ceil(thesize/scrollSize);
					scrollSize*=num;
					for(var i=0;i<num-1;i++){
						$element.append($kids.clone());
					}
					$kids = $element.children();
				}
				$element.append($kids.clone()).css(_type?'width':'height',scrollSize*2);

				var numMoved = 0;
				function scrollFunc(){
					var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft':'scrollTop';
					if (opts.loop > 0) {
						numMoved+=opts.scrollAmount;
						if(numMoved>scrollSize*opts.loop){
							_scrollObj[_dir] = 0;
							return clearInterval(moveId);
						} 
					}
					if(opts.direction == 'left' || opts.direction == 'up'){
						var newPos = _scrollObj[_dir] + opts.scrollAmount;
						if(newPos>=scrollSize){
							newPos -= scrollSize;
						}
						_scrollObj[_dir] = newPos;
					}else{
						var newPos = _scrollObj[_dir] - opts.scrollAmount;
						if(newPos<=0){
							newPos += scrollSize;
						}
						_scrollObj[_dir] = newPos;
					}
				};

				var moveId = setInterval(scrollFunc, opts.scrollDelay);

				$marquee.hover(
					function(){
						clearInterval(moveId);
					},
					function(){
						clearInterval(moveId);
						moveId = setInterval(scrollFunc, opts.scrollDelay);
					}
				);

				if(opts.controlBtn){
					$.each(opts.controlBtn, function(i,val){
						$(val).bind(opts.eventA,function(){
							opts.direction = i;
							opts.oldAmount = opts.scrollAmount;
							opts.scrollAmount = opts.newAmount;
						}).bind(opts.eventB,function(){
							opts.scrollAmount = opts.oldAmount;
						});
					});
				}
			}	
			func();
		});
	};
	$.fn.kxbdMarquee.defaults = {
		isEqual:true,
		loop: 0,
		direction: 'left',
		scrollAmount:1,
		scrollDelay:50,
		newAmount:3,
		eventA:'mousedown',
		eventB:'mouseup'
	};
	
	$.fn.kxbdMarquee.setDefaults = function(settings) {
		$.extend( $.fn.kxbdMarquee.defaults, settings );
	};
	
})(jQuery);

