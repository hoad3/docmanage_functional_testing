require('dotenv').config()

describe('Pentest script Module1-11', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/`;
    let OptiomClick = '#basic-nav-dropdown'
    let LinkPage2 = ''
    it('chuyển hướng đến trang hệ thống chỉ số bệnh viện', () =>{

        browser.url(LinkPage1);
// chọn phần tử trong dropdown list
        $(OptiomClick).selectByVisibleText('Hệ thống chỉ số bệnh viện')
        browser.pause(3000);
    });
});