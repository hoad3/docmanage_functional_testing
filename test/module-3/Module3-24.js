require('dotenv').config()

describe("Module 3-24: Xoá chỉ số trong Danh sách tất cả chỉ số khoa / phòng", () => {

it("Xoá chỉ số thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Xoá khoa / phòng").click()
    await browser.$("aria/Có").click()

    const deletedIndicator = await browser.$("aria/Chỉ số cần xoá")
    expect(await deletedIndicator.isExisting()).toEqual(false)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
