const HomePage=require('./HomePage')
let home = new HomePage('https://cakes-automation-course.herokuapp.com/index.html')

async function main() 
{
    //  await home.search("ABOUT")
    await home.advancedSearch(["'Chocolate'","'Cheese'"],["'0-3'","'4'"], "30/10/2000", "Chocolate", "Choc")
    home.driver.sleep(6000)
    await home.seleniumInfra.close()
}



main()