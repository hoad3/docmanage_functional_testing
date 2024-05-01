describe("module2-12: Thêm phiên bản hiệu lực cho quy trình", () => {
    before( async () =>{
      await module1_6();
    })
  
    it("Thêm phiên bản hiệu lực cho quy trình thành công", async () => {
      await browser.url(`${process.env.EXPIRED_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.EXPIRED_REVISION_URL}`)

      await browser.$("aria/Thêm mới").click()
    
      await browser.$("[name='revisionNumber']").click()
      await browser.$("[name='revisionNumber']").setValue("20")
      await browser.$("[data-testid='CalendarIcon']").click()
      await browser.$("aria/25").click()
      await browser.$("[name='note']").click()
      await browser.$("[name='note']").setValue("test")
      await browser.$("aria/Chọn phiên bản này hiện hành!").click()

    
    await browser.$("aria/Lưu").click()

  });

  it("Hiển thị thông báo Thêm mới phiên bản thành công!",async()=>{
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Thêm mới phiên bản thành công!');
});
  });

async function module1_6() {
    await browser.url(`${process.env.LOGIN_URL}`);
    await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}`); 
    await browser.$("aria/Tên tài khoản").click()
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Quy trình").click()
    await browser.$("//*[@data-testid=\"FolderIcon\"]").click()
    await browser.$("//*[@data-testid=\"FolderOffIcon\"]").click()
  }