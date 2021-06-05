// Start a loop to get the necessary elements
const interval = setInterval(() => main(), 100)

const script = document.getElementById('uatizapi2')
const whistle = script.attributes[3].value
const logo = script.attributes[4].value

const titlePhrases = [
    'Whatsapp 2',
    'Zap Zap 2',
    'Uatizapi 2',
    'Zip Zop 2',
    'ZAP'
]

const subtitlePhrases = [
    'ÃÃÃÃÃN OHNNN AÃÃÃN AÃÕÕÕHN',
    'Agora é possível visualizar as mensagens exclusivas!',
    'Faltam 0 dias para Whatsapp 2',
    'Whatsapp 2 está vivo e vai jogar no Vasco',
    'Não use drogas só Whatsapp 2'
]

const main = async () => {
    // Get page's elements
    const body = document.getElementsByTagName('body')
    const splashScreenLogo = document.getElementsByClassName('_3419W')
    const splashScreenTitle = document.getElementsByClassName('_2ISCK')
    const splashScreenSubtitle = document.getElementsByClassName('_1azin')

    // Only continue if get all elements
    if (!body || !splashScreenLogo || !splashScreenTitle || !splashScreenSubtitle) return

    // Stop the loop
    clearInterval(interval)

    // And finally
    try {
        // Set random texts
        const randomTitle = titlePhrases[Math.floor(Math.random() * (titlePhrases.length))]
        const randomSubtitle = subtitlePhrases[Math.floor(Math.random() * (titlePhrases.length))]

        // Modify the elements
        body[0].className = "web dark"
        splashScreenLogo[0].outerHTML = `<img src="${logo}" alt="Fiu fiu fiu fiu" />`
        splashScreenTitle[0].innerHTML = randomTitle
        splashScreenTitle[0].innetText = randomTitle
        splashScreenSubtitle[0].innerHTML = randomSubtitle
        splashScreenSubtitle[0].innetText = randomSubtitle

        // EAR RAPE
        if (whistle) await (new Audio(whistle)).play()

    } catch (err) {
        console.error(err)
    }
}
