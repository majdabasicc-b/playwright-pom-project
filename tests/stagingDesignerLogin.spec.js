import { test, expect } from '@playwright/test'

test.describe('Staging Designer login', () => {
    test('should log in with valid staging credentials', async ({ page }) => {
        await page.goto('https://staging-designer.revlab.tech/login')
        await page.waitForLoadState('networkidle')
        await page.getByRole('textbox', { name: 'Username' }).fill('majdabasicc@gmail.com')
        await page.getByRole('textbox', { name: 'Password' }).fill('Password1!')
        await page.getByRole('button', { name: 'Login' }).click()
        await page.waitForLoadState('networkidle')
        await expect(page).not.toHaveURL(/.*\/login/)
        await page.locator('.app-header__logout').click()
    })
})