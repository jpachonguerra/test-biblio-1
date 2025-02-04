// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

require('dotenv').config();

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseTest
{
	async test() {

        // login test
        //////////////////////////////////////////////////////
        await this.driver.get(process.env.direccio+"/admin/login");
       
        // 1 cercar login box

        // 2 posar usuari i password
        await this.driver.findElement(By.name("username")).sendKeys('asdfasdfasdf');
        await this.driver.findElement(By.name("password")).sendKeys('asdfasdfasdfasdf');

        // 3 boto send .click()
        await this.driver.findElement(By.xpath("//input[@type='submit']")).click();

        // 4 comprobar error
        var currentText = await this.driver.findElement(By.className("errornote")).getText();
        var expectedText = "Si us plau, introduïu un nom d'usuari i contrasenya correctes per un compte de personal. Observeu que ambdós camps són sensibles a majúscules.";
        assert( currentText==expectedText, currentText);

        console.log("Missatge de error: "+currentText);

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();