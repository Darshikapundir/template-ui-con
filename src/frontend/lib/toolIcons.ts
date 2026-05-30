import {
  FolderOpen,
  FileText,
  Terminal,
  HeartPulse,
  Dumbbell,
  Mail,
  UtensilsCrossed,
  Settings,
  ClipboardCheck,
  Newspaper,
  PenLine,
  Megaphone,
  Database,
  type LucideIcon,
} from "lucide-react";

const toolIconMap: Record<string, LucideIcon> = {
  ls: FolderOpen,
  read_file: FileText,
  execute: Terminal,
  task: Newspaper,
  "bmi-analyst": HeartPulse,
  "physical-trainer": Dumbbell,
  "email-dispatcher": Mail,
  "diet-planner": UtensilsCrossed,
  reporter: Newspaper,
  "fact-checker": ClipboardCheck,
  editor: PenLine,
  "newsletter-publisher": Megaphone,
  research_rag_ingest_search_results: Database,
  research_rag_query: Database,
  research_rag_clear_story: Database,
};

export function getToolIcon(toolName: string): LucideIcon {
  return toolIconMap[toolName] ?? Settings;
}

const subagentNames = new Set([
  "bmi-analyst",
  "physical-trainer",
  "email-dispatcher",
  "diet-planner",
  "reporter",
  "fact-checker",
  "editor",
  "newsletter-publisher",
]);

/** Resolved name for deepagents `task` tool (subagent_type) or the tool name. */
export function resolveSubagentDisplayName(
  toolName: string,
  args?: Record<string, unknown> | null
): string {
  if (toolName === "task" && args && typeof args.subagent_type === "string") {
    return args.subagent_type;
  }
  return toolName;
}

export function getToolLabel(
  toolName: string,
  args?: Record<string, unknown> | null
): string {
  if (toolName === "task") {
    const st = args && typeof args.subagent_type === "string" ? args.subagent_type : null;
    return st ? `Subagent (${st})` : "Subagent task";
  }
  return subagentNames.has(toolName) ? "Subagent" : "Tool";
}
