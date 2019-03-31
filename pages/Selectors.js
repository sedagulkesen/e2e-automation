import { Selector } from 'testcafe'; // first import testcafe selectors

export const SelectorLibrary ={
    closeButton: Selector ('.fancybox-item.fancybox-close'), 
    loginTab: Selector ('.login-register-button-container'), //login tab
    emailInput: Selector('input#email.authentication-input'), //email imput
    passwordInput: Selector('input#password.authentication-input'), //password input
    loginButton: Selector('a.login-submit'),
    logo: Selector('#logo-icon'),
    tabHeader: Selector ('a.tab-header.badge-container'),
    womenCategory: Selector('a.tab-header.badge-container').nth(0),  
    productDetailsLabel: Selector('.product-detail-info-box'),
    addtocartButton: Selector ('.add-to-basket-button'),
    sizeButton: Selector('div.btn-group'),
    chooseSize:Selector('.text'),
    basketItem: Selector('#myBasketListItem'),
}

var username= process.argv[4];
var password= process.argv[5];

