import { type Page, type Locator, expect } from '@playwright/test';


export class InventoryCart{
    readonly page: Page
    readonly productLists: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productLists = page.locator('[data-test="inventory-item"]');

    }

    async addToCart(productName: string) {
        let product = this.productLists.filter({hasText: productName});
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }

}