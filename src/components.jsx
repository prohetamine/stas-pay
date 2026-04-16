import { motion } from 'framer-motion'
import styled from 'styled-components'
import stas from './assets/stas.svg'
import './fonts.css'

const ShadowBody = styled(motion.div)`
    position: fixed !important;
    inset: 0 !important;
    z-index: 9999999 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: rgba(22, 22, 22, 0.90) !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    user-select: none !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-synthesis: none !important;
`

const Body = styled(motion.div)`
    border-radius: 20px !important;
    width: 250px !important;
    height: 320px;
    background: #000 !important;
    overflow: hidden !important;
`

const Content = styled.div`
    position: relative !important;
    border-radius: 20px !important;
    width: 250px !important;
    height: 250px !important;
    background: #f0d533 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`

const MessageOverflow = styled.div`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
    gap: 10px !important;
`

const OverflowPayData = styled.div`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
`

const Count = styled.div`
    font-family: 'Inter' !important;
    font-weight: 700 !important;
    font-size: 51px !important;
    text-align: right !important;
    color: #000 !important;
    height: 38px !important;
    line-height: 40px !important;
`

const Close = (() => {
    const SVG = styled(motion.svg)`
        position: absolute !important;
        right: 6px !important;
        top: 6px !important;
        cursor: pointer !important;
        -webkit-tap-highlight-color: transparent !important;
    `

    return props => (
        <SVG  
            {...props}
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 90 }}
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0ZM20.9707 9.65625C20.5803 9.26595 19.9472 9.2661 19.5566 9.65625L15.3135 13.8984L11.0713 9.65625C10.6809 9.26593 10.0478 9.26612 9.65723 9.65625C9.2667 10.0468 9.2667 10.6808 9.65723 11.0713L13.8994 15.3135L9.65723 19.5557C9.2667 19.9462 9.2667 20.5802 9.65723 20.9707C10.0478 21.3608 10.6809 21.361 11.0713 20.9707L15.3135 16.7275L19.5566 20.9707C19.9472 21.3609 20.5803 21.361 20.9707 20.9707C21.3612 20.5802 21.3612 19.9462 20.9707 19.5557L16.7285 15.3135L20.9707 11.0713C21.3612 10.6808 21.3612 10.0468 20.9707 9.65625Z" fill="black" />
        </SVG>
    )
})()

const Icon = (() => {
    const Body = styled.div`
        position: relative !important;
        width: 46px !important;
        height: 46px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;

        .spin {
            animation-name: spin !important;
            animation-duration: 30s !important;
            animation-iteration-count: infinite !important;
            animation-timing-function: linear !important;
        }
                    
        @keyframes spin {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
        }
    `

    const Symbol = styled.div`
        position: absolute !important;
        color: #000000 !important;
        font-family: "Inter" !important;
        font-weight: 600 !important;
        font-size: 23px !important;
        display: flex !important;
    `

    const Icon = styled.div`
        background-image: url("${stas}") !important;
        background-size: cover !important;
        width: 46px !important;
        height: 46px !important;
    `

    return () => (
        <Body>
            <Icon className='spin' />
            <Symbol>S</Symbol>
        </Body>
    )
})()

const DescriptionOverflow = styled.div`
    position: relative !important;
    width: 170px !important;
    height: 40px !important;
    overflow: hidden !important;
`

const Description = styled(motion.div)`
    position: absolute !important;
    font-family: 'Inter' !important;
    font-weight: 600 !important;
    font-size: 15px !important;
    text-align: center !important;
    color: #000 !important;
`

const Link = styled(motion.div)`
    font-family: "Inter" !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    line-height: 145% !important;
    color: #000 !important;
    background: #f0d533 !important;
    text-decoration: ${props => props.active} !important;
    cursor: pointer !important;
    -webkit-tap-highlight-color: transparent !important;
    outline: none !important; 

    &:hover {
        text-decoration: none !important;
    }
`

const Dot = styled.div`
    border-radius: 1000px !important;
    width: 6px !important;
    height: 6px !important;
    background: #000 !important;
`

const BottomOverflow = styled.div`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: absolute !important;
    bottom: 6px !important;
    gap: 10px !important;
`

const LangOverflow = styled.div`
    display: flex !important;
    gap: 5px !important;
`

const Slider = styled(motion.div)`
    position: relative !important;
    border-radius: 29px !important;
    margin: 6px !important;
    padding: 4px !important;
    width: 238px !important;
    height: 58px !important;
    box-sizing: border-box !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`

const CircleButton = styled(motion.div)`
    position: absolute !important;
    left: 4px !important;
    border-radius: 100% !important;
    background: #f0d533 !important;
    width: 50px !important;
    height: 50px !important;
    cursor: grab !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`

const SliderConfirmOverflow = styled(motion.div)`
    position: absolute !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-left: 46px !important;
    transform: translateZ(0) !important;
    will-change: opacity !important;
`

const SliderConfirmText = styled(motion.div)`
    position: absolute !important;
    font-family: "Inter" !important;
    font-weight: 600 !important;
    font-size: 15px !important;
    line-height: 107% !important;
    background: linear-gradient(90deg, rgba(240, 212, 51, 0.2) 0%, rgba(240, 213, 51, 0.7) 50%, rgba(240, 213, 51, 0.2) 100%);
    background-clip: text !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-size: 200% 100% !important;
    animation: slider-text-wave 5s linear infinite !important;

    @keyframes slider-text-wave {
        0% {
            background-position: 200% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
`

const B = styled.span`
    color: #000 !important;
    font-weight: 700 !important;
`

const CircleArrowIcon = ({ style }) => (
    <motion.svg style={{ fill: '#000', ...style }} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.3685 5.88108L1.70841 0.289514C1.31601 -0.0981307 0.684249 -0.0962069 0.294221 0.293821C-0.0974925 0.685534 -0.0974927 1.32063 0.294221 1.71234L5.20654 6.62466L0.292795 11.5384C-0.0979253 11.9291 -0.0979255 12.5626 0.292795 12.9533C0.683238 13.3438 1.31617 13.3441 1.70701 12.954L7.37211 7.30029C7.76499 6.9082 7.76336 6.27116 7.3685 5.88108Z" fill="black" />
    </motion.svg>
)

const SliderCompleteIcon = ({ style }) => (
    <motion.svg style={{ position: 'absolute', ...style }} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.36528 13.4211L19.0033 1.70743C19.3923 1.3159 19.3913 0.683468 19.0011 0.293199C18.6099 -0.097955 17.9757 -0.0979677 17.5846 0.29317L6.62168 11.2551L1.70793 6.34139C1.31721 5.95067 0.683725 5.95067 0.293005 6.34139C-0.0974369 6.73183 -0.0977554 7.36477 0.292295 7.7556L5.94807 13.4227C6.33938 13.8148 6.97486 13.8141 7.36528 13.4211Z" fill="black" />
    </motion.svg>
)

export {
    ShadowBody, 
    Body,
    Content, 
    MessageOverflow,
    OverflowPayData, 
    Count,
    Close,
    Icon,
    DescriptionOverflow,
    Description,
    Link,
    Dot,
    BottomOverflow,
    LangOverflow,
    Slider,
    CircleButton,
    SliderConfirmText,
    CircleArrowIcon,
    SliderCompleteIcon,
    B,
    SliderConfirmOverflow
}