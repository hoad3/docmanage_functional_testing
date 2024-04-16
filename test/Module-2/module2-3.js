describe("module2-3: Chỉnh sửa lần soát xét của một tài liệu", () => {
  before( async () =>{
    await module1_5();
  })


  it("Chỉnh sửa lần soát xét của một tài liệu thành công", async () => {
      await browser.url(`${process.env.FILE_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.FILE_REVISION_URL}`)
      await browser.$("//*[@data-testid=\"EditIcon\"]").click()
  
      await browser.$("[name='revisionNumber']").doubleClick();
      await browser.pause(1000)
  
      //Nhấn backspace để xóa số lần soát xét trước đó 
      await browser.keys('\uE003');

      await browser.$("[name='revisionNumber']").setValue("30")
      await browser.$("[name='revisionNumber']").click()

      await browser.$("aria/Lưu thay đổi").click()
      await browser.pause(1000)
      await browser.$("aria/Lưu thay đổi").click()
    });

    it("Hiển thị thông báo Cập nhật thông tin tài liệu thành công",async()=>{
      let toast = await browser.$("[class='Toastify__toast-body']");
      await expect(toast).toBeDisplayed({timeout:5000})
      await expect(toast).toHaveText('Cập nhật thông tin tài liệu thành công');
    });
  });
  
  async function module1_5() {
    await browser.url(`${process.env.LOGIN_URL}`);
    await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}`); 
    await browser.$("aria/Tên tài khoản").click()
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Quy trình").click()
    await browser.$("//*[@data-testid=\"FolderIcon\"]").click()
    await browser.$("//*[@data-testid=\"FolderOpenIcon\"]").click()
    await browser.$("//*[@data-testid=\"DescriptionIcon\"]").click()
  }
  