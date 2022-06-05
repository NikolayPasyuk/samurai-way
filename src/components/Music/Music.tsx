import React from "react";
import s from "./Music.module.css"

const Music = () => {
    return (
        <div className={s.container}>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Eix6U8Ax6nw"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={s.roundBorderTopLeft}
                >
                </iframe>
            </div>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nK_RcwgKxrc"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={s.roundBorderTopRight}
                >
                </iframe>
            </div>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2yx49pXznzw"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={s.roundBorderBottomRight}
                >
                </iframe>
            </div>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2gCoQu3UR4k"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={s.roundBorderBottomLeft}
                >
                </iframe>
            </div>
        </div>
    )
}

export default Music;