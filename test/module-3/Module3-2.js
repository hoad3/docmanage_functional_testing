require('dotenv').config();

describe("Module 3-2: Sửa chỉ số", () => {

    it("Cập nhật chỉ số thành công", async () => {
        await module1_11();

        await browser.$("aria/Sửa chỉ số").click();
        await browser.$("aria/Tên chỉ số").setValue("Chỉ số sửa");
        await browser.$("aria/Đơn vị tính").setValue("Đơn vị sửa");
        await browser.$("aria/Lưu thay đổi").click();

        const successMsg = await browser.$("aria/Cập nhật thông tin chỉ số thành công");
        await expect(successMsg).toBeDisplayed();
    });
});
