import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

const INFO = ["Curso Presencial", "40 Horas", "15 Vagas", "Tarde (13h às 17h)", "2ª a 6ª feira"];

const DATA_INICIAL = "Segunda-feira, 16 de novembro de 2026";

const AULAS = [
  {
    titulo: "1. Writer — Marcadores, numeração e listas com vários níveis",
    texto:
      "Nesta aula, os alunos aprendem a organizar informações no LibreOffice Writer usando marcadores e numeração automática. O foco é criar listas com vários níveis (tópicos e subtópicos), ajustar o recuo de cada nível, trocar o estilo dos marcadores e reiniciar ou continuar a numeração. Ao final, cada aluno monta um documento com uma lista hierárquica bem estruturada, como um sumário ou um plano de aula.",
    exercicio:
      "Crie um documento no Writer com o título \"Plano de Estudos\". Monte uma lista com pelo menos 3 tópicos principais numerados e, dentro de cada tópico, 2 subtópicos com marcadores. Ajuste o recuo de cada nível e troque o estilo dos marcadores para um símbolo de sua preferência.",
  },
  {
    titulo: "2. Writer — Tabelas: inserir, mesclar células, bordas e cor de fundo",
    texto:
      "Nesta aula, os alunos aprendem a trabalhar com tabelas no LibreOffice Writer: inserir uma tabela, adicionar e remover linhas e colunas, mesclar e dividir células, personalizar bordas (espessura, estilo e cor) e aplicar cor de fundo para destacar cabeçalhos. Como atividade prática, cada aluno cria uma tabela formatada, como um quadro de horários ou uma lista de presença.",
    exercicio:
      "Monte um quadro de horários da semana com 6 colunas (Horário, 2ª a 6ª feira) e 4 linhas de horários. Mescle as células do título na primeira linha, aplique cor de fundo no cabeçalho e personalize as bordas com espessura e cor diferentes.",
  },
];

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

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
  const [aba, setAba] = useState<"editar" | "formatado">("editar");
  const [data, setData] = useState(DATA_INICIAL);
  const [textos, setTextos] = useState<string[]>(AULAS.map((a) => a.texto));
  const [respostas, setRespostas] = useState<string[]>(AULAS.map(() => ""));
  const [whatsapp, setWhatsapp] = useState("");
  const [fotos, setFotos] = useState<string[]>(AULAS.map(() => ""));

  useEffect(() => {
    setData(load("sobef-data", DATA_INICIAL));
    setTextos(load("sobef-textos", AULAS.map((a) => a.texto)));
    setRespostas(load("sobef-respostas", AULAS.map(() => "")));
    setWhatsapp(load("sobef-whatsapp", ""));
  }, []);

  useEffect(() => {
    localStorage.setItem("sobef-data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("sobef-textos", JSON.stringify(textos));
  }, [textos]);

  useEffect(() => {
    localStorage.setItem("sobef-respostas", JSON.stringify(respostas));
  }, [respostas]);

  useEffect(() => {
    localStorage.setItem("sobef-whatsapp", JSON.stringify(whatsapp));
  }, [whatsapp]);

  function onFoto(i: number, file: File | null) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setFotos((prev) => prev.map((f, j) => (j === i ? String(reader.result) : f)));
    reader.readAsDataURL(file);
  }

  function enviarWhatsApp(i: number) {
    const numero = whatsapp.replace(/\D/g, "");
    if (!numero) {
      alert("Primeiro preencha o WhatsApp da instrutora no campo acima.");
      return;
    }
    const msg = `Olá, instrutora Marcilda! Segue a foto do meu trabalho da aula: ${AULAS[i].titulo}. (Anexe a foto aqui na conversa antes de enviar.)`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");
  }

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

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <label htmlFor="data-segunda" className="text-sm font-semibold">
              Data de segunda-feira (editável)
            </label>
            <input
              id="data-segunda"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="rounded-lg border border-border bg-card p-4 print:hidden">
            <label htmlFor="whatsapp-instrutora" className="text-sm font-semibold">
              WhatsApp da instrutora (com DDD)
            </label>
            <input
              id="whatsapp-instrutora"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Ex.: 85999998888"
              inputMode="tel"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-2 print:hidden">
          <button
            onClick={() => setAba("editar")}
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              aba === "editar"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card hover:bg-accent"
            }`}
          >
            Editar textos
          </button>
          <button
            onClick={() => setAba("formatado")}
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              aba === "formatado"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card hover:bg-accent"
            }`}
          >
            Texto formatado
          </button>
        </div>

        {aba === "editar" ? (
          <section className="mt-6">
            <h2 className="text-lg font-bold sm:text-xl">Aulas — edição</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Edite o texto de cada aula abaixo. As alterações ficam salvas neste navegador.
            </p>
            <div className="mt-4 grid gap-4">
              {AULAS.map((aula, i) => (
                <article key={aula.titulo} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-semibold leading-snug">{aula.titulo}</h3>
                  <textarea
                    value={textos[i]}
                    onChange={(e) =>
                      setTextos((prev) => prev.map((t, j) => (j === i ? e.target.value : t)))
                    }
                    rows={6}
                    className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-ring"
                  />
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section className="mt-6">
            <h2 className="text-lg font-bold sm:text-xl">Aulas — texto formatado</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Início: <strong>{data}</strong>
            </p>
            <div className="mt-4 grid gap-4">
              {AULAS.map((aula, i) => (
                <article key={aula.titulo} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-semibold leading-snug">{aula.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{textos[i]}</p>
                  <div className="mt-4 rounded-md border border-border bg-secondary/50 p-4">
                    <h4 className="text-sm font-semibold">Exercício prático</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{aula.exercicio}</p>
                    <div className="mt-3 print:hidden">
                      <label htmlFor={`resposta-${i}`} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Texto do educando (escreva o seu aqui)
                      </label>
                      <textarea
                        id={`resposta-${i}`}
                        value={respostas[i]}
                        onChange={(e) =>
                          setRespostas((prev) => prev.map((r, j) => (j === i ? e.target.value : r)))
                        }
                        rows={5}
                        placeholder="Escreva aqui o seu texto sobre esta aula..."
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="mt-4 rounded-md border border-border bg-secondary/50 p-4 print:hidden">
                      <h4 className="text-sm font-semibold">Enviar trabalho para correção</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Faça o exercício no Writer, tire uma foto ou print da tela e envie para a
                        instrutora Marcilda corrigir.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <label className="cursor-pointer rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent">
                          {fotos[i] ? "Trocar foto" : "Escolher foto"}
                          <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            className="hidden"
                            onChange={(e) => onFoto(i, e.target.files?.[0] ?? null)}
                          />
                        </label>
                        <button
                          onClick={() => enviarWhatsApp(i)}
                          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          Enviar pelo WhatsApp
                        </button>
                      </div>
                      {fotos[i] && (
                        <img
                          src={fotos[i]}
                          alt={`Foto do trabalho — ${aula.titulo}`}
                          className="mt-3 max-h-64 rounded-md border border-border"
                        />
                      )}
                    </div>
                    <div className="mt-3 hidden print:block">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Espaço para resposta
                      </p>
                      <div className="mt-2 space-y-6">
                        {Array.from({ length: 6 }).map((_, l) => (
                          <div key={l} className="border-b border-dashed border-muted-foreground/40" />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
