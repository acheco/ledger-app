import { cn } from '../../../lib/utils';

export default function Input({type = 'text', className, ...props}: React.ComponentProps<"input">){
  return (
    <input type={type} className={cn("border text-grey-900 border-beige-500 focus:outline-none focus:ring-1 focus:ring-beige-500 rounded-md px-5 py-3", className)} {...props} />
  )
}
