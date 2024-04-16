describe("module2-19: Tạo quy trình mới (không trùng mã quy trình)", () => {
    before( async () =>{
      await module1_3();
    })
  
    it("Tạo quy trình mới (không trùng mã quy trình) thành công", async () => {
      await browser.url(`${process.env.CATEGORY_FOLDER_URL}`)
      await expect(browser).toHaveUrl(`${process.env.CATEGORY_FOLDER_URL}`)
      await browser.pause(1000)

      await browser.$("aria/Thêm mới").click()
      await browser.pause(1000)

      await browser.$("[placeholder='Nhập mã quy trình']").click()
      await browser.$("[placeholder='Nhập mã quy trình']").setValue("TEST-02")
      await browser.pause(1000)
      
      await browser.$("[placeholder='Nhập tên quy trình']").click()
      await browser.$("[placeholder='Nhập tên quy trình']").setValue("Quy trình test")
      await browser.pause(1000)

      await browser.$("aria/Lưu").click()

  });
  it("Hiển thị thông báo mã Thêm mới quy trình thành công!",async()=>{
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Thêm mới quy trình thành công!');
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