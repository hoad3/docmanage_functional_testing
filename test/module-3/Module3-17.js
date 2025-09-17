require('dotenv').config()

describe("Module 3-17: Chỉ số trong nhiều năm trong Danh sách chỉ số bệnh viện", () => {

it("Hiển thị Biểu đồ chỉ số bệnh viện", async () => {
    await module1_11()

    await browser.$("aria/Xem chỉ số trong nhiều năm").click()

    const chart = await browser.$("selector-biểu-đồ-bệnh-viện")
    expect(await chart.isDisplayed()).toEqual(true)
});

});

async function module1_11() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
