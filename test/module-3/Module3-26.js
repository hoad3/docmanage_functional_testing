require('dotenv').config()

describe("Module 3-26: Thêm năm trong Chỉ số thuộc khoa theo năm", () => {

it("Thêm mới năm của chỉ số thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Thêm mới năm").click()
    await browser.$("aria/Năm").setValue("2025")
    await browser.$("aria/Kết quả").setValue("95")
    await browser.$("aria/Lưu").click()

    const newYear = await browser.$("aria/2025")
    expect(await newYear.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
