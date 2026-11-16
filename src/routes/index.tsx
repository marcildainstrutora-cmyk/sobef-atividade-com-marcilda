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

const INFO = ["Curso Presencial", "100 Horas", "Vagas: 20", "Horário: 13h às 17h", "2ª a 6ª feira", "Acesso em notebook, tablet e celular"];

const DATA_INICIAL = "Período a definir";
const WHATSAPP_INSTRUTORA = "85997841433";

const AULAS = [
  {
    titulo: "1. Marcadores, numeração e listas com vários níveis",
    texto:
      "Nesta aula, os alunos aprendem a organizar informações no LibreOffice Writer usando marcadores e numeração automática. O foco é criar listas com vários níveis (tópicos e subtópicos), ajustar o recuo de cada nível, trocar o estilo dos marcadores e reiniciar ou continuar a numeração. Ao final, cada aluno monta um documento com uma lista hierárquica bem estruturada, como um sumário ou um plano de aula.",
    exercicio:
      "Digite o texto modelo abaixo no Writer e siga as etapas para aplicar numeração, marcadores e recuos. Ao terminar, confira o resultado na aba Texto formatado.",
    passos: [
      "Abra um documento em branco no Writer e digite o título Plano de Estudos. Selecione o título, aplique negrito, centralize e aumente o tamanho da fonte.",
      "Nas linhas seguintes, digite os três tópicos principais do texto modelo, um por linha. Selecione essas linhas e aplique uma lista numerada automática.",
      "Abaixo de cada tópico, digite os dois subtópicos. Selecione cada par de subtópicos e aplique marcadores.",
      "Use Tab ou Aumentar recuo para colocar os subtópicos em um nível abaixo. Use Shift+Tab ou Diminuir recuo para voltar ao nível principal.",
      "Troque o símbolo dos marcadores pelo estilo de sua preferência. Confira que os tópicos principais continuam numerados e os subtópicos estão recuados.",
      "Acrescente ao final uma seção chamada Materiais necessários e liste três itens. Faça uma lista numerada separada chamada Etapas da semana com quatro tarefas.",
      "Reordene uma tarefa usando os comandos de mover item da lista ou recortando e colando a linha. Confira se os números se ajustaram automaticamente.",
      "Salve o arquivo como plano-de-estudos.odt. Faça uma cópia com outro nome e compare a organização das duas listas.",
    ],
    modelo:
      "PLANO DE ESTUDOS\n\nInformática Básica\nLigar e desligar o computador corretamente\nUsar o mouse e o teclado\n\nLibreOffice Writer\nCriar e salvar um documento\nFormatar textos com negrito e itálico\n\nInternet\nPesquisar informações com segurança\nEnviar e receber e-mails",
    conferencia: [],
  },
  {
    titulo: "2. Tabelas: inserir, mesclar células, bordas e cor de fundo",
    texto:
      "Nesta aula, os alunos aprendem a trabalhar com tabelas no LibreOffice Writer: inserir uma tabela, adicionar e remover linhas e colunas, mesclar e dividir células, personalizar bordas (espessura, estilo e cor) e aplicar cor de fundo para destacar cabeçalhos. Como atividade prática, cada aluno cria uma tabela formatada, como um quadro de horários ou uma lista de presença.",
    exercicio:
      "Digite os dados do quadro de horários no Writer e transforme-os em uma tabela. Depois, aplique mesclagem, cores e bordas seguindo as etapas abaixo.",
    passos: [
      "Abra o Writer e digite o título Quadro de Horários — Semana 1. Na linha seguinte, digite os cabeçalhos e os dados do modelo, separados por barras verticais (|).",
      "Selecione os dados, escolha Tabela > Converter > Texto em tabela e use o caractere | como separador. Se preferir, insira uma tabela de 6 colunas por 6 linhas e preencha as células.",
      "Insira uma linha acima dos cabeçalhos. Selecione suas seis células e use Mesclar células para criar uma única célula de título; digite nela Quadro de Horários — Semana 1.",
      "Aplique fundo azul e letras brancas à célula do título. Aplique fundo cinza à linha de cabeçalho e deixe os nomes dos dias em negrito.",
      "Personalize as bordas: deixe a borda externa preta e mais grossa e mantenha linhas internas visíveis. Confira se todos os horários e dias estão nas células corretas.",
      "Acrescente uma linha de intervalo às 15h e mescle as cinco células dos dias para escrever Intervalo. Centralize o texto e aplique uma cor de fundo diferente.",
      "Adicione uma coluna chamada Sala e preencha com Sala 1 nos horários de Writer e Sala 2 nos horários de Calc. Ajuste a largura sem deixar o texto cortado.",
      "Alinhe os horários e nomes das atividades, confira se cada dado está na célula certa e salve o arquivo como quadro-de-horarios.odt.",
    ],
    modelo:
      "HORÁRIO | 2ª feira | 3ª feira | 4ª feira | 5ª feira | 6ª feira\n13h às 14h | Writer | Writer | Writer | Writer | Writer\n14h às 15h | Writer | Writer | Writer | Writer | Writer\n15h às 16h | Calc | Calc | Calc | Calc | Calc\n16h às 17h | Exercícios | Exercícios | Exercícios | Exercícios | Exercícios",
    conferencia: [
      "A tabela tem seis colunas: horário e os cinco dias da semana.",
      "O título ocupa uma célula mesclada na primeira linha.",
      "Os cabeçalhos e os quatro horários estão preenchidos corretamente.",
      "O título tem fundo azul e letras brancas; o cabeçalho tem fundo cinza.",
      "A borda externa preta e mais grossa e as linhas internas estão visíveis.",
      "A linha de intervalo está mesclada e a coluna Sala foi preenchida.",
    ],
  },
  {
    titulo: "3. Mala direta: cartas personalizadas",
    texto:
      "Nesta aula, os alunos organizam informações de destinatários em uma fonte de dados e usam a mala direta para criar cartas personalizadas. A atividade trabalha a conexão entre os dados e o documento, a inserção de campos e a conferência do resultado antes de concluir a mesclagem.",
    exercicio:
      "Digite a carta modelo no Writer, crie uma pequena fonte de dados fictícia e personalize uma carta para cada registro. Use somente dados inventados para esta atividade.",
    passos: [
      "Abra uma planilha do Calc e crie as colunas Nome, Bairro e Curso. Preencha quatro linhas com dados fictícios, sem usar informações pessoais reais, e salve o arquivo.",
      "No Writer, digite o texto da carta abaixo. Formate o título em negrito e centralizado, mantenha os parágrafos alinhados à esquerda e deixe uma linha em branco entre eles.",
      "Inicie o Assistente de Mala Direta ou conecte a fonte de dados salva. Selecione a planilha e a folha que contém os quatro registros.",
      "Substitua «Nome», «Bairro» e «Curso» pelos campos correspondentes da fonte de dados nos locais indicados na carta.",
      "Visualize cada registro antes de concluir. Confira se saudação, bairro e curso correspondem à mesma pessoa e gere as cartas personalizadas.",
      "Acrescente à planilha uma coluna fictícia chamada Data de inscrição e outra chamada Turma. Use datas e nomes inventados e insira os campos na carta.",
      "Faça uma segunda versão do texto com uma mensagem diferente para cada curso, usando uma condição disponível no assistente, se estiver habilitada.",
      "Revise a primeira e a última carta da mesclagem, confira a quantidade gerada e salve o documento principal e as cartas em arquivos separados.",
    ],
    modelo:
      "BOAS-VINDAS AO CURSO\n\nFortaleza, 16 de novembro de 2026\n\nOlá, «Nome»!\n\nSeja bem-vindo(a) ao curso de «Curso». Ficamos felizes em receber você, morador(a) do bairro «Bairro», nesta nova etapa de aprendizagem.\n\nNas aulas, vamos aprender a criar e formatar documentos, organizar informações e usar ferramentas digitais com responsabilidade. Participe das atividades, faça perguntas e pratique cada etapa no computador.\n\nAs aulas acontecerão de segunda a sexta-feira, no período da tarde. Traga seu caderno e venha preparado(a) para aprender.\n\nAtenciosamente,\nEquipe do curso",
    conferencia: [
      "A fonte de dados tem os campos Nome, Bairro e Curso e quatro registros fictícios.",
      "A carta tem título, data, saudação, apresentação, informação das aulas e assinatura.",
      "Os campos de mala direta estão nos lugares certos, sem marcadores digitados por engano.",
      "A visualização mostra os dados do mesmo registro em todos os campos da carta.",
      "Foram geradas quatro cartas e cada uma apresenta um destinatário fictício diferente.",
      "A data de inscrição e a turma aparecem vinculadas ao registro correto, se incluídas.",
    ],
  },
  {
    titulo: "4. Estilos, sumário automático e referências",
    texto:
      "Nesta aula, os alunos aplicam estilos de título e corpo de texto para organizar um documento longo. Depois, inserem um sumário automático, atualizam sua estrutura após alterações e acrescentam uma nota de referência ao final do documento.",
    exercicio:
      "Digite o guia abaixo no Writer. Use estilos de título para as seções, gere um sumário automático, numere as páginas e registre a referência indicada ao final.",
    passos: [
      "Digite o título Uso responsável da internet. Depois, digite os cabeçalhos Introdução, Proteção de dados, Comunicação respeitosa, Verificação de informações e Fontes consultadas, com seus parágrafos.",
      "Aplique o estilo Título 1 ao título principal e Título 2 a cada seção. Mantenha os parágrafos explicativos no estilo Corpo de texto. Não formate os cabeçalhos apenas com negrito: use os estilos para que o Writer os reconheça.",
      "Coloque o cursor depois do título principal e antes da primeira seção. Use Inserir > Sumário e Índice > Sumário, Índice ou Bibliografia para inserir um sumário automático.",
      "Insira números de página no rodapé usando Inserir > Número da página. Confira se a numeração aparece nas páginas do documento.",
      "Se alterar um cabeçalho ou acrescentar conteúdo, clique com o botão direito no sumário e escolha Atualizar índice. Confira a ordem das seções e mantenha a fonte consultada ao final.",
      "Acrescente uma seção chamada Como criar uma senha segura, com dois parágrafos e três recomendações em lista. Aplique Título 2 ao novo cabeçalho.",
      "Inclua uma nota de rodapé explicando uma palavra técnica e acrescente uma referência fictícia claramente identificada como exemplo, sem apresentá-la como fonte consultada de verdade.",
      "Atualize o sumário depois das alterações, confira os números de página e aplique espaçamento consistente entre títulos e parágrafos.",
    ],
    modelo:
      "USO RESPONSÁVEL DA INTERNET\n\nINTRODUÇÃO\nA internet facilita o acesso à informação, aos estudos e à comunicação. Para aproveitar esses recursos, precisamos agir com atenção, respeito e responsabilidade.\n\nPROTEÇÃO DE DADOS\nUse senhas difíceis de adivinhar e não compartilhe endereço, telefone, senhas ou outras informações pessoais com desconhecidos. Antes de preencher um cadastro, confira se o site é confiável e peça ajuda a um adulto quando tiver dúvida.\n\nCOMUNICAÇÃO RESPEITOSA\nEscreva com educação, respeite opiniões diferentes e pense antes de publicar uma mensagem. Não compartilhe conteúdo que humilhe ou exponha outra pessoa. Se receber algo que cause desconforto, converse com um adulto de confiança.\n\nVERIFICAÇÃO DE INFORMAÇÕES\nAntes de acreditar ou compartilhar uma notícia, confira quem publicou, quando foi publicada e quais fontes são apresentadas. Compare a informação com outros canais confiáveis e não repasse mensagens que você não conseguiu verificar.\n\nFONTES CONSULTADAS\nOrganização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO). Alfabetização midiática e informacional. Consulte materiais educativos sobre segurança e cidadania digital.",
    conferencia: [
      "O título e os cabeçalhos das seções usam estilos do Writer; os parágrafos usam Corpo de texto.",
      "O sumário foi gerado automaticamente e lista as seções na ordem do documento.",
      "A numeração aparece no rodapé das páginas.",
      "Após qualquer mudança nos títulos, o sumário foi atualizado.",
      "A seção Fontes consultadas está no final e contém a referência indicada.",
      "A nova seção e a nota de rodapé aparecem e a paginação continua correta.",
    ],
  },
  {
    titulo: "5. Interface, formatação e estilos de texto",
    texto:
      "Conheça a interface do Writer e pratique a criação de documentos. A atividade trabalha fontes, tamanhos, alinhamento, espaçamento entre parágrafos e estilos de título e corpo de texto, preparando o documento para ficar organizado e fácil de ler.",
    exercicio:
      "Crie um pequeno informativo sobre o curso no Writer. Organize o conteúdo com título, subtítulos e parágrafos e aplique formatação consistente.",
    passos: [
      "Abra um documento novo no Writer e identifique a barra de ferramentas, a régua, a área de digitação e os controles de fonte. Em tablet ou celular, os menus podem aparecer em posições diferentes.",
      "Digite o título Informática Avançada na SOBEF e os subtítulos O que vamos aprender e Como participar.",
      "Aplique negrito e tamanho maior ao título. Ajuste a fonte dos parágrafos e teste alinhamento à esquerda e centralizado.",
      "Ajuste o espaçamento entre parágrafos para separar as ideias sem inserir várias linhas vazias.",
      "Aplique estilos de título aos subtítulos e Corpo de texto aos parágrafos. Salve o arquivo com um nome claro.",
      "Acrescente uma lista com quatro ferramentas digitais que pretende aprender a usar e escreva uma frase explicando cada uma.",
      "Duplique um parágrafo e experimente alterar cor, tamanho, alinhamento e espaçamento. Em seguida, desfaça as mudanças e aplique um estilo para restaurar a consistência.",
      "Use localizar e substituir para trocar uma palavra repetida. Revise a ortografia, salve o documento e exporte uma cópia em PDF.",
    ],
    modelo:
      "INFORMÁTICA AVANÇADA NA SOBEF\n\nO QUE VAMOS APRENDER\nVamos praticar a criação de documentos e a organização de informações em planilhas. Cada atividade apresenta etapas para experimentar os recursos e revisar o resultado.\n\nCOMO PARTICIPAR\nSalve seus arquivos com nomes fáceis de identificar. Revise o conteúdo antes de compartilhar e peça orientação quando uma ferramenta aparecer em outro lugar na tela.",
    conferencia: [
      "O documento tem um título e dois subtítulos com estilos aplicados.",
      "Os parágrafos usam fonte e tamanho legíveis e mantêm alinhamento consistente.",
      "O espaçamento separa os parágrafos sem linhas vazias excessivas.",
      "O arquivo foi salvo com um nome fácil de reconhecer.",
      "A lista de ferramentas está organizada e a revisão não deixou erros conhecidos.",
      "O documento original e a cópia em PDF foram salvos.",
    ],
  },
  {
    titulo: "6. Imagens, layout, cabeçalho e revisão",
    texto:
      "Insira imagens e formas, ajuste a posição do texto ao redor delas e organize as páginas com cabeçalho, rodapé, numeração e colunas. Finalize revisando ortografia e comentários e exportando o documento para PDF.",
    exercicio:
      "Monte um folheto de uma página sobre cuidados com os dispositivos digitais. Organize o texto e uma imagem, revise o documento e prepare uma cópia em PDF.",
    passos: [
      "Digite o título Cuidados com os dispositivos e escreva os tópicos do modelo. Insira uma imagem apropriada e redimensione pelos cantos para manter suas proporções.",
      "Experimente as opções de disposição do texto para posicionar a imagem sem cobrir os parágrafos. Em telas menores, use os controles de imagem disponíveis no menu.",
      "Acrescente um cabeçalho com o nome da atividade, um rodapé com a identificação do curso e numeração de página.",
      "Ajuste margens e, se desejar, distribua uma seção em duas colunas. Confira a leitura em cada página e corrija quebras indesejadas.",
      "Use a revisão ortográfica, faça uma correção de exemplo e acrescente um comentário. Depois, exporte uma cópia em PDF e confira o arquivo gerado.",
      "Insira uma forma com uma dica curta de segurança e aplique preenchimento e contorno que mantenham o texto legível.",
      "Acrescente uma legenda à imagem e texto alternativo que descreva seu conteúdo. Confira se a imagem não ficou pixelada nem encobriu informações.",
      "Revise o folheto em visualização de impressão, confira cabeçalho e rodapé em todas as páginas e remova qualquer comentário que não deva aparecer na versão final.",
    ],
    modelo:
      "CUIDADOS COM OS DISPOSITIVOS\n\nPROTEJA SEUS DADOS\nUse senhas fortes e não compartilhe informações pessoais em páginas ou mensagens desconhecidas.\n\nCUIDE DOS EQUIPAMENTOS\nMantenha notebook, tablet e celular protegidos contra quedas e líquidos. Guarde os arquivos importantes em local seguro.\n\nREVISE ANTES DE COMPARTILHAR\nConfira o texto, as imagens e a origem das informações antes de enviar ou publicar um documento.",
    conferencia: [
      "A imagem está dimensionada sem distorção e o texto continua legível ao redor dela.",
      "O cabeçalho e o rodapé aparecem nas páginas e a numeração está correta.",
      "Margens e colunas mantêm o conteúdo dentro da página.",
      "A revisão ortográfica e o comentário foram conferidos.",
      "O documento original e a cópia em PDF foram salvos e abertos para conferência.",
      "A imagem tem legenda e texto alternativo e a forma apresenta uma dica legível.",
    ],
  },
  {
    titulo: "7. Células, formatação, fórmulas e funções",
    texto:
      "Conheça a interface do Calc e organize informações em células, linhas e colunas. Pratique formatos de dados, referências relativas e absolutas, operações básicas, funções de soma, média, máximo e mínimo, além de funções SE, texto e data.",
    exercicio:
      "Monte uma planilha de notas fictícias. Calcule totais e médias, identifique a maior e a menor nota e use uma condição para indicar o resultado de cada estudante.",
    passos: [
      "Abra o Calc e identifique a barra de fórmulas, as letras das colunas, os números das linhas e as células. Digite os dados do modelo em uma planilha nova.",
      "Formate os títulos, ajuste a largura das colunas e aplique formato numérico adequado às notas e datas.",
      "Crie uma fórmula simples para somar duas notas e copie-a para as demais linhas. Observe como a referência relativa acompanha cada linha.",
      "Use uma referência absoluta para um valor fixo, como a nota mínima. Confira o símbolo de cifrão na referência antes de copiar a fórmula.",
      "Calcule soma, média, maior e menor valor com as funções correspondentes. Crie uma coluna Resultado usando SE e teste as condições.",
      "Acrescente uma data e uma função de texto para combinar ou organizar informações. Salve a planilha e confira os resultados.",
      "Crie uma coluna Frequência com valores fictícios e uma coluna Situação que indique se a frequência atende ao mínimo definido pelo exercício.",
      "Aplique bordas ao intervalo, destaque as notas abaixo da média com formatação condicional e crie um gráfico simples para comparar as médias.",
      "Altere uma nota e confira se médias, resultados e gráfico são atualizados. Corrija erros de fórmula e salve uma cópia final da atividade.",
    ],
    modelo:
      "ESTUDANTE | NOTA 1 | NOTA 2 | MÉDIA | RESULTADO\nAna | 8 | 7 |  |  \nBeto | 5 | 6 |  |  \nCaio | 9 | 10 |  |  \nDara | 6 | 7 |  |  \n\nNota mínima para aprovação: 6",
    conferencia: [
      "Os dados estão organizados em colunas com títulos e formatos adequados.",
      "As fórmulas foram copiadas sem apontar para linhas erradas.",
      "Soma, média, máximo e mínimo apresentam resultados coerentes.",
      "A função SE identifica corretamente cada resultado em relação à nota mínima.",
      "A planilha inclui um exemplo de função de texto e uma data formatada.",
      "Frequência, formatação condicional e gráfico foram conferidos após alterar um valor.",
    ],
  },
  {
    titulo: "8. Busca, filtros, gráficos e projeto final",
    texto:
      "Aplique funções de procura para localizar dados e use classificação, filtros, formatação condicional, tabelas dinâmicas e gráficos para analisar uma planilha. Termine com validação de dados, proteção de células e um projeto de revisão geral.",
    exercicio:
      "Crie uma planilha fictícia de inscrições em cursos. Organize os dados, localize registros, analise resultados com um gráfico e proteja as células que contêm fórmulas.",
    passos: [
      "Digite os registros fictícios do modelo e transforme o intervalo em uma tabela organizada, com cabeçalhos claros e sem linhas vazias no meio dos dados.",
      "Ordene a lista por curso e use filtros para exibir somente os registros desejados. Experimente PROCV ou PROCH em uma pequena tabela de consulta.",
      "Aplique formatação condicional para destacar uma situação, como inscrições confirmadas. Crie uma tabela dinâmica para resumir a quantidade por curso.",
      "Insira um gráfico a partir do resumo. Escolha um tipo que facilite a comparação e inclua título e identificação das categorias.",
      "Use validação de dados para limitar as opções de uma coluna. Proteja as células com fórmulas e confira se os campos de entrada continuam editáveis.",
      "Revise os dados, fórmulas, filtros e gráfico. Salve o projeto com um nome que identifique a atividade e confira se abre corretamente.",
      "Acrescente colunas fictícias para data de inscrição e modalidade. Formate as datas e filtre os registros por período e modalidade.",
      "Crie uma segunda tabela dinâmica para comparar inscrições por turma e situação. Confira se os totais batem com os registros da planilha.",
      "Adicione uma folha de instruções com o objetivo do projeto, explique duas fórmulas usadas e inclua a data da revisão. Mantenha todos os dados inventados.",
    ],
    modelo:
      "INSCRIÇÕES FICTÍCIAS\nNOME | CURSO | SITUAÇÃO | TURMA\nLia | Writer | Confirmada | Manhã\nNilo | Calc | Pendente | Tarde\nRavi | Writer | Confirmada | Tarde\nSusi | Calc | Confirmada | Manhã\n\nRESUMO POR CURSO\nWriter | 2 inscrições\nCalc | 2 inscrições",
    conferencia: [
      "Os registros são fictícios e estão organizados com cabeçalhos e formatos coerentes.",
      "A classificação e os filtros exibem os registros esperados.",
      "Uma função de procura localiza corretamente um valor na tabela de consulta.",
      "A formatação condicional destaca a situação escolhida.",
      "A tabela dinâmica e o gráfico representam corretamente o resumo por curso.",
      "A validação e a proteção de células foram conferidas e o arquivo final foi salvo.",
      "As datas e a modalidade permitem filtrar os registros conforme o período escolhido.",
      "Os dois resumos por turma e situação conferem com os registros fictícios.",
      "A folha de instruções explica o projeto e as fórmulas sem usar dados pessoais reais.",
    ],
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
    "Informática Avançada — Atividades SOBEF",
    "SOBEF — Qualificação Profissional • Instrutora: Marcilda Pereira",
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
          <img src={logo.url} alt="Logo Marcilda Pereira" className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              Curso Presencial • 2026
            </span>
            <h1 className="mt-2 text-xl font-bold leading-tight sm:text-3xl">
              Informática Avançada — Atividade 10
            </h1>
            <p className="mt-1 text-xl font-bold text-foreground sm:text-2xl">Instrutora: Marcilda Pereira</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">Carga horária: 100 h (25 aulas de 4 h) • Período a definir</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">Horário: 13h às 17h • Vagas: 20 • Executora: SOBEF</p>
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
              Período (editável)
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
            Digitação do texto
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
              Digite o texto modelo no Writer instalado no computador. Use os passos de cada atividade para formatá-lo. As alterações neste campo servem para anotações e ficam salvas neste navegador.
            </p>
            <div className="mt-4 grid gap-4">
              {AULAS.map((aula, i) => (
                <article key={aula.titulo} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-semibold leading-snug">{aula.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{aula.exercicio}</p>
                  <div className="mt-3 rounded-md border border-border bg-secondary/50 p-4">
                    <h4 className="text-sm font-semibold">Passo a passo no Writer</h4>
                    <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {aula.passos.map((passo) => <li key={passo}>{passo}</li>)}
                    </ol>
                  </div>
                  <label htmlFor={`texto-aula-${i}`} className="mt-4 block text-sm font-semibold">Texto modelo para digitar no Writer</label>
                  <pre className="mt-2 whitespace-pre-wrap rounded-md border border-border bg-background p-3 font-sans text-sm leading-relaxed">{aula.modelo}</pre>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section className="mt-6">
            <h2 className="text-lg font-bold sm:text-xl">Conferência do trabalho</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Confira seu documento do Writer com a lista de cada atividade. Quando todos os itens estiverem corretos, envie uma foto ou captura de tela à instrutora pelo WhatsApp <strong className="text-foreground">85 99784-1433</strong>.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Período: <strong>{data}</strong></p>
            <div className="mt-4 grid gap-4">
              {AULAS.map((aula, i) => (
                <article key={aula.titulo} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-semibold leading-snug">{aula.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{aula.exercicio}</p>
                  <div className="mt-4 rounded-md border border-border bg-secondary/50 p-4">
                    {aula.conferencia.length > 0 && (
                      <>
                        <h4 className="text-sm font-semibold">Checklist para conferir</h4>
                        <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                          {aula.conferencia.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 shrink-0 rounded border border-input bg-background" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <div className="mt-4 rounded-md border border-border bg-card p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Texto de referência</p>
                      <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed">{aula.modelo}</pre>
                    </div>
                    <div className="mt-4 rounded-md border border-border bg-secondary/50 p-4 print:hidden">
                      <h4 className="text-sm font-semibold">Enviar trabalho para correção</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Tire uma foto ou captura de tela do documento feito no Writer e anexe na conversa do WhatsApp antes de enviar.
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
