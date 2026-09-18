import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectCard({
  title,
  description,
  status,
  tags = [],
  link = "#",
}) {
  return (
    <Card className="flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-200 bg-white">
      <CardHeader className="p-6 pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-bold text-gray-900">{title}</CardTitle>
          <Badge variant={status === "Shipped" ? "default" : "secondary"}>
            {status}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-700 pt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-mono font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-3">
        <Button
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          onClick={() => {
            if (link && link !== "#") window.open(link, "_blank")
          }}
        >
          View project
        </Button>
      </CardFooter>
    </Card>
  )
}
