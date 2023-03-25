import svg1 from '../../images/svg-1.svg'
import svg2 from '../../images/svg-2.svg'
import svg7 from '../../images/svg-7.svg'



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Banco Premium',
    headline: 'Transações Ilimitadas com taxa zero',
    description: 'Obtenha o acesso do nosso app exclusivo que permite que você realize transações ilimitadas e 0 taxas.',
    buttonLabel: 'Começar agora',
    imgStart: true,
    img: svg1,
    alt: 'Transaction',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Acesso ilimitado',
    headline: 'Tenha acesso a sua conta a qualquer momento',
    description: 'Nossa conta te dá suporte em qualquer lugar do mundo. Tudo que você precisa é de conexão com a internet e um smartphone ou computador.',
    buttonLabel: 'Saiba mais',
    imgStart: false,
    img: svg2,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Seja membro',
    headline: 'Criar uma conta é extremamente fácil (:',
    description: 'Crie sua conta em menos de 5 minutos. Traga seus dados e você terá acesso a todos os nossos benefícios..',
    buttonLabel: 'Traga seus dados',
    imgStart: false,
    img: svg7,
    alt: 'Open Account',
    dark: false,
    primary: false,
    darkText: true
}