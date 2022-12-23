import 'jquery.scrollbar/jquery.scrollbar.css';
import 'jquery.scrollbar/jquery.scrollbar.min.js';
import './cart.css';
document.addEventListener("DOMContentLoaded", ready);
function ready(){
    let cartProductsBody = document.querySelector('.cart-list__body');
    let cartProductsCheckboxHead = document.querySelector('.cart-list__head .cart-products-checkbox__imitator');
    let cartProductsCheckboxBody = Array.from(cartProductsBody.querySelectorAll('.cart-products-checkbox__imitator'));

    cartProductsCheckboxBody.forEach((productCheckbox) => {
        productCheckbox.addEventListener('click', function(){
            ckeckboxActivate(productCheckbox);
            isActiveCheckboxHead();
        });
    });

    cartProductsCheckboxHead.addEventListener('click', function(){
        allCkeckboxActivate();
    });

    function allCkeckboxActivate(){
        if(!cartProductsCheckboxHead.classList.contains('partially')){
            if(cartProductsCheckboxHead.classList.contains('all')){
                cartProductsCheckboxHead.classList.remove('all');
                cartProductsCheckboxBody.forEach((productCheckbox) => {
                    productCheckbox.parentNode.querySelector('.cart-products-checkbox__input').checked = false;
                    productCheckbox.classList.remove('all');

                });
            }else{
                cartProductsCheckboxHead.classList.add('all');
                cartProductsCheckboxBody.forEach((productCheckbox) => {
                    productCheckbox.parentNode.querySelector('.cart-products-checkbox__input').checked = true;
                    productCheckbox.classList.add('all');
                });
            }
        }else{
            cartProductsCheckboxHead.classList.remove('partially');
            cartProductsCheckboxHead.classList.remove('all');
            cartProductsCheckboxBody.forEach((productCheckbox) => {
                productCheckbox.parentNode.querySelector('.cart-products-checkbox__input').checked = false;
                productCheckbox.classList.remove('all');
            });
        }
    }

    function isActiveCheckboxHead(){
        let sumCheck = 0;
        for (let i = 0; i < cartProductsCheckboxBody.length; i++) {
            if(cartProductsCheckboxBody[i].classList.contains('all')){
                ++sumCheck;
            }
        }

        if(sumCheck == 0){
            cartProductsCheckboxHead.classList.remove('partially');
            cartProductsCheckboxHead.classList.remove('all');
        }else if(sumCheck == cartProductsCheckboxBody.length){
            cartProductsCheckboxHead.classList.remove('partially');
            cartProductsCheckboxHead.classList.add('all');
        }else{
            cartProductsCheckboxHead.classList.add('partially');
            cartProductsCheckboxHead.classList.remove('all');
        }
    }

    function ckeckboxActivate(btn){
        if(!btn.classList.contains('partially')){
            btn.classList.toggle('all');
        }else{
            btn.classList.remove('all');
            btn.classList.remove('partially');
        }
    }

    isActiveCheckboxHead();

    jQuery('.scrollbar-inner').scrollbar();
}