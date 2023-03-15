const { test, expect } = require('@playwright/test');

test('Saucedemo - Place a order', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    const userName = "standard_user"
    const passWord = "secret_sauce"
    const productName = "Sauce Labs Bike Light"
    const products = page.locator(".inventory_item_name")
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs')
    await page.locator('#user-name').type(userName)
    await page.locator('#password').type(passWord)
    await page.locator('#login-button').click()
    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".inventory_item_name").allTextContents()
    console.log(titles)
    const count = await products.count()
    for (let i = 0; i < count; i++) {
        if (await products.nth(i).textContent() === productName) {
            await products.nth(i).click()
            break;
        }
    }
    await page.waitForLoadState('networkidle')
    await page.locator("[class*=btn_inventory]").click()
    await page.locator("#shopping_cart_container").click()
    expect(await page.locator(".inventory_item_name").textContent()) === productName;
    await page.locator("#checkout").click()
    await page.locator('#first-name').type("Yogesh")
    await page.locator('#last-name').type("Ambre")
    await page.locator('#postal-code').type('123456')
    await page.locator('#continue').click()
    await page.locator('#finish').click()
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
    //await page.pause()
})

test('Popup Validation', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()
    await page.locator('#show-textbox').click()
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.pause()
    page.on('dialog', dialog => dialog.accept())
    await page.locator('#confirmbtn').click()
    await page.locator('#mousehover').hover()
})

test('Iframes', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const framesPage = page.frameLocator('#courses-iframe')
    await framesPage.locator("li a[href*='lifetime-access']:visible").click()
    const textCheck = await framesPage.locator('.text h2').textContent()
    console.log(textCheck.split(' ')[1])
})