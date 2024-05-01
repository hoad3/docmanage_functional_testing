require('dotenv').config()
const module1_3 = require("./Module1-3").module1_3
exports.module1_4 = void 0;


const module1_4 = async () =>{
    await browser.setWindowSize(1365, 911)
    await browser.url(`${process.env.LOGIN_URL}/category-folder/1`)
    await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}/category-folder/1`)
    await browser.$("[class='btn btn-success']").click()
}
exports.module1_4 = module1_4;
describe('test script Module1-4', () =>{

    //it("tests module1-3", module1_3);
    it("tests module1-4", module1_4);

});