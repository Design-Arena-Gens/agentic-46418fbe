import { ReactNode } from "react";

type FlowchartCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
};

export function FlowchartCard({
  title,
  subtitle,
  description,
  children,
}: FlowchartCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
      <header className="border-b border-slate-200 bg-slate-50 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}
      </header>
      <div className="overflow-x-auto px-6 py-8">
        <div className="inline-flex min-w-full flex-col items-center gap-4">
          {children}
        </div>
      </div>
    </section>
  );
}
