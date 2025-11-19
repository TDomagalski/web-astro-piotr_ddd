import type { ReactNode } from "react";

/**
 * A generic Section component that applies consistent spacing around its
 * children.  Use this component to wrap the content of your page's sections
 * instead of repeating margin and padding classes throughout your markup.
 *
 * The default styling uses responsive TailwindCSS utility classes to ensure
 * comfortable spacing on both mobile and desktop.  You can pass an
 * additional `className` to append your own utility classes.  An optional
 * `id` allows you to target the section for anchors or skip links.  
 */
interface SectionProps {
  /** Unique identifier for the section, useful for linking */
  id?: string;
  /**
   * Additional CSS classes to append to the default spacing.  Avoid
   * overriding the base paddings unless you know exactly what you're doing.
   */
  className?: string;
  /** The content to be rendered inside the section */
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16 ${className}`.trim()}
    >
      {children}
    </section>
  );
}