require('dotenv').config()

describe("Module 3-27: Sửa kết quả trong Chỉ số thuộc khoa theo năm", () => {

it("Cập nhật kết quả thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Kết quả Q1").click()
    await browser.$("aria/Kết quả").setValue("98")
    await browser.$("aria/Lưu thay đổi").click()

    const updatedResult = await browser.$("aria/98")
    expect(await updatedResult.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
