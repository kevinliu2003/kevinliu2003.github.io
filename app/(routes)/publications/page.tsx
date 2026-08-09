"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

export default function PublicationsPage() {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {language === "en" ? "Publications" : "出版物"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {language === "en" ? "Research papers and academic outputs." : "研究论文与学术成果。"}
        </p>
      </div>

      <Card className="border-dashed">
        <CardContent className="p-8 text-center text-muted-foreground">
          {language === "en"
            ? "No publications are listed yet. Current work centers on subseasonal Antarctic sea-ice prediction and AI-based forecasting."
            : "暂无已列出的出版物。目前的研究工作聚焦于南极海冰次季节预测与 AI 预报方法。"}
        </CardContent>
      </Card>
    </div>
  )
}
