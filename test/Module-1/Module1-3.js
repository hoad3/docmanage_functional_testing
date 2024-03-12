require('dotenv').config()

describe('script module 1-3', () =>{
    let Linkpage = `${process.env.WEBSITE_URL}/categories`
    let Botton = '[class="btn btn-primary"]';
    let QuanLyQuyTrinh = `${process.env.WEBSITE_URL}/category-folder/1`;
    it('Điều hướng đến "Quản lý thư mục"', () =>{

        //điều hướng đến trang quản lý thư mục
        browser.url(Linkpage);
        browser.pause(5000);
    });

    it('- Trình duyệt được điều hướng đến trang "Quản lý thưc mục" ',() => {

       // Nhấp vào ô "Quy trình" của bất kỳ thư mục nào
        $(Botton).click();

        browser.pause(5000)
    })
})