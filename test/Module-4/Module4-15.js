require('dotenv').config()
const module4_14 = require("./Module4-14.js")

exports.module4_15 = void 0;

const module4_15 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("//*[@id=\"root\"]/div[1]/div[2]/div[1]/div/div/span/button/span[2]").click()
  await browser.pause(2000)
}


exports.module4_15 = module4_15
describe("Module4-15", () => {
  it("tests Module4-15", module4_15);
});
