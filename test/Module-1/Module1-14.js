require('dotenv').config()

describe('Pentest script Module1-14', () =>{
    let LinkPage1 = `${process.env.WEBSITE_URL}/department-index`;
    let OptionClick = '[type="button"]';
    it('Điều hướng đến trang xem tất cả chỉ số khoa phòng', () =>{

        browser.url(LinkPage1);
// chọn phần tử trong dropdown list
        $(OptionClick).selectByVisibleText('Xem tất cả chỉ số');
        browser.pause(3000);

    });
});