require('dotenv').config()

describe("Module 3-35: Lấy phiên bản hiệu lực", () => {

it("Biểu đồ có sự thay đổi", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/PB chưa phê duyệt").click()
    await browser.$("aria/Lấy phiên bản hiệu lực").click()

    const chart = await browser.$("selector-bieu-do")
    expect(await chart.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
