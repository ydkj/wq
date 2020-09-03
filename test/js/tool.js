
    // 获取对象属性值的方法
    function getStyle(obj, name) {
        return getComputedStyle(obj, null)[name];
    };
    // obj：移动对象
    // pace：移动步伐
    // target：目标位置
    // speed：快慢，越小越快
    // direct：方向，上下或左右
    function move(obj, pace, target, speed, direct, fun) {
        clearInterval(obj.moveDiv);
        var oldV = parseInt(getStyle(obj, direct));
        if (oldV > target) {
            pace = -pace;
        }
        obj.moveDiv = setInterval(function () {
            var oldValue = parseInt(getStyle(obj, direct));
            var newValue = oldValue + pace;
            if ((pace < 0 && newValue < target) || (pace > 0 && newValue > target)) {
                newValue = target;
            }
            obj.style[direct] = newValue + "px";
            if (newValue == target) {
                clearInterval(obj.moveDiv);
                fun && fun();
            }
        }, speed);
    }



