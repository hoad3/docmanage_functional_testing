require('dotenv').config()

describe('Pentest script Module1-5', () =>{
   let LinkPage1 = `${process.env.WEBSITE_URL}/revision-active/HT%20-%20QT%20-%2011_1`
   let OptiomClick = '[data-id="29"]'
   it('Trình duyệt được điều hướng đến trang quản lý tài liệu cho phiên bản được chọn "', () =>{

      browser.url(LinkPage1);
//Nhấp vào ô "Tài liệu" của phiên bản hiệu lực
      $(OptiomClick).waitForDisplayed(5000);
      $(OptiomClick).selectByVisibleText('Tài liệu');
      browser.pause(3000);
   })
});