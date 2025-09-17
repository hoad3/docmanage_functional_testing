require('dotenv').config()

describe("Module 3-13: Upload danh sách khoa / phòng trong chỉ số thời gian theo năm", () => {

it("Tải danh sách kết quả khoa / phòng thành công", async () => {
    await module1_12()

    await browser.$("aria/Upload danh sách").click()
    const fileInput = await browser.$("input[type='file']")
    await fileInput.setValue("/path/to/file.xlsx")
    await browser.$("aria/Lưu").click()

    const notification = await browser.$("selector-thông-báo-thành-công")
    expect(await notification.isDisplayed()).toEqual(true)
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
