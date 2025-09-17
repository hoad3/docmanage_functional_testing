require('dotenv').config()

describe("Module 3-7: Khoa / phòng trong chỉ số thời gian theo năm", () => {

it("Hiển thị giao diện chỉ số khoa / phòng theo năm", async () => {
    await module1_12()
    await browser.$("aria/Khoa / phòng").click()
    
    const header = await browser.$("selector-giao-diện-khoa-phòng");
    expect(await header.isDisplayed()).toEqual(true);
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`);
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
