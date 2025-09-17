require('dotenv').config();

describe("Module 3-4: Thêm chỉ số thời gian theo năm", () => {

  it("Thêm chỉ số theo năm thành công", async () => {
    await module1_12();

    await browser.$("aria/Thời gian").click();
    await browser.$("aria/Thêm mới năm").click();

    await browser.$("aria/Năm").setValue("2025");
    await browser.$("aria/Mục tiêu").setValue("Mục tiêu test");
    await browser.$("aria/Đánh giá").setValue("Đánh giá test");

    await browser.$("aria/Lưu").click();
  });
});

async function module1_12() {
  await browser.url(`${process.env.LOGIN_URL}`);
  await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
  await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
  await browser.$("aria/Đăng nhập").click();
  await browser.$("aria/Quy trình").click();
  await browser.$("aria/Danh sách chỉ số").click();
}
