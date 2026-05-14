"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `accordion-answer-${index}`;

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500"
      >
        <span className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
            Q
          </span>
          <span className="text-sm font-semibold text-navy-950 leading-snug">
            {item.question}
          </span>
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`shrink-0 text-neutral-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={id}
        role="region"
        hidden={!isOpen}
        className="pb-5"
      >
        <div className="flex items-start gap-3 pl-0">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[10px] font-bold text-navy-700">
            A
          </span>
          <p className="text-sm text-neutral-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white px-6">
      {items.map((item, index) => (
        <AccordionRow
          key={item.question}
          item={item}
          isOpen={openIndexes.has(index)}
          onToggle={() => toggle(index)}
          index={index}
        />
      ))}
    </div>
  );
}
