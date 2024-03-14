require('dotenv').config()

exports.login = void 0;
const login = async () => {
    const LinkPage1 = `${process.env.WEBSITE_URL}/login`;
    await browser.setWindowSize(1365, 911)
    await browser.url(LinkPage1)
    await expect(browser).toHaveUrl(LinkPage1)
    await browser.$("aria/Tên tài khoản").click()
    await browser.$("aria/Tên tài khoản").setValue('admin0')
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click();
    //kiểm tra chương trình đã link vào trang chủ

    // await new Promise(r => setTimeout(r, 3000));
}
exports.login = login;


describe('test Script Module11-1', () => {
    it('điều hướng đến trang đăng nhập và đăng nhập thành công với tư cách người dùng quản trị viên', login);

});
