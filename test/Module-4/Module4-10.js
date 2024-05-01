require('dotenv').config()
const module4_7 = require("./Module4-7.js")

exports.module4_10 = void 0;

const module4_10 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("aria/Hiển thị bộ lọc").click()
  await browser.$("[class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl  css-o3ukdw']").click()
  await browser.pause(5000);
  await browser.$("[value='criteria']").click()
  await browser.pause(5000);
  await browser.$("[class='MuiNativeSelect-select MuiNativeSelect-standard MuiInputBase-input MuiInput-input css-1vynybe']").click()
  await browser.pause(5000);
  await browser.$("[value='isEmpty']").click()
  await browser.pause(5000);
  await browser.$("[class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl  css-o3ukdw']").click()
  await browser.pause(5000);
  await browser.$("[value='criteria']").click()
  await browser.$("[class='MuiNativeSelect-select MuiNativeSelect-standard MuiInputBase-input MuiInput-input css-1vynybe']").click()
  await browser.pause(5000);
  await browser.$("[value='isNotEmpty']").click()
}

exports.module4_10 = module4_10
describe("Module4-10", () => {
  it("tests Module4-10", module4_10);
});
