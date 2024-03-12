require('dotenv').config()

describe('Pentest script Module1-8', () =>{
    let LinkPage1 = `${process.env.WEBSITE_URL}/index-hospital`;
    let OptiomClick = '[type="button"]';
    it('Điều hướng đến Chỉ số bệnh viện từ Dashboard', () =>{

        browser.url(LinkPage1);
//Nhấp vào ô "Tài liệu" của phiên bản hết hiệu lực
        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByVisibleText('Xem chỉ số trong một năm')
        browser.pause(3000);
    })
});