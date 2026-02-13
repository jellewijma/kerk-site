import Link from "next/link";
import { ArrowRight, Layers, Heart, Sun, BookOpen, Clapperboard, Minimize, Anchor, Sunrise, PenTool } from "lucide-react";

export default function Home() {
  const versions = [
    {
      id: "v1",
      title: "The Pro Standard",
      description: "Clean, high-contrast, conversion-focused. Bold typography with floating CTA and dramatic hero section.",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-zinc-900 text-white hover:bg-zinc-800",
    },
    {
      id: "v5",
      title: "Nature & Peace",
      description: "Fresh greens, sky blues, and airy layout. Glassmorphism effects with organic shapes and calming vibes.",
      icon: <Sun className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200",
    },
    {
      id: "v6",
      title: "Cinema Noir",
      description: "Dark, cinematic aesthetic with warm amber accents. Film-grain textures, spotlight effects, and dramatic shadows.",
      icon: <Clapperboard className="w-6 h-6" />,
      color: "bg-neutral-950 text-amber-400 hover:bg-neutral-900 border border-amber-500/30",
    },
    {
      id: "v7",
      title: "Scandinavian Minimal",
      description: "Ultra-clean design with generous whitespace. Refined typography, subtle animations, and elegant simplicity.",
      icon: <Minimize className="w-6 h-6" />,
      color: "bg-stone-50 text-stone-900 hover:bg-stone-100 border border-stone-200",
    },
    {
      id: "v8",
      title: "Ocean Calm",
      description: "Deep blues and cyan gradients. Wave motifs, glassmorphism cards, and a maritime feel for the port city.",
      icon: <Anchor className="w-6 h-6" />,
      color: "bg-gradient-to-br from-cyan-50 to-blue-100 text-cyan-900 hover:from-cyan-100 hover:to-blue-200 border border-cyan-200",
    },
    {
      id: "v9",
      title: "Sunrise Hope",
      description: "Warm gradients from dark to light. Dawn colors, optimism, and a journey from night to day.",
      icon: <Sunrise className="w-6 h-6" />,
      color: "bg-gradient-to-br from-orange-900 to-amber-100 text-white hover:from-orange-800 hover:to-amber-200",
    },
    {
      id: "v10",
      title: "Editorial Grace",
      description: "Magazine-inspired layout with asymmetric grids. Bold typography, elegant transitions, and sophisticated style.",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-200",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            Design Prototypes
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Project: <span className="font-semibold text-neutral-900">Evangeliegemeente De Deur Maasluis</span>
          </p>
          <p className="mt-2 text-neutral-500">
            Select a version below to explore different design directions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {versions.map((v) => (
            <Link
              key={v.id}
              href={`/${v.id}`}
              className={`group relative p-8 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-start gap-4 ${v.color}`}
            >
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-black/5">
                {v.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  {v.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h2>
                <p className="opacity-80 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
