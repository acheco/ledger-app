import { cn } from '../../../lib/utils';

export default function Button({children, className, ...props}: React.ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={cn("w-full rounded-md bg-grey-900 py-4 text-sm leading-normal font-bold tracking-normal text-white")}
      {...props}
    >
      {children}
    </button>
  )
}
