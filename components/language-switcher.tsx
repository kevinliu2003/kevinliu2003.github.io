"use client"

import { useLanguage } from "@/context/language-context"
import { useAnimation } from "@/context/animation-context"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { enabled } = useAnimation()

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            enabled && "transition-all duration-200 ease-out"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={enabled ? { opacity: 0, y: -10 } : undefined}
              animate={enabled ? { opacity: 1, y: 0 } : undefined}
              exit={enabled ? { opacity: 0, y: 10 } : undefined}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {language === "en" ? "EN" : "中文"}
            </motion.span>
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <motion.div
          initial={enabled ? { opacity: 0, scale: 0.95 } : undefined}
          animate={enabled ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <motion.div
            variants={enabled ? dropdownItemVariants : undefined}
            initial="hidden"
            animate="visible"
            transition={{ 
              duration: 0.15, 
              delay: 0.05,
              ease: [0.25, 0.1, 0.25, 1.0] 
            }}
          >
            <DropdownMenuItem 
              onClick={() => setLanguage("en")}
              className={cn(
                enabled && "transition-all duration-200 ease-out"
              )}
            >
              English
            </DropdownMenuItem>
          </motion.div>
          <motion.div
            variants={enabled ? dropdownItemVariants : undefined}
            initial="hidden"
            animate="visible"
            transition={{ 
              duration: 0.15, 
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1.0] 
            }}
          >
            <DropdownMenuItem 
              onClick={() => setLanguage("zh")}
              className={cn(
                enabled && "transition-all duration-200 ease-out"
              )}
            >
              中文
            </DropdownMenuItem>
          </motion.div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}