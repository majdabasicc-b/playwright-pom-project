import ('test, expect') from '@playwright/test';

test (Login test with valid credentials', async ({ page }) => {
    await page.goto('https://staging-designer.revlab.tech/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('