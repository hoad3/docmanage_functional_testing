require('dotenv').config()
const module4_5 = require("./Module4-5.js")

exports.module4_7 = void 0;

const module4_7 = async () => {
  await browser.setWindowSize(997, 712)
  await browser.$("[aria-label='outlined button group']").click()
}

exports.module4_7 = module4_7
describe("Module4-7", () => {
  it("tests Module4-7", module4_7);
});
