require('dotenv').config()

describe('Pentest script Module1-13', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/`;
    let OptiomClick = '#basic-nav-dropdown';
    it('chuyển hướng đến trang hệ thống chỉ số khoa phòng', () =>{

        browser.url(LinkPage1);
// chọn phần tử trong dropdown list
        $(OptiomClick).selectByVisibleText('Hệ thống chỉ số khoa/ phòng');
        browser.pause(3000);
    });
});