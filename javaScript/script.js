const signup = () => {
    let sign_btn = document.getElementById("signbtn");
    let sign_btn2 = document.getElementById("signbtn2");
    let signup = document.getElementsByClassName("signup");
    let form = document.getElementById("form");
    sign_btn.onclick = () =>{
        signup[0].style.display = "grid";
        form.classList.remove("animate__bounceOut");
        form.classList.add("animate__bounceIn");
        return false;
    }
    sign_btn2.onclick = () =>{
        signup[0].style.display = "grid";
        form.classList.remove("animate__bounceOut");
        form.classList.add("animate__bounceIn");
        return false
    }
    signup[0].onclick = function(e){
        if(e.target.id == 'signup'){
            form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },800);     
        }
        return false;
    }
}
signup();


const login = () => {
    let log_btn = document.getElementById("logbtn");
    let login = document.getElementsByClassName("login");
    let form2 = document.getElementById("form2");
    log_btn.onclick = () =>{
        login[0].style.display = "grid";
        form2.classList.remove("animate__bounceOut");
        form2.classList.add("animate__bounceIn");
        return false;
    }
    login[0].onclick = function(e){
        if(e.target.id == 'login'){
            form2.classList.remove("animate__bounceIn");
            form2.classList.add("animate__bounceOut");
            setTimeout(function(){
                login[0].style.display = 'none';
            },800);
            return false;     
        }
    }
}
login();

function signup2(){
    var name = btoa(document.getElementById("sign_email").value);
    var password = btoa(document.getElementById("sign_password").value);
    if(name!="" && password!="")
    {
        var user_input = {name:name,password:password};
        var user_data = JSON.stringify(user_input);
        let signup = document.getElementsByClassName("signup");
        let form = document.getElementById("form");
        localStorage.setItem(name,user_data);
        window.alert("success")
        document.getElementById("sign_email").value="";
        document.getElementById("sign_password").value="";
        form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },800);     
    }
}

function signup_check(){
    var name = btoa(document.getElementById("sign_email").value);
    var eml = document.getElementById("sign_email");
    if(localStorage.getItem(name)!=null){
        window.alert("user already exists")
        eml.onclick = function(){
            this.value="";
        }
    }
}