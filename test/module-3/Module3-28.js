require('dotenv').config()

describe("Module 3-28: Thêm các kết quả khác trong Chỉ số thuộc khoa theo năm", () => {

it("Cập nhật kết quả thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Kết quả Q2").click()
    await browser.$("aria/Kết quả").setValue("90")
    await browser.$("aria/Lưu thay đổi").click()

    const newResult = await browser.$("aria/90")
    expect(await newResult.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
