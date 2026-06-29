import {test, expect} from '@playwright/test'
import PomManager from '../pages/PomManager'

    let pm

test.describe('Login tests', () => {
    test.beforeEach(async({page})=>{
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) =>{
        await page.close()
    })
    test('Login with valid credentials', async()=>{
        await pm.LoginPage.navigate();
        await pm.LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await pm.SecurePage.assertLoggedInMessage(' You logged into a secure area!')
    })
    test('Login with invalid credentials', async()=>{
        await pm.LoginPage.navigate();
        await pm.LoginPage.login('invalid user', 'SuperSecretPassword!')
        await pm.LoginPage.assertErrorMessage(' Your username is invalid!')
})

})

test.describe('Checkbox verification', () =>{
      test.beforeEach(async({page})=>{
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) =>{
        await page.close()
    })

    test.only ('Check and uncheck checkboxes', async() => {
        await pm.CheckboxesPage.navigate ()
        await pm.CheckboxesPage.checkCheckbox(1)
        await pm.CheckboxesPage.assertCheckbox(1, true)
    })

})