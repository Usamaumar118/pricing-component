let toggleInput = document.querySelector('.toggle-input');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', changePrice)



function changePrice(){
    let priceBasic, pricePro, priceMaster;

    priceBasic = document.querySelector('.card-price-basic');
    pricePro = document.querySelector('.card-price-pro');
    priceMaster = document.querySelector('.card-price-master');

    if(toggleInput.checked == true){
        priceBasic.innerHTML = 199.99;
        pricePro.innerHTML = 249.99;
        priceMaster.innerHTML = 399.99;
    }else{
        priceBasic.innerHTML = 19.99;
        pricePro.innerHTML = 24.99;
        priceMaster.innerHTML = 39.99;
    }


}
