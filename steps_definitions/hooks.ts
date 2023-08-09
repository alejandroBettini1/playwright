const {Before, After, setDefaultTimeout} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const mysql = require('mysql2/promise');
setDefaultTimeout(60 * 1000)

Before(async function() {
    this.browser = await chromium.launch({ headless: false })
    this.context = await this.browser.newContext({
        recordVideo: {
            dir: `${process.cwd()}/videos`
        }
    })
    this.page = await this.context.newPage()
    try{
        this.db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'hello',
            database: 'test'
        })
    }catch(error){
        console.error('NO SE PUDO CONECTAR A LA DB')
    }
})

After(async function(scenario) {
    if (scenario.result.status == 'PASSED') {
        const waitPromise = new Promise((resolve) => setTimeout(resolve, 5000));
        await Promise.race([
            this.page.video().delete(),
            waitPromise,
        ]).catch((error) => {
            console.error('Error al intentar eliminar el video:', error);
        });
        await this.page.close()
        await this.context.close()
    } 
})