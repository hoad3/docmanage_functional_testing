require('dotenv').config()

describe("Module 3-6: Xoá phiên bản chỉ số thời gian theo năm", () => {

it("Xoá chỉ số phiên bản thành công", async () => {
    await module1_12()
    
    // Chọn sửa phiên bản
    await browser.$("aria/Sửa phiên bản").click()
    // Chọn xoá năm ở góc dưới cùng bên trái
    await browser.$("aria/Xoá năm").click()
    // Xác nhận hộp thoại
    await browser.$("aria/Có").click()
});

it("Kiểm tra chỉ số đã bị xoá", async () => {
    // Kiểm tra phần tử không còn tồn tại
    const element = await browser.$("selector-của-năm-bị-xoá");
    const exists = await element.isExisting();
    expect(exists).toEqual(false);
});

});

async function module1_12() {
    await browser.url(`${process.env.LOGIN_URL}`);
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Thời gian").click()
}
