(function() {
    "use strict"

    // let coffeeTitle = document.getElementById("coffeeTitle");
    // coffeeTitle.innerHTML = "mission accomplished";
    // console.log(coffeeTitle);
    let light = document.getElementsByClassName("light");
    let search = document.getElementById('search');

    search.addEventListener('click', function() {
        for(let i = 0; i < light.length; i++){
            light[i].style.color = "blue";
        }
    });

})();