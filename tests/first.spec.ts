import {test, request} from '@playwright/test'
import { Google } from '../page-object/Google'

test.beforeEach(async ({page}) => {
    await page.goto('https://listado.mercadolibre.com.ar/monitor-qled#D[A:monitor%20qled]')
    await page.waitForTimeout(10);
})

test('google example', async function ({page}) {
    const google = new Google(page);
    await google.open()
})

test('API', async ({page}) => {
    const req = await request.newContext();
    let url = 'https://criptoya.com/api/binancep2p/sell/usdt/ars/5';
    
    let result = (await req.get('https://criptoya.com/api/binancep2p/sell/usdt/ars/5'));
    let s = await result.json();
    //s.data[0].adv.price
    let p = await result.text();

    let a = await result.headersArray();
    console.log(result)


})