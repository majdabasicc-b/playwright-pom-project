import {expect} from '@playwright/test'
import commonActions from '../utils/commonActions'

export default class LoginPage {
    constructor (page){
        this.actions = new commonActions (page)
    }

    async navigate(){
        await this.actions.navigate ('https://the-internet.herokuapp.com/login')
        }

    async login(username, password){
        await this.actions.fill('#username', username)
        await this.actions.fill('#password', password)
        await this.actions.click('button[type="submit"]')
    }
    
    async getErrorMessage(){
        return await this.actions.getText('#flash')
    }

    async assertErrorMessage(expectedMessage){
        const actualMessage = await this.getErrorMessage()
        expect (actualMessage).toContain(expectedMessage)
    }

           

}
