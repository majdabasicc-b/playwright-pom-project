import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager'

let pm

test.describe('File Upload tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('Upload a file', async () => {
        await pm.FileUploadPage.navigate()
        await pm.FileUploadPage.uploadFile('./test-files/test.txt')
        await pm.FileUploadPage.assertFileUploaded('test.txt')
    })
})