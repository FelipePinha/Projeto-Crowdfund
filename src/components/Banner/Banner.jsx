import * as C from './Banner.styles'


export function Banner({ children }) {
    return <C.BannerContainer imgUrl="../../assets/image-hero-desktop.jpg">{children}</C.BannerContainer>
}