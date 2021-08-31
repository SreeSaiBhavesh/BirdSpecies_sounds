for(var i=0;i<$(".bird").length;i++){
    $("button")[i].addEventListener("click",function(){
        var letter = this.innerHTML[0];
        sound(letter);
        animation(letter);
    })
}

document.addEventListener("keypress", function(some){
    sound(some.key);
    animation(some.key);
})

function sound(key){
    switch(key){
        case "a":
            var Amer_goldfinch = new Audio("Sounds/american-goldfinch.mp3");
            Amer_goldfinch.play();
            break;
        case "b":
            var Amer_robin = new Audio("Sounds/american-robin.mp3");
            Amer_robin.play();
            break;
        case "c":
            var asian_koel = new Audio("Sounds/asian-koel.mp3");
            asian_koel.play();
            break;
        case "d":
            var atlan_puffin = new Audio("Sounds/atlantic-puffin.mp3");
            atlan_puffin.play();
            break;
        case "e":
            var bald_eagle = new Audio("Sounds/bald-eagle.mp3");
            bald_eagle.play();
            break;
        case "f":
            var blue_jay= new Audio("Sounds/blue-jay.mp3");
            blue_jay.play();
            break;
        case "g":
            var canary= new Audio("Sounds/canary.mp3");
            canary.play();
            break;

        case "h":
            var flamingo= new Audio("Sounds/flamingo.mp3");
            flamingo.play();
            break;

        case "i":
            var bunting= new Audio("Sounds/indigo-bunting.mp3");
            bunting.play();
            break;
        case "j":
            var flicker= new Audio("Sounds/northern-flicker.mp3");
            flicker.play();
            break;
        case "k":
            var starling= new Audio("Sounds/starling.mp3");
            starling.play();
            break;

        case "l":
            var whooper= new Audio("Sounds/whooper-swan.mp3");
            whooper.play();
            break;

        default: console.log(letter);
    }
}

function animation(currentkey){
    var activeButton = $("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}