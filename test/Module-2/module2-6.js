const path = require('path')
describe("module2-6: Upload nội dung mới cho một tài liệu ", () => {
    before( async () =>{
      await module1_5();
    })
  
    it("Upload nội dung mới cho một tài liệu  thành công", async () => {

      await browser.url(`${process.env.FILE_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.FILE_REVISION_URL}`)
      await browser.$("//*[@data-testid=\"EditIcon\"]").click()
  
      await browser.$("aria/Cập nhật nội dung tài liệu").click()
      await browser.pause(1000);
      const filePath = 'D:/WebDriverIO/docmanage_functional_testing/test/data/Dongchay_Quan8.png'
      const remoteFilePath = await browser.uploadFile(filePath)

      await $('#file').setValue(remoteFilePath)
      await browser.$("aria/Lưu").click()
      await browser.pause(1000);
  
      await browser.$("aria/Lưu thay đổi").click()

  });

  it("Hiển thị thông báo Cập nhật nội dung tài liệu thành công",async()=>{
    //Hiển thị thông báo Thêm mới tài liệu thành công!
    let toast = await browser.$("[class='Toastify__toast-body']");
    await expect(toast).toBeDisplayed({timeout:5000})
    await expect(toast).toHaveText('Cập nhật nội dung tài liệu thành công');
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
    