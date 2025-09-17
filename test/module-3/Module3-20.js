require('dotenv').config()

describe("Module 3-20: Hệ thống chỉ số khoa / phòng", () => {

it("Hiển thị giao diện xem Danh sách khoa/ phòng", async () => {
    await module1_14()

    const listView = await browser.$("selector-danh-sach-khoa-phong")
    expect(await listView.isDisplayed()).toEqual(true)
});

});

async function module1_14() {
    await browser.url(`${process.env.LOGIN_URL}`)
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`)
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`)
    await browser.$("aria/Đăng nhập").click()
}
