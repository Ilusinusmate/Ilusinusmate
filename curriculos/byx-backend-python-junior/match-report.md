# Relatório de aderência — byx · Desenvolvedor Backend Python Júnior

- **Vaga:** [Desenvolvedor Backend Python Júnior — byx](https://byx.inhire.app/vagas/bf142bc4-bb08-4120-8539-af552d647287/desenvolvedor-backend-python-junior)
- **Modelo:** remoto (Brasil); escritório em Vila Olímpia, São Paulo
- **Domínio:** fintech / mercado de crédito, com uso declarado de IA de forma ética
- **Artefatos:** `resume.pdf` (2 páginas), `resume.tex`, `resume.json`
- **Data:** 27/08/2026

---

## 1. Mapa de evidências (requisitos obrigatórios)

| Requisito da vaga | Cobertura | Evidência no dossiê |
| --- | --- | --- |
| Python (acadêmico ou profissional) | **Forte** | 2 anos profissionais (Logon, Empório Sertanejo) + pesquisa + docência — `dossie/02`, `dossie/04` |
| Django e/ou FastAPI | **Forte (ambos)** | FastAPI na Logon; Django no SaaS do Empório Sertanejo — `dossie/02` |
| APIs REST | **Forte** | APIs e microsserviços em produção, documentação técnica — `dossie/02` |
| Bancos relacionais (PostgreSQL/MySQL) | **Forte (PostgreSQL)** | PostgreSQL em ERP/PDV/e-commerce — `dossie/07`. ⚠ MySQL não tem evidência: não foi declarado |
| Interesse/familiaridade com MongoDB | **Parcial** | Dossiê registra "NoSQL", sem nomear MongoDB; o CV diz apenas "bancos NoSQL" — `dossie/07` |
| Git e versionamento | **Forte** | Git, GitHub Actions, code review, 28 repos públicos — `dossie/07` |
| Testes automatizados e qualidade | **Forte** | PyTest, mocks, CI/CD, observabilidade — `dossie/02`, `dossie/07` |
| Microsserviços, sistemas distribuídos, integrações | **Forte** | RabbitMQ, MinIO, microsserviços FastAPI, integrações com terceiros — `dossie/02` |
| Lógica de programação / fundamentos | **Forte** | Campeão da OPI 2023, ouro OPI 2026, finalista OBI — `dossie/06` |
| Squads multidisciplinares, cerimônias, code review | **Forte** | Liderança de 3 devs; squad da Residência em TIC; code review na Logon — `dossie/02`, `dossie/03` |
| Documentação técnica | **Forte** | Documentação de APIs e serviços (Logon), decisões técnicas (Animalesko) |
| Uso ético de IA no desenvolvimento | **Forte e diferenciado** | Pesquisa avaliando LLMs em engenharia de software (XP 2026, WEI 2025) — `dossie/04` |

## 2. Diferenciais da vaga

| Diferencial | Situação | Ação no currículo |
| --- | --- | --- |
| AWS | Tem (S3, CloudFront) | Incluído |
| Observabilidade | Tem (OpenTelemetry, Grafana, logging) | Incluído — Datadog **não** citado |
| Clean Code, SOLID, design patterns | Tem | Incluído |
| Scrum / Kanban | Tem (Residência, squads) | Incluído |
| CI/CD | Tem (GitHub Actions) | Incluído |
| Inglês intermediário/avançado | Tem | "Avançado — leitura, escrita e comunicação profissional" |
| Espanhol | Autodeclarado no CV antigo | "Básico" (⚠ ainda não reafirmado por João — se preferir, removo) |
| Go | **Sem evidência** | Omitido |
| Kubernetes / ArgoCD | **Sem evidência** | Omitido |
| Datadog | **Sem evidência** | Omitido |
| Temporal.io / Retool / Camunda / WireMock | **Sem evidência** | Omitido |
| Experiência em fintech / meios de pagamento | **Sem evidência** | Omitido. O mais próximo é o SaaS de ERP/PDV/e-commerce, que envolve vendas e estoque, não crédito |

## 3. Simulação de triagem por IA/ATS

Simulei a leitura que um triador automatizado faria sobre o **texto extraído** do PDF (`pdftotext`), não sobre o layout.

**Extração:** 2 páginas, 100% do texto selecionável, ordem de leitura correta, sem tabelas, colunas ou caixas de texto. A foto é a única imagem e não carrega informação textual — nenhuma perda se for ignorada.

**Cobertura de palavras-chave da vaga no texto extraído:**

| Presente | Ausente (proposital) |
| --- | --- |
| Python, Django, FastAPI, API REST, microsserviços, PostgreSQL, SQL, NoSQL, Redis, RabbitMQ, Celery, Docker, AWS, Git, testes automatizados, PyTest, CI/CD, GitHub Actions, observabilidade, Clean Code, SOLID, DRY, DDD, design patterns, Scrum, Kanban, code review, documentação técnica, sistemas distribuídos, integrações, backend, LLMs, machine learning, inglês | Go, Kubernetes, ArgoCD, Datadog, Temporal.io, Retool, Camunda, WireMock, MongoDB, MySQL, fintech |

**Pontuação simulada** (peso pelos requisitos obrigatórios da vaga):

| Eixo | Nota |
| --- | --- |
| Requisitos obrigatórios | 10/10 |
| Diferenciais | 6/10 |
| Senioridade declarada vs. exigida | acima do exigido (júnior) |
| Domínio (fintech/crédito) | 2/10 |
| Legibilidade por ATS | 10/10 |
| **Veredito** | **Avançar para entrevista** |

**Riscos de interpretação identificados e como foram tratados:**

1. *"Sobrequalificado para júnior"* — 2 anos de experiência, liderança de time e publicações podem gerar dúvida sobre encaixe salarial. Mantido, porque é vantagem competitiva real; a carta/mensagem de candidatura deve deixar claro o interesse na vaga júnior e na senioridade da vaga.
2. *Sobreposição de datas* (Logon desde mai/2025 e Empório até set/2025) — pode parecer inconsistência. É real e está no dossiê; os períodos foram mantidos exatamente como declarados.
3. *Sem domínio financeiro* — não foi mascarado. Nenhuma menção a fintech, crédito ou pagamentos, para não criar afirmação falsa.
4. *Bolsista vs. coordenador nos projetos Interconecta* — o dossiê registra divergência entre Lattes e declaração do IFPB; o currículo usa a formulação segura ("bolsista de pesquisa, com liderança do grupo discente").
5. *"8 trabalhos científicos"* — número conferido e desduplicado a partir do Scholar + Lattes + certificados; o LinkedIn ("+7") e o portfólio ("+10") não foram usados.
6. *Foto* — pedido explícito seu. Fica no canto do cabeçalho, fora do fluxo de texto; nenhum dado do cabeçalho depende da imagem.

## 4. Auditoria do PDF compilado

- `pdflatex` executado duas vezes, sem erros e sem `Overfull`/`Underfull hbox` no log final.
- 2 páginas; sem título de seção órfão e sem cargo separado dos seus bullets (`\Needspace`).
- Texto extraído confere com o renderizado (verificado nas duas páginas em 150 dpi).
- Links de e-mail, GitHub, LinkedIn, portfólio e PyPI clicáveis e legíveis sem cor chapada.
- Sem CPF, matrícula, códigos de autenticação ou contatos de terceiros.
- Metadados do PDF (título, autor, keywords) preenchidos — alguns ATS leem esse campo.

## 5. Recomendação salarial

Referências públicas consultadas (backend Python júnior, Brasil, 2025–2026):

| Fonte | Faixa mensal |
| --- | --- |
| Mercado geral de dev júnior no Brasil | R$ 3.000 – R$ 6.000 (média ~R$ 4.000) |
| Python júnior — média de 8 vagas anunciadas | ~R$ 4.400 |
| Vaga remota de Python júnior (LinkedIn) | R$ 2.500 – R$ 4.500 |
| Dev júnior em fintech de grande porte (Glassdoor/PagBank) | R$ 5.000 – R$ 7.000 |

**O que puxa seu número para cima:** ~2 anos de experiência profissional real, backend em produção com 50 mil+ usuários, liderança de 3 desenvolvedores, cobertura de praticamente todos os requisitos obrigatórios e de 6 dos diferenciais, e a empresa é fintech em São Paulo (base salarial mais alta que a média nacional), com vaga remota.

**Recomendação:**

- **Peça R$ 6.000/mês (CLT)** como pretensão inicial.
- **Faixa de negociação:** R$ 5.000 – R$ 6.500.
- **Piso:** não desça abaixo de **R$ 4.500** — abaixo disso você estaria abaixo da média até de vagas júnior sem seu histórico.
- Se pedirem um número antes de falarem do pacote, responda com faixa ("R$ 5.500 a R$ 6.500, dependendo do pacote de benefícios") em vez de um valor fechado.
- Se a contratação for **PJ**, multiplique por ~1,3–1,4 para compensar encargos e ausência de benefícios: **R$ 7.800 – R$ 9.000**. Os benefícios anunciados (VR/VA flexível, plano de saúde, odontológico, seguro de vida, VT, Wellhub, Sesc, auxílio-creche, bônus) valem bem, e devem ser considerados na conta se a proposta base vier menor.

## 6. Pendências que só você resolve

- Confirmar se mantém **espanhol (básico)** no currículo — a vaga lista espanhol como diferencial, mas essa informação só aparece no seu CV antigo em PDF.
- Confirmar as datas de **Logon** (mai/2025) e **Residência** (nov/2025), que seguem marcadas como a confirmar no dossiê.
