import { cn } from '../../../lib/utils';

export default function Input({type = 'text', className, ...props}: React.ComponentProps<"input">){
  return (
    <input type={type} className={cn("border border-beige-500 min-h-11 rounded-md", className)} {...props} />
  )
}
