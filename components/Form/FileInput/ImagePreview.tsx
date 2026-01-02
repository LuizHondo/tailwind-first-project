'use client'

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
 const {files} = useFileInput();

 const previewURL = useMemo(() => {
    if(files.length === 0){
      return null;
    }

    return URL.createObjectURL(files[0]);
 }, [files]);

  if(previewURL == null){
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-300">
      <div className="flex items-start justify-center">
        <User className="h-8 w-8 text-violet-400 dark:text-violet-600" />
      </div>
    </div>
  );
} else {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previewURL}
      alt=""
      className="h-16 w-16 rounded-full object-cover"
    />
  );
}
}