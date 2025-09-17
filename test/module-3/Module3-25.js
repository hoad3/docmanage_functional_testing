require('dotenv').config()

describe("Module 3-25: Thời gian của chỉ số trong Danh sách tất cả chỉ số khoa / phòng", () => {

it("Trả về trang Chỉ số thuộc khoa theo năm", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Thời gian của chỉ số").click()

    const timePage = await browser.$("selector-giao-dien-chỉ-số-khoa-năm")
    expect(await timePage.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
