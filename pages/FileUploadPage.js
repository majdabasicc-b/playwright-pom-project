import { expect } from '@playwright/test'
import commonActions from  "../utils/commonActions"

export default class FileUploadPage {
    constructor(page) {
        this.actions = new commonActions(page)
        this.fileInput = page.locator('#file-upload')
        this.uploadButton = page.locator('#file-submit')
        this.uploadedFile = page.locator('#uploaded-files')
    }

    async navigate() {
        await this.actions.navigate('https://the-internet.herokuapp.com/upload')
    }

    async uploadFile(filePath) {
        await this.fileInput.setInputFiles(filePath)
        await this.uploadButton.click()
    }

    async assertFileUploaded(fileName) {
        const text = await this.uploadedFile.textContent()
        expect(text).toContain(fileName)
    }
}