import commonActions from "../utils/commonActions"
import { expect } from "@playwright/test"

export default class DropdownPage {
    constructor(page) {
        this.actions = new commonActions(page)
        this.dropdown = page.locator('#dropdown')
    }

    async navigate() {
        await this.actions.navigate('https://the-internet.herokuapp.com/dropdown')
    }

    async selectOption(value) {
        await this.dropdown.selectOption(value)
    }

    async assertSelectedOption(expectedValue) {
        const selectedValue = await this.dropdown.inputValue()
        expect(selectedValue).toBe(expectedValue)
    }
}