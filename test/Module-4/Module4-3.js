require('dotenv').config()
const module4_1 = require("./Module4-1.js")

exports.module4_3 = void 0;

const module4_3 = async () => {
  await browser.setWindowSize(997, 729)
    await browser.$("aria/Bộ lọc").click()
    await browser.pause(1000);
    await browser.$("[id=':r1u:'").click();
    await browser.pause(5000);
    await browser.$("aria/Bằng").click();
    await browser.$("[placeholder='Lọc giá trị']").click()
    await browser.$("[placeholder='Lọc giá trị']").setValue("2")
    await browser.pause(3000);
}
exports.module4_3 = module4_3
describe("Module4-3", () => {
  it("tests Module4-3", module4_3);
});
