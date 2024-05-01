require('dotenv').config()
const module4_14 = require("./Module4-14.js")

exports.module4_17 = void 0;

const module4_17 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("aria/Hiển thị bộ lọc").click()
  await browser.$("[class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl  css-o3ukdw']").click()
  await browser.pause(1000);
  await browser.$("[value='criteria']").click()
  await browser.pause(1000);
  await browser.$("[class='MuiNativeSelect-select MuiNativeSelect-standard MuiInputBase-input MuiInput-input css-1vynybe']").click()
  await browser.pause(1000);
  await browser.$("[value='isEmpty']").click()
  await browser.pause(1000);
  await browser.$("[class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl  css-o3ukdw']").click()
  await browser.pause(1000);
  await browser.$("[value='criteria']").click()
  await browser.$("[class='MuiNativeSelect-select MuiNativeSelect-standard MuiInputBase-input MuiInput-input css-1vynybe']").click()
  await browser.pause(1000);
  await browser.$("[value='isNotEmpty']").click()
}

exports.module4_17 = module4_17
describe("Module4-17", () => {
  it("tests Module4-17", module4_17);
});
