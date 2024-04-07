import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
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

      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
