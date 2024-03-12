require('dotenv').config()

describe('Pentest script Module1-9', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/index-hospital`;
    let inputyear = '#search-bar';
    let OptiomClick = '[type="button"]';
    it('Trình duyệt được điều hướng đến trang Danh sách chỉ số bệnh viện của năm được chọn', () =>{

        browser.url(LinkPage1);
//Nhấp vào ô "Tài liệu" của phiên bản hết hiệu lực
        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByVisibleText('Xem chỉ số trong một năm');
        browser.pause(3000);

        // điền vào ô năm
        $(inputyear).setValue('2023');

        browser.pause(3000);

    })
});