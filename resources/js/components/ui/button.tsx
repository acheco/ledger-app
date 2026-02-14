import { cn } from '../../../lib/utils';

export default function Button({children, className, ...props}: React.ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={cn("flex items-center justify-center gap-2 w-full rounded-md bg-grey-900 py-4 text-sm leading-normal font-bold tracking-normal text-white", className)}
      {...props}
    >
      {children}
    </button>
  )
}
