import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type SectionProps = ComponentProps<'section'>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('w-full py-16 sm:py-20 md:py-24', className)} {...props}>
      {children}
    </section>
  );
}