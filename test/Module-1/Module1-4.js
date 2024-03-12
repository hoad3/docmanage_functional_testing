require('dotenv').config()

describe('Pentest script Module1-4', () =>{

    let LinkPage1 = `${process.env.WEBSITE_URL}/category-folder/1`;
    let OptiomClick = '[data-id="HT - QT - 11"]'
    it('Điều hướng đến "Quản lý phiên bản hiệu lực"', () =>{

        browser.url(LinkPage1);

        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByVisibleText('Tài liệu hiệu lực');
        browser.pause(3000);
    })
});