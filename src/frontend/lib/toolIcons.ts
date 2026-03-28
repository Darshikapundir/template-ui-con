import {
  FolderOpen,
  FileText,
  Terminal,
  HeartPulse,
  Dumbbell,
  Send,
  UtensilsCrossed,
  Settings,
  type LucideIcon,
} from "lucide-react";

const toolIconMap: Record<string, LucideIcon> = {
  ls: FolderOpen,
  read_file: FileText,
  execute: Terminal,
  "wellness-analyst": HeartPulse,
  "physical-trainer": Dumbbell,
  "report-dispatcher": Send,
  "diet-planner": UtensilsCrossed,
};

export function getToolIcon(toolName: string): LucideIcon {
  return toolIconMap[toolName] ?? Settings;
}
