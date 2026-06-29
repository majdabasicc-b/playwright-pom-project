import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager'

let pm

test.describe('Dropdown tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
        await pm.DropdownPage.navigate()
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('Select Option 1', async () => {
        await pm.DropdownPage.selectOption('1')
        await pm.DropdownPage.assertSelectedOption('1')
    })

    test('Select Option 2', async () => {
        await pm.DropdownPage.selectOption('2')
        await pm.DropdownPage.assertSelectedOption('2')
    })
})