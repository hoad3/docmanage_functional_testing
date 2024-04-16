require('dotenv').config()
const login = require(".././Module-1/Module1-1.js").login

exports.module4_19 = void 0;

const module4_19 = async () => {
  await browser.setWindowSize(1240, 989)
  await browser.$("[id='basic-nav-dropdown']").click()
  await browser.pause(2000)
  await browser.$("aria/Hệ thống chỉ số bệnh viện").click()
  await browser.pause(2000)
  await browser.$("aria/Chỉ số chất lượng").click()
  await browser.pause(2000)
  await browser.$("aria/Hệ thống chỉ số khoa/ phòng").click()
  await browser.pause(2000)
}

exports.module4_19 = module4_19
describe("Module4-19", () => {
  it("tests Module4-19", module4_19);
});

