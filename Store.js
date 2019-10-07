const InfraClass = require('./SeleniumInfraStructre') 

class Store 
{
    constructor(url)
    { 

        this.Infra = new InfraClass() 
        this.driver=this.Infra.driver
        this.Infra.getURL(url)
    }
    // async Geturl(url)
    // {
    //   await  this.Infra.getURL(url)

    // }
    async CheckCurrentDay()
    {
        let d = new Date() 
        
         let arrDays = await this.Infra.findElementListBy('className','today')
         for (let i of arrDays)
         {
            let temp = await this.Infra.getTextFromElement(null,null,i)
           let today= this.convertDay(d.getDay())
            if(temp == today)
            {
                // i.getAttribute()
                
                let font=await i.getAttribute("style")
                
                    if(font.includes('bold'))
                    {
                        console.log("The current day is bold")
                        return

                    }
                    console.log("The current day is not bold")
            }

         }
    }

 convertDay(num)
{   
    
    let weekDays=["Sunday","Monday","Tuesday","Wendsday","Thuersday","Friday","Sutherday"]
    for(let i in weekDays)
    {
        if(i == num)
        {
            return weekDays[i]
        }
    }
    

}







}



module.exports = Store
