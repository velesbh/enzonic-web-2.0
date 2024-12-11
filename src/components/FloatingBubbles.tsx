import { useCallback, useRef, useEffect } from 'react'

interface Bubble {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const createBubble = useCallback((canvas: HTMLCanvasElement): Bubble => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1
    }
  }, [])

  const animate = useCallback((
    ctx: CanvasRenderingContext2D,
    bubbles: Bubble[],
    canvas: HTMLCanvasElement
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bubbles.forEach(bubble => {
      // Update position
      bubble.x += bubble.speedX
      bubble.y += bubble.speedY

      // Wrap around edges
      if (bubble.x < 0) bubble.x = canvas.width
      if (bubble.x > canvas.width) bubble.x = 0
      if (bubble.y < 0) bubble.y = canvas.height
      if (bubble.y > canvas.height) bubble.y = 0

      // Draw bubble
      ctx.beginPath()
      ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 255, 157, ${bubble.opacity})`
      ctx.fill()
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const bubbles: Bubble[] = []
    let animationFrameId: number

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize bubbles
    for (let i = 0; i < 50; i++) {
      bubbles.push(createBubble(canvas))
    }

    // Animation loop
    const render = () => {
      animate(ctx, bubbles, canvas)
      animationFrameId = requestAnimationFrame(render)
    }
    
    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [animate, createBubble])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
