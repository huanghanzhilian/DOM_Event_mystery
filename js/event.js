//跨浏览器事件处理程序
var eventutil={
    //添加句柄
    addhandler:function(element,type,handler){
        if(element.addEventListener){                                   //判断是否支持dom2级
            element.addEventListener(type,handler,false);               //支持就运行dom2级事件处理程序
        }else if(element.attachEvent){                                  //判断是否支持ie事件处理
            element.attachEvent('on'+type,handler);                     //支持就运行ie事件处理程序   事件类型需要加'on'
        }else{                                                          //如果都不是就运行dom0级处理程序
            element['on'+type]=handler;
            //连接属性的时候,所有用到'.'的地方都可以用[]中括号
            //element.onclick===element['onclick']
        }
    },
    //删除句柄
    removehandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    //获取事件
    getEvent: function(event) {
        return event ? event : window.event;
    },
    //取消事件默认行为
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    //獲取事件屬性
    gitType: function(event) {
        return event.type;
    },
    //獲取事件的目标元素
    getElement: function(event) {
        return event.target || event.scrElement;
    }
}