import { test, expect } from '@playwright/test';
import { InventoryCart } from '../pages/InventoryCart';
import { LoginPage } from '../pages/LoginPage';


test.describe('Inventory Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce')
    });

    test('Inventory Page', async ({ page }) => {

        await expect(page.getByText('Products')).toBeVisible();
    });

    test('Find Product A', async ({ page }) => {
        
        await expect(page.getByText('Products')).toBeVisible();
        const productLists = page.locator('[data-test="inventory-item"]');
        const specificList = productLists.filter({hasText: 'Sauce Labs Backpack'});
        await specificList.getByRole('button', { name: 'Add to cart' }).click();

    });
});
