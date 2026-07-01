import { test, expect } from '@playwright/test';

async function login(page) {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
}


var products: string[] = ["Sauce Labs Backpack", "Sauce Labs Bike Light",
     "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"]

test('URL and Title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory.html/)
    await expect(page).toHaveTitle('Swag Labs')
});

test('Add to Cart', async ({ page }) => {
    await login(page)

    const productLists = page.locator('[data-test="inventory-item"]');
    const productstoAdd = 3
    for(let i = 0; i < productstoAdd; i++){
        let product = productLists.filter({hasText: products[i]});
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }
    await expect.soft(page.getByRole('button', {name: 'Remove'})).toHaveCount(1);  

    await expect.soft(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1')
});
