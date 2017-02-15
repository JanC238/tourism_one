var _month = (new Date()).getMonth()
var datepicker = $('.datepicker')

datepicker.datepicker({
  language: 'zh-CN',
  multidate: true
})

datepicker.on('changeMonth', function(e) {
  _month = e.date.getMonth()
})

datepicker.on('clickDow', function(e) {
  var week = '一二三四五六日'.indexOf(e.dow)
  if (week === -1) {
    console.error('错误')
  } else {
	changweek(week)
	var day = getDates();
	var week = selweek;
	$.post(timeurl,{'day':day,'week':week},function(data){
		$("#week").val(data['week']);
		$("#day").val(data['day']);
		$("#notday").val(data['notday']);
		$("#weeks").val(data['weeks']);
		$("#days").val(data['days']);
		$("#notdays").val(data['notdays']);
	})
    
  }
})

datepicker.on('changeDate', function() {
	var day = getDates();
	var week = selweek;
	$.post(timeurl,{'day':day,'week':week},function(data){
		$("#week").val(data['week']);
		$("#day").val(data['day']);
		$("#notday").val(data['notday']);
		$("#weeks").val(data['weeks']);
		$("#days").val(data['days']);
		$("#notdays").val(data['notdays']);
	})
})

var selweek = []

function changweek (week) {
  if (selweek.indexOf(week) === -1) {
    selweek.push(week)
  } else {
    selweek.splice(selweek.indexOf(week), 1)
  }

  updateWeek()
}

function updateWeek(){
	var weekeele = $('.datepicker .dow')
	  weekeele.removeClass("active")
	  for (var i = 0; i < selweek.length; i++){
	    $(weekeele[selweek[i]]).addClass("active")
	  }
}

function getDates() {
	  var dates = datepicker.datepicker('getDates')
	  var datearr = []
	  dates.forEach(function (v) {
	    datearr.push(v.getFullYear()+'-'+(v.getMonth()*1+1)+'-'+v.getDate())
	  })
	  return datearr
}

function defaultValue(weeks, days){
	
	for (var i = 0; i < weeks.length; i++) {
		weeks[i] = Number(weeks[i])
	}
	
	if(weeks.length>0){
		selweek = weeks
		updateWeek()
	}
	
	var daysarr = []
	for (var i = 0; i < days.length; i++) {
		if (days[i]) {
			daysarr.push(new Date(days[i]*1000))
		}
	}
	if(daysarr.length>0){
		datepicker.datepicker('setDates', daysarr)
	}
}