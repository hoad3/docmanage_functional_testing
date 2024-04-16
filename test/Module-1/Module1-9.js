require('dotenv').config()
const module1_8 = require('./Module1-8').module1_8
exports.module1_9 = void 0;

const module1_9 = async () =>{
    await browser.setWindowSize(1231, 894)
    // await browser.url(`${process.env.LOGIN_URL}/hospital-index-revision-by-year`)
    // await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}/hospital-index-revision-by-year`)
    await browser.$('.MuiButtonBase-root').click()
    await browser.pause()
}

exports.module1_9 = module1_9;
describe('test script Module1-9', () =>{
// it('test script module1_8', module1_8);
   it('tests script module1_9', module1_9)

});