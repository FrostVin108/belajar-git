function Validasi(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if(name == "admin" && password == "password"){
        document.getElementById("demo").innerHTML =("");
        alert("Form valid!");
    }else if(name == "" && password == ""){
        document.getElementById("demo").innerHTML ="Username and Password Required!";
    }else if( name == ""){
        document.getElementById("demo").innerHTML =("Username required!");
    }else if(password == ""){
        document.getElementById("demo").innerHTML =("Password required!");
    }else{
        document.getElementById("demo").innerHTML =("Invalid Username Or Password!");
    }
}