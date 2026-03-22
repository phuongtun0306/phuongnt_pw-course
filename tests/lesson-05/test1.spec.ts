import {test} from '@playwright/test' ;

test ("Dang ky thong tin ca nhan" , async ({page,browser}) => {
    // Mở đường link 
    await page.goto('https://material.playwrightvn.com/')
    //Mo trinh duyet toan man hinh
    
    //Click vào bài học 1
    await page.locator("//td/a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    //Click vào input Username
    await page.locator('//input[@name="username"]').click();
    //Nhap username
    await page.locator('//input[@name="username"]').fill('Phuong Nguyen');
    //Click vao button email
    await page.locator('//input[@name="email"]').click;
    //Nhap email
    await page.locator('//input[@name="email"]').pressSequentially('nguyenphuongtb3696@gmail.com', {
        delay:100,
    });
    // Click vao gender
    // await page.locator('//input[@value="female"]').check();
        const female = page.locator('//input[@id="female"]');
    //Select female
    await female.check();
    
    // Click vao hobbies
    await page.locator('//input[@value="cooking"]').check();

    //Chon Interests
    const Interests = page.locator('//select[@id="interests"]');
    await Interests.selectOption(["music", "sports"]);

    //Click vao truong Country
   const Country = page.locator('//select[@id="country"]');
   await Country.selectOption("uk");

    //Nhap Date of Birth
    const birth = page.locator('//input[@name="dob"]');
    await birth.pressSequentially('03061996',({
        delay: 100,
    }));

    //Upload profile picture
    const file = page.locator('//input[@name="profile"]');
    await file.setInputFiles('tests/lesson-05/Chibi.png');

    // Nhap Biography
    const Biography = page.locator('//textarea[@name="bio"]');
    await Biography.pressSequentially('Tôi sinh ra và lớn lên ở vùng quê Thái Bình...', ({
        delay: 100,
    }))
    //Nhan nut Register
    const register = page.locator('//button[@type="submit"]');
    await register.click();

});
