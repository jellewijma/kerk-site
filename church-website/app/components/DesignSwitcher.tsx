"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, ChevronUp } from "lucide-react";

const designs = [
  { id: "v1", name: "Pro Standard", color: "bg-zinc-900" },
  { id: "v5", name: "Nature & Peace", color: "bg-emerald-500" },
  { id: "v6", name: "Cinema Noir", color: "bg-amber-500" },
  { id: "v7", name: "Scandinavian", color: "bg-stone-400" },
  { id: "v8", name: "Ocean Calm", color: "bg-cyan-500" },
  { id: "v9", name: "Sunrise Hope", color: "bg-orange-500" },
  { id: "v10", name: "Editorial Grace", color: "bg-neutral-900" },
];

export default function DesignSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentDesign = designs.find((d) => pathname?.startsWith(`/${d.id}`));

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden mb-2 min-w-[180px]">
          {designs.map((design) => (
            <Link
              key={design.id}
              href={`/${design.id}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 transition-colors ${
                currentDesign?.id === design.id ? "bg-neutral-100" : ""
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${design.color}`} />
              <span className="text-sm font-medium text-neutral-700">{design.name}</span>
            </Link>
          ))}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 border-t border-neutral-100 hover:bg-neutral-50 transition-colors"
          >
            <Layers className="w-3 h-3 text-neutral-400" />
            <span className="text-sm text-neutral-500">All designs</span>
          </Link>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-3 rounded-full shadow-xl hover:bg-neutral-800 transition-colors"
      >
        <div className={`w-3 h-3 rounded-full ${currentDesign?.color || "bg-white"}`} />
        <span className="text-sm font-medium">{currentDesign?.name || "Design"}</span>
        <ChevronUp className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
