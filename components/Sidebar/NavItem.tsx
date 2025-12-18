import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemsProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemsProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 transition duration-140 ease-out hover:scale-111 hover:bg-violet-950"
    >
      <Icon className="h-5 w-5 text-zinc-200" />
      <span className="font-medium text-zinc-500 group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 group-hover:text-violet-300" />
    </a>
  );
}
