import React from 'react'
import svg3 from '../../images/svg-3.svg'
import svg4 from '../../images/svg-4.svg'
import svg5 from '../../images/svg-5.svg'
import svg6 from '../../images/svg-6.svg'
import { ServicesContainer,
         ServicesH1,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         ServicesH2,
         ServicesP
    } from './ServicesElements'

const Services = () => {
  return (
    <>
        <ServicesContainer id='services'>
            <ServicesH1>Nossos serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={svg3} />
                    <ServicesH2>Reduza gastos</ServicesH2>
                    <ServicesP>Nós te ajudamos a cortar custos e aumentar sua renda geral.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={svg6} />
                    <ServicesH2>Suporte Virtual</ServicesH2>
                    <ServicesP>Você terá suporte 24 horas de forma totalmente virtual.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={svg5} />
                    <ServicesH2>Benefícios Premium</ServicesH2>
                    <ServicesP>Seja cliente VIP e todas suas transações terá 5% de desconto</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services