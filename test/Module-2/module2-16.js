describe("module2-16: Sửa Note của phiên bản hiệu lực", () => {
    before( async () =>{
      await module1_4();
    })
  
    it("Sửa Note của phiên bản hiệu lực thành công", async () => {
      await browser.url(`${process.env.REVISION_ACTIVE_URL}`)
      await expect(browser).toHaveUrl(`${process.env.REVISION_ACTIVE_URL}`)
      await browser.pause(1000)

      await browser.$("[class='btn btn-warning']").click()
      await browser.pause(1000)

      await browser.$("[name='note']").doubleClick();
      await browser.pause(1000)
  
      //Nhấn backspace để xóa 
      await browser.keys('\uE003');

      await browser.$("[name='note']").setValue("note123")
      await browser.$("[name='note']").click()

      await browser.$("aria/Lưu thay đổi").click()

    
  });
  it("Hiển thị thông báo mã Cập nhật thông tin phiên bản thành công",async()=>{
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Cập nhật thông tin phiên bản thành công');
    await browser.pause(2000)
});
  
  });

async function module1_4() {
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
  }