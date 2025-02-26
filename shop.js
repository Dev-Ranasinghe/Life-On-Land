if (document.readyState === 'loading') {                
    // Check whether the document is still loading
    document.addEventListener('DOMContentLoaded', ready) 
    // ready() method calls after loading the content to the DOM
} else {
    ready()         
    // If the page already loaded ready() method will trigger
}
let referenceNo;

function ready() {
    this.referenceNo = Math.floor(Math.random() * 1000000000000000)
   // Remove items from cart using remove button in cart
    let btnRemoveCartItems = document.getElementsByClassName('remove_product') 
    for (let i = 0; i < btnRemoveCartItems.length; i++) {
        btnRemoveCartItems[i].addEventListener('click', (event) => {
            updateCartTotal();
            event.target.parentElement.remove();
        })
    }

    //  Add event listener to button for add items
    let btnAddToCart = document.getElementsByClassName('Add_to_cart')
    for (let i = 0; i < btnAddToCart.length; i++) {
        btnAddToCart[i].addEventListener('click', addToCartOnClick)
    }

    // Cart sub total update when quantity changed
    updateSubTotalOnChange();

    let cartInput = document.getElementsByClassName('cart_product_qty_input')
    for (let i = 0; i < cartInput.length; i++) {
        window.addEventListener('load', updateSubTotal)
    }
}

function goBack(){              
    // User can go back to shop from cart using this function
    document.getElementsByClassName('Cart')[0].style.display = 'none'
    document.getElementsByClassName('Shop')[0].style.display = 'block'
    document.getElementById('order-checkout-section').style.display = 'none'
}

function goToShop() {           
    // Shop will display in the screen using this function if user clicked the shop link in the header section
    document.getElementsByClassName('Cart')[0].style.display = 'none'
    document.getElementsByClassName('Shop')[0].style.display = 'block'
    document.getElementById('order-checkout-section').style.display = 'none'
    alert('Cart will be refreshed')
}

function goToShoppingCart() {      
    // Cart will display in the screen using this function
    document.getElementsByClassName('Cart')[0].style.display = 'block'
    document.getElementsByClassName('Shop')[0].style.display = 'none'
    document.getElementById('order-checkout-section').style.display = 'none'
}

function changeAddToCartBtnStatus(btn) {
    document.getElementsByClassName('Add_to_cart') 
    btn.style.backgroundColor = 'red';
    btn.innerText = 'Add to cart'
    btn.value = 'notAdded'
}

function addToCartOnClick(event) { 
    let button = event.target;
    let shopItem = button.parentElement;
    let product_ID = shopItem.getElementsByClassName('product_ID')[0].innerText;
    let product_img = shopItem.getElementsByClassName('product_img')[0].src;
    let product_name = shopItem.getElementsByClassName('product_name')[0].innerText;
    let product_price = parseFloat(shopItem.getElementsByClassName('product_price')[0].innerText.replace('$',''));
    let cart_product_ID = document.getElementsByClassName('cart_product_ID') 

    for (let i = 0; i < cart_product_ID.length; i++) {
        if (cart_product_ID[i].innerText == product_ID) {
            alert('Item already add to the cart')
            return
        }
    }
    
    if (button.value === 'notAdded') {
        button.style.backgroundColor = 'maroon';
        button.innerText = 'Added'
        button.value = 'added'
        Add_to_Cart(product_ID, product_img,product_name, product_price);
    } else {
        button.style.backgroundColor = 'red';
        button.innerText = 'Add to cart'
        button.value = 'notAdded'
        removeItemsUsingCartRemoveBtnOnClick()
        updateCartTotal()
    }
}
// Cart section started
// Dynamically items added to the cart
function Add_to_Cart(product_ID, product_img, product_name, product_price) {
    let itemRow = document.createElement('div')
    itemRow.innerHTML = `
                    <div class="cart_product_ID">${product_ID}</div>
                    <div class="cart_product_img"><img src=${product_img} alt="${product_img}"></div>
                    <div class="cart_product_name">${product_name}</div>
                    <div class="cart_product_unit_price">$${product_price.toFixed(2)}</div>
                    <div class="cart_product_qty"><input  class="cart_product_qty_input" value="1" type="number" "></div>
                    <div class="product_sub_total">$${product_price.toFixed(2)}</div>
                    <button class="remove_product">Remove</button>
                    `
    itemRow.classList.add('cart_product_added')
    let cartItemListContainer = document.getElementsByClassName('cart-item-list')[0]
    cartItemListContainer.append(itemRow)
    updateCartTotal()
    removeItemsUsingCartRemoveBtnOnClick()
    updateSubTotalOnChange()
}

