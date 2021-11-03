function Comma(Num) {
    Num += '';
    Num = Num.replace(/,/g, '');

    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}

function WaterPerDayCal(weight) {
    let waterperday = weight * 2.2 * 30 / 2
    document.getElementById('Wtdresult').innerHTML = "ปริมาณน้ำที่ควรดื่มต่อวันคือ " + Comma(Math.round(waterperday)) + " มิลลิลิตร"
}

function BMICal(hight, weight2) {
    let BMIresult = parseFloat(weight2) / (parseFloat(hight) / 100 * parseFloat(hight) / 100)
    document.getElementById('BMIResult').innerHTML = "ค่าดัชนีมวลกายคือ " + BMIresult.toFixed(2)
    if (BMIresult < 18.5) {
        document.getElementById('BMIResult2').innerHTML = "คุณอยู่ในเกณฑ์น้ำหนักน้อยหรือผอม"
    }
    else if (BMIresult > 18.5 && BMIresult < 22.9) {
        document.getElementById('BMIResult2').innerHTML = "คุณอยู่ในเกณฑ์ปกติสุขภาพดี"
    }
    else if (BMIresult > 22.9 && BMIresult < 24.9) {
        document.getElementById('BMIResult2').innerHTML = "คุณอยู่ในเกณฑ์ท้วม"
    }
    else if (BMIresult> 24.9 && BMIresult < 29.9) {
        document.getElementById('BMIResult2').innerHTML = "คุณอยู่ในเกณฑ์อ้วน"
    }
    else {
        document.getElementById('BMIResult2').innerHTML = "คุณอยู่ในเกณฑ์อ้วนมากหรือโรคอ้วน"
    }
}