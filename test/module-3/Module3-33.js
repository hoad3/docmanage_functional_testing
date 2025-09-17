require('dotenv').config()

describe("Module 3-33: Thêm mới phiên bản công thức", () => {

it("Thêm mới phiên bản thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/PB chưa phê duyệt").click()
    await browser.$("aria/Thêm mới").click()
    await browser.$("aria/Mục tiêu").setValue("Mục tiêu mới")
    await browser.$("aria/Đánh giá").click()
    await browser.$("aria/Lưu").click()

    const newVersion = await browser.$("aria/Mục tiêu mới")
    expect(await newVersion.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
