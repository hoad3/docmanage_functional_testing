require('dotenv').config()
const login = require(".././Module-1/Module1-1.js").login

exports.module4_1 = void 0;

const module4_1 = async () => {
  await browser.setWindowSize(997, 729)
  await browser.$("aria/QUẢN LÝ QUY TRÌNH").click()
}
exports.module4_1 = module4_1
describe("Module4-1", () => {
  it("tests Module4-1", module4_1);
});
