const assert = require('assert');




describe("Pastebin test suite", () => {

/**
* Install  WebdriverIO  and do the following task:
* (I Can Win) When performing the task, you must use the capabilities of Selenium WebDriver,
* the unit testing framework and the Page Object concept. Automate the following script:
* 1. Open https://pastebin.com or a similar service in any browser
* 2. Create a New Paste with the following details:
* Code: "Hello from WebDriver"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "helloweb" 
*/


    it("WebdriverIO Practical task - I Can Win", async () => {
        await browser.url("https://pastebin.com");

        const textArea = await $("//textarea[@id='postform-text']");
        const pastExpiration = await $("//select[@id='postform-expiration']");
        const pastName = await $("//input[@id='postform-name']")

        await textArea.setValue("Hello from WebDriver");
        await pastExpiration.selectByAttribute("value", "10M");
        await pastName.setValue("helloweb")
        await browser.pause(10000);
    })


/**
* Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver,
* the unit testing framework and the Page Object concept. Automate the following script:
* 1. Open https://pastebin.com or a similar service in any browser
* 2. Create a New Paste with the following details:
* Code:
* git config --global user.name "New Sheriff in Town"
* git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
* git push origin master --force
* Syntax Highlighting: "Bash"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "how to gain dominance among developers"
* 3. Save paste and check the following:
* Browser page title matches Paste Name / Title
* Syntax is suspended for bash
*/    

    it("WebdriverIO Practical task - Bring It On", async () => {
        
        await browser.url("https://pastebin.com")
        

        const textArea = await $("//textarea[@id='postform-text']");
        const pastExpiration = await $("//select[@id='postform-expiration']");
        const pastName = await $("//input[@id='postform-name']")
        const syntaxHighlightning = await $("//select[@id='postform-format']")
        const submitButton = await $("//div/button")
        
        let title = "how to gain dominance among developers"
        let text_to_past =  'git config --global user.name "New Sheriff in Town"\n' +
                            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n' +            
                            'git push origin master --force'

        await submitButton.waitForClickable({ timeout: 3000 });

        await textArea.setValue(text_to_past)
        await syntaxHighlightning.selectByAttribute("value", "8")
        await pastExpiration.selectByAttribute("value", "10M")
        await pastName.setValue(title)
        await submitButton.click()

        const selector = "//div[contains(@class, 'source')]"
        
        
        const pageTitle = await browser.getTitle()
        assert.strictEqual(pageTitle == title , "Page title doesn't match the specified one");
        const syntaxType = await $("//div[@class='source bash']")
        assert.strictEqual(syntaxType, "syntax_type doesn't match the specified one");
        
        

    })
})