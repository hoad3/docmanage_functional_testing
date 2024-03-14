require('dotenv').config()

describe('test script Module1-15', () =>{
    let LinkPage1 = `${process.env.WEBSITE_URL}/department-index`;
    let OptionClick = '[type="button"]';
    let inputyear = '#search-bar';
    let Enter = '[button[type="submit"]]';
    it('Xem biểu đồ chỉ số khoa phòng trong một năm', () =>{

        browser.url(LinkPage1);
// chọn phần tử trong dropdown list
        $(OptionClick).selectByVisibleText('Xem chỉ số trong một năm');
        browser.pause(3000);
//nhập vào giá trị
        $(inputyear).setValue('2023');
        browser.pause(3000);

        $(Enter).click();

        browser.pause(3000);
    });



});