let count = 0
let screenCount = 0
let windowCountEl = document.getElementById("count-el")
let windowResultEl = document.getElementById("window-el")
let screenCountEl = document.getElementById("screencount-el")
let screenResultEl = document.getElementById("screensave-el")

// console.log(typeof screenCount)

function pane() {
    count += 1
    windowCountEl.textContent = count


}

function screen() {
    screenCount += 1
    screenCountEl.textContent = screenCount
        

   
}

function save() {
    
    let resultEl = count + " - "
    windowResultEl.textContent += resultEl
    windowCountEl.textContent = 0
    count = 0 
    

    let screens = screenCount + " - "
    screenResultEl.textContent += screens    
    screenCountEl.textContent = 0   
    screenCount = 0
    

    const windowsArray = resultEl.match(/\d+(\.\d+)?/g).map(parseFloat);
    const screensArray = screens.match(/\d+(\.\d+)?/g).map(parseFloat);
    console.log(windowsArray, screensArray)


}




console.log()