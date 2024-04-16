require('dotenv').config()
const module4_1 = require("./Module4-1.js")

exports.module4_2 = void 0;

const module4_2 = async () => {
  await browser.setWindowSize(997, 729)
  await browser.$("aria/Chọn cột").click()
  await browser.$("[name='__check__']").click()
  await browser.$("[name='__check__']").click()
  await browser.$("[name='stt']").click()
  await browser.$("[name='stt']").click()
  await browser.$("[name='categoryName']").click()
  await browser.$("[name='categoryName']").click()
  await browser.$("[name='Quy trình']").click()
  await browser.$("[name='Quy trình']").click()
  await browser.$("[name='folderCount']").click()
  await browser.$("[name='folderCount']").click()
  await browser.$("[name='Người dùng']").click()
  await browser.$("[name='Người dùng']").click()
  await browser.$("[name='Sửa']").click()
  await browser.$("[name='Sửa']").click()
  await browser.$("[name='Xóa']").click()
  await browser.$("[name='Xóa']").click()
  await browser.$("aria/Ẩn tất cả").click()
  await browser.$("aria/Hiện tất cả").click()
}

exports.module4_2 = module4_2
describe("Module4-2", () => {
  it("tests Module4-2", module4_2);
});
