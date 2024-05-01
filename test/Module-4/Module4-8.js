require('dotenv').config()
const module4_7 = require("./Module4-7.js")

exports.module4_8 = void 0;

const module4_8 = async () => {
  await browser.setWindowSize(997, 729)
  await browser.$("//*[@id=\"root\"]/div[1]/div[2]/div[1]/div/div/span/button/span[2]").click()
}

exports.module4_8 = module4_8
describe("Module4-8", () => {
  it("tests Module4-8", module4_8);
});
