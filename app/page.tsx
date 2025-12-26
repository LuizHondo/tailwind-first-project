import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import { SettingsTabs } from "@/components/SettingsTabs";
import { Mail } from "lucide-react";

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
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Your Photo
            </label>
            <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              This will be displayed in your profile.
            </span>
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
            </label>
            <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Write a short introduction.
            </span>
          </div>
          <div className="grid-cols-form grid gap-3 pb-5">
            <label
              htmlFor="Portfolio projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Portfolio projects
            </label>
            <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Share a few snippets of your work.
            </span>
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
