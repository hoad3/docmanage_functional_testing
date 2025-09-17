require('dotenv').config();

describe("Module 3-5: Sửa phiên bản chỉ số thời gian theo năm", () => {

  it("Cập nhật phiên bản chỉ số thành công", async () => {
    await module1_12();

    await browser.$("aria/Thời gian").click();
    await browser.$("aria/Sửa phiên bản").click();

    await browser.$("aria/Mục tiêu").setValue("Mục tiêu cập nhật 3-5");
    await browser.$("aria/Đánh giá").setValue("Đánh giá cập nhật");

    await browser.$("aria/Lưu thay đổi").click();
  });
});
