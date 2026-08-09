"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { useAnimation } from "@/context/animation-context"
import React from "react"

// 定义苹果风格的动画变体
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0], // 苹果风格的缓动函数
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
}

export const slideInVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  },
  exit: { 
    y: 10, 
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
}

export const scaleInVariants: Variants = {
  hidden: { scale: 0.96, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  },
  exit: { 
    scale: 0.96, 
    opacity: 0,
    transition: { 
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
}

// 苹果风格的点击效果
export const tapAnimation = {
  whileTap: { scale: 0.97 }
}

// 苹果风格的悬停效果
export const hoverAnimation = {
  whileHover: { scale: 1.03, transition: { duration: 0.2 } }
}

interface AnimatedProps {
  children: React.ReactNode
  variant?: "fade" | "slide" | "scale"
  delay?: number
  duration?: number
  className?: string
  onClick?: () => void
  enableHoverEffect?: boolean
  enableTapEffect?: boolean
  isPresent?: boolean
}

export function Animated({
  children,
  variant = "fade",
  delay = 0,
  duration,
  className,
  onClick,
  enableHoverEffect = false,
  enableTapEffect = false,
  isPresent = true,
}: AnimatedProps) {
  const { enabled } = useAnimation()
  
  // 选择变体
  let variants
  switch (variant) {
    case "slide":
      variants = slideInVariants
      break
    case "scale":
      variants = scaleInVariants
      break
    case "fade":
    default:
      variants = fadeInVariants
  }

  // 自定义动画时间
  let customVariants = {...variants}
  if (duration) {
    customVariants = {
      ...variants,
      visible: {
        ...variants.visible,
        transition: {
          duration: duration,
          ease: [0.25, 0.1, 0.25, 1.0]
        }
      }
    }
  }

  // 禁用动画时直接渲染子元素
  if (!enabled) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      {isPresent && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={customVariants}
          className={className}
          onClick={onClick}
          {...(enableHoverEffect ? hoverAnimation : {})}
          {...(enableTapEffect ? tapAnimation : {})}
          style={{ transformOrigin: 'center' }}
          transition={{
            delay,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// 苹果风格的页面过渡包装器
export function PageTransition({ children }: { children: React.ReactNode }) {
  const { enabled } = useAnimation()
  
  if (!enabled) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  )
}