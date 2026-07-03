import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-designer.revlab.tech/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('majdabasicc@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password1!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { description: 'Toggle properties panel', exact: true }).click();
  await page.getByText('Assets', { exact: true }).click();
  await page.getByRole('tab', { name: 'Video', exact: true }).click();
  await page.locator('div:nth-child(2) > .konva-image').click();
  await page.getByRole('tab', { name: 'Data' }).click();
  await page.getByRole('button', { name: 'Merge fields' }).click();
  await page.locator('.mat-select-placeholder.mat-select-min-line.ng-tns-c83-100').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByRole('textbox', { name: 'Search merge fields' }).click();
await page.locator('div').filter({ hasText: /^Merge fields$/ }).nth(2).click();
  await page.getByText('dlr_video_background').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByRole('textbox', { name: 'dlr_video_background' }).click();
  await page.getByRole('textbox', { name: 'dlr_video_background' }).fill('import { test, expect } from \'@playwright/test\';  test(\'test\', async ({ page }) => {   await page.goto(\'https://staging-designer.revlab.tech/login\');   await page.getByRole(\'textbox\', { name: \'Username\' }).click();   await page.getByRole(\'textbox\', { name: \'Username\' }).fill(\'majdabasicc@gmail.com\');   await page.getByRole(\'textbox\', { name: \'Password\' }).click();   await page.getByRol');
  await page.getByRole('textbox', { name: 'dlr_video_background' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'dlr_video_background' }).fill('');
  await page.getByText('Assets', { exact: true }).click();
  await page.locator('div:nth-child(2) > .konva-image').click();
  await page.getByText('Data', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^dlr_video_background \*$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'dlr_video_background' }).fill('import { test, expect } from \'@playwright/test\';  test(\'test\', async ({ page }) => {   await page.goto(\'https://staging-designer.revlab.tech/login\');   await page.getByRole(\'textbox\', { name: \'Username\' }).click();   await page.getByRole(\'textbox\', { name: \'Username\' }).fill(\'majdabasicc@gmail.com\');   await page.getByRole(\'textbox\', { name: \'Password\' }).click();   await page.getByRole(\'textbox\', { name: \'Password\' }).fill(\'Password1!\');   await page.getByRole(\'button\', { name: \'Login\' }).click(); });');
  await page.getByRole('textbox', { name: 'dlr_video_background' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'dlr_video_background' }).fill('');
  await page.getByText('Data', { exact: true }).click();
  await page.getByRole('button', { name: 'Merge fields' }).click();
  await page.getByRole('button', { name: 'Merge fields' }).click();
  await page.getByRole('textbox', { name: 'Search merge fields' }).click();
  await page.getByRole('textbox', { name: 'Search merge fields' }).fill('');
  await page.getByText('Elements').click();
  await page.getByRole('button', { name: 'Video' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('region', { name: 'Video' }).locator('input[type="file"]').setInputFiles('efe24ba9-944b-4345-9c42-3e8a67ac3c99.mov');
  await page.locator('#playPause').click();
  await page.locator('#playPause').click();
  await page.getByText('Data', { exact: true }).click();
  await page.getByRole('button', { name: 'Merge fields' }).click();
  await page.getByRole('textbox', { name: 'Search merge fields' }).click();
  await page.getByRole('textbox', { name: 'Search merge fields' }).fill('first');
  await page.getByRole('textbox', { name: 'Search merge fields' }).press('Enter');
  await page.locator('#mat-select-value-47').click();
  await page.locator('#mat-option-913').getByText('first_name').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByRole('textbox', { name: 'first_name' }).click();
  await page.getByRole('textbox', { name: 'first_name' }).fill('Majda');
  await page.getByRole('textbox', { name: 'Search merge fields' }).click();
  await page.getByRole('textbox', { name: 'Search merge fields' }).fill('veh');
  await page.getByText('dlr_video_background, first_nameMerge fields').click();
  await page.getByText('veh_year', { exact: true }).click();
  await page.getByText('veh_model', { exact: true }).click();
  await page.getByText('veh_model', { exact: true }).click();
  await page.locator('#mat-option-1369 > .mat-pseudo-checkbox').click();
  await page.locator('#mat-option-1368 > .mat-pseudo-checkbox').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByRole('textbox', { name: 'veh_model' }).click();
  await page.getByRole('textbox', { name: 'veh_model' }).fill('K5');
  await page.locator('div').filter({ hasText: /^veh_make \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'veh_make' }).fill('Kia');
  await page.getByRole('textbox', { name: 'veh_mileage' }).click();
  await page.getByRole('textbox', { name: 'veh_mileage' }).fill('20 000');
  await page.getByText('widgetsElements').click();
  await page.getByRole('button', { name: 'Text' }).click();
  await page.locator('.mat-select-placeholder.mat-select-min-line.ng-tns-c83-46').click();
  await page.getByText('first_name').click();
  await page.getByRole('textbox', { name: 'Text' }).click();
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Text' }).fill('Hello {{first_name}}');
  await page.locator('.mat-form-field-infix.ng-tns-c47-48').click();
  await page.getByText('sort_by_alpha').click();
  await page.locator('#mat-input-17').fill('');
  await page.locator('#mat-input-17').press('End');
  await page.locator('#mat-input-17').press('Insert');
  await page.locator('#mat-input-17').press('Insert');
  await page.locator('#mat-input-17').click();
  await page.locator('#mat-input-17').press('Insert');
  await page.locator('#mat-input-17').press('End');
  await page.locator('#mat-input-17').press('NumLock');
  await page.locator('#mat-input-17').fill('100');
  await page.getByRole('button').filter({ hasText: 'palette' }).first().click();
  await page.locator('form').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.locator('#color-block').click({
    position: {
      x: 130,
      y: 2
    }
  });
  await page.locator('#color-block').click({
    position: {
      x: 92,
      y: 186
    }
  });
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('canvas').click({
    position: {
      x: 35,
      y: 23
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 34,
      y: 22
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 52,
      y: 33
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 14,
      y: 4
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 26,
      y: 21
    }
  });
  await page.locator('div:nth-child(4) > .timeline-asset > .resize-handle').click();
  await page.locator('.timeline-asset.ng-star-inserted.selected-asset > .resize-handle').click();
  await page.getByText('Hello Majda').click();
  await page.getByText('Hello Majda').click();
  await page.locator('canvas').click({
    position: {
      x: 48,
      y: 38
    }
  });
  await page.locator('#playPause').click();
  await page.locator('#playPause').click();
  await page.locator('canvas').click({
    position: {
      x: 31,
      y: 10
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 31,
      y: 6
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 70,
      y: 47
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 24,
      y: 7
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 24,
      y: 4
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 83,
      y: 47
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 24,
      y: 6
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 77,
      y: 64
    }
  });
});