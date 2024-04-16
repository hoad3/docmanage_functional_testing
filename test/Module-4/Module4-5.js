require('dotenv').config()
const login = require(".././Module-1/Module1-1.js").login

exports.module4_5 = void 0;

const module4_5 = async () => {
  await browser.$("aria/CHỈ SỐ CHẤT LƯỢNG").click()
}
exports.module4_5 = module4_5
describe("Module4-5", () => {
  it("tests Module4-5",  module4_5);
});
