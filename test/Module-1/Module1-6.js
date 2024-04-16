require('dotenv').config()
const module1_3 = require('./Module1-3').module1_3
exports.module1_6 = void 0;

const module1_6 = async () =>{
    await browser.setWindowSize(1365, 911)
    await browser.url(`${process.env.LOGIN_URL}/category-folder/1`)
    await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}/category-folder/1`)
    await browser.$("//*[@id=\"root\"]/div[1]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div/div[1]/div[8]/button").click()
}

exports.module1_6 = module1_6;
describe('test script Module1-6', () =>{

it("test module1_6", module1_6);





});