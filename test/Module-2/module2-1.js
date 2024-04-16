require('dotenv').config()
describe("Module 2-1: Tải xuống một tài liệu bất kỳ", () => {

it("Tải xuống tài liệu thành công", async () => {
    await module1_5()
    
    //Nhấn nút tải tài liệu
    await browser.$("[class='btn btn-success']").click()
    //Nhấn nút tải file trong modal 
    await browser.$("aria/Tải file").click()

   
    });

    it("Kiểm tra file tồn tại trong đường dẫn",async()=>{
      const fs = require('fs');
      //Đường dẫn lưu file 
      const filePath = 'C:/Users/thanh ha/Downloads';
      const fileExists = fs.existsSync(filePath);
  
      // Tìm thấy file đã tải trong filePath 
      expect(fileExists).toEqual(true);
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




  