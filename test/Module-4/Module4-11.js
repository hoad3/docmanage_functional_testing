require('dotenv').config()
const module4_7 = require("./Module4-7.js")

exports.module4_11 = void 0;

const module4_11 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='ViewHeadlineIcon']").click()
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='TableRowsIcon']").click()
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='ViewStreamIcon']").click()
}

exports.module4_11 = module4_11
describe("Module4-11", () => {
  it("tests Module4-11", module4_11);
});