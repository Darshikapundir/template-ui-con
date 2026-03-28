import {
  FolderOpen,
  FileText,
  Terminal,
  HeartPulse,
  Dumbbell,
  Mail,
  UtensilsCrossed,
  Settings,
  type LucideIcon,
} from "lucide-react";

const toolIconMap: Record<string, LucideIcon> = {
  ls: FolderOpen,
  read_file: FileText,
  execute: Terminal,
  "bmi-analyst": HeartPulse,
  "physical-trainer": Dumbbell,
  "email-dispatcher": Mail,
  "diet-planner": UtensilsCrossed,
};

export function getToolIcon(toolName: string): LucideIcon {
  return toolIconMap[toolName] ?? Settings;
}

const subagentNames = new Set([
  "bmi-analyst",
  "physical-trainer",
  "email-dispatcher",
  "diet-planner",
]);

export function getToolLabel(toolName: string): string {
  return subagentNames.has(toolName) ? "Subagent" : "Tool";
}
