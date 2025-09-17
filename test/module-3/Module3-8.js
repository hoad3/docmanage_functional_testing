require('dotenv').config()

describe("Module 3-8: Thêm kết quả khoa / phòng trong chỉ số thời gian theo năm", () => {

it("Cập nhật kết quả thành công", async () => {
    await module1_12()

    await browser.$("aria/Khoa / phòng").click()
    await browser.$("aria/Kết quả Q1").setValue("100") // ví dụ nhập số
    await browser.$("aria/Lưu").click()

    const result = await browser.$("aria/Kết quả Q1")
    expect(await result.getValue()).toEqual("100")
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
