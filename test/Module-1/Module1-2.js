require('dotenv').config()
const login = require("./Module1-1.js").login

exports.module1_2 = void 0;

const module1_2 = async () => {
    await browser.setWindowSize(1360, 911)
    await browser.$("aria/Quy trình").click()
}

exports.module1_2 = module1_2
describe("Module1-2", () => {
    // it("tests Module1-1", login); (lưu ý cần nghiên cứu thêm)

    it("tests Module1-2", module1_2);




});

