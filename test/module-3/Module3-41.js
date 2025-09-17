require('dotenv').config()

describe("Module 3-41: Xoá tài liệu trong Chỉ số thuộc khoa theo năm", () => {

it("Xoá tài liệu thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Tài liệu").click()
    await browser.$("aria/Sửa quy trình").click()
    await browser.$("aria/Xoá tài liệu").click()

    const deletedDoc = await browser.$("aria/Tài liệu đã xoá")
    expect(await deletedDoc.isExisting()).toEqual(false)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
