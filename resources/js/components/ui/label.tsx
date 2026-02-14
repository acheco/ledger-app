import React from 'react';
import { cn } from '../../../lib/utils';

export default function Label({ htmlFor, className, children, ...props }: React.ComponentProps<"label">) {
    return <label htmlFor={htmlFor} className={cn("mb-1 text-xs leading-1.5 tracking-normal font-bold text-grey-500", className)} {...props}>
      {children}
    </label>;
}
