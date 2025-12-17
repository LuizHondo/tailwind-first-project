import { ChevronDown, Home } from "lucide-react";

export function MainNavigation() {
  return (
    <nav className="w-full space-y-0.5">
      <a href="" className="flex items-center gap-3 rounded px-3 py-2">
        <Home className="h-5 w-5 text-zinc-200" />
        <span className="font-medium text-zinc-500">Home</span>
        <ChevronDown className="ml-auto h-5 w-5" />
      </a>
    </nav>
  );
}
