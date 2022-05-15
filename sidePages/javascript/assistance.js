const seeds_btn = () => {
    let seed_dealer = document.getElementById("seed_dealer");
    let seeds = document.getElementById("seeds");
    let modal = document.getElementById("modal");
    seed_dealer.onclick = () =>{
        seeds.style.display = "grid";
        modal.classList.remove("animate__bounceOut");
        modal.classList.add("animate__bounceIn");
    }
    seeds.onclick = function(e){
        if(e.target.id == 'seeds'){
            modal.classList.remove("animate__bounceIn");
            modal.classList.add("animate__bounceOut");
            setTimeout(function(){
                seeds.style.display = 'none';
            },800);     
        }
    }
}
seeds_btn();

const fertilizer_btn = () => {
    let fertilizer_dealer = document.getElementById("fertilizer_dealer");
    let fertilizers = document.getElementById("fertilizers");
    let modal2 = document.getElementById("modal2");
    fertilizer_dealer.onclick = () =>{
        fertilizers.style.display = "grid";
        modal2.classList.remove("animate__bounceOut");
        modal2.classList.add("animate__bounceIn");
    }
    fertilizers.onclick = function(e){
        if(e.target.id == 'fertilizers'){
            modal2.classList.remove("animate__bounceIn");
            modal2.classList.add("animate__bounceOut");
            setTimeout(function(){
                fertilizers.style.display = 'none';
            },800);     
        }
    }
}
fertilizer_btn();

const pesticide_btn = () => {
    let pesticide_dealer = document.getElementById("pesticide_dealer");
    let pesticides = document.getElementById("pesticides");
    let modal3 = document.getElementById("modal3");
    pesticide_dealer.onclick = () =>{
        pesticides.style.display = "grid";
        modal3.classList.remove("animate__bounceOut");
        modal3.classList.add("animate__bounceIn");
    }
    pesticides.onclick = function(e){
        if(e.target.id == 'pesticides'){
            modal3.classList.remove("animate__bounceIn");
            modal3.classList.add("animate__bounceOut");
            setTimeout(function(){
                pesticides.style.display = 'none';
            },800);     
        }
    }
}
pesticide_btn();