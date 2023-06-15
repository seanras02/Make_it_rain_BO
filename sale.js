let allGames = document.getElementsByClassName("part");
let filters = document.getElementsByClassName("filter");
let section = document.getElementsByClassName("part--section");


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
//

//PART 1
let part1Filter = document.getElementById("part--1");

part1Filter.onchange = function(){
    if(part1Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--1"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--1"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}

//PART 2
let part2Filter = document.getElementById("part--2");

part2Filter.onchange = function(){
    if(part2Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--2"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--2"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}

//PART 3
let part3Filter = document.getElementById("part--3");

part3Filter.onchange = function(){
    if(part3Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--3"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--3"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}


//PART 4
let part4Filter = document.getElementById("part--4");

part4Filter.onchange = function(){
    if(part4Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--4"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--4"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}

//PART 5
let part5Filter = document.getElementById("part--5");

part5Filter.onchange = function(){
    if(part5Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--5"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--5"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}


// PART 6 
let part6Filter = document.getElementById("part--6");

part6Filter.onchange = function(){
    if(part6Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--6"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--6"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}




//shopping cart

const addToCartButtons = document.getElementsByClassName("cart__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let sf = 0; 
let tw   = 0;
let kq  = 0;
let bu  = 0;
let di  = 0;
let ab  = 0;
let es  = 0;
let jj  = 0;
let jk  = 0;
let na  = 0;
let tw_  = 0;
let pu  = 0;
let th  = 0;
let ge  = 0;
let cd  = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
             case "sf":
                sf += 1;
                break;
            case "tw":
                tw += 1;
                break;
            case "kq":
                kq += 1;
                break;
            case "cd":
                cd += 1;
                break;
            case "bu":
                bu += 1;
                break;
            case "di":
                di += 1;
                break;
            case "ab":
                ab += 1;
                break;
            case "es":
                es += 1;
                break;
            case "ge":
                ge += 1;
                break;
            case "jj":
                jj += 1;
                break;
            case "jk":
                jk += 1;
                break;
            case "na":
                na += 1;
                break;
            case "tw_":
                tw_ += 1;
                break;
            case "pu":
                pu += 1;
                break;
            case "th":
                th += 1;
                break;
        }

        if(modalIOpen === false){
        shoppingModal.style.display ="flex";
        modalIOpen = true;
        setTimeout(function(){
            shoppingModal.style.display = "none";
            modalIOpen = false;
        },2000);
    }
    }
}

const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function(){
    if(checkOutIsOpen === false){
        document.querySelector("main .parts").style.display = "none";
        document.querySelector("main .inputs").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;
        document.getElementById("js--amount-sf").innerHTML = sf + "x";
        document.getElementById("js--amount-tw").innerHTML = tw + "x";
        document.getElementById("js--amount-kq").innerHTML = kq + "x";
        document.getElementById("js--amount-cd").innerHTML = cd + "x";
        document.getElementById("js--amount-tw_").innerHTML = tw_ + "x";
        document.getElementById("js--amount-bu").innerHTML = bu + "x";
        document.getElementById("js--amount-di").innerHTML = di + "x";
        document.getElementById("js--amount-ab").innerHTML = ab + "x";
        document.getElementById("js--amount-es").innerHTML = es + "x";
        document.getElementById("js--amount-ge").innerHTML = ge + "x";
        document.getElementById("js--amount-jj").innerHTML = jj + "x";
        document.getElementById("js--amount-jk").innerHTML = jk + "x";
        document.getElementById("js--amount-na").innerHTML = na + "x";
        document.getElementById("js--amount-pu").innerHTML = pu + "x";
        document.getElementById("js--amount-th").innerHTML = th + "x";
        return;
    }
        document.querySelector("main .parts").style.display = "block";
        document.querySelector("main .inputs").style.display = "block";
        checkOutWindow.style.display = "none";
        checkOutIsOpen = false;
}