import {test} from '@playwright/test'

test.beforeAll(async ({page}) => {
    await page.goto('https://www.apple.com/icloud/')
    await page.waitForTimeout(5000)
  });