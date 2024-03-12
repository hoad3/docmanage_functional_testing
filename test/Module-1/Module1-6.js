require('dotenv').config()

describe('Pentest script Module1-6', () =>{
    let LinkPage1 = `${process.env.WEBSITE_URL}/category-folder/1`;
    let OptiomClick = '[data-id="HT - QT - 11"]'
    it('Điều hướng đến "Quản lý phiên bản hết hiệu lực"', () =>{

        browser.url(LinkPage1);
//Nhấp vào ô "Tài liệu" của phiên bản hết hiệu lực
        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByIndex(5)
        browser.pause(3000);
    })
});