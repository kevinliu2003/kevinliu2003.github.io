"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

export default function ResearchPage() {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">{language === "en" ? "Research" : "研究"}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{language === "en" ? "Subseasonal Antarctic Sea-Ice Prediction" : "南极海冰次季节预测"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 leading-7 text-muted-foreground">
          <p>
            {language === "en"
              ? "My current work studies 1-8 week Antarctic sea-ice concentration prediction through physical predictability, statistical baselines, dynamical forecast systems, and AI methods."
              : "目前的研究围绕 1-8 周南极海冰浓度预测展开，涵盖物理可预报性、统计基线、动力预报系统与 AI 方法。"}
          </p>
          <p>
            {language === "en"
              ? "The technical workflow includes U-Net and Swin Transformer baselines, multivariable inputs, physical constraints, sea-ice-edge evaluation, and stratified validation by lead time, season, and region."
              : "技术路线包括 U-Net 与 Swin Transformer 基线、多变量输入、物理约束、海冰边缘评估，以及按提前期、季节和区域的分层验证。"}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{language === "en" ? "Antarctic Field Experience" : "南极科考经历"}</CardTitle>
        </CardHeader>
        <CardContent className="leading-7 text-muted-foreground">
          {language === "en"
            ? "From March 13 to April 29, 2026, I participated in China's 42nd Antarctic Scientific Expedition aboard the research icebreaker Xuelong 2."
            : "2026年03月13日至04月29日，我随“雪龙 2”号科考船参加中国第 42 次南极科学考察。"}
        </CardContent>
      </Card>
    </div>
  )
}
