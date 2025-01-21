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
        await this.driver.findElement(By.name("username")).sendKeys(process.env.usuari);
        await this.driver.findElement(By.name("password")).sendKeys(process.env.contrasenya);

        // 3 boto send .click()
        await this.driver.findElement(By.xpath("//input[@type='submit']")).click();

        // 4 tancar sessio
        await this.driver.findElement(By.xpath("//button[text()='Finalitzar sessió']")).click();

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();