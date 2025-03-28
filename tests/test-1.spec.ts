import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  await page.getByRole('combobox', { name: 'Where are you going?' }).click();
  await page.getByRole('combobox', { name: 'Where are you going?' }).fill('new york');
  await page.getByRole('button', { name: 'Search' }).click();
});