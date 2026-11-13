import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/mp-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atividades SOBEF — Instrutora Marcilda Pereira" },
      { name: "description", content: "Atividades SOBEF de Informática Avançada com a instrutora Marcilda Pereira." },
      { property: "og:title", content: "Atividades SOBEF — Marcilda Pereira" },
      { property: "og:description", content: "Atividades SOBEF de Informática Avançada com a instrutora Marcilda Pereira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INFO = ["Curso Presencial", "40 Horas", "15 Vagas", "Manhã (8h às 12h)", "2ª a 6ª feira"];

function copySummary() {
  const text = [
    "Informática Avançada — Atividades",
    "Cursos de Qualificação — ESBC x SOBEF • Instrutora: Marcilda Pereira",
    ...INFO,
    "Executora: SOBEF",
  ].join("\n");
  navigator.clipboard.writeText(text).then(() => alert("Resumo copiado!"));
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-5">
          <img src={logo.url} alt="Logo Marcilda Pereira" className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              Curso Presencial • 2026
            </span>
            <h1 className="mt-2 text-xl font-bold leading-tight sm:text-3xl">
              Informática Avançada — Atividades
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">Cursos de Qualificação — ESBC x SOBEF • Instrutora: Marcilda Pereira</p>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-8">
        <div className="flex flex-wrap gap-2 print:hidden">
          <button onClick={() => window.print()} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Imprimir / PDF
          </button>
          <button onClick={copySummary} className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-accent">
            Copiar resumo
          </button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {INFO.map((item) => (
            <li key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
              {item}
            </li>
          ))}
          <li className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
            <span className="text-muted-foreground">Executora:</span> <strong>SOBEF</strong>
          </li>
        </ul>
      </main>
    </div>
  );
}
