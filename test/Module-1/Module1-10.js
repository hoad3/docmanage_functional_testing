require('dotenv').config()

describe('Pentest script Module1-10', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/index-hospital`;
    let inptustartyear = '[name="yearStart"]';
    let inptuendyear = '[name="yearEnd"]';
    let OptiomClick = '[type="button"]';
    it('- Trình duyệt được điều hướng đến trang Biểu đồ chỉ số bệnh viện trong nhiều năm', () =>{

        browser.url(LinkPage1);
//Nhấp vào ô Xem chỉ số trong nhiều năm
        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByVisibleText('Xem chỉ số trong nhiều năm');
        browser.pause(3000);



    });
    it('thực hiện nhập vào năm bắt đầu và năm kết thúc', () =>{
        // điền vào ô năm bắt đầu
        $(inptustartyear).setValue('2023');
        // điền vào ô kết năm thúc
        $(inptuendyear).setValue('2024');

        browser.pause(3000);
    })
});