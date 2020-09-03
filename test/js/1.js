

var sswitch = document.getElementById("sswitch");
var list = document.getElementById("list");
var allHouse = document.getElementsByClassName("house");
var control = document.getElementsByClassName("control");
var btn = control[0].getElementsByTagName("button");


function bhcolor(a) {
    var control = document.getElementsByClassName("control");
    var bhcolor = control[0].getElementsByTagName("button");
    var bta = document.getElementById(a);
    var index = a - 1;
    bta.className = "btaTow";
    bta.style = "border-bottom: 2px solid #a82925;";
    move(list, 10, (-sswitch.offsetWidth) * index, 5, "left",);
    for (var b = 1; b <= bhcolor.length; b++) {
        if (b != a) {
            var bta1 = document.getElementById(b);
            bta1.style = "#border-bottom: 0;";
            bta1.className = "";
        }
    }
}

function getData() {
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
    }
    var judgephone = function () {
        if (phoneReg.test(phone)) {
            return true;
        } else {
            alert("请输入正确的电话号码");
            document.getElementById("phone").value = null;
        }
    }
    if(judgeName() === true && judgephone() === true){
        console.log(name,phone);
        alert("提交成功！");
    }
}


