require('dotenv').config();

describe("Module 3-3: Xoá chỉ số", () => {

    it("Xoá chỉ số thành công", async () => {
        await module1_11();

        await browser.$("aria/Xoá chỉ số").click();
        // TODO: Kiểm tra hộp thoại xác nhận
        await browser.$("aria/Có").click();

        const successMsg = await browser.$("aria/Xoá chỉ số thành công");
        await expect(successMsg).toBeDisplayed();
    });
});
