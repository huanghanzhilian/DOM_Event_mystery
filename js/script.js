window.onload = function() {
	var box = document.getElementById('box');
	var btn2 = document.getElementById('btn2');
	var btn3 = document.getElementById('btn3');
	var go = document.getElementById('go');
	eventutil.addhandler(box, 'click', function() {
		alert('我是整个父盒子')
	});
	eventutil.addhandler(go, 'click', function(e) {
		e = eventutil.getEvent(e);
		alert(eventutil.getElement(e));
		alert(eventutil.gitType(e));
		eventutil.preventDefault(e);
		eventutil.stopPropagation(e);
	});
	//btn2.onclick=showMes;
	btn2.onclick=function(e){
		alert("我是dom0級");
		e=event||window.event;
		eventutil.stopPropagation(e);
	}
	eventutil.addhandler(btn3,'click',function(e){
		e=event||window.event;
		alert("我的dom2級");
		eventutil.stopPropagation(e);
	})
}

function showMes() {
	var e=event||window.event;
	alert("我的HTML事件处理程序");
	e.stopPropagation();
}