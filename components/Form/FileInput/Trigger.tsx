'use client'

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {

  const { id } = useFileInput();

  return (
                  <label
                    className="group hover:bg-violet-25 flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 dark:border-zinc-500 dark:text-zinc-300 dark:hover:border-violet-700 dark:hover:bg-violet-600"
                    htmlFor={id}
                  >
                    Selecione o arquivo
                    <div className="rounded-full p-2 border-6 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-800 dark:bg-zinc-700 dark:group-hover:border-violet-700 dark:group-hover:bg-violet-800">
                      <UploadCloud className="text-zinc-600 dark:text-zinc-400" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span>
                        <span className="text-sm font-semibold text-violet-700 dark:text-violet-500 dark:group-hover:text-violet-100">
                          Click to upload{" "}
                        </span>
                        or drag and drop
                      </span>
                      <span className="text-xs">
                        SVG,PNG,JPG or GIF (max. 800x400px)
                      </span>
                    </div>
                  </label>
  )
}