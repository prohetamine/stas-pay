import { AnimatePresence, useMotionValue, useTransform, useMotionTemplate, useAnimation } from 'framer-motion'
import useLocalStorage from 'react-use-localstorage'
import StarsOverflow from './stars-overflow.jsx'
import useBalance from './use-balance.jsx'
import {
    ShadowBody, 
    Body,
    Content, 
    MessageOverflow,
    OverflowPayData, 
    Count,
    Close,
    Icon,
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
    SliderConfirmOverflow,
    B,
    DescriptionOverflow
} from './components.jsx'
import { useEffect, useState } from 'react'

const formatThousands = number => {
  if (number < 10000) return number.toString()

  const thousands = number / 1000
  const rounded = Math.floor(thousands * 10) / 10
  return rounded % 1 === 0 ? `~${rounded.toFixed(0)}k` : `~${rounded}k`
}

const ModalWindow = ({ data: { chainId = null, address = null, count = 0 }, close }) => {
    const [lang, setLang] = useLocalStorage('language', navigator.language === 'ru-RU' ? 'ru' : 'en')
        , { balance, chain, token } = useBalance({ chainId, address })
        , [isConfirm, setConfirm] = useState(false)
        , [initial, setInitial] = useState(true)

    const isRus = lang === 'ru'

    const controls = useAnimation()
        , x = useMotionValue(0)
    
    const sliderWidth = 230
        , circleSize = 50
        , maxX = sliderWidth - circleSize
    
    const isPayble = balance === null || balance >= count

    const handleDragEnd = () => {
        const progress = x.get() / maxX

        if (progress > 0.85) {
            if (!isPayble) {
                window.open(`https://app.uniswap.org/swap?chain=${chain}&inputCurrency=NATIVE&outputCurrency=${token}`)
            }

            setConfirm(true)
        }

        controls.start({
            x: progress > 0.85 ? maxX : 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 30,
            },
        })
    }

    useEffect(() => {
        if (count || chainId || address) {
            const timeId = setTimeout(() => {
                setInitial(false)             
            }, 100)

            return () => clearTimeout(timeId)
        }
    }, [count, chainId, address])

    useEffect(() => {
        if (isConfirm) {
            const timeId = setTimeout(() => {
                close(isPayble)
                x.set(0)     
                setConfirm(false)
                setInitial(true)               
            }, 1000)

            return () => clearTimeout(timeId)
        }
    }, [isConfirm, isPayble, close, x])

    const opacitySlider = useTransform(
        x,
        [0, sliderWidth - circleSize],
        [0.2, 1]
    )

    const opacityConfirmText = useTransform(
        x,
        [0, 10],
        [1, 0]
    )

    const opacityConfirmArrow = useTransform(
        x,
        [sliderWidth - circleSize - 10, sliderWidth - circleSize],
        [1, 0]
    )

    const opacityConfirmedText = useTransform(
        x,
        [sliderWidth - circleSize - 10, sliderWidth - circleSize],
        [0, 1]
    )

    const backgroundSlider = useMotionTemplate`
      rgba(240, 213, 51, ${opacitySlider})
    `

    const isOpen = count && chainId && address
    
    return (
        <AnimatePresence>
            {isOpen && (
            <ShadowBody
                initial={{
                    backdropFilter: 'blur(0px)',
                    background: 'rgba(29, 29, 29, 0)',
                    opacity: 0
                }}
                animate={{ 
                    backdropFilter: 'blur(30px)',
                    background: 'rgba(29, 29, 29, 0.85)',
                    opacity: 1
                }}
                exit={{ 
                    backdropFilter: 'blur(0px)',
                    background: 'rgba(29, 29, 29, 0)',
                    opacity: 0
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            >   
                <StarsOverflow width={250} height={320} starCount={30} maxOffset={120} color={'#F0D533'}>
                    <Body
                        initial={{
                            height: '250px'
                        }}
                        animate={{
                            height: balance == null ? '250px' : '320px'
                        }}
                        exit={{
                            height: '250px'
                        }}
                    >
                        <Content>
                            <Close 
                                onTap={() => {
                                    close(false)
                                    setInitial(true)
                                }} />
                            <StarsOverflow width={170} height={104} starCount={50} maxOffset={80} margin={10} color={'#000000'}>
                                <MessageOverflow>
                                    <OverflowPayData>
                                        <Count>{formatThousands(count)}</Count>
                                        <Icon />
                                    </OverflowPayData>
                                    <DescriptionOverflow>
                                        <Description 
                                            initial={{
                                                opacity: 0
                                            }}
                                            animate={{
                                                opacity: isRus ? 1 : 0
                                            }}
                                            transition={isRus ? { delay: initial ? 0 : 0.2 } : { delay: 0 }}
                                            exit={{
                                                opacity: 0
                                            }}
                                        >
                                            {
                                                isPayble 
                                                    ? (
                                                        <>
                                                            Вы оплатите <B>{formatThousands(count)} STAS</B> за это действие.
                                                        </>
                                                    )
                                                    : (
                                                        <>
                                                            Недостаточно STAS для оплаты действия.
                                                        </>
                                                    )
                                            }
                                        </Description>
                                        <Description 
                                            initial={{
                                                opacity: 1
                                            }}
                                            animate={{
                                                opacity: isRus ? 0 : 1
                                            }}
                                            transition={!isRus ? { delay: initial ? 0 : 0.2 } : { delay: 0 }}
                                            exit={{
                                                opacity: 1
                                            }}
                                        >
                                            {
                                                isPayble 
                                                    ? (
                                                        <>
                                                            You will pay <B>{formatThousands(count)} STAS</B> for this action.
                                                        </>
                                                    )
                                                    : (
                                                        <>
                                                            Not enough STAS to pay for the action.
                                                        </>
                                                    )
                                            }
                                        </Description>
                                    </DescriptionOverflow>
                                </MessageOverflow>
                            </StarsOverflow> 
                            <BottomOverflow>
                                <Link onTap={() => window.open('https://prohetamine.ru/web3', '_blank')}>prohetamine.ru/web3</Link>
                                <Dot />
                                <LangOverflow>
                                    <Link onTap={() => setLang('ru')} active={isRus ? 'underline' : 'none'}>ru</Link>
                                    <Link onTap={() => setLang('en')} active={!isRus ? 'underline' : 'none'}>en</Link>
                                </LangOverflow>
                            </BottomOverflow>
                        </Content>
                        <Slider style={{ background: backgroundSlider }}>
                            <CircleButton 
                                drag='x'
                                dragElastic={0}
                                dragMomentum={false}
                                dragConstraints={{ left: 0, right: maxX }}
                                onDragEnd={handleDragEnd}
                                animate={controls}
                                style={{ x }}
                            >
                                <CircleArrowIcon style={{ opacity: opacityConfirmArrow }} />
                            </CircleButton>
                            <SliderConfirmOverflow style={{ opacity: opacityConfirmText }}>
                                <SliderConfirmText 
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: isRus ? 1 : 0
                                    }}
                                    transition={isRus ? { delay: initial ? 0 : 0.2 } : { delay: 0 }}
                                    exit={{
                                        opacity: 0
                                    }}
                                >
                                    {
                                        isPayble 
                                            ? 'Подтвердить'
                                            : 'Uniswap'
                                    }
                                </SliderConfirmText>
                                <SliderConfirmText 
                                    initial={{
                                        opacity: 1
                                    }}
                                    animate={{
                                        opacity: isRus ? 0 : 1
                                    }}
                                    transition={!isRus ? { delay: initial ? 0 : 0.2 } : { delay: 0 }}
                                    exit={{
                                        opacity: 1
                                    }}
                                >
                                    {
                                        isPayble 
                                            ? 'Confirm'
                                            : 'Uniswap'
                                    }
                                </SliderConfirmText>
                            </SliderConfirmOverflow>
                            <SliderCompleteIcon style={{ opacity: opacityConfirmedText }} />
                        </Slider>
                    </Body>
                </StarsOverflow>
            </ShadowBody>
            )}
        </AnimatePresence>
    )
}

export default ModalWindow