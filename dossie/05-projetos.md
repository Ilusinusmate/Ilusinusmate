# Projetos

Marcadores de perfil para reaproveitamento no CV: `[BACK]` backend · `[MOB]` mobile ·
`[FULL]` full-stack · `[IA]` dados/IA/NLP · `[INFRA]` cloud/DevOps.

---

## Produção / clientes

### Central da Escola — Logon Informática `[MOB]` `[BACK]`

App escolar com **mais de 50 mil usuários ativos**. Sou o único desenvolvedor a partir da versão 3:
funcionalidades, microsserviços de apoio, documentação, testes, CI/CD e publicação em Android e iOS.
Arquitetura distribuída com atualização sistemática e logging.
**Stack:** Flutter/Dart, microsserviços, CI/CD.

### Empório Sertanejo — SaaS ERP + POS + E-commerce `[FULL]` `[BACK]` `[INFRA]`

Plataforma única cobrindo gestão de estoque, vendas, compras, fornecedores, clientes e
colaboradores, mais loja online com programa de pontos, cupons e notificações personalizadas.
Liderança de um time de 3 pessoas e contato direto com o cliente.
**Stack:** Django, PostgreSQL, Docker, AWS S3 + CloudFront, Railway, Pipedream, Mailgun, Grafana,
DNS, HTML/CSS/JS.
**Repositório relacionado:** https://github.com/Ilusinusmate/emporio_sertanejo

### Clínica Doutora Daiane de Lima — app de agendamento `[MOB]` `[FULL]`

Agendamento, gestão de clientes e de estoque para uma clínica que operava em papel. Projeto
freelance, do levantamento do problema à entrega.

### Clínica Doutora Daiane de Lima — landing page `[FULL]`

Site institucional com apresentação da clínica e captura de leads.
https://doutoradaianedelima.com.br — **React**, deploy na **Vercel**, domínio no **Registro.br**,
DNS com proxy na **Cloudflare**.

### Animalesko `[BACK]`

Arquitetura backend multiplataforma (mobile + desktop sobre uma única infraestrutura) para startup
beneficente, com foco em eficiência sob restrição de recursos; documentação e mediação com o
Product Owner.

---

## Acadêmicos e de pesquisa

### Contratexto `[BACK]` `[IA]`

Jogo web multiplayer inspirado em Contexto/Termo, com mecânica **PvP** (em vez de PvE): os jogadores
adivinham uma palavra secreta por **similaridade semântica**. Backend em **FastAPI** com
**WebSocket**, biblioteca de NLP própria (`nlp_lib`) para cálculo de similaridade e **fila
assíncrona**, e frontend em HTML/CSS/JS. Otimizações de IA: **compressão de vetores** e
**paralelismo**. Projeto da disciplina de Programação 1 na UFCG, organizado em domínio, casos de uso,
controllers e serviços.
**Stack:** Python, FastAPI, spaCy, NumPy, Pandas, WebSocket, NLP.
Demo: https://contratexto.onrender.com · Código: https://github.com/Ilusinusmate/contratexto

### Corretor ONHB — desktop e mobile `[MOB]` `[FULL]`

Projeto do LinkedIn: **ago/2024 – set/2024**, associado ao IFPB. Plataforma para facilitar a
correção das provas da **Olimpíada Nacional de História do Brasil**, construída sob demanda dos
professores do IFPB. A aplicação desktop em **Electron** atende usuários Linux e Windows e foi
disponibilizada como open source, aberta a alterações; **licença e demais detalhes a confirmar**.
O LinkedIn menciona mais de 30 equipes inscritas e a substituição da correção manual ou por planilhas.
https://github.com/Ilusinusmate/ONHB · https://github.com/Ilusinusmate/ONHB-Mobile

### Projeto de pesquisa — Aprendizagem assistida por IA `[IA]`

**abr/2024 – fev/2025** (LinkedIn). Projeto de pesquisa no IFPB sobre ensino de Python com teste A/B,
no qual João liderou o grupo docente, formando mais de 60 alunos e entregando cerca de 30
certificados. Faz ponte com a publicação do **SIMPIF 2025** e com o artigo do **WEI 2025**.
Ver [04-pesquisa-e-publicacoes.md](04-pesquisa-e-publicacoes.md).
https://github.com/Ilusinusmate/Projeto-de-Pesquisa-Apredizagem-Assistida-por-IA

### Projetos de extensão do IFPB

Fonte: dossiê da seleção da Residência ([fonte](fontes/residencia-virtus-selecao-2025.md)); todos
voluntários, **8 h/semana**, coordenados por Golbery de Oliveira Chagas Aguiar Rodrigues.

- **Redação do Enem a partir de textos jornalísticos** — Edital 03/2023 – PROBEXC;
  **12/06/2023 – 15/12/2023**.
- **IFNEWS: Performance e proficiência através do trabalho de imprensa colegial** — Edital
  01/2023 – Fluxo Contínuo; **31/07/2023 – 20/12/2023**.
- **Desvendando o ChatGPT: Ferramentas de IA para Estudantes do Ensino Médio** — Edital 07/2024 –
  PROBEXC; **02/09/2024 – 31/01/2025**.
- **DesmascarAI: Imprensa colegial com checagem inteligente na era digital** — Edital 01/2025 –
  Fluxo Contínuo; **24/02/2025 – 22/10/2025**.

### IFNEWS `[FULL]`

Aplicação web para o projeto de extensão *IFNEWS — Mídia e Imprensa Colegial* do IFPB.
https://github.com/Ilusinusmate/IFNEWS

### WebRádio IFPB Campina Grande `[FULL]`

Site da WebRádio do campus. Repositório: https://github.com/Ilusinusmate/radioifpbcg

### ECIT de Boqueirão `[FULL]`

Aplicação web desenvolvida para a escola cidadã integral técnica de Boqueirão.

---

## Open source / bibliotecas

### pdfa-parser `[BACK]` `[INFRA]`

**mar/2026 – atual**, associada ao vínculo na Logon Informática (LinkedIn). Biblioteca Python
open-source que converte documentos PDF para **PDF/A** e valida a conformidade automaticamente com
**GhostScript** e **VeraPDF**. O LinkedIn descreve instalação zero-config, dependências baixadas
automaticamente, funcionamento em containers Docker limpos, API síncrona e assíncrona, CLI embutida
e validação para PDF/A-1b, 2b e 3b. **Tecnologias declaradas:** Python, GhostScript, VeraPDF, Java
(JRE), Docker. **Licença declarada no LinkedIn:** GPL-3.0.
**Publicada no PyPI:** `pdfa-parser` · https://github.com/Ilusinusmate/pdfa-parser ·
https://pypi.org/project/pdfa-parser

### TodoApp `[MOB]`

App Flutter de lista de tarefas criado para substituir a agenda em papel, com troca rápida de
prioridades. Exercício deliberado de **Clean Code**, **SOLID**, componentização, *context isolation*
e **Bloc** como gerenciador de estado; testado em Android e Linux Desktop.
https://github.com/Ilusinusmate/todoApp

### Outros repositórios

| Repositório | Descrição |
| --- | --- |
| `ChatApp` | Chat mobile com Flutter + FastAPI |
| `qrcode-generator` | App Flutter que gera QR codes em memória |
| `translibraryAPI` | API de livros com tradução automática |
| `Transaction-API` | API assíncrona de transações (projeto do curso de Python Backend da DIO) |
| `IMC-Mobile-Calculador` | Calculadora de IMC (projeto do curso de Flutter da DIO) |
| `wordsearch` | Interface Python para busca entre palavras implementada em C |
| `Garaherb` | Landing page de desafio técnico — Next.js 15, React 18, TypeScript, Tailwind, deploy na Vercel |
| `projects` (jusconnect) | Projeto Flutter |
| `docs` | Documentação de API do CDE Mobile |
| `Ilusinusmate` | Este portfólio (HTML/CSS/JS + GitHub Actions para GitHub Pages) |
