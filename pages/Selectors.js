import { Selector } from 'testcafe'; // first import testcafe selectors

export const SelectorLibrary ={
    closeButton: Selector ('.fancybox-item.fancybox-close'), 
    loginTab: Selector ('.login-register-button-container'), //login tab
    emailInput: Selector('input#email.authentication-input'), //email imput
    passwordInput: Selector('input#password.authentication-input'), //password input
    loginButton: Selector('a.login-submit'),
    tabHeader: Selector ('a.tab-header.badge-container'),
    womenCategory: Selector('a.tab-header.badge-container').nth(0),  
    productDetailsLabel: Selector('.product-detail-info-box'),
    addtocartButton: Selector ('.add-to-basket-button'),
    sizeButton: Selector('.btn-group'),
    chooseSize:Selector('.text'),
    basketItem: Selector('#myBasketListItem'),
}
//credentials


// async function checkImages(t){
//     var count         = await images.count;
//     var requestsCount = 0;
//     var statuses      = [];

//     var getRequestResult = ClientFunction(url => {
//         return new Promise(resolve => {
//             var xhr = new XMLHttpRequest();

//             xhr.open('GET', url);

//             xhr.onload = function () {
//                 resolve(xhr.status);
//             };

//             xhr.send(null);
//         });
//     });

//     for (var i = 0; i < count; i++) {
//         var url = await images.nth(i).getAttribute('src');

//         if (!url.startsWith('data')) {
//             requestsCount++;
//             statuses.push(await getRequestResult(url));
//         }
//     }
//     await t.expect(requestsCount).eql(statuses.length);
//     for (const status of statuses)
//         await t.expect(status).eql(200);
// }

