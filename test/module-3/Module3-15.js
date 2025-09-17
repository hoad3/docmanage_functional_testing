require('dotenv').config()

describe("Module 3-15: Trở về trong chỉ số thời gian theo năm", () => {

it("Trở về giao diện Thời gian chỉ số bệnh viện", async () => {
    await module1_12()

    await browser.$("aria/Trở về trong danh sách chỉ số thời gian theo năm").click()

    const header = await browser.$("selector-giao-diện-thời-gian-bệnh-viện")
    expect(await header.isDisplayed()).toEqual(true)
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
