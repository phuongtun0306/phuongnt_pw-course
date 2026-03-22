import { test } from '@playwright/test';

test("Dang ky thong tin ca nhan", async ({ page }) => {
    // Mở đường link 
    await page.goto('https://material.playwrightvn.com/')
    //Mo trinh duyet toan man hinh

    //Click vào bài học 2
    const baihoc2 = page.locator("//td/a[contains(text(),'Bài học 2: Product page')]");
    await baihoc2.click();

    // Chon 2 san pham 1
    const product1 = page.locator('//button[@data-product-id="1"]');
    await product1.dblclick();

    // Chon 3 san pham 2
    const product2 = page.locator('//button[@data-product-id="2"]');
    await product2.dblclick();
    await product2.click();

    // Chon 1 san pham 3
    const product3 = page.locator('//button[@data-product-id="3"]');
    await product3.click();


});