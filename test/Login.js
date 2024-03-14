require('dotenv').config()

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = void 0;
const login = async () => {
    const LinkPage1 = `${process.env.WEBSITE_URL}/login`;
    await browser.setWindowSize(1365, 911)
    await browser.url(LinkPage1)
    await expect(browser).toHaveUrl(LinkPage1)
    await browser.$("aria/Tên tài khoản").click()
    await browser.$("aria/Tên tài khoản").setValue("admin0")
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue("matkhauadmin123")
    await browser.$("aria/Đăng nhập").click()

    browser.pause(5000)
}
exports.login = login;
