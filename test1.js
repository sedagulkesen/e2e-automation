import { Selector, ClientFunction} from 'testcafe'; // first import testcafe selectors
import {Selectors, SelectorLibrary} from './pages/Selectors';

export default async function () {
    const { error } = await t.getBrowserConsoleMessages();
    await t.expect(error[0]).notOk();
}
// Only continue with test when page is ready
export var checkPageLoad = async t => {
    await t.expect(SelectorLibrary.logo).ok()
    .getBrowserConsoleMessages();
};

var username= process.argv[4];
var password= process.argv[5];

fixture `Test preparation`
    .page `https://www.trendyol.com/`
    .beforeEach(checkPageLoad);  // specify the start page

test('User is able to login', async t => {
    await t
        .expect(SelectorLibrary.closeButton).ok()
        .click(SelectorLibrary.closeButton)
        .wait(2000)
        .expect(SelectorLibrary.loginTab).ok()
        .click(SelectorLibrary.loginTab) //user clicks on login button 
        .expect(SelectorLibrary.emailInput).ok()
        .expect(SelectorLibrary.passwordInput).ok() //make sure we're in login screen
        .typeText(SelectorLibrary.emailInput,username)
        .typeText(SelectorLibrary.passwordInput,password)
        .click(SelectorLibrary.loginButton); //user login to the system
});

test('User is able to click on all the categories', async t => {
    var tabHeader = Selector ('a.tab-header.badge-container');
    var count = await tabHeader.count;
    for (var i = 0; i < count; i++) {
        var category = Selector ('a.tab-header.badge-container').nth(i);
        await t.click(category); // user clicks on all the categories
    }
});

test('Go and choose random category', async t => {
    var categories= Selector('a.tab-header.badge-container');
    var min = 0;
    var max = await categories.count;
    var categoryNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var choosenCategory = Selector('a.tab-header.badge-container').nth(categoryNumber);
    await t.click(choosenCategory);
});

test('Go and choose random boutique', async t => {
    // choose random boutique
    var boutiques= Selector('img.bigBoutiqueImage');
    var min = 0;
    var max = await boutiques.count;
    var randomBoutiqueNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var choosenBoutique = Selector('img.bigBoutiqueImage').nth(randomBoutiqueNumber);
    await t
        .expect(SelectorLibrary.tabHeader).ok()
        .click(choosenBoutique);
    // pick random product 
    var products= Selector('div .name');
    var min = 0;
    var max = await products.count;
    var randomProductNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var choosenProduct = Selector('div .name').nth(randomProductNumber);
    await t
        .expect(SelectorLibrary.tabHeader).ok()
        .click(choosenProduct);
    // check the details of the product
    await t
        .expect(SelectorLibrary.productDetailsLabel).ok() //check the details of the product is visible or not 
        .expect(SelectorLibrary.sizeButton).ok()
        .click(SelectorLibrary.sizeButton)
        .click(SelectorLibrary.chooseSize)  // user choose the size of the product
        .click(SelectorLibrary.addtocartButton) // add product to the cart
        .click(SelectorLibrary.basketItem); // go my basket to check the items 
});







