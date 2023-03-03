const percySnapshot =  require('@percy/webdriverio');
// describe('My application', () => {
//     it('should capture the percy snapshots', async () => {
//         var seconds =4;
//         await browser.url(`https://www.ubank.com.au/Purchase/enquiry/property/1`);
//         var waitTill = new Date(new Date().getTime() + seconds * 1000);
//             while(waitTill > new Date()){}
//         await percySnapshot("home1", { widths: [800,1300]});
//         await $('#mat-input-0').setValue('192 Abbett Street Scarborough WA 6019');
//         await $('#mat-option-0 > span').click();
//         await $('#loanPurpose > div:nth-child(2) > div:nth-child(1) > button').click();
//         await $('#loanPurposeNewExisting > div.question-options > div:nth-child(2) > button > span').click();
//         await $('#mat-input-2').setValue("500000");
//         await $('#mat-input-3').setValue("200000");
//         await $('#loanFirstHomeBuyer > div:nth-child(2) > div:nth-child(2) > button').click();
//         await $('button.proceed-btn.mat-raised-button.mat-button-base.mat-accent').click();
//         await expect($('#interestType > div > div.question-wrapper > span')).toHaveText('What type of interest rate are you looking for?');
//         await $('#interestType div:nth-child(2) > button').click();
//         await $('#recommendation > button').click();
//         await expect ($('div > div.header-label > span')).toHaveText('Choose your loan');
//         await percySnapshot("home", { widths: [800,1300]});
//         await percySnapshot("home", { widths: [800,1000], minHeight:2500});
//     })
// })

// import percySnapshot  from '@percy/webdriverio';
describe('My application', () => {
    it('should capture the percy snapshots', async () => {

        await browser.url(`https://ubank.com.au/Purchase/enquiry/property/1`);
        await percySnapshot("home1", { widths: [800,1300]});
        await $('#mat-input-0').setValue('192 Abbett Street Scarborough WA 6019');
        await $('#mat-option-0 > span').click();
        await percySnapshot("home2", { widths: [800,1300]});
        
        await $('#loanPurpose > div.question-wrapper > span').waitForDisplayed();
        
        const purpose = await $('#loanPurpose > div:nth-child(2) > div:nth-child(1) > button');
        await purpose.waitForDisplayed();
        purpose.click();

        await $('#loanPurposeNewExisting > div.question-wrapper > span').waitForDisplayed();
      
        const newExistingEle = await $('#loanPurposeNewExisting > div.question-options > div:nth-child(2) > button > span');
        await newExistingEle.waitForDisplayed();
        newExistingEle.click();

        await $('#mat-input-2').setValue("500000");
        await $('#mat-input-3').setValue("200000");

        await $('#loanFirstHomeBuyer > div.question-wrapper > span').waitForDisplayed();

        const firstHomeBuyerEle = await $('#loanFirstHomeBuyer > div:nth-child(2) > div:nth-child(2) > button');
        await firstHomeBuyerEle.waitForDisplayed();
        firstHomeBuyerEle.click();

        const checkBtn = await $('button.proceed-btn.mat-raised-button.mat-button-base.mat-accent');
        await checkBtn.waitForDisplayed();
        checkBtn.click();

       await expect($('#interestType > div > div.question-wrapper > span')).toHaveText('What type of interest rate are you looking for?');

        await $('#interestType div:nth-child(2) > button').click();
        await $('#recommendation > button').click();

       await expect ($('div > div.header-label > span')).toHaveText('Choose your loan');
       await percySnapshot("home3", {widths: [800,1300],percyCSS:
        `.mat-drawer-container { overflow: unset !important; } 
        .lw-sidenav-content[_ngcontent-nnc-c1] { overflow: unset !important; } 
        .mat-drawer-content { overflow: unset !important; } 
        .overflow--xs { overflow-x: unset !important; }  
        `});
    //    await percySnapshot("home", {  enableJavascript:true,widths: [800,1000], minHeight:2500});
    })
})

