import { motion } from 'framer-motion'
import styled from 'styled-components'
import stas from './assets/stas.svg'
import './fonts.css'

const ShadowBody = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(29, 29, 29, 0.85);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    user-select: none;
`

const Body = styled(motion.div)`
    border-radius: 20px;
    width: 250px;
    height: 320px;
    background: #000;
    overflow: hidden;
`

const Content = styled.div`
    position: relative;
    border-radius: 20px;
    width: 250px;
    height: 250px;
    background: #f0d533;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MessageOverflow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const OverflowPayData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const Count = styled.div`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 51px;
    text-align: right;
    color: #000;
    height: 38px;
    line-height: 40px;
`

const Close = (() => {
    const SVG = styled(motion.svg)`
        position: absolute;
        right: 6px;
        top: 6px;
        cursor: poInter;
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
        position: relative;
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;

        .spin {
            animation-name: spin;
            animation-duration: 30s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
                    
        @keyframes spin {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
        }
    `

    const Symbol = styled.div`
        position: absolute;
        color: #000000;
        font-family: "Inter";
        font-weight: 600;
        font-size: 23px;
        display: flex;
    `

    const Icon = styled.div`
        background-image: url("${stas}");
        background-size: cover;
        width: 46px;
        height: 46px;
    `

    return () => (
        <Body>
            <Icon className='spin' />
            <Symbol>S</Symbol>
        </Body>
    )
})()

const DescriptionOverflow = styled.div`
    position: relative;
    width: 170px;
    height: 40px;
    overflow: hidden;
    
`

const Description = styled(motion.div)`
    position: absolute;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #000;
`

const Link = styled(motion.div)`
    font-family: "Inter";
    font-weight: 600;
    font-size: 13px;
    line-height: 145%;
    color: #000;
    background: #f0d533;
    text-decoration: ${props => props.active};

    &:hover {
        text-decoration: underline;
    }
`

const Dot = styled.div`
    border-radius: 1000px;
    width: 6px;
    height: 6px;
    background: #000;
`

const BottomOverflow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 6px;
    cursor: poInter;
    gap: 10px;
`

const LangOverflow = styled.div`
    display: flex;
    gap: 5px;
`

const Slider = styled(motion.div)`
    position: relative;
    border-radius: 29px;
    margin: 6px;
    padding: 4px;
    width: 238px;
    height: 58px;
    box-sizing: border-box;
    background: rgba(240, 213, 51, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`

const CircleButton = styled(motion.div)`
    position: absolute;
    left: 4px;
    border-radius: 100%;
    background: #f0d533;
    width: 50px;
    height: 50px;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
`


const SliderConfirmOverflow = styled(motion.div)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 46px;
    transform: translateZ(0);
    will-change: opacity;
`

const SliderConfirmText = styled(motion.div)`
    position: absolute;
    font-family: "Inter";
    font-weight: 600;
    font-size: 15px;
    line-height: 107%;
    background: linear-gradient(90deg, rgba(240, 212, 51, 0.2) 0%, rgba(240, 213, 51, 0.7) 50%, rgba(240, 213, 51, 0.2) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    animation: slider-text-wave 5s linear infinite;

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
    font-weight: 700;
    padding: 0px 4px;
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