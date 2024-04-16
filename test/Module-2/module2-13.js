describe("module2-13: Lấy phiên bản hiệu lực", () => {
    before( async () =>{
      await module1_6();
    })
  
    it("Lấy phiên bản hiệu lực thành công", async () => {
      await browser.url(`${process.env.EXPIRED_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.EXPIRED_REVISION_URL}`)

      await browser.pause(2000)
      
      await browser.$("[class='btn btn-success']").click()
  });

  it("Trình duyệt sẽ điều hướng đến trang Quản lý phiên bản hiệu lực của quy trình đã chọn, với phiên bản vừa chọn được nâng lên trạng thái hiệu lực "
  ,async()=>{
    await expect(browser).toHaveUrl(`${process.env.REVISION_ACTIVE_URL}`); 
    await browser.pause(3000)
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