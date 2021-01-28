import ColorBadge from "./colorBadge";

function GameBadge(platform) {
    switch (platform) {
        case 'nintendo3ds':
            return <ColorBadge class={'game-nintendo-3ds'} data={'3DS'} />
        case 'nintendoSwitch':
            return <ColorBadge class={'game-nintendo-switch'} data={'Switch'} />
        case 'pc':
            return <ColorBadge class={'game-pc'} data={'PC'} />
        case 'ps4':
            return <ColorBadge class={'game-ps'} data={'PS4'} />
        case 'ps5':
            return <ColorBadge class={'game-ps'} data={'PS5'} />
        case 'steam':
            return <ColorBadge class={'game-steam'} data={'Steam'} />
        case 'xboxGamePass':
            return <ColorBadge class={'game-xbox-game-pass'} data={'Xbox Game Pass'} />
        default:
            break;
    }
}

export default GameBadge;