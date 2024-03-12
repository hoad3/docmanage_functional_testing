require('dotenv').config()

describe('Pentest Script Module11-1', () => {

    let pageurl = `${process.env.WEBSITE_URL}/`;
    let Loginbtn = '[class="btn btn-primary"]';
    let inputusename = '[type="text"]';
    let inputpass = '[type="password"]';
    let Quytrinh = 'Quy trình';
    it('điều hướng đến trang đăng nhập và đăng nhập thành công với tư cách người dùng quản trị viên', () => {

        //đăng nhập vào page
        browser.url(pageurl);


        $(inputusename).waitForDisplayed(5000);
        //input username
        $(inputusename).setValue(process.env.USERNAME);
        $(inputpass).setValue(process.env.PASSWORD);
        browser.pause(2000);
        $(Loginbtn).click();




    });

    it('Điều hướng đến "Quản lý thư mục"',() =>{
        browser.url(pageurl);
        $(Quytrinh).click();


    });

});
