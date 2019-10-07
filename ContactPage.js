const InfraClass = require('./SeleniumInfraStructre')


class Contact   
{
    constructor()
    {
        this.seleniumInfra = new InfraClass()
        this.driver = this.seleniumInfra.driver
    }

    get_Url(url) 
    {
        this.seleniumInfra.getURL(url)
    }

   async check()
    {

    //    let name =   await this.seleniumInfra.findEelem('name' ,'fullName')
        // console.log(name.getCssValue('placeholder'))
     await this.seleniumInfra.write("Eldad cohen",'name' ,'fullName')
     await this.seleniumInfra.write("eldadco@gmail.com",'name' ,'email')
     await this.seleniumInfra.write("052-8557898",'name','phone')
     await this.seleniumInfra.write('The red velvet cake is discusting','name','message')
     const checkBox = await this.seleniumInfra.findElementBy("checkBoxInput", "id")
       await selInf.clickElement("input", "tagName", null, checkBox)
    //  /html/body/div/main/div/div[2]/div/form/div[1]
    }
//*[@id="checkBoxInput"]/input
}       

let c = new Contact()
c.get_Url('https://cakes-automation-course.herokuapp.com/contact.html')
c.check()