require('dotenv').config()
const module1_13 = require("./Module1-13").module1_13

exports.module1_14 = void 0;
const module1_14 = async () =>{
    await browser.setWindowSize(1365, 911)
    await browser.$('.MuiButtonBase-root').click()
}

exports.module1_14 = module1_14
describe('test script Module1-14', () =>{
it("test module1_14", module1_14)
});