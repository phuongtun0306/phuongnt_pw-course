import { test } from '@playwright/test';

test("Dang ky thong tin ca nhan", async ({ page }) => {
    // Mở đường link 
    await page.goto('https://material.playwrightvn.com/')
    //Mo trinh duyet toan man hinh

    //Click vào bài học 3
    const baihoc3 = page.locator("//td/a[contains(text(),'Bài học 3: Todo page')]");
    await baihoc3.click();

    const textboxTask = page.locator('//input[@type="text"]');
    const btnAddTask = page.locator("//button[text()='Add Task']");

    for (let i = 1; i < 101; i++ ) {
        // await textboxTask.click();
        await textboxTask.fill('To do ' + i);
        await btnAddTask.click();

    };
}
);