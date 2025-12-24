import { SettingsTabs } from "@/components/SettingsTabs";

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

        <form className="mt-6 flex w-full flex-col" id="settings">
          {" "}
          form
        </form>
      </div>
    </>
  );
}
