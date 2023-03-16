const { test, expect } = require('@playwright/test');

test('Screenshot and visual testing', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#displayed-text').screenshot({ path: 'partialscreenshot.png' })
    await page.locator('#hide-textbox').click()
    await page.screenshot({ path: 'screenshot.png' })
    await expect(page.locator('#displayed-text')).toBeHidden()
    await page.locator('#show-textbox').click()

})

test.only('Visual testing',async({page})=>{
    await page.goto('https://www.orangehrm.com/')
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})