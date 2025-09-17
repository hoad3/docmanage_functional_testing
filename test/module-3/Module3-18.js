require('dotenv').config()

describe("Module 3-18: Tải kết quả trong Chỉ số trong 1 năm", () => {

it("Kết quả được tải về dưới dạng file .csv", async () => {
    await module1_11()

    await browser.$("aria/Xem chỉ số trong 1 năm").click()
    await browser.$("aria/Tải kết quả").click()

    const downloaded = await checkFileDownloaded("file1.csv")
    expect(downloaded).toEqual(true)
});

});

async function module1_11() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}

// Helper kiểm tra file đã tải
async function checkFileDownloaded(filename) {
    const fs = require("fs")
    const path = require("path")
    const downloadPath = path.resolve("./downloads", filename)
    return fs.existsSync(downloadPath)
}
