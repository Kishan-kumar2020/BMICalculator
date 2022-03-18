function bMICalculator() {
    let num = parseInt(document.getElementById("id1").value)*30.48;
    let num1 = parseInt(document.getElementById("id2").value)*2.54;
    let num2 = parseInt(document.getElementById("id3").value);
    let a;
    num = num + num1;
    a = (num2/num/num)*10000;
    document.getElementById("result").innerHTML = a.toPrecision(3);
    if(a=="" || isNaN(a)) {
        document.getElementById("result").innerHTML = "Result";
        alert("Enter the required field");
    }
    if(a<18.5) {
        document.getElementById("note").innerHTML = "Underweight";
    }
    else if(a>=18.5 && a<=24.9) {
        document.getElementById("note").innerHTML = "Normalweight";
    }
    else if(a>=25 && a<=29.9) {
        document.getElementById("note").innerHTML = "Overweight";
    }
    else if(a>=30 && a<=34.9) {
        document.getElementById("note").innerHTML = "Obesity (CLASS 1)";
    }
    else if(a>=35 && a<=39.9) {
        document.getElementById("note").innerHTML = "Obesity (CLASS 2)";
    }
    else if(a>=40) {
        document.getElementById("note").innerHTML = "Obesity (CLASS 3)";
    }
}
