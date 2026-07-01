import { test, expect } from '@playwright/test';
import { InventoryCart } from '../pages/InventoryCart';
import { LoginPage } from '../pages/LoginPage';


var products: string[] = ["Sauce Labs Backpack", "Sauce Labs Bike Light",
     "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"]


test.describe('Add to Cart', () => {
    let addToCart: InventoryCart;
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        addToCart = new InventoryCart(page);
        await loginPage.goto();
    });
    

    test('Add to Cart', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce')

        const productstoAdd = 3
        for(let i = 0; i < productstoAdd; i++){
            await addToCart.addToCart(products[i]);
        }
        await expect.soft(page.getByRole('button', {name: 'Remove'})).toHaveCount(productstoAdd);  

        await expect.soft(page.locator('[data-test="shopping-cart-link"]')).toHaveText(productstoAdd.toString())
    });
});
