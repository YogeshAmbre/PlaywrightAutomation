const { test, expect } = require('@playwright/test');

test('ClientApp', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").type('yogesh.ambre@gmail.com')
    await page.locator("#userPassword").type('Vtest@2023')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".card-body b").allTextContents()
    console.log(titles);

})
