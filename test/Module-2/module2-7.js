describe("module2-7: Chỉnh sửa quyền hạn của một tài liệu", () => {
    before( async () =>{
      await module1_5();
    })
  
    it("Chỉnh sửa quyền hạn của một tài liệu thành công", async () => {
      await browser.url(`${process.env.FILE_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.FILE_REVISION_URL}`)

      await browser.$("[class='me-1 ']").click()
      await browser.pause(3000);
     
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
    