require('dotenv').config()
const module4_14 = require("./Module4-14.js")

exports.module4_18 = void 0;

const module4_18 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='ViewHeadlineIcon']").click()
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='TableRowsIcon']").click()
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='ViewStreamIcon']").click()
}

exports.module4_18 = module4_18
describe("Module4-18", () => {
  it("tests Module4-18", module4_18);
});