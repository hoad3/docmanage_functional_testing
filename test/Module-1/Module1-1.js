require('dotenv').config();

exports.login = void 0;
const login = async () => {
    const LinkPage1 = `${process.env.LOGIN_URL}`;
    await browser.setWindowSize(1365, 911)
    await browser.url(LinkPage1)
    await expect(browser).toHaveUrl(LinkPage1)

    // chỉnh sửa lại phần login

    await browser.$("[type='text']").click()
    await browser.$("[type='text']").setValue('admin0')
    await browser.$("[type='password']").click()
    await browser.$("[type='password']").setValue( `${process.env.PASSWORD}`)
    await browser.$("[class='btn btn-primary']").click();

}
exports.login = login;


describe('test Script Module1-1', () => {
    it('điều hướng đến trang đăng nhập và đăng nhập thành công với tư cách người dùng quản trị viên', login);

});
