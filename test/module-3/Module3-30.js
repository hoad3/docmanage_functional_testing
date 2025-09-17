require('dotenv').config()

describe("Module 3-30: Xoá năm trong Chỉ số thuộc khoa theo năm", () => {

it("Xoá năm chỉ số thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Xoá phiên bản").click()
    await browser.$("aria/Có").click()

    const deletedYear = await browser.$("aria/2025")
    expect(await deletedYear.isExisting()).toEqual(false)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
