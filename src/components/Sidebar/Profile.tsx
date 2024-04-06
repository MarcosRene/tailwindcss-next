import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/MarcosRene.png"
        alt="User profiles"
        className="size-10 rounded"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Marcos Renê</span>
        <span className="truncate text-sm text-zinc-500">
          marcosrenedev@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-200"
      >
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
