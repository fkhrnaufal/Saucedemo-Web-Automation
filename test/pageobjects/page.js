export default class Page {

constructor(){}
    async open (path) {
        await browser.url(path)
    }

    async delayForViewing(second) {
        await browser.pause(second ? (second*1000) : 1000)
     }

}