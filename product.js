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
let totalPrice = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "cd":
                cd += 1;
            totalPrice += 60;
                break;
            case "bu":
                bu += 1;
                totalPrice += 55;
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

document.getElementById("js--totaal--prijs").textContent = "€" + totalPrice;

const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function(){
    if(checkOutIsOpen === false){
        document.querySelector("main .product--page").style.display = "none";
        document.querySelector("main .inputs").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;

        //important
        document.getElementById("js--amount-cd").innerHTML = cd + "x";
        document.getElementById("js--amount-bu").innerHTML = bu + "x";
        //important

        document.getElementById("js--amount-sf").innerHTML = sf + "x";
        document.getElementById("js--amount-tw").innerHTML = tw + "x";
        document.getElementById("js--amount-kq").innerHTML = kq + "x";
        document.getElementById("js--amount-tw_").innerHTML = tw_ + "x";
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
        document.querySelector("main .parts").style.display = "flex";
        document.querySelector("main .inputs").style.display = "flex";
        checkOutWindow.style.display = "none";
        checkOutIsOpen = false;
}


//SEE MORE

const seeMore = document.querySelector('.see--more');
const description = document.querySelector('.description--hidden');

    seeMore.addEventListener('click', function(){
        description.classList.toggle('open');
        seeMore.textContent = description.classList.contains('open') ? 'Toon Minder' : 'Toon Minder'; 
});