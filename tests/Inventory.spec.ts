import { test, expect } from '@playwright/test';

async function login(page) {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
}

test('Inventory Page', async ({ page }) => {
    await login(page);

    await expect(page.getByText('Products')).toBeVisible();
});

test('Find Product A', async ({ page }) => {
    await login(page);

    await expect(page.getByText('Products')).toBeVisible();
    const productLists = page.locator('[data-test="inventory-item"]');
    const specificList = productLists.filter({hasText: 'Sauce Labs Backpack'});
    await specificList.getByRole('button', { name: 'Add to cart' }).click();


});