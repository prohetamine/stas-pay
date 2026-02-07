/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/refs */
import styled from 'styled-components'
import { useEffect, useRef, useState, memo } from 'react'

const Content = styled.div`
    position: absolute;
    color: #000;
    font-family: "inter";
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`

const pointOnRoundedRect = (t, w, h, r) => {
    const pw = w - 2 * r
    const ph = h - 2 * r

    const perimeter =
        2 * (pw + ph) + 2 * Math.PI * r

    let d = t * perimeter;

    if (d < pw) return { x: -pw/2 + d, y: -h/2 }
    d -= pw

    if (d < Math.PI * r / 2) {
        const a = -Math.PI/2 + d / r
        return { x: w/2 - r + Math.cos(a) * r, y: -h/2 + r + Math.sin(a) * r }
    }
    d -= Math.PI * r / 2

    if (d < ph) return { x: w/2, y: -ph/2 + d }
    d -= ph

    if (d < Math.PI * r / 2) {
        const a = d / r
        return { x: w/2 - r + Math.cos(a) * r, y: h/2 - r + Math.sin(a) * r }
    }
    d -= Math.PI * r / 2

    if (d < pw) return { x: pw/2 - d, y: h/2 }
    d -= pw

    if (d < Math.PI * r / 2) {
        const a = Math.PI/2 + d / r
        return { x: -w/2 + r + Math.cos(a) * r, y: h/2 - r + Math.sin(a) * r }
    }
    d -= Math.PI * r / 2

    if (d < ph) return { x: -w/2, y: ph/2 - d }
    d -= ph

    const a = Math.PI + d / r
    return { x: -w/2 + r + Math.cos(a) * r, y: -h/2 + r + Math.sin(a) * r }
}

const lerp = (a, b, t) => a + (b - a) * t

const StarsOverflow = ({ children, starCount, maxOffset, margin = 20, width = null, height = null, color }) => {
    const canvasRef = useRef()
        , counterRef = useRef()

    const [sizeContent, setSizeContent] = useState({
        width: 0,
        height: 0
    })
    const [ctx, setCtx] = useState(null)

    const _width = (width || sizeContent.width)
    const _height = (height || sizeContent.height)

    const canvasWidth = _width * 3
        , canvasHeight= _height * 3
        , contentWidth = _width + margin
        , contentHeight = _height + margin

    const starsRef = useRef(Array(starCount).fill(true).map(() => ({
        t: Math.random(),
        speed: 0.0003 + Math.random() * 0.001,
        offset: 10 + Math.random() * maxOffset,
        size: 1 + Math.random() * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05
    })))

    useEffect(() => {
        const counter = counterRef.current

        if (counter && !width && !height) {
            const width = counter.getBoundingClientRect().width
                , height = counter.getBoundingClientRect().height
            
            setSizeContent({
                width,
                height
            })
        }
    }, [counterRef.current, width, height, children])

    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            const ctx = canvas.getContext('2d')
            setCtx(ctx)
        }
    }, [canvasRef.current])

    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            canvas.width = canvasWidth
            canvas.height = canvasHeight
        }
    }, [canvasRef.current, canvasWidth, canvasHeight])

    useEffect(() => {
        if (ctx) {
            const timeId = setInterval(() => {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight)

                for (const s of starsRef.current) {
                    s.t = (s.t + s.speed) % 1

                    const roundness = Math.min(s.offset / maxOffset, 1)
                    const r = lerp(0, Math.min(contentWidth, contentHeight) / 2 + s.offset, roundness)

                    const base = pointOnRoundedRect(
                        s.t,
                        contentWidth + s.offset * 2,
                        contentHeight + s.offset * 2,
                        r
                    )

                    const x = (canvasWidth / 2) + base.x
                        , y = (canvasHeight / 2) + base.y

                    const size = s.size * 1
                        , radius = size / 2

                    ctx.beginPath()
                    ctx.arc(x, y, radius, 0, Math.PI * 2)
                    ctx.fillStyle = color
                    ctx.fill()
                }
            }, 50)

            return () => clearInterval(timeId)
        }
    }, [ctx, canvasWidth, canvasHeight, contentWidth, contentHeight, color, maxOffset])

    return (
        <>
            <Content ref={counterRef}>
                {children}
            </Content>
            <canvas ref={canvasRef} />
        </>
    )
}

export default memo(StarsOverflow)