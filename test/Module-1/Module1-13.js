require('dotenv').config()
const module1_1 = require('./Module1-1').login
exports.module1_13 = void 0;

const module1_13 = async () =>{
    await browser.setWindowSize(1360, 911)
    await browser.$('[id="basic-nav-dropdown"]').click();

    await browser.$('[href="/department-index"]').click();
}

exports.module1_13 = module1_13;
describe('test script Module1-13', () =>{
    it("tests module1-1", module1_1);
    it("tests module1-3", module1_13);
});