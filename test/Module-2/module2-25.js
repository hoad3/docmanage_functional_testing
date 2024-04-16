describe("module2-25: Xóa tham chiếu", () => {
    before( async () =>{
      await module1_3();
    })
  
    it("Xóa tham chiếu thành công", async () => {
      await browser.url(`${process.env.CATEGORY_FOLDER_URL}`)
      await expect(browser).toHaveUrl(`${process.env.CATEGORY_FOLDER_URL}`)
      await browser.pause(1000)

      await browser.$("//*[@data-testid=\"SignalCellularNoSimOutlinedIcon\"]").click()
      await browser.pause(1000)
      await browser.$("[type='text']").click()
      await browser.pause(1000)
      await browser.$("#controllable-states-demo-option-1").click()

      
      await browser.$("[class='btn btn-primary']").click()
      

  });
  it("Hiển thị thông báo mã Xóa tham chiếu quy trình thành công",async()=>{
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Xóa tham chiếu quy trình thành công');
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