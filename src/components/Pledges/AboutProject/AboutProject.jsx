import * as C from './AboutProject.styles'

export function AboutProject() {
    return(
        <C.Container>
            <h1>Sobre o projeto</h1>
            <C.AboutTextWrapper>
                <p>
                    Segundo dados publicados pela Fundação Abrinq com relação ao ano de 2021, 
                    cerca de 45,4% de crianças de 0 a 14 anos vivem em situação de pobreza e, aproximadamente
                    1.768.476 milhão de crianças estão em situação de trabalho infantil, correspondendo a 4,6% da população nesta faixa etária.
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