require('dotenv').config()

describe("Module 3-34: Xoá phiên bản công thức", () => {

it("Xoá phiên bản công thức của chỉ số thành công", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/PB chưa phê duyệt").click()
    await browser.$("aria/Xoá").click()

    const deletedVersion = await browser.$("aria/phiên bản cần xoá")
    expect(await deletedVersion.isExisting()).toEqual(false)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
