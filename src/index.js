// Start a loop to get the necessary elements
const interval = setInterval(() => main(), 100)

const element = document.getElementsByClassName('uatizapi2')[0]
const whistle = element.attributes[3].value
const logo = element.attributes[4].value

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

const main = () => {
    // Get splashscreen elements
    const splashScreenLogo = document.getElementsByClassName('_3419W')
    const splashScreenTitle = document.getElementsByClassName('_2ISCK')
    const splashScreenSubtitle = document.getElementsByClassName('_1azin')

    // Only continue if get all elements
    if (!splashScreenLogo || !splashScreenTitle || !splashScreenSubtitle) return

    const randomTitle = titlePhrases[Math.floor(Math.random() * (titlePhrases.length))]
    const randomSubtitle = subtitlePhrases[Math.floor(Math.random() * (titlePhrases.length))]

    // Modify the elements
    splashScreenLogo[0].outerHTML = `<img src="${logo}" alt="Fiu fiu fiu fiu" />`
    splashScreenTitle[0].innerHTML = randomTitle
    splashScreenTitle[0].innetText = randomTitle
    splashScreenSubtitle[0].innerHTML = randomSubtitle
    splashScreenSubtitle[0].innetText = randomSubtitle

    // EAR RAPE
    if (whistle) new Audio(whistle).play()

    // Finish the loop
    clearInterval(interval)
}
