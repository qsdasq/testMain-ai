"use client";


import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";


const tools =[
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10"
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-500",
    bgColor: "text-emerald-500/10",
    href: '/music',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "text-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    bgColor: "text-green-700/10",
    href: '/code',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgcolor: "text-pink-700/10",
    href: '/image',
  }
]
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Исследуйте возможности искусственного интеллекта
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Общайтесь с самым умным искусственным интеллектом - ощутите всю мощь
          </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} 
          key={tool.href} 
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;