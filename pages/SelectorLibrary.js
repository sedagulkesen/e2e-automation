import { Selector } from 'testcafe'; // first import testcafe selectors

export const SelectorLibrary ={
    closeButton: Selector ('.fancybox-item.fancybox-close'), 
    loginTab: Selector ('.login-register-button-container'), //login tab
    emailInput: Selector('input#email.authentication-input'), //email imput
    passwordInput: Selector('input#password.authentication-input'), //password input
    loginButton: Selector('a.login-submit'),

}
//credentials
export const username= 'sedagulkesen@gmail.com';
export const password= 'seda9595';
