require('dotenv').config()
const login = require("./Module1-1").login
const module1_2 = require("./Module1-2").module1_2
exports.module1_3 = void 0;







const module1_3 = async() =>{

    await browser.setWindowSize(1355, 858)
    // await browser.$("aria/Quy trình").click()
    await browser.$("//*[@data-testid=\"FolderIcon\"]").click()


}

exports.module1_3 = module1_3;
describe("Module1-3", () => {

    // it("tests Module1-1", login);
    it("test Module1_2", module1_2);
    it("test Module1_3", module1_3, () =>{
        browser.pause(5000);
    });



});