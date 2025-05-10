import { Crown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SubscriptionBoxProps {
  isExpanded: boolean
}

export function SubscriptionBox({ isExpanded }: SubscriptionBoxProps) {
  if (!isExpanded) return null

  return (
    <div className="mx-2 mb-4 p-3 rounded-lg bg-sidebar-accent/30 border border-sidebar-accent">
      <div className="flex items-center gap-2 mb-2">
        <Crown className="h-5 w-5 text-yellow-400" />
        <h3 className="font-medium">Free Plan</h3>
      </div>
      <p className="text-xs mb-3 text-sidebar-foreground/80">
        Upgrade to Premium for advanced cattle management features
      </p>
      <Button
        size="sm"
        className="w-full text-xs bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80"
      >
        <span>Upgrade Now</span>
        <ExternalLink className="ml-1 h-3 w-3" />
      </Button>
    </div>
  )
}
