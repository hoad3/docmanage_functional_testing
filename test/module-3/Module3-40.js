require('dotenv').config()

describe("Module 3-40: Tải tài liệu trong Chỉ số thuộc khoa theo năm", () => {

it("Tài liệu được tải về máy", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Tài liệu").click()
    await browser.$("aria/Tải tài liệu").click()
    await browser.$("aria/Tải file").click()

    // Kiểm tra file download (ví dụ kiểm tra tồn tại file)
    const fs = require('fs')
    const fileExists = fs.existsSync('downloads/file.pdf')
    expect(fileExists).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
