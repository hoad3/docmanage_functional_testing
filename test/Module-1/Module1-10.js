require('dotenv').config()
const module1_8 = require("./Module1-8").moduule1_8

exports.module1_10 = void 0;

const module1_10 = async () =>{
    await browser.setWindowSize(1231, 894)
    // await browser.url(`${process.env.WEBSITE_URL}/hospital-index-revision-by-year`)
    // await expect(browser).toHaveUrl(`${process.env.WEBSITE_URL}/hospital-index-revision-by-year`)
    // await browser.$("//*[@id=\"root\"]/div[1]/div[1]/div[2]/div[1]/div[3]/button").click()

    await  browser.$('.MuiButton-root').click();
    await browser.pause(300)
}


exports.module1_10 = module1_10;
describe('test script Module1-10', () =>{

        it('test module1_8', module1_8)
        it('test script module1_10', module1_10)




//     let LinkPage1 = `${process.env.WEBSITE_URL}/index-hospital`;
//     let inptustartyear = '[name="yearStart"]';
//     let inptuendyear = '[name="yearEnd"]';
//     let OptiomClick = '[type="button"]';
//     it('- Trình duyệt được điều hướng đến trang Biểu đồ chỉ số bệnh viện trong nhiều năm', () =>{
//
//         browser.url(LinkPage1);
// //Nhấp vào ô Xem chỉ số trong nhiều năm
//         $(OptiomClick).waitForDisplayed(5000);
//         $(OptiomClick).selectByVisibleText('Xem chỉ số trong nhiều năm');
//         browser.pause(3000);
//
//
//
//     });
//     it('thực hiện nhập vào năm bắt đầu và năm kết thúc', () =>{
//         // điền vào ô năm bắt đầu
//         $(inptustartyear).setValue('2023');
//         // điền vào ô kết năm thúc
//         $(inptuendyear).setValue('2024');
//
//         browser.pause(3000);
//     })
});