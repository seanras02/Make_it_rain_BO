let allGames = document.getElementsByClassName("part");
let filters = document.getElementsByClassName("filter");
let section = document.getElementsByClassName("part--section");
let middle = document.getElementsByClassName("part--body");
let buy = document.getElementsByClassName("part--buy");

//hiermee start je altijd boven aan de pagina als je refresht
window.scrollTo(0,0);



setInterval(function(){
   document.getElementsByTagName("main")[0].style.overflow = "auto";
   document.getElementsByClassName("main")[0].style.opacity = "1";
}, 1500)


//als er op de filter knop gedrukt word... zijn de lijnen code hieronder
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//als er op de filter knop gedrukt word ^ gaat de adventure genre weg

//PART 1
let part1Filter = document.getElementById("part--1");

part1Filter.onchange = function(){
    if(part1Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--1"){
                allGames[i].style.display = "flex";
                section[i].style.display = "flex";
                if(middle[i]){
                    middle[i].style.display = "flex";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "flex";
                }
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--1"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
                if(middle[i]){
                    middle[i].style.display = "none";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "none";
                }
            }
        }
    }
};

//PART 2
let part2Filter = document.getElementById("part--2");

part2Filter.onchange = function(){
    if(part2Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--2"){
                allGames[i].style.display = "flex";
                section[i].style.display = "flex";
                if(middle[i]){
                    middle[i].style.display = "flex";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "flex";
                }
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--2"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
                if(middle[i]){
                    middle[i].style.display = "none";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "none";
                }
                
            }
        }
    }
};

//PART 3
let part3Filter = document.getElementById("part--3");

part3Filter.onchange = function(){
    if(part3Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--3"){
                allGames[i].style.display = "flex";
                section[i].style.display = "flex";
                if(middle[i]){
                    middle[i].style.display = "flex";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "flex";
                }
                
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--3"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
                if(middle[i]){
                    middle[i].style.display = "none";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "none";
                }
            }
        }
    }
};


//PART 4
let part4Filter = document.getElementById("part--4");

part4Filter.onchange = function(){
    if(part4Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--4"){
                allGames[i].style.display = "flex";
                section[i].style.display = "flex";
                if(middle[i]){
                    middle[i].style.display = "flex";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "flex";
                }
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--4"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
                if(middle[i]){
                    middle[i].style.display = "none";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "none";
                }
            }
        }
    }
};

//PART 5
let part5Filter = document.getElementById("part--5");

part5Filter.onchange = function(){
    if(part5Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--5"){
                allGames[i].style.display = "flex";
                section[i].style.display = "flex";
                if(middle[i]){
                    middle[i].style.display = "flex";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "flex";
                }
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--5"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
                if(middle[i]){
                    middle[i].style.display = "none";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "none";
                }
            }
        }
    }
};


// PART 6 
let part6Filter = document.getElementById("part--6");

part6Filter.onchange = function(){
    if(part6Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--6"){
                allGames[i].style.display = "flex";
                section[i].style.display = "flex";
                if(middle[i]){
                    middle[i].style.display = "flex";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "flex";
                }
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--6"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
                if(middle[i]){
                    middle[i].style.display = "none";
                }
                if(typeof buy[i] !== "undefined"){
                    buy[i].style.display = "none";
                }
            }
        }
    }
};


//FILTER PRIJS


function handleSortOrderChange(){
    var sortOrder = document.getElementById("js--sortOrder").value;
    var partsList = document.getElementsByClassName("part--section");
    var sortedParts = Array.from(partsList);

    sortedParts.sort(function(a,b){
        var priceA = parseInt(a.querySelector(".product--h2").dataset.prijs);
        var priceB = parseInt(b.querySelector(".product--h2").dataset.prijs);

        if(sortOrder === "asc"){
            return priceA - priceB;
        }else if (sortOrder === "desc"){
            return priceB - priceA;
        }
    });
    var partsSection = document.querySelector(".parts");
    partsSection.innerHTML = "";

    sortedParts.forEach(function(part){
        partsSection.appendChild(part);
    });
}
document.getElementById("js--sortOrder").addEventListener("change", handleSortOrderChange);


//FILTER PRIJS