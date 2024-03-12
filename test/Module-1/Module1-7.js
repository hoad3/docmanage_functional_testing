require('dotenv').config()

describe('Pentest script Module1-7', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/`;
    let OptiomClick = '#basic-nav-dropdown'
    it('Điều hướng đến Dashboard của Chỉ số bệnh viện', () =>{

        browser.url(LinkPage1);
//Nhấp vào ô "Tài liệu" của phiên bản hết hiệu lực
        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByVisibleText('Hệ thống chỉ số bệnh viện')
        browser.pause(3000);
    })
});