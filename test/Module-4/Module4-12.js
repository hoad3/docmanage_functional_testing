require('dotenv').config()
const module4_5 = require("./Module4-5.js")

exports.module4_12 = void 0;

const module4_12 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("//*[@id=\"root\"]/div[1]/div[1]/div[2]/div[1]/div[3]/button").click()
  await browser.pause(1000)
}

exports.module4_12 = module4_12
describe("Module4-12", () => {
  it("tests Module4-12", module4_12);
});
