require('dotenv').config()
const module1_7 = require("./Module1-7").module1_7
exports.moduule1_8 = void 0;

const module1_8 = async () => {
    await browser.setWindowSize(1360, 911)
    await browser.$('.MuiButton-root').click();
    await browser.pause(5000)
    // await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}/hospital-index-revision-by-year`)
}

exports.moduule1_8 = module1_8;
describe('test script Module1-8', () =>{

    it('Test module1_8', module1_8)


});