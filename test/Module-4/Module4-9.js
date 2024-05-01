require('dotenv').config()
const module4_7 = require("./Module4-7.js")

exports.module4_9 = void 0;

const module4_9 = async () => {
  await browser.setWindowSize(1244, 989)
  await browser.$("aria/Chọn cột").click()
  await browser.$("[name='__check__'").click()
  await browser.$("[name='__check__'").click()
  await browser.$("[name='statName']").click()
  await browser.$("[name='statName']").click()
  await browser.$("[name='effectiveYear']").click()
  await browser.$("[name='effectiveYear']").click()
  await browser.$("[name='formula']").click()
  await browser.$("[name='formula']").click()
  await browser.$("[name='criteria']").click()
  await browser.$("[name='criteria']").click()
  await browser.$("[name='yearResult']").click()
  await browser.$("[name='yearResult']").click()
  await browser.$("[name='average']").click()
  await browser.$("[name='average']").click()
  await browser.$("[name='firstQuarterResult']").click()
  await browser.$("[name='firstQuarterResult']").click()
  await browser.$("[name='secondQuarterResult']").click()
  await browser.$("[name='secondQuarterResult']").click()
  await browser.$("[name='thirdQuarterResult']").click()
  await browser.$("[name='thirdQuarterResult']").click()
  await browser.$("[name='fourthQuarterResult']").click()
  await browser.$("[name='fourthQuarterResult']").click()
  await browser.$("[name='Khoa/phòng']").click()
  await browser.$("[name='Khoa/phòng']").click()
  await browser.$("[name='joinMode']").click()
  await browser.$("[name='joinMode']").click()
  await browser.$("[name='Sửa']").click()
  await browser.$("[name='Sửa']").click()
  await browser.$("aria/Ẩn tất cả").click()
  await browser.$("aria/Hiện tất cả").click()
}

exports.module4_9 = module4_9
describe("Module4-9", () => {
  it("tests Module4-9", module4_9);
});

