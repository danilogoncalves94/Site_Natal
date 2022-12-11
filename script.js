function clicou() {
    let nome = document.querySelector("#nomes");
    let nomeVerdade = nome.value

    if (nomeVerdade.length == 0) {
        alert('Por favor, insira seu nome abaixo.')
    } else {
        let conteudo1 = document.querySelector("#paragrafoNome1")
        let conteudo2 = document.querySelector("#paragrafoNome2")
        let conteudoGeral = document.querySelector("#principal")
        let top = document.querySelector('#topoSite')
        let user = document.querySelector('#usuario')
        let SorteioTexto = Math.floor(Math.random() * 12) + 1
        let sorteioFoto = Math.floor(Math.random() * 4) + 1

        switch (SorteioTexto) {
            case 1:
                /*case1*/
                conteudo1.innerHTML = `${nomeVerdade}, neste Natal, lhe desejo uma vida repleta de bênçãos e da presença de Deus em seu coração.`

                conteudo2.innerHTML = `Que o menino Jesus, em sua infinita bondade, derrame sobre você e sua família, muita luz, paz, amor, alegria e esperança. Feliz Natal ${nomeVerdade}! Boas festas!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 2:
                /*case2*/
                conteudo1.innerHTML = `${nomeVerdade}, é Natal! Cristo nasceu para nos presentear com vida e vida em abundância, não se esqueça disso.`

                conteudo2.innerHTML = `Que este Natal seja mais do que uma festa, seja a celebração do amor de Deus por nós. Feliz Natal ${nomeVerdade}! Boas festas!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 3:
                /*case3*/
                conteudo1.innerHTML = `${nomeVerdade}, que o menino Jesus faça morada em seu coração, irradiando-o com sua luz, inocência e amor.`

                conteudo2.innerHTML = `Desejo-lhe um bom Natal e que você alcance todos seus objetivos. Que Deus, em sua infinita bondade, abençoe e encha de paz o seu coração, não apenas nessa data, mas em todos os seus dias. Feliz Natal!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 4:
                /*case4*/
                conteudo1.innerHTML = `${nomeVerdade}, que a luz da Estrela de Belém que guiou os 3 reis magos até o Salvador ilumine seus caminhos e revele a ti o verdadeiro significado do Natal.`

                conteudo2.innerHTML = `Que a lembrança do nascimento de Jesus possa, neste Natal, quebrantar nossos corações e nos redimir de todo o pecado. Pois só assim poderá haver um verdadeiro recomeço no ano que está por vir. Boas festas ${nomeVerdade}!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 5:
                /*case5*/
                conteudo1.innerHTML = `Jesus não veio ao mundo para nos dar um novo começo. Ele veio ao mundo para nos dar a esperança de um novo final.`

                conteudo2.innerHTML = `Feliz Natal, ${nomeVerdade}! Que o amor possa florescer em todos os cantos deste mundo. Que nós possamos desfrutar da bondade divina, e que sejamos sempre dignos do amor de Cristo.`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 6:
                /*case6*/
                conteudo1.innerHTML = `Reacenda o espírito natalino em seu coração, renove as esperanças e resgate a fé. Cristo nasceu para reavivar nossas almas!`

                conteudo2.innerHTML = `${nomeVerdade}, que a paz de Deus possa abençoar você e sua família em todos os dias do próximo ano! Feliz Natal e um ano novo com muita luz!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 7:
                /*case7*/
                conteudo1.innerHTML = `${nomeVerdade}, Cristo veio ao mundo como prova do amor de Deus por nós, nunca se esqueça disso.`

                conteudo2.innerHTML = `Natal é a presença de Jesus em nossos corações. Não só representa a fé, mas a vida, o nascimento do Filho de Deus, a consciência de família, amor, paz e felicidade. Que o sentido do Natal esteja sempre em seu coração, ${nomeVerdade}. Boas festas!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 8:
                /*case8*/
                conteudo1.innerHTML = `${nomeVerdade}, diante da comemoração do nascimento de Jesus, renove a sua fé em Deus e veja a verdadeira "magia" do Natal acontecer.`

                conteudo2.innerHTML = `O Deus da esperança sabe que o amor pode vencer sempre. Por isso, quando o Natal chegar, reabasteça o seu coração de esperança para que as suas lutas sejam vencidas em amor. Feliz natal, ${nomeVerdade}!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 9:
                /*case9*/
                conteudo1.innerHTML = `O Natal não acontece apenas no dia 25 de dezembro, mas sim todas as vezes que Cristo nasce no coração de um pecador.`

                conteudo2.innerHTML = `Jesus nasceu para trazer a luz, a paz, a esperança e a redenção aos homens. Neste Natal, ${nomeVerdade}, deixe que Ele nasça em seu coração.<br>Feliz Natal e boas festas!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 10:
                /*case10*/
                conteudo1.innerHTML = `Lembre-se que o mais importante do Natal é o amor, o perdão e a vida que nos foram dados por meio de Cristo.`

                conteudo2.innerHTML = `${nomeVerdade}, desejo-lhe um Natal repleto de amor, luz e harmonia. E que a misericórdia de Deus esteja sobre a sua vida e a vida de toda a sua família hoje e sempre.<br>Feliz Natal, ${nomeVerdade}!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 11:
                /*case11*/
                conteudo1.innerHTML = `${nomeVerdade}, que neste Natal você possa sentir a presença de Deus em sua vida. Que sinta também a paz, o amor e o perdão de Nosso Senhor Jesus Cristo.`

                conteudo2.innerHTML = `Que Deus derrame suas bênçãos e brilhe perante nós com sua luz, abrindo-nos o caminho até Ele. Que o Natal seja um símbolo de amor e paz no coração de todo mundo. Que Deus abençoe a todos! Feliz Natal, ${nomeVerdade}!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
                break;
            case 12:
                /*case12*/
                conteudo1.innerHTML = `${nomeVerdade}, que a magia do Natal te contagie. Que o amor de Deus, a graça e a fidelidade de Jesus Cristo estejam com você.`

                conteudo2.innerHTML = `Que Jesus Cristo seja sempre uma luz a brilhar no coração daqueles que o buscam. Que o espírito natalino traga
                aos nossos corações a fé inabalável dos que acreditam na graça e misericórdia de Cristo. Feliz Natal, ${nomeVerdade}!`

                conteudoGeral.style.cssText = 'display: contents';

                top.style.cssText = `background-image: url('imagens/fundo${sorteioFoto}.jpg')`

                user.style.cssText = 'opacity: 0%'
        }

    }

}
