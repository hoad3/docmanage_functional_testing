require('dotenv').config()

describe("Module 3-22: Thêm chỉ số trong Danh sách tất cả chỉ số khoa / phòng", () => {

it("Thêm mới chỉ số thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Thêm mới chỉ số").click()
    await browser.$("aria/Tên chỉ số").setValue("Chỉ số mới")
    await browser.$("aria/Khoa phòng").setValue("Khoa A")
    await browser.$("aria/Đơn vị tính").setValue("Đơn vị X")
    await browser.$("aria/Lưu").click()

    const newIndicator = await browser.$("aria/Chỉ số mới")
    expect(await newIndicator.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
