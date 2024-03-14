require('dotenv').config()
const module1_1 = require('./Module1-1').login
exports.module1_7 = void 0;



const module1_7 = async () =>{
    await browser.setWindowSize(1360, 911)
    // Click vào phần tử có aria-label là "Chỉ số chất lượng" và có role là "button"
    await browser.$('[id="basic-nav-dropdown"]').click();
// Click vào phần tử có aria-label là "Hệ thống chỉ số bệnh viện"
    await browser.$('[href="/index-hospital"]').click();
}

exports.module1_7 = module1_7;
describe('test script Module1-7', () =>{

    // it("tests module1-1", module1_1);
    it("tests module1-7", module1_7)

});