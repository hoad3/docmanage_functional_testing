require('dotenv').config()

describe("Module 3-42: Upload danh sách trong Chỉ số thuộc khoa theo năm", () => {

it("Tải danh sách năm kết quả Khoa / phòng thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Upload danh sách").setValue("path/to/list.xlsx")
    await browser.$("aria/Lưu").click()

    const uploadedList = await browser.$("aria/2025")
    expect(await uploadedList.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
