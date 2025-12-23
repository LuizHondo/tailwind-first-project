/* eslint-disable @next/next/no-img-element */
import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="http://github.com/luizhondo.png"
        className="h-10 w-10 rounded-full"
        alt="Profile Image"
      />
      <div className="flex flex-col items-start truncate">
        <span className="truncate text-sm text-zinc-200">Luiz Maneiro</span>
        <span className="truncate text-sm text-zinc-500">luiz@maneiro.com</span>
      </div>
      <button className="rounded-md p-2 hover:bg-zinc-800">
        <LogOut className="h-5 w-5 text-zinc-400" />
      </button>
    </div>
  );
}
