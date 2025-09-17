require('dotenv').config()

describe("Module 3-44: Xem chỉ số trong nhiều năm trong Hệ thống chỉ số khoa / phòng", () => {

it("Kết quả được tải về dưới dạng file .csv", async () => {
    await module1_13()

    await browser.$("aria/Xem chỉ số trong nhiều năm").click()
    await browser.$("aria/Tải kết quả").click()

    const fs = require('fs')
    const fileExists = fs.existsSync('downloads/result_multi_year.csv')
    expect(fileExists).toEqual(true)
});

});

async function module1_13() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
