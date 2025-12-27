import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import { SettingsTabs } from "@/components/SettingsTabs";
import { Mail, UploadCloud, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-100">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:shadow-zinc-800 dark:hover:bg-zinc-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 dark:shadow-zinc-800"
            >
              Save
            </button>
          </div>
        </div>

        <form
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
          id="settings"
        >
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" type="name" defaultValue="Luiz" />
              </InputRoot>
              <InputRoot>
                <InputControl type="name" defaultValue="Hondo" />
              </InputRoot>
            </div>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Email
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputPrefix>
                  <Mail />
                </InputPrefix>
                <InputControl
                  id="email"
                  type="email"
                  defaultValue="exemplo@dominio.com.br"
                />
              </InputRoot>
            </div>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed in your profile.
              </span>
            </label>
            <div className="flex w-full flex-row gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-300">
                <div className="flex items-start justify-center">
                  <User className="h-8 w-8 text-violet-400 dark:text-violet-600" />
                </div>
              </div>
              <label
                className="group hover:bg-violet-25 flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 dark:border-zinc-500 dark:text-zinc-300 dark:hover:border-violet-700 dark:hover:bg-violet-600"
                htmlFor="photo"
              >
                Selecione o arquivo
                <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-800 dark:bg-zinc-700 dark:group-hover:border-violet-700 dark:group-hover:bg-violet-800">
                  <UploadCloud className="text-zinc-600 dark:text-zinc-500" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span>
                    <span className="text-sm font-semibold text-violet-700 dark:text-violet-500 dark:group-hover:text-violet-950">
                      Click to upload{" "}
                    </span>
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG,PNG,JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputPrefix>
                  <Mail />
                </InputPrefix>
                <InputControl id="role" type="text" defaultValue="CTO" />
              </InputRoot>
            </div>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Country
            </label>
            <div></div>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Timezone
            </label>
            <div></div>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction.
              </span>
            </label>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="Portfolio projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Share a few snippets of your work.
              </span>
            </label>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:shadow-zinc-800 dark:hover:bg-zinc-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 dark:shadow-zinc-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
