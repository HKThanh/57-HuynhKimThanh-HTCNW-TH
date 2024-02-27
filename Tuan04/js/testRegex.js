function kiemTraUser() {
    let regex = /[a-zA-Z0-9]{6,30}/
    let chuoiKT = document.getElementById("txtChuoi").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt1").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt1").innerHTML = "InCorrect";
    }
}

function kiemTraPassword() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    let chuoiKT = document.getElementById("txtPwd").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt2").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt2").innerHTML = "InCorrect";
    }
}

function kiemTraEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let chuoiKT = document.getElementById("txtEmail").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt3").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt3").innerHTML = "InCorrect";
    }
}


function kiemTraIPv4() {
    let regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let chuoiKT = document.getElementById("txtIPv4").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt4").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt4").innerHTML = "InCorrect";
    }
}

function kiemTraHex() {
    let regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    let chuoiKT = document.getElementById("txtHex").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt5").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt5").innerHTML = "InCorrect";
    }
}

function kiemTraSlug() {
    let regex = /^[a-z0-9-]+$/
    let chuoiKT = document.getElementById("txtSlug").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt6").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt6").innerHTML = "InCorrect";
    }
}

function kiemTraURL() {
    let regex = /^(https:\/\/)?([\da-z\.]{2,6})([\/\w/\.-]*)*\/?$/
    let chuoiKT = document.getElementById("txtURL").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt7").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt7").innerHTML = "InCorrect";
    }
}

function kiemTraHTML() {
    let regex = /^<([a-z\d]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)$/
    let chuoiKT = document.getElementById("txtHTML").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt8").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt8").innerHTML = "InCorrect";
    }
}


function kiemTraDates() {
    let regex = /^([1-2][0-9]|3[0-1]|0?[1-9])([-\.\/ ])(1[0-2]|0?[1-9])(\2)([\d]{4}|[\d]{2})$/
    let chuoiKT = document.getElementById("txtDates").value;
    let kq = regex.test(chuoiKT);

    if (kq == true) {
        document.getElementById("kqkt9").innerHTML = "Correct";
    } else {
        document.getElementById("kqkt9").innerHTML = "InCorrect";
    }
}