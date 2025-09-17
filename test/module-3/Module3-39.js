require('dotenv').config()

describe("Module 3-39: Sửa tài liệu trong Chỉ số thuộc khoa theo năm", () => {

it("Cập nhật thông tin tài liệu thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Tài liệu").click()
    await browser.$("aria/Sửa quy trình").click()
    await browser.$("aria/Mô tả").setValue("Mô tả sửa")
    await browser.$("aria/Note").setValue("Note sửa")
    await browser.$("aria/Lưu thay đổi").click()

    const updatedDoc = await browser.$("aria/Mô tả sửa")
    expect(await updatedDoc.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
