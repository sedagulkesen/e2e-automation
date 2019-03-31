import { Selector } from 'testcafe'; // first import testcafe selectors
import {SelectorLibrary, username, password} from './pages/SelectorLibrary';
fixture `Login`
    .page `https://www.trendyol.com/`;  // specify the start page

//then create a test and place your code there
test('Login', async t => {
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
        .click(SelectorLibrary.loginButton);
});