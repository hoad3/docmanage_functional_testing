require('dotenv').config()

describe("Module 3-37: Tài liệu trong Chỉ số thuộc khoa theo năm", () => {

it("Đi đến giao diện Quản lý tài liệu chỉ số thuộc năm", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Tài liệu").click()

    const docPage = await browser.$("selector-quan-ly-tai-lieu")
    expect(await docPage.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
