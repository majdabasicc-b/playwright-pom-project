import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-designer.revlab.tech/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('majdabasicc@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password1!');
  await page.getByRole('button', { name: 'Login' }).click();
});