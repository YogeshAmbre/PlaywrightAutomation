const { test, expect } = require('@playwright/test');

test('ClientApp', async ({ page }) => {
    const email = "yogesh.ambre@gmail.com";
    const productName = 'Zara Coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").type(email)
    await page.locator("#userPassword").type('Vtest@2023')
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".card-body b").allTextContents()
    console.log(titles);
    const count = await products.count();
    for(let i =0; i < count; ++i)
    {
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
     }
    }
    await page.locator("[routerlink*='cart']").click();
    await expect(page.locator("text=My Cart")).toHaveText('My Cart');
    //await page.pause();

    // await page.locator("div li").first().waitFor();
    // const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
    // console.log(bool)
    // expect(bool).toBeTruthy();


    //     const email = "rahulshetty@gmail.com";
    //     const productName = 'Zara Coat 4';
    //     const products = page.locator(".card-body");
    //     await page.goto("https://rahulshettyacademy.com/client");
    //     await page.locator("#userEmail").fill(email);
    //     await page.locator("#userPassword").type("Iamking@000");
    //     await page.locator("[value='Login']").click();
    //     await page.waitForLoadState('networkidle');
    //    const titles= await page.locator(".card-body b").allTextContents();
    //    console.log(titles);

})

test.skip('Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "rahulshetty@gmail.com";
    const productName = 'Zara Coat 4';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();

    await page.locator("div li").first().waitFor();
    await page.pause()

})

