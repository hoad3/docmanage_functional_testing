require('dotenv').config()

describe("Module 3-11: Trạng thái khoa / phòng trong chỉ số thời gian theo năm", () => {

it("Đổi trạng thái Áp dụng ↔ Không áp dụng", async () => {
    await module1_12()

    await browser.$("aria/Khoa / phòng").click()
    const toggle = await browser.$("aria/Trạng thái")
    await toggle.click()

    const status = await toggle.getText()
    expect(["Áp dụng","Không áp dụng"]).toContain(status)
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
