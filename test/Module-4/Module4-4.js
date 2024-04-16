require('dotenv').config()
const module4_1 = require("./Module4-1.js")

exports.module4_4 = void 0;

const module4_4 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='ViewHeadlineIcon']").click()
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='TableRowsIcon']").click()
  await browser.$("aria/Độ giãn").click()
  await browser.$("[data-testid='ViewStreamIcon']").click()
}

exports.module4_4 = module4_4
describe("Module4-4", () => {
  it("tests Module4-4", module4_4);
});
