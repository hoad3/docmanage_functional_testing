require('dotenv').config()

describe("Module 3-23: Sửa chỉ số trong Danh sách tất cả chỉ số khoa / phòng", () => {

it("Cập nhật thông tin chỉ số thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Sửa khoa / phòng").click()
    await browser.$("aria/Tên chỉ số").setValue("Chỉ số sửa")
    await browser.$("aria/Đơn vị tính").setValue("Đơn vị sửa")
    await browser.$("aria/Lưu thay đổi").click()

    const updatedIndicator = await browser.$("aria/Chỉ số sửa")
    expect(await updatedIndicator.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
