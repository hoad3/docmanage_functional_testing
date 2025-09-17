require('dotenv').config()

describe("Module 3-38: Thêm mới tài liệu trong Chỉ số thuộc khoa theo năm", () => {

it("Thêm mới tài liệu thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Tài liệu").click()
    await browser.$("aria/Thêm mới tài liệu").click()
    await browser.$("aria/Tải tài liệu lên").setValue("path/to/file.pdf")
    await browser.$("aria/Mô tả").setValue("Tài liệu mới")
    await browser.$("aria/Lưu").click()

    const newDoc = await browser.$("aria/Tài liệu mới")
    expect(await newDoc.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
