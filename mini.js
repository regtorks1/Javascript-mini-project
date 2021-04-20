function calculate(){
    var x = document.getElementById("form1").value;

    if(x == "" || x == 0 ) {
        window.alert("Please type your correct age")
        return;

    }
     var date = new Date().getFullYear();

     var birthyear = x - date;


     document.getElementById("Year").style.display ="block";
     document.getElementById("Year").innerHTML = "Your Birth Year is" + birthyear;
}


document.getElementById("Year").style.display ="none";

document.getElementById("click").onclick = function() {
    calculate()
}
function makeDateHappen() {
    var z = document.getElementById("form2").value;

    if(z == "" || z ==0) {
        window.alert("Please type your correct age")
        return;
    }
    var date1 = new Date().getFullYear().getMonth();

    var age = z - date1;
    

    

    document.getElementById("date of birth").style.display = "block";
    document.getElementById("date of birth").innerHTML = "Your date of Birth is" + " " + age;

}

document.getElementById("date of birth").style.display = "none";

document.getElementById("click1").onclick = function() {
    makeDateHappen()
}

    function ageCalculator() {
        var UserInput = document.getElementById("form3").value;
        var dob = new Date(UserInput);
        if(UserInput == " " || UserInput == 0) {
            window.alert("Choose a Date Please");
            return false
        } else {
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff);
            var age = age_dt.getUTCFullYear();
            var age = Maths.abs(year - 1970);
          return document.getElementById("Age").innerHTML = "Age" + " " + age;

        }
        document.getElementById("Age").style.display = "block";
    }


document.getElementById("Age").style.display = "none";


