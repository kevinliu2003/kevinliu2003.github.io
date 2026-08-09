"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/language-context"

interface Project {
  title: { en: string; zh: string }
  description: { en: string; zh: string }
  tags: { en: string; zh: string }[]
}

const PROJECTS: Project[] = [
  {
    title: { en: "Subseasonal Antarctic Sea-Ice Prediction", zh: "南极海冰次季节预测" },
    tags: [
      { en: "Climate AI", zh: "气候 AI" },
      { en: "U-Net", zh: "U-Net" },
      { en: "Swin Transformer", zh: "Swin Transformer" },
    ],
    description: {
      en: "A research workflow for 1-8 week sea-ice concentration prediction, covering physical predictability, statistical and dynamical baselines, U-Net/Swin Transformer models, and stratified evaluation by lead time, season, and region.",
      zh: "面向 1-8 周海冰浓度预测的研究工作流，覆盖物理可预报性、统计与动力基线、U-Net/Swin Transformer 模型，以及按提前期、季节和区域的分层评估。",
    },
  },
  {
    title: { en: "5G Protocol and Multi-Channel Estimation Testing", zh: "5G 协议与多通道估计测试" },
    tags: [
      { en: "5G", zh: "5G" },
      { en: "USRP", zh: "USRP" },
      { en: "Performance", zh: "性能测试" },
    ],
    description: {
      en: "USRP-based protocol testing and a simplified multi-channel estimation implementation, with evaluation focused on throughput, latency, and reproducible reporting to engineering teams.",
      zh: "基于 USRP 的通信协议测试与简化多通道估计算法实现，重点评估吞吐量、时延，并向工程团队提供可复现的实验报告。",
    },
  },
  {
    title: { en: "Autonomous-Driving Perception Benchmarking", zh: "自动驾驶感知模型评测" },
    tags: [
      { en: "Computer Vision", zh: "计算机视觉" },
      { en: "CNN", zh: "CNN" },
      { en: "ADAS", zh: "ADAS" },
    ],
    description: {
      en: "A comparative evaluation of YOLO, SSD, Faster R-CNN, and related perception architectures for real-time detection speed, accuracy, object coverage, and integration into an existing vehicle system.",
      zh: "对 YOLO、SSD、Faster R-CNN 等感知架构进行对比评测，关注实时检测速度、准确率、目标覆盖范围及其在现有行车系统中的集成。",
    },
  },
]

export default function ProjectsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(
    new Map(PROJECTS.flatMap((project) => project.tags).map((tag) => [tag.en, tag])).values(),
  )

  const filteredProjects = PROJECTS.filter((project) => {
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      project.title[language].toLowerCase().includes(query) ||
      project.description[language].toLowerCase().includes(query)
    const matchesTag = selectedTag ? project.tags.some((tag) => tag.en === selectedTag) : true
    return matchesSearch && matchesTag
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{language === "en" ? "Projects" : "项目"}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {language === "en" ? "Selected research and engineering work." : "部分研究与工程实践。"}
          </p>
        </div>
        <Input
          type="search"
          placeholder={language === "en" ? "Search projects..." : "搜索项目..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedTag === null ? "default" : "outline"}
          className="cursor-pointer rounded-full px-3 py-1"
          onClick={() => setSelectedTag(null)}
        >
          {language === "en" ? "All" : "全部"}
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag.en}
            variant={selectedTag === tag.en ? "default" : "outline"}
            className="cursor-pointer rounded-full px-3 py-1"
            onClick={() => setSelectedTag(tag.en)}
          >
            {tag[language]}
          </Badge>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              {language === "en" ? "No projects match the current filters." : "没有符合当前筛选条件的项目。"}
            </CardContent>
          </Card>
        ) : (
          filteredProjects.map((project) => (
            <Card key={project.title.en} className="p-6 sm:p-8">
              <CardTitle className="text-2xl font-semibold tracking-tight">{project.title[language]}</CardTitle>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag.en} variant="outline" className="rounded-full bg-background/80 px-3 py-1">
                    {tag[language]}
                  </Badge>
                ))}
              </div>
              <CardContent className="mt-4 max-w-3xl p-0 text-sm leading-7 text-muted-foreground sm:text-base">
                {project.description[language]}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
