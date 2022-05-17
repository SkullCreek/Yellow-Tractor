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

const addcrop = () => {
    let sign_btn = document.getElementById("add_btn");
    let signup = document.getElementById("modal");
    let form = document.getElementById("modal_box");
    sign_btn.onclick = () =>{
        signup.style.display = "grid";
        form.classList.remove("animate__bounceOut");
        form.classList.add("animate__bounceIn");
        return false;
    }
    signup.onclick = function(e){
        if(e.target.id == 'modal'){
            form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup.style.display = 'none';
            },800);     
        }
        return false;
    }
}
addcrop();

 count=1;
const adding_crop = () => {
    let add_subtn = document.getElementById("add_submit");
    add_subtn.onclick = () => {
        
        let name_of_field = document.getElementById("name_of_field");

        let area = document.getElementById("area");
        
        let city = document.getElementById("city");
        
        let choosecrop = document.getElementById("choosecrop");
        if(name_of_field.value != "" && area.value != "" && city.value != "" && choosecrop.value != ""){
            var user_input = {name: name_of_field.value, area:area.value, city:city.value,  choosecrop: choosecrop.value};
            var user_data = JSON.stringify(user_input);
            localStorage.setItem("crop"+name_of_field.value,user_data);
            name_of_field.value="";
            area.value="";
            city.value="";
            let signup = document.getElementById("modal");
            let form = document.getElementById("modal_box");
            form.classList.remove("animate__bounceIn");
                form.classList.add("animate__bounceOut");
                let div_parent = document.getElementById("crops");
                div_parent.innerHTML = "";
                showing_crops();
                setTimeout(function(){
                    signup.style.display = 'none';
                },800);  
            return false;
        }
        else{
            alert("enter the values");
        }
    }
}

adding_crop();

const showing_crops = () => {
    let i;
    let div_parent = document.getElementById("crops");
    for(i=0;i<localStorage.length;i++){
        all_keys = localStorage.key(i);
        if(all_keys.indexOf("crop") != -1){
            let details = localStorage.getItem(all_keys);
            let data = JSON.parse(details);
            let article = document.createElement("ARTICLE");
            let div = document.createElement("DIV");
            div.className = "img";
            let div2 = document.createElement("DIV");
            div2.className = "content";
            let h4 = document.createElement("H4");
            h4.innerHTML = `${data.choosecrop} Crop`
            let h2 = document.createElement("H2");
            h2.innerHTML = `${data.name}`;
            let h3 = document.createElement("H3");
            h3.innerHTML = `Area - ${data.area} SqFt`;
            let button = document.createElement("DIV");
            button.className = "button";
            button.innerHTML = "Take a Tour";
            div_parent.appendChild(article);
            article.appendChild(div);
            article.appendChild(div2);
            div2.appendChild(h4);
            div2.appendChild(h2);
            div2.appendChild(h3);
            div2.appendChild(button);  
            button.onclick = function() {
                document.getElementById("modal_heading").innerHTML = `${data.name} (${data.choosecrop}) `;
                if(data.choosecrop == "Wheat"){
                    document.getElementById("wheat_sqft").innerHTML = `${data.name} You can grow ${data.area*25} plants on your farm.`;
                    document.getElementById("ready").innerHTML = `${data.name} You will be ready in 115 days`;
                    document.getElementById("temp").innerHTML = `The plants can easily survive in temperatures between 3.5 °C and 35 °C, but the best temperature for wheat farming is between 21 °C and 26 °C.`;
                    document.getElementById("water").innerHTML = `You have to use 10mm of water per day`;
                }
                else{
                    document.getElementById("wheat_sqft").innerHTML = `${data.name} You can plant ${data.area*100} gm/ha on your farm.`;
                    document.getElementById("ready").innerHTML = `${data.name} You will be ready in 120 days`;
                    document.getElementById("temp").innerHTML = `The plants can easily survive in temperatures between 21 °C and 37 °C.`;
                    document.getElementById("water").innerHTML = `you have to use 900 liters of water for 1 kilo worth produce.`;

                }
                

                 
                
                let signup = document.getElementById("modal2");
                let form = document.getElementById("modal_box2");
                signup.style.display = "grid";
                form.classList.remove("animate__bounceOut");
                form.classList.add("animate__bounceIn");
                signup.onclick = function(e){
                    if(e.target.id == 'modal2'){
                        form.classList.remove("animate__bounceIn");
                        form.classList.add("animate__bounceOut");
                        setTimeout(function(){
                            signup.style.display = 'none';
                        },800);     
                    }
                    return false;
                }
                return false; 
                 
            }
              
        }
    }
}

showing_crops();

const gyan = () => {
    let sign_btn = document.getElementById("add_btn");
    let signup = document.getElementById("modal");
    let form = document.getElementById("modal_box");
    sign_btn.onclick = () =>{
        signup.style.display = "grid";
        form.classList.remove("animate__bounceOut");
        form.classList.add("animate__bounceIn");
        return false;
    }
    signup.onclick = function(e){
        if(e.target.id == 'modal'){
            form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup.style.display = 'none';
            },800);     
        }
        return false;
    }
}
gyan();