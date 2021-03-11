

var sswitch = document.getElementById("sswitch");
var list = document.getElementById("list");
var allHouse = document.getElementsByClassName("house");
var control = document.getElementsByClassName("control");
var btn = control[0].getElementsByTagName("button");
var imgGroup = document.getElementsByClassName("img_group");
var in_btn = document.getElementById("in_btn");
console.log(imgGroup[0]);


function bhcolor(a) {
    var control = document.getElementsByClassName("control");
    var bhcolor = control[0].getElementsByTagName("button");
    var bta = document.getElementById(a);
    var index = a - 1;
    bta.className = "btaTow";
    bta.style = "border-bottom: 2px solid #a82925;";
    move(list, 1000, (-sswitch.offsetWidth) * index, 1, "left",);
    for (var b = 1; b <= bhcolor.length; b++) {
        if (b != a) {
            var bta1 = document.getElementById(b);
            bta1.style = "#border-bottom: 0;";
            bta1.className = "";
        }
    }
}

function btnEvent() {
    in_btn.onmouseover = function () {
        this.className += " in_btn2";
    }
    in_btn.onmouseout = function () {
        this.className = "in_btn";
    }
    in_btn.onmousedown = function () {
        this.className += " in_btn3";
    }
    in_btn.onmouseup = function () {
        this.className = "in_btn";
    }
}
btnEvent();

function getData() {
    // this.className = "in_btn";
    btntimer;
    var btntimer = setTimeout(function () {
        var name = myform.name.value;
        var phone = myform.phone.value;
        var phoneReg = /^1[3|4|5|6|7|8|9]\d{9}$/;
        var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
        var judgeName = function () {
            if (nameReg.test(name)) {
                return true;
            } else {
                alert("请输入正确的姓名");
                document.getElementById("name").value = null;
            }
        };
        var judgephone = function () {
            if (phoneReg.test(phone)) {
                return true;
            } else {
                alert("请输入正确的电话号码");
                document.getElementById("phone").value = null;
            }
        };
        if (judgeName() === true && judgephone() === true) {
            console.log(name, phone);
            alert("提交成功！");
            document.getElementById("name").value = null;
            document.getElementById("phone").value = null;
        };
    },100);
}


