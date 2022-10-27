import * as C from './Info.styles'

export function Info({ title, subTitle }) {
    return (
        <C.Container>
            <h1>{ title }</h1>
            <h3>{subTitle}</h3>
        </C.Container>
    )
}