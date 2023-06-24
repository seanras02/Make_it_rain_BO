//shopping cart

const addToCartButtons = document.getElementsByClassName("cart__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let bu  = 0;
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

        document.getElementById("js--totaal--prijs").textContent = "€" + totalPrice;
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