require('dotenv').config()

describe("Module 3-21: Xem tất cả chỉ số trong Hệ thống chỉ số khoa / phòng", () => {

it("Hiển thị tất cả các chỉ số", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()

    const allIndicators = await browser.$("selector-tat-ca-chi-so")
    expect(await allIndicators.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
