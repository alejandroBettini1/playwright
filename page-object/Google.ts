export class Google {
    page:any
    constructor(page){
        this.page = page;
    }

    open = async () => {
        await this.page.goto('https://google.com')
    }

    search = async (str: string) => {
        let search = await this.page.locator('//textarea[@name="q"]');
        await search.fill(str)
        await this.page.keyboard.press('Enter')
    }
}