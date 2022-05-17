function url_secure()
{
    if(sessionStorage.length<=0)
    {
        var page = document.getElementById("profile-page");
        page.style.display="none";
        document.body.style.backgroundColor="black";
        document.body.innerHTML = "<h1 style='color:white;font-size:100px;font-family:sans-serif;'>Illegal action performed</h1>";

    }
}
url_secure();

const welcome = () => {
    let name = document.getElementById("hi_name");
    let login_name = atob(sessionStorage.getItem("user_mail"));
    name.innerHTML = `Hi ${login_name}`;
}

welcome();