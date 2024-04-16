
describe("module2-10:Thêm tài liệu (trùng mã tài liệu)", () => {
    before( async () =>{
      await module1_5();
    })
  
    it("Thêm tài liệu (trùng mã tài liệu) không thành công", async () => {
      await browser.url(`${process.env.FILE_REVISION_URL}`)
      await expect(browser).toHaveUrl(`${process.env.FILE_REVISION_URL}`)

      await browser.$("aria/Thêm mới").click()
      
      await browser.$("[name='fileId']").click()
      await browser.$("[name='fileId']").setValue("TL-01")
      await browser.$("[name='revisionNumber']").click()
      await browser.$("[name='revisionNumber']").setValue("1")
      await browser.$("[data-testid='CalendarIcon']").click()
      await browser.$("aria/25").click()
      await browser.$("[name='note']").click()
      await browser.$("[name='note']").setValue("test")


    const filePath = 'D:/WebDriverIO/docmanage_functional_testing/test/data/Dongchay_Quan8.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await $('#file').setValue(remoteFilePath)

    await browser.$("aria/Lưu").click()
  
    
  })
  
  it("Hiển thị thông báo mã tài liệu đã tồn tại!",async()=>{
      //Hiển thị thông báo Mã tài liệu đã tồn tại!
      let toast = await browser.$("[class='Toastify__toast-body']");
      await expect(toast).toBeDisplayed({timeout:5000})
      await expect(toast).toHaveText('Mã tài liệu đã tồn tại!');
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
    