require('dotenv').config()
const module4_12 = require("./Module4-12.js")

exports.module4_13 = void 0;

const module4_13 = async () => {
  await browser.setWindowSize(1240, 989)
  await browser.pause(2000)
  await browser.$("[class='btn btn-info']").click()
  await browser.pause(2000)
}

exports.module4_13 = module4_13
describe("Module4-13", () => {
  it("tests Module4-13", module4_13);
});
