require('dotenv').config()
const module4_12 = require("./Module4-12.js")

exports.module4_14 = void 0;

const module4_14 = async () => {
  await browser.setWindowSize(1240, 989)
  await browser.$("//*[@id=\"root\"]/div[1]/div[1]/div[2]/div[1]/div[2]/div/button").click()
  await browser.pause(2000)
}

exports.module4_14 = module4_14
describe("Module4-14", () => {
  it("tests Module4-14", module4_14);
});

