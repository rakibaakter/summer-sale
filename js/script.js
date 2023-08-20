// https://github.com/Programming-Hero-Web-Course4/b8a5-summer-sale-rakibaakter

// getting value by id
function getValuebyId(element){
    const elementString = element.innerText;
    const elementPrice = parseFloat(elementString);
    return elementPrice;
}

// add to purchase card
function addToCard(target){
    // getting card body element
    const cardBodyElement = target.childNodes[3]
    // getting product title
    const productTitle = cardBodyElement.childNodes[3].innerText;
    // getting product price
    const productPriceElement = cardBodyElement.childNodes[5].childNodes[0]
    // convert price to float value
    const productPrice = getValuebyId(productPriceElement);
    // previous total price
    const previousTotalPrice = getValuebyId(document.getElementById('previous-total-price'));
    // new price added
    const newTotalPrice = previousTotalPrice + productPrice;
    document.getElementById('previous-total-price').innerText = newTotalPrice.toFixed(2);
    document.getElementById('previous-price').innerText = newTotalPrice.toFixed(2);

    // activate buttons purchase for any price and coupon for up to 200
    if(newTotalPrice >= 0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    if(newTotalPrice >= 200){
        document.getElementById('coupon-code-id').removeAttribute('disabled');
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
    // add to list 
    const listElement = document.getElementById('list-items');
    const count = listElement.childElementCount + 1;
    const p = document.createElement('p');
    const list = count + " " + productTitle;
    p.innerText = `${count}  ${productTitle}`;
    p.style.fontWeight = 'bold';
    listElement.appendChild(p);

    // small device indicator for item count
    document.getElementById('item-counter').innerText = count;
}

// coupon apply
document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponCodeELement = document.getElementById('coupon-code-id');
    const couponCode = couponCodeELement.value;
    if(couponCode !== 'SELL200'){
        alert("your coupon is not valid !");
        couponCodeELement.value = "";
        return;
    }
    // previous total price
    const previousTotalPrice = getValuebyId(document.getElementById('previous-total-price'));
    // previous discount price
    const previousDiscountPrice = getValuebyId(document.getElementById('previous-total-discount'));
    // new discount price added
    const newDiscountPrice = (previousTotalPrice * 20)/100;
    document.getElementById('previous-total-discount').innerText = newDiscountPrice.toFixed(2);
    // set new price
    const newPrice = previousTotalPrice - newDiscountPrice ;
    document.getElementById('previous-price').innerText = newPrice.toFixed(2);
})
// reset card history
document.getElementById('reset-btn').addEventListener('click', function(){
    document.getElementById('previous-total-price').innerText = "0.00";
    document.getElementById('previous-price').innerText = "0.00";
    document.getElementById('previous-price').innerText = "0.00";

    // list clear
    const listElement = document.getElementById('list-items');
    listElement.innerHTML = " ";
    // btn disable
    document.getElementById('purchase-btn').setAttribute('disabled', false);
    document.getElementById('coupon-code-id').setAttribute('disabled', false);
    document.getElementById('coupon-btn').setAttribute('disabled', false);
    const couponCodeELement = document.getElementById('coupon-code-id');
    couponCodeELement.value = "";
})
// for small devices
function showList(){
    cardListElement = document.getElementById('card-list-body');
    cardListElement.style.display = 'block'
    document.getElementById('hidden-list').appendChild(cardListElement);
}