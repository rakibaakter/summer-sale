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
    console.log(previousTotalPrice)
    
    // new price added
    const newTotalPrice = previousTotalPrice + productPrice;
    document.getElementById('previous-total-price').innerText = newTotalPrice;
    // activate buttons
    if(newTotalPrice >= 200){
        document.getElementById('purchase-btn').removeAttribute('disabled');
        document.getElementById('coupon-btn').removeAttribute('disabled');

    }
    // add to list 
    const listElemet = document.getElementById('list-items');
    const count = listElemet.childElementCount + 1;
    const p = document.createElement('p');
    const list = count + " " + productTitle;
    p.innerText = `${count}  ${productTitle}`;
    p.style.fontWeight = 'bold';
    listElemet.appendChild(p);
}

// coupon apply
const couponBtn = document.getElementById('coupon-btn')
while(couponBtn){
    console.log(event)
}