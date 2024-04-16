require('dotenv').config()
const module4_5 = require("./Module4-5.js")

exports.module4_6 = void 0;

const module4_6 = async () => {
  await browser.setWindowSize(997, 712)
  await browser.$("//*[@id=\"root\"]/div[1]/div[1]/div[1]/span/button/span[2]").click()
}

exports.module4_6 = module4_6
describe("Module4-6", () => {
  it("tests Module4-6", module4_6);
});
