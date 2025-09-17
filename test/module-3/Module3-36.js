require('dotenv').config()

describe("Module 3-36: Lưu hiệu lực phiên bản công thức", () => {

it("Phiên bản công thức được lưu và biểu đồ thay đổi", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/PB chưa phê duyệt").click()
    await browser.$("aria/Thêm mới").click()
    await browser.$("aria/Mục tiêu").setValue("Mục tiêu lưu")
    await browser.$("aria/Đánh giá").click()
    await browser.$("aria/Lưu hiệu lực").click()

    const savedVersion = await browser.$("aria/Mục tiêu lưu")
    expect(await savedVersion.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
