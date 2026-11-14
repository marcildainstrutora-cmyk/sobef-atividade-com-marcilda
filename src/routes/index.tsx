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

const AULAS = [
  {
    titulo: "Writer — Marcadores, numeração e listas com vários níveis",
    texto:
      "Nesta aula, os alunos aprendem a organizar informações no LibreOffice Writer usando marcadores e numeração automática. O foco é criar listas com vários níveis (tópicos e subtópicos), ajustar o recuo de cada nível, trocar o estilo dos marcadores e reiniciar ou continuar a numeração. Ao final, cada aluno monta um documento com uma lista hierárquica bem estruturada, como um sumário ou um plano de aula.",
  },
  {
    titulo: "Writer — Tabelas: inserir, mesclar células, bordas e cor de fundo",
    texto:
      "Nesta aula, os alunos aprendem a trabalhar com tabelas no LibreOffice Writer: inserir uma tabela, adicionar e remover linhas e colunas, mesclar e dividir células, personalizar bordas (espessura, estilo e cor) e aplicar cor de fundo para destacar cabeçalhos. Como atividade prática, cada aluno cria uma tabela formatada, como um quadro de horários ou uma lista de presença.",
  },
];

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
        <section className="mt-8">
          <h2 className="text-lg font-bold sm:text-xl">Aulas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {AULAS.map((aula) => (
              <article key={aula.titulo} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <h3 className="font-semibold leading-snug">{aula.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{aula.texto}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
