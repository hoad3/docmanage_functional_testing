require('dotenv').config()

describe('Pentest script Module1-12', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/index-hospital`;
    let OptiomClick = '#basic-nav-dropdown';
    let Botton = '#19';
    let BottonTime = '[data-colindex="4"]';
    it('chuyển hướng đến trang Chỉ số Thời gian điều trị trung bình1 theo năm', () =>{

        browser.url(LinkPage1);
// chọn phần tử trong dropdown list
        $(Botton).selectByAttribute('data-colindex', '4');
        browser.pause(3000);
    });
});