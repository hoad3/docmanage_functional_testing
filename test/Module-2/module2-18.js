describe("module2-18: Xóa phiên bản hết hiệu lực", () => {
    before( async () =>{
      await module1_6();
    })
  
    it("Xóa phiên bản hết hiệu lực thành công", async () => {
      await browser.url(`${process.env.EXPIRED_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.EXPIRED_REVISION_URL}`)
      await browser.pause(1000)

      await browser.$("[class='btn btn-danger']").click()
      await browser.pause(1000)

      await browser.$("aria/Có").click()

  });
  it("Hiển thị thông báo mã Xóa phiên bản của quy trình thành công",async()=>{
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Xóa phiên bản của quy trình thành công');
    await browser.pause(2000)
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