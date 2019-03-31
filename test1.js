import { Selector, ClientFunction} from 'testcafe'; // first import testcafe selectors
import {Selectors, SelectorLibrary} from './pages/Selectors';

export default async function () {
    const { error } = await t.getBrowserConsoleMessages();
    await t.expect(error[0]).notOk();
}
// Only continue with test when page is ready
export var checkPageLoad = async t => {
    await (SelectorLibrary.logo).exists;
    // await t.getBrowserConsoleMessages();
};

var username= process.argv[4];
var password= process.argv[5];

fixture `Test preparation`
    .page `https://www.trendyol.com/`
    .beforeEach(checkPageLoad);  // specify the start page

test('User is able to login', async t => {
    await t
        .expect(SelectorLibrary.closeButton).ok()
        .click(SelectorLibrary.closeButton);
        await (SelectorLibrary.loginTab).exists;
        await t.click(SelectorLibrary.loginTab); //user clicks on login button 
        await (SelectorLibrary.emailInput).exists;
        await (SelectorLibrary.passwordInput).exists;
        await t //make sure we're in login screen
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

test('Go and choose random boutique', async t => {
    //choose random category first
    var categories= Selector('a.tab-header.badge-container');
    var min = 0;
    var max = await categories.count;
    var categoryNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var choosenCategory = Selector('a.tab-header.badge-container').nth(categoryNumber);
    await t.click(choosenCategory);
    // choose random boutique
    var boutiques= Selector('img.bigBoutiqueImage');
    var min = 0;
    var max = await boutiques.count;
    var randomBoutiqueNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var choosenBoutique = Selector('.butik-large-image').nth(randomBoutiqueNumber);
    await (SelectorLibrary.tabHeader).exists;
    await t.click(choosenBoutique);
    // pick random product 
    var products= Selector('div .name');
    var min = 0;
    var max = await products.count;
    var randomProductNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var choosenProduct = Selector('div .name').nth(randomProductNumber);
    await (SelectorLibrary).exists;
    await t.click(choosenProduct);
    // check the details of the product
    await t
        .expect(SelectorLibrary.productDetailsLabel).ok()//check the details of the product is visible or not 
        .wait(2000);
    if(await (SelectorLibrary.sizeButton.exists)){
        await t
            .click(SelectorLibrary.sizeButton)
            .click(SelectorLibrary.chooseSize);  // user choose the size of the product
    }
    await (SelectorLibrary.addtocartButton).exists;
    await t
    .click(SelectorLibrary.addtocartButton); // add product to the cart
    await (SelectorLibrary.basketItem).exists;
    await t
    .click(SelectorLibrary.basketItem); // go my basket to check the items
    await (SelectorLibrary).exists;
});







