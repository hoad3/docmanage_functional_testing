describe("module2-22: Xóa quy trình", () => {
    before( async () =>{
      await module1_3();
    })
  
    it("Xóa quy trình thành công", async () => {
      await browser.url(`${process.env.CATEGORY_FOLDER_URL}`)
      await expect(browser).toHaveUrl(`${process.env.CATEGORY_FOLDER_URL}`)
      await browser.pause(1000)

      await browser.$("[class='btn btn-danger']").click()
      await browser.pause(1000)

      await browser.$("aria/Có").click()

  });
  it("Hiển thị thông báo mã Xóa quy trình thành công",async()=>{
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Xóa quy trình thành công');
    await browser.pause(2000)
});
  
  });

  async function module1_3() {
    await browser.url(`${process.env.LOGIN_URL}`);
    await expect(browser).toHaveUrl(`${process.env.LOGIN_URL}`); 
    await browser.$("aria/Tên tài khoản").click()
    await browser.$("aria/Tên tài khoản").setValue(`${process.env.WEBSITE_USERNAME}`);
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue(`${process.env.PASSWORD}`);
    await browser.$("aria/Đăng nhập").click()
    await browser.$("aria/Quy trình").click()
    await browser.$("//*[@data-testid=\"FolderIcon\"]").click()
  }