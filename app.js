/*
* Automatizando ação de buscar todos os usuários que comentaram uma postagem no instagram
*/
//Requer módulo puppeteer para acessar páginas dinámicas
const puppeteer = require('puppeteer')

//0 Função inicial
async function start(url = process.argv[2]){

    //1 - instancia o browser
    const browser = await puppeteer.launch({
        //31/12/2020
        //Para a página do instagram, só obtive sucesso mudando a flag headless:[default true] para false
        headless: false,
    })
    
    //2 - carrego uma nova página no browser
    const page = await browser.newPage()

    //3 direciono a página para o endereço
    await page.goto(url, { waitUntil: 'load' });

    //4 chamo UMA* vez a função para clicar em "ver mais", passando a página e o seletor a buscar
    await loadMore(page, '.dCJp8');
    
    //5 - recebe a página e o seletor que irá buscar na página...
    async function loadMore(page, selector){

        //6 busca na página (arg "page") o botão "ver mais" (arg "selector") e armazena em moreButton
        const moreButton = await page.$(selector)
        
        //7 se o moreButton tiver valor, ele existe na página e...:
        if(moreButton){
            console.log('Click no \"More\"...')
            //8 Click no botão
            await moreButton.click()
            
            //9 aguarda até mais 2 segundos para tentar buscar o botão novamente
            await page.waitForSelector(selector, {timeout: 2000}).catch(() => {console.log('timeout')})
            
            //10 recursivamente, chama novamente a função para verificar se o botão ainda existe
            await loadMore(page, selector)
        }
    }

    //11 instancia comentarios chamando a função de busca por todos os usuários q comentaram na postatagem
    //     - 1º arg = página , 2º arg = seletor onde estão os nomes de usuários
    // [opcional]:  buscar/testar qual o caminho correto dos comentários, no console do navegador digite:
    //              document.querySelectorAll('._6lAjh div');
    const comments = await getComments(page, '._6lAjh div')
    
    //13 exibe array retornada com nomes de usuários que comentaram
    console.log(comments)

    //12 recebe página e seletor onde estarão os nomes de usuários
    async function getComments(page, selector){
        //percorre todas as ocorrências do seletor, faz um mapping e retorna esse array
        const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
        return comments
    }

}

start()
