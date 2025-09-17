require('dotenv').config()

describe("Module 3-10: Xoá kết quả khoa / phòng trong chỉ số thời gian theo năm", () => {

it("Xoá kết quả thành công", async () => {
    await module1_12()

    await browser.$("aria/Khoa / phòng").click()
    await browser.$("aria/Kết quả Q1").click()
    await browser.$("aria/Xoá kết quả").click()

    const result = await browser.$("aria/Kết quả Q1")
    expect(await result.isExisting()).toEqual(false)
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
