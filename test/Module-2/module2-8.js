describe("module2-8: Xóa tài liệu", () => {
    before( async () =>{
      await module1_5();
    })
  
    it("Xóa tài liệu thành công", async () => {
      await browser.url(`${process.env.FILE_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.FILE_REVISION_URL}`)

      await browser.$("[class='btn btn-danger']").click()
      await browser.pause(3000);
      await browser.$("aria/Có").click()
      await browser.pause(3000);
  
      //Hiển thị thông báo xóa thành công
      let toast = '[class="Toastify__toast Toastify__toast-theme--light Toastify__toast--success"]';
      expect(toast).toBeDisplayed(true);
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
    