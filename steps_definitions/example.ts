const {Given} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test')
const {assert} = require('chai')

Given('step', async function(){
    await this.page.goto('https://google.com')
    let search = await this.page.locator('//textarea[@name="q"]');
    await search.fill('hello')
    await this.page.keyboard.press('Enter')
    await this.page.goto('https://playwright.dev/docs/api/class-apiresponse')
    try{
    }catch{}
    let loc = await this.page.textContent("//h1[text()='APIResponse']")
    expect(loc).toContain('APi');
    //assert(loc == 'APibLABLA', `ERROR: Se esperaba ${APibLABLA} pero se encontro ${loc}` )
    /*
    UI ACTIONS
    .selectOption (select + option)
    .selectText (select + label)
    .innerText (getText) || allInnerTexts (todos los textos)
    .getAttribute(name)
    
    text assertions
    https://playwright.dev/docs/next/test-assertions

    .locator().first()   .all()  .nth(index)
    */
})
/*    await this.page.goto('https://getbootstrap.com/docs/4.0/components/dropdowns/')
    await this.page.locator('//button[@id="dropdownMenuButton"]').click()
    await this.page.locator('//a[@class="dropdown-item"and text()="Action"]').first().click()
*/