require('dotenv').config()

describe("Module 3-32: PB chưa phê duyệt trong Chỉ số thuộc khoa theo năm", () => {

it("Đi đến giao diện Quản lý phiên bản đánh giá và mục tiêu năm", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/PB chưa phê duyệt").click()

    const versionPage = await browser.$("selector-quan-ly-phien-ban")
    expect(await versionPage.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
