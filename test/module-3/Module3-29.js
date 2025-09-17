require('dotenv').config()

describe("Module 3-29: Xoá các kết quả trong Chỉ số thuộc khoa theo năm", () => {

it("Xoá kết quả thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Kết quả Q3").click()
    await browser.$("aria/Xoá kết quả").click()

    const deletedResult = await browser.$("aria/Kết quả Q3")
    expect(await deletedResult.isExisting()).toEqual(false)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
