require('dotenv').config()

describe("Module 3-31: Cách đánh giá trong Chỉ số thuộc khoa theo năm", () => {

it("Chuyển đánh giá giữa 'Trung bình' và 'Gần nhất'", async () => {
    await module1_14()

    await browser.$("aria/Xem tất cả chỉ số").click()
    await browser.$("aria/Trung bình").click()

    const evaluation = await browser.$("aria/Gần nhất")
    expect(await evaluation.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
