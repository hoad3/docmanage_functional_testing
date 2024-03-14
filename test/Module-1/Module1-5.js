require('dotenv').config()
const module1_4 = require('./Module1-4').module1_4
exports.module1_5 = void 0;

const module1_5 = async () =>{
   await browser.setWindowSize(1365, 911)
   await browser.$("[class='btn btn-primary']").click()
}

exports.module1_5 = module1_5;
describe('test script Module1-5', () =>{

   it("tests Module1-5", module1_5);
});