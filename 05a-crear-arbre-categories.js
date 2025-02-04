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

        // 4 anar a la llista de categories
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/']")).click();

        //  5 crear categoria
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.findElement(By.name("nom")).sendKeys("Tarjetas gráficas");
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        // 6 crear subcategoria
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("Nvidia");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Tarjetas gráficas']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        // 7 crear subcategoria
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("AMD");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Tarjetas gráficas']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        // 8 crear unos ocho hijos de las subcategorias
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 6800");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 6900");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 7900");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 7900XT");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 7900X");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 6900XT");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RX 6900X");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='AMD']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RTX 4090");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Nvidia']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RTX 4080");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Nvidia']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RTX 4070");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Nvidia']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RTX 4060");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Nvidia']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.name("nom")).sendKeys("RTX 4050");
        //buscar el padre en el desplegable
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Nvidia']")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();
        
       
        // final tancar sessio
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