require('dotenv').config();

describe("Module 3-1: Thêm chỉ số", () => {

    it("Thêm chỉ số mới thành công", async () => {
        await module1_11(); // Hoàn thành module tiền đề

        // Nhấn vào "Thêm mới chỉ số"
        await browser.$("aria/Thêm mới chỉ số").click();

        // Nhập tên chỉ số và đơn vị tính
        await browser.$("aria/Tên chỉ số").setValue("Chỉ số mẫu");
        await browser.$("aria/Đơn vị tính").setValue("Cái");

        // Nhấn lưu
        await browser.$("aria/Lưu").click();

        // Kiểm tra thông báo thành công
        const successMsg = await browser.$("aria/Chỉ số mới được thêm thành công");
        await expect(successMsg).toBeDisplayed();
    });
});

async function module1_11() {
    await browser.url(`${process.env.LOGIN_URL}`);
    await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}`);

    await browser.$("aria/Tên tài khoản").click();
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
    await browser.$("aria/Password").click();
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
    await browser.$("aria/Đăng nhập").click();

    // Chuyển đến Module1-11
    await browser.$("aria/Quy trình").click();
    await browser.$("aria/Module1-11").click();
}