function removeItemsUsingCartRemoveBtnOnClick() {
    let removeCartItemsButtons = document.getElementsByClassName('remove_product')
    for (let i = 0; i < removeCartItemsButtons.length; i++) {
        removeCartItemsButtons[i].addEventListener('click', removeItemsUsingCartRemoveButton)
    }
}

function removeItemsUsingCartRemoveButton(event) {
    let itemRow = event.target.parentElement
    let cartItemId = itemRow.getElementsByClassName('cart_product_ID')[0].innerText 
    itemRow.remove();
    updateCartTotal();
    let shopItems = document.getElementsByClassName('product')
    for (let i = 0; i < shopItems.length; i++) {
        let itemIdShop = document.getElementsByClassName('product_ID')
        if (itemIdShop[i].innerText === cartItemId) {
            let btn = itemIdShop[i].parentElement.getElementsByClassName('Add_to_cart')[0]
            changeAddToCartBtnStatus(btn)         
            // change the status of the add to cart button in shop when an item was removed from cart
        }
    }
    updateCartTotal();
}

function updateSubTotalOnChange() {
    let cartInput = document.getElementsByClassName('cart_product_qty_input')
    for (let i = 0; i < cartInput.length; i++) {
        cartInput[i].addEventListener('change', updateSubTotal)
    }
}

function updateSubTotal(event) {
    let quantityInput = event.target
    let quantity = quantityInput.value
    if (isNaN(quantity) || quantity <= 0) {
        quantityInput.value = 1
    }
    let cartItemsContainer = document.getElementsByClassName('cart_product_added') 
    let unitPrice = quantityInput.parentElement.parentElement.getElementsByClassName('cart_product_unit_price')[0].innerText.replace('$', '')
    let subTotal = unitPrice * quantityInput.value
    quantityInput.parentElement.parentElement.getElementsByClassName('product_sub_total')[0].innerText = '$' + subTotal
    updateCartTotal()
}

function updateCartTotal() {  
    // update the total of the cart
    let total = 0
    let cartItems = document.getElementsByClassName('cart_product_added')
    let totalContainer = document.getElementsByClassName('item-total-price')[0]
    for (let i = 0; i < cartItems.length; i++) {
        let subTotal = Number(cartItems[i].getElementsByClassName('product_sub_total')[0].innerText.replace('$', ''))
        total += subTotal;
    }
    totalContainer.innerText = 'Total price : $' + total;
    updateTotalInCheckoutPage(total);
}

function updateTotalInCheckoutPage(total) { 
    //update the total in checkout page
    let totalAmountContainer = document.getElementsByClassName('amount')[0];
    totalAmountContainer.innerText = '$'+total;
}

function clearTheCart() { 
    // will remove the item from the cart not clearly at once but arithmetically according to the for loop
    let itemDataList = document.getElementsByClassName('cart_product_added')
    let shopItemIdList = document.getElementsByClassName('product') 
    for (let i = 0; i < itemDataList.length; i++) {
        let itemId = itemDataList[i].getElementsByClassName('cart_product_ID')[0].innerText.trim()
        itemDataList[i].remove()
        let shopItemId = shopItemIdList[j].getElementsByClassName('product_ID')[0].innerText.trim()
        if(shopItemId === itemId){
            let btn = shopItemIdList[j].getElementsByClassName('Add_to_cart')[0]
            changeAddToCartBtnStatus(btn)
        }
        
    }
    updateCartTotal()
}

