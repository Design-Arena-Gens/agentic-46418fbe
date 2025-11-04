import { ReactNode } from "react";

type FlowNodeBaseProps = {
  label: ReactNode;
  className?: string;
};

export function StartNode({ label }: FlowNodeBaseProps) {
  return (
    <div className="flex h-14 w-48 items-center justify-center rounded-full border-2 border-slate-500 bg-slate-100 text-center text-sm font-semibold text-slate-800">
      {label}
    </div>
  );
}

export function EndNode({ label }: FlowNodeBaseProps) {
  return (
    <div className="flex h-14 w-48 items-center justify-center rounded-full border-2 border-rose-500 bg-rose-50 text-center text-sm font-semibold text-rose-700">
      {label}
    </div>
  );
}

export function ProcessNode({ label, className }: FlowNodeBaseProps) {
  return (
    <div
      className={`relative flex w-56 items-center justify-center rounded border-2 border-slate-500 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm ${className ?? ""}`}
    >
      {label}
    </div>
  );
}

export function PredefinedProcessNode({ label, className }: FlowNodeBaseProps) {
  return (
    <div
      className={`relative flex w-56 items-center justify-center rounded border-2 border-slate-500 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm ${className ?? ""}`}
    >
      <span className="absolute inset-y-1 left-2 w-1 rounded-full bg-slate-500" />
      <span className="absolute inset-y-1 right-2 w-1 rounded-full bg-slate-500" />
      <span className="max-w-[9.5rem]">{label}</span>
    </div>
  );
}

export function DecisionNode({ label, className }: FlowNodeBaseProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative flex h-32 w-32 rotate-45 items-center justify-center border-2 border-slate-500 bg-white px-6 py-8 text-center text-sm font-semibold leading-tight text-slate-700 shadow-sm ${className ?? ""}`}
      >
        <span className="-rotate-45 max-w-[7rem]">{label}</span>
      </div>
    </div>
  );
}

export function Connector({ className }: { className?: string }) {
  return (
    <div
      className={`h-8 w-px bg-slate-400 ${className ?? ""}`}
    />
  );
}

export function BranchConnector({
  yesLabel,
  noLabel,
}: {
  yesLabel?: string;
  noLabel?: string;
}) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="h-0.5 w-full max-w-xl bg-slate-400" />
      {yesLabel && (
        <span className="absolute -top-5 left-2 rounded bg-white px-1 text-xs font-semibold text-emerald-600">
          {yesLabel}
        </span>
      )}
      {noLabel && (
        <span className="absolute -top-5 right-2 rounded bg-white px-1 text-xs font-semibold text-rose-600">
          {noLabel}
        </span>
      )}
    </div>
  );
}

export function LoopBack({
  label,
}: {
  label?: string;
}) {
  return (
    <div className="relative w-full max-w-xl">
      <svg
        viewBox="0 0 240 120"
        className="h-24 w-full text-slate-400"
        preserveAspectRatio="none"
      >
        <path
          d="M10 110 C10 40, 230 40, 230 110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
        <polygon
          points="230,110 238,110 234,102"
          fill="currentColor"
        />
      </svg>
      {label && (
        <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded bg-white px-2 text-xs font-semibold text-slate-600">
          {label}
        </span>
      )}
    </div>
  );
}

export function MergePoint({ label }: { label?: string }) {
  return (
    <div className="relative flex w-full max-w-xl items-center justify-center">
      <div className="h-px w-full bg-slate-400" />
      <span className="absolute -top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-400 bg-white text-xs font-semibold text-slate-600">
        +
      </span>
      {label && (
        <span className="absolute top-4 rounded bg-white px-2 text-xs font-semibold text-slate-600">
          {label}
        </span>
      )}
    </div>
  );
}
