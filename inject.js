const main = () => {
    // Get page's body
    const bodyElement = document.getElementsByTagName('body')[0]
    const script = document.createElement('script')

    // Set attributes
    script.setAttribute('type', 'text/javascript') // 0
    script.setAttribute('class', 'uatizapi2') // 1
    script.setAttribute('src', chrome.extension.getURL('src/index.js')) // 2
    script.setAttribute('whistle', chrome.extension.getURL('src/whistle.mp3')) // 3
    script.setAttribute('logo', chrome.extension.getURL('src/logo.png')) // 4

    // Inject script
    bodyElement.appendChild(script)
}

main()