function checkout() { 
    // will send checkout details from cart section to order chackout section
    let name = document.getElementById('name').value.toString().trim()
    let phoneNo = document.getElementById('phone_no').value.toString().trim()
    let email = document.getElementById('email').value.toString().trim()
    let total = document.getElementsByClassName('item-total-price')[0].innerText.replace(/[^0-9]/g, '')
    document.getElementsByClassName('reference-no')[0].innerText = this.referenceNo;
    if (total == 0) {
        alert("You should add products to the cart first.")
        return
    }
    if(name == ''){
        alert("You should enter your name.")
        return
    }
    if(phoneNo.length < 6){
        if(phoneNo == ''){
            alert("You should enter your phone number.")
        }
        else{
            alert("Your phone number is invalid.")
            return
        }
    }
    let emailRegex = /[\w]+@[\w]+[.][\w]+/
    if(email == ''){
        alert("You should enter your email address.")
    }
    if(!emailRegex.test(email)) {
        alert('You email address is invalid.')
        return
    }

    document.getElementsByClassName('email-input')[0].value = email
    document.getElementsByClassName('phone-no-input')[0].value = phoneNo
    document.getElementsByClassName('card-holders-name-input')[0].value = name
    document.getElementById('order-checkout-section').style.display = 'flex'
    document.getElementsByClassName('Shop')[0].style.display = 'none';
    document.getElementsByClassName('Cart')[0].style.display = 'none';

} 

//  javascript for order Ccheckout page  has started. 
function showBillingAddressToEdit(element) { 
    let billingAddressContainer = document.getElementsByClassName('billing-address')[0];
    let billingAddressInputFields = billingAddressContainer.getElementsByClassName('billing-details-input-fields')[0];
    billingAddressInputFields.style.display = 'grid';
    billingAddressContainer.getElementsByClassName('billing-address-summary')[0].style.display = 'none';
    billingAddressContainer.getElementsByClassName('btn-billing-address-edit')[0].style.display = 'none';
    element.style.display = 'none'
}
function saveBillingAddress() { 
    // will save billing information
    let billingAddressContainer = document.getElementsByClassName('billing-address')[0]
    let billingAddressInputFields = billingAddressContainer.getElementsByClassName('billing-details-input-fields')[0]
    let allInputFields = billingAddressInputFields.getElementsByClassName('billing-input-field')
    let address = '';

    if(!validateBillingAddress()){
        return;
    }

    for (let i = 0; i < allInputFields.length; i++) {
        let text = allInputFields[i].value.toString().trim()
        if (text !== '') {
            address += text + ", "
        }
    }
    let addressSummeryContainer = billingAddressContainer.getElementsByClassName('billing-address-summary')[0];
    addressSummeryContainer.innerText = address;
    billingAddressInputFields.style.display = 'none';
    addressSummeryContainer.style.display = 'block'
    billingAddressContainer.getElementsByClassName('btn-billing-address-edit')[0].style.display = 'block'
}
const billingform = document.getElementById("billing-form") 
const cancelButton = document.getElementById("cancelButton");
// reset billing information to null
cancelButton.addEventListener("click", () => {
    billingform.reset();
});

function showContactDetailsToEdit() { 
    let contactDetailContainer = document.getElementsByClassName('contact-details')[0]
    let contactDetailsInputFields = contactDetailContainer.getElementsByClassName('contact-details-input-fields')[0]
    contactDetailsInputFields.style.display = 'grid'
    contactDetailContainer.getElementsByClassName('contact-details-summery')[0].style.display = 'none'
    contactDetailContainer.getElementsByClassName('btn-contact-details-edit')[0].style.display = 'none'
}

function saveContactDetails() { 
    // will save the contact details  
    let contactDetailContainer = document.getElementsByClassName('contact-details')[0]
    let contactDetailsInputFields = contactDetailContainer.getElementsByClassName('contact-details-input-fields')[0]
    let allInputFields = contactDetailsInputFields.getElementsByTagName("input")
    let contactDetails = '';
    for (let i = 0; i < allInputFields.length; i++) {
        let text = allInputFields[i].value.toString().trim()
        if (text !== '') {
            contactDetails += text + " "
        }
    }
    if(!validateContactDetails()){
        return;
    }
    let contactDetailsSummeryContainer = contactDetailContainer.getElementsByClassName('contact-details-summery')[0];

    contactDetailsSummeryContainer.innerText = contactDetails;
    contactDetailsInputFields.style.display = 'none'
    contactDetailsSummeryContainer.style.display = 'block'
    contactDetailContainer.getElementsByClassName('btn-contact-details-edit')[0].style.display = 'block'
}
function resetFormValues() {            
    // will reset values in contact details (in checkout page)
    const formDiv = document.getElementById("form-div");
    const inputs = formDiv.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
       if (inputs[i].type === "text" || inputs[i].type === "number") { // check whether inputs are texts or numbers
          inputs[i].value = ""; 
          // if the above conditin is true values will be reset to null
        }
    }    
}

function validatePaymentDetails(){        
    //  check whether user enterde his card details correctly
    let cardNo = document.getElementById('card-number').value.trim()
    let name = document.getElementById('card-holder-name').value.trim()
    let securityCode = document.getElementById('security-code').value.trim()
    let expiryDate = document.getElementById('expiry-date').value.trim()
    // all the below alerts will prompt if user input invalid data or kept them null
    if(cardNo.length < 15){
        alert("Your card number is invalid.");
        return false;
    }
    if(name == ''){
        alert("You must enter the card holder's name.");
        return false;
    }
    if(securityCode.length < 3){
        alert('Your card security code is invalid.')
        return false;
    }

    if(expiryDate === '' || !validateExpiryDate(expiryDate)){
        alert('Your Expiry Date is invalid.')
        return false;
    }
    return true;
}
function validateExpiryDate(expiryDate){    
    // check whether user entered a valid bank card expiry date
    let thisdate = new Date();
    let thisMonth = thisdate.getMonth();
    let thisYear = thisdate.getFullYear();
    let expiryYear = Number(expiryDate.slice(0,4));
    let expiryMonth = Number(expiryDate.slice(-2))
    if(expiryYear < thisYear){
        return false;
    }else if(expiryYear === thisYear && expiryMonth <= thisMonth){
        return false;
    }
    return true;
}


function validateBillingAddress(){     
    // Validate the billing address and other details
    let country = document.getElementsByClassName('country-input')[0].value.trim();
    let address = document.getElementsByClassName('address-1-input')[0].value.trim()
    let postalCode = document.getElementsByClassName('postal-code-input')[0].value.trim()
    let town = document.getElementsByClassName('town-input')[0].value.trim()

    if(address == ''){
        alert('You must enter your Billing Address.')
        return false;
    }
    if(postalCode == ''){
        alert('You must enter your Postal or Zip code.')
        return false;
    }
    if(town == ''){
        alert('You must enter your town or city.')
        return false;
    }
    if(country == ''){
        alert('Please select your country.')
        return false;
    }
    return true;
}
function validateContactDetails(){ 
    // will validate contact deatails in check out section
    let phoneNo = document.getElementsByClassName('phone-no-input')[0].value.trim()
    if(phoneNo.length < 6){
        alert('You must phone number is invalid.')
        return false;
    }
    let email = document.getElementsByClassName('email-input')[0].value.trim()
    let emailRegex = /[\w]+@[\w]+[.][\w]+/
    if(!emailRegex.test(email)){
        alert('Your email address is invalid.')
        return false;
    }
    return true;
}
function Make_Payment() {       
    // Make payment, then clear the cart and return to the shop
    if(!validatePaymentDetails() || !validateBillingAddress() || !validateContactDetails()){
        return
    }
    alert('Congratulations !!! , Your order has been placed successfully ...')
    window.location.href = 'shop.html' 
    // will return to shop 
    this.referenceNo = Math.floor(Math.random() * 1000000000000000)

}

function Cancel_Payment(){       
    // Cancel the payment, then clear the cart and return to shop
    window.location.href = 'shop.html' 
    // will return to shop
}
// order checkout page javascript has ended.