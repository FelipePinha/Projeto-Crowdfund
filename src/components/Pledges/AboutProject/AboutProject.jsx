import * as C from './AboutProject.styles'

export function AboutProject() {
    return(
        <C.Container>
            <h1>Sobre o projeto</h1>
            <C.AboutTextWrapper>
                <p>
                    Segundo dados publicados pelo Instituto Mobilidade e Desenvolvimento Social, 
                    cerca de 40% das crianças brasileiras com menos de nove anos vivem na pobreza, 
                    o que significa que mais de 25 milhões de pessoas nessa faixa etária moram em lares 
                    com renda média mensal menor que R$ 436.
                </p>
                <p>
                    Por isso, em Parceria com diversas ONGs humanitárias, tais como a Associação Vagalume, Projeto Ninho e Projeto Guri. Este
                    projeto de Crowdfund pretende arrecadar R$ 10.000,00 em doações. Com o objetivo de ajudar essas crianças a 
                    trilhar um caminho com menos dificuldades.
                </p>
            </C.AboutTextWrapper>
        </C.Container>
    )
}