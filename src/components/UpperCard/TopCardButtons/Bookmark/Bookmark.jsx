import * as C from './Bookmark.styles'
import BookmarkIcon from '../../../../assets/icon-bookmark.svg'
import BookmarkCheckIcon from '../../../../assets/icon-check.svg'
import { useState } from 'react'

export function Bookmark() {
    const [isBookmarked, setIsBookmarked] = useState(false)

    function handleBookmark() {
        setIsBookmarked(!isBookmarked)
    }

    return (
        <C.Container onClick={handleBookmark}>
            <img src={`${isBookmarked ? BookmarkCheckIcon : BookmarkIcon}`} alt="" />
            <span>{isBookmarked ? 'Favorito' : 'Favoritar'}</span>
        </C.Container>
    )
}