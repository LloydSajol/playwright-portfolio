import { test, expect } from '@playwright/test';

test('Login Test Valid Credentials', async ({ page }) => {
    await page.goto('https://saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL(/inventory.html/);
});


test('Invalid Credentials', async ({ page }) => {
    await page.goto('https://saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce1');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Epic sadface')).toBeVisible();
});  

test('Blank Username/Password', async ({ page }) => {
    await page.goto('https://saucedemo.com/');

    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('secret_sauce1');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Username is required')).toBeVisible();

    await page.getByPlaceholder('Password').fill('');
    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Password is required')).toBeVisible();
});  