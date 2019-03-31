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
    sizeButton: Selector('div.addtobasket-box button'),
    chooseSize:Selector('span.text'),
    addtocartButton: Selector ('div#addToBasketButton'),
    basketItem: Selector('#myBasketListItem'),
}

