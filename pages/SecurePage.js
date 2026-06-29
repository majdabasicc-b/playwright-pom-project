import { expect} from "@playwright/test";
import commonActions from "../utils/commonActions";

export default class SecurePage {
    constructor (page){
        this.actions = new commonActions (page)
    }

    async getMessage(){
        return await this.actions.getText('#flash')
    }

    async assertLoggedInMessage(passedMessage){
        const message = await this.getMessage()
        expect(message).toContain(passedMessage)
    }
}