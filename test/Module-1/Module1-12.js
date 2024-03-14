require('dotenv').config()
const module1_11 = require('./Module1-11').module1_11
exports.module1_12 = void 0;
const module1_12 = async () =>{
    await browser.setWindowSize(1360, 911)

    await browser.$("[title='Thời gian']").click()
    await browser.pause(3000)
}

exports.module1_12 = module1_12;
describe('test script Module1-12', () =>{

   it("test script module1_12",module1_12)

});