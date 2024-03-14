require('dotenv').config()
const module1_13 = require('./Module1-13').module1_13

exports.module1_15 = void 0;
const module1_15 = async () => {
    await browser.setWindowSize(1365, 911)
    await browser.$('.MuiButtonBase-root').click()
    await browser.$('.MuiInputBase-input').click()
    await browser.$('.MuiInputBase-input').setValue("2023")
    await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{type: 'keyDown', value: ''}]
    }])
    await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{type: 'keyUp', value: ''}]
    }])
}

exports.module1_15 = module1_15;
describe('test script Module1-15', () =>{

    it("test script module1_15", module1_15)


});