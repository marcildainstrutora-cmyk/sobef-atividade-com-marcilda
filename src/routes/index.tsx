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

const INFO = ["Curso Presencial", "40 Horas", "20 Vagas", "Tarde (13h às 17h)", "2ª a 6ª feira"];

const DATA_INICIAL = "Segunda-feira, 16 de novembro de 2026";
const WHATSAPP_INSTRUTORA = "85991841433";

const AULAS = [
  {
    titulo: "1. Writer — Marcadores, numeração e listas com vários níveis",
    texto:
      "Nesta aula, os alunos aprendem a organizar informações no LibreOffice Writer usando marcadores e numeração automática. O foco é criar listas com vários níveis (tópicos e subtópicos), ajustar o recuo de cada nível, trocar o estilo dos marcadores e reiniciar ou continuar a numeração. Ao final, cada aluno monta um documento com uma lista hierárquica bem estruturada, como um sumário ou um plano de aula.",
    exercicio:
      "Crie um documento no Writer com o título \"Plano de Estudos\". Monte uma lista com pelo menos 3 tópicos principais numerados e, dentro de cada tópico, 2 subtópicos com marcadores. Ajuste o recuo de cada nível e troque o estilo dos marcadores para um símbolo de sua preferência.",
    modelo:
      "Exemplo pronto — Plano de Estudos:\n1. Informática Básica\n   • Ligar e desligar o computador corretamente\n   • Usar o mouse e o teclado\n2. LibreOffice Writer\n   • Criar e salvar um documento\n   • Formatar textos com negrito e itálico\n3. Internet\n   • Pesquisar no Google\n   • Enviar e receber e-mails\n\nObserve como cada tópico principal tem numeração automática e os subtópicos usam marcadores com recuo. O seu trabalho deve ficar parecido com este, mas com o seu próprio conteúdo.",
  },
  {
    titulo: "2. Writer — Tabelas: inserir, mesclar células, bordas e cor de fundo",
    texto:
      "Nesta aula, os alunos aprendem a trabalhar com tabelas no LibreOffice Writer: inserir uma tabela, adicionar e remover linhas e colunas, mesclar e dividir células, personalizar bordas (espessura, estilo e cor) e aplicar cor de fundo para destacar cabeçalhos. Como atividade prática, cada aluno cria uma tabela formatada, como um quadro de horários ou uma lista de presença.",
    exercicio:
      "No Writer, crie um quadro de horários da semana com 6 colunas (Horário e os dias de 2ª a 6ª feira) e 4 linhas de horários. Na primeira linha, mescle as células para criar o título \"Quadro de Horários — Semana 1\". Na segunda linha, escreva os cabeçalhos: Horário | 2ª feira | 3ª feira | 4ª feira | 5ª feira | 6ª feira. Preencha as linhas de horários com suas atividades. Aplique fundo azul no título, fundo cinza no cabeçalho e letras brancas no título. Personalize as bordas da tabela, deixando a borda externa preta e mais grossa. Use o exemplo abaixo como modelo e faça um quadro parecido com seus próprios horários e matérias.",
    modelo:
      "Exemplo para você observar e fazer parecido no Writer:\n\nQuadro de Horários — Semana 1\nHorário | 2ª feira | 3ª feira | 4ª feira | 5ª feira | 6ª feira\n13h às 14h | Writer | Writer | Writer | Writer | Writer\n14h às 15h | Writer | Writer | Writer | Writer | Writer\n15h às 16h | Calc | Calc | Calc | Calc | Calc\n16h às 17h | Exercícios | Exercícios | Exercícios | Exercícios | Exercícios\n\nNo Writer, transforme este modelo em uma tabela: mescle as células da primeira linha para o título ocupar todas as colunas, aplique fundo azul e letras brancas ao título, e fundo cinza ao cabeçalho. Faça a borda externa preta e mais grossa. Depois, crie sua própria versão, escolhendo horários e matérias para preencher os dias da semana.",
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
  const [whatsapp, setWhatsapp] = useState(WHATSAPP_INSTRUTORA);
  const [fotos, setFotos] = useState<string[]>(AULAS.map(() => ""));

  useEffect(() => {
    setData(load("sobef-data", DATA_INICIAL));
    setTextos(load("sobef-textos", AULAS.map((a) => a.texto)));
    setWhatsapp(load("sobef-whatsapp", WHATSAPP_INSTRUTORA));
  }, []);

  useEffect(() => {
    localStorage.setItem("sobef-data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("sobef-textos", JSON.stringify(textos));
  }, [textos]);

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
    const titulo = AULAS[i]?.titulo ?? "Aula";
    const msg = `Olá, instrutora Marcilda! Segue a foto do meu trabalho da aula: ${titulo}. (Anexe a foto aqui na conversa antes de enviar.)`;
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
                    <div className="mt-3 rounded-md border border-border bg-card p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Texto pronto de exemplo — o aluno fará um parecido
                      </p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed">{aula.modelo}</p>
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
