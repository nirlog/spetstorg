import 'jquery.scrollbar/jquery.scrollbar.css';
import 'jquery.scrollbar/jquery.scrollbar.min.js';
import './index.css';



document.addEventListener("DOMContentLoaded", ready);
function ready(){
    let orderRadios = Array.from(document.querySelectorAll('.order-step__input-radio'));
    orderRadios.forEach((orderRadio) => {
        orderRadio.addEventListener('change', isCheckedRadio);
    });

    function isCheckedRadio(){
        orderRadios.forEach((orderRadio) => {
            if(orderRadio.checked){
                orderRadio.parentNode.classList.add('active');
            }else{
                orderRadio.parentNode.classList.remove('active');
            }
        });
    }

    let orderProductsList = document.querySelector('.order-products__list');
    let orderProductsCheckbox = Array.from(orderProductsList.querySelectorAll('.order-item__checkbox-input'));
    orderProductsCheckbox.forEach((orderProductCheckbox) => {
        orderProductCheckbox.addEventListener('change', isChecked);
    });

    function isChecked(){
        orderProductsCheckbox.forEach((orderProductCheckbox) => {
            let orderProductImitator = orderProductCheckbox.parentNode.querySelector('.order-item__checkbox-imitator');
            if(orderProductCheckbox.checked){
                orderProductImitator.classList.add('active');
            }else{
                orderProductImitator.classList.remove('active');
            }
        });
    }

    let orderAgreement = document.querySelector('.order-step__agreement-checkbox');
    orderAgreement.addEventListener('change', function(){
        if(orderAgreement.checked){
            orderAgreement.parentNode.classList.add('active');
        }else{
            orderAgreement.parentNode.classList.remove('active');
        }
    });
    jQuery('.scrollbar-inner').scrollbar();
}