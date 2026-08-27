# FAQ — respostas prontas para formulários e entrevistas

Cache persistente das perguntas que já respondi, para reaproveitar e atualizar em vez de reescrever
do zero. Cada resposta traz a **data** em que foi escrita e o **idioma** em que foi pedida.

Regras deste arquivo:

- Toda resposta é baseada apenas no que está no dossiê; nada de experiência inventada.
- Quando uma resposta usa um exemplo genérico (por falta de um caso concreto registrado), isso fica
  marcado com ⚠ para o João substituir pelo caso real antes de enviar.
- Ao atualizar uma resposta, troque a data e mantenha o histórico só se a versão antiga ainda for
  útil.
- Se um fato mudar (datas, cargos, números), atualize primeiro os arquivos `01`–`09` e depois as
  respostas afetadas aqui.

## Índice

1. [Formação e experiência em TI, em ordem cronológica](#1-formação-e-experiência-em-ti-em-ordem-cronológica)
2. [Projetos práticos de programação e dados, e tecnologias usadas](#2-projetos-práticos-de-programação-e-dados-e-tecnologias-usadas)
3. [Investigação de um problema em produção em Python/Django](#3-investigação-de-um-problema-em-produção-em-pythondjango)

---

## 1. Formação e experiência em TI, em ordem cronológica

- **Data da resposta:** 27/08/2026
- **Idioma pedido:** inglês
- **Pergunta original:** *"Please describe your background in the IT field so far, listing degrees,
  courses, or previous professional experiences. (There is no need to explain each experience — just
  list them chronologically.)"*
- **Fontes:** [03-formacao-e-residencia.md](03-formacao-e-residencia.md),
  [02-experiencia-profissional.md](02-experiencia-profissional.md)

> **Education**
>
> - Technical High School (Integrated) — IFPB, Campina Grande (2022–2024), CNPq research scholarship
>   holder; my computing background came from scientific olympiads, research and extension projects
>   at the institute.
> - Web Development extension program — IFPB (2023–2024).
> - Flutter Specialist and Python Backend Developer — DIO (Digital Innovation One).
> - B.Sc. in Computer Science — Universidade Federal de Campina Grande (UFCG), ongoing since 2025.
> - ICT Residency — VIRTUS-CC / Softex / UFCG, since Nov 2025 (ranked 1st in the selection process):
>   240h of training in Software Engineering, IoT, Machine Learning and Design Thinking, followed by
>   a practical immersion.
>
> **Professional experience**
>
> - Research scholarship holder and Python instructor — IFPB / CNPq / LAPLIN (2023–2024): natural
>   language processing research, led the student group and taught Python to around 60 students.
> - Full-stack developer and technical lead — Empório Sertanejo (Dec 2023 – Sep 2025): ERP, POS and
>   e-commerce SaaS in Django/Python and PostgreSQL, leading a team of three developers.
> - Volunteer backend developer — Animalesko (Apr 2024 – Sep 2024).
> - Mobile & Backend developer — Logon Informática (since Jan 2025): sole developer of the Central
>   da Escola app (Flutter/Dart, 50k+ active users) since version 3, plus Python/FastAPI services; I
>   lead the mobile area.
> - ICT resident and researcher at the ISE (Intelligent Software Engineering) group — VIRTUS-CC /
>   UFCG (since Nov 2025): research on LLMs applied to Software Engineering, with 8 published
>   scientific works.

Notas de uso:

- O curso técnico é em **Química**; por isso a resposta não o nomeia como "técnico em informática" e
  explica de onde veio a formação em computação.
- Logon sempre a partir de **jan/2025** (o contrato formal de mai/2025 é contexto interno).

---

## 2. Projetos práticos de programação e dados, e tecnologias usadas

- **Data da resposta:** 27/08/2026
- **Idioma pedido:** inglês
- **Pergunta original:** *"Have you participated in any practical programming or data projects? If
  so, which technologies or languages have you worked with?"*
- **Fontes:** [02-experiencia-profissional.md](02-experiencia-profissional.md),
  [05-projetos.md](05-projetos.md), [07-stack-e-competencias.md](07-stack-e-competencias.md)

> Yes — most of my experience comes from building and maintaining software in production.
>
> At Logon Informática I develop the Central da Escola mobile app in Flutter/Dart, with more than 50
> thousand active users; I have been its sole developer since version 3, covering features,
> automated tests, CI/CD, publication on Google Play and the App Store and production monitoring,
> plus the supporting services in Python/FastAPI with REST APIs, microservices, RabbitMQ and MinIO.
>
> Before that, at Empório Sertanejo, I built an ERP, POS and e-commerce SaaS in Django/Python with
> PostgreSQL and Docker, leading a team of three developers and setting up testing with PyTest,
> CI/CD with GitHub Actions and observability with OpenTelemetry and Grafana on AWS.
>
> On the data and research side, I worked with natural language processing at LAPLIN/IFPB as a CNPq
> scholarship holder, and today I research LLMs applied to Software Engineering at the ISE group of
> VIRTUS-CC/UFCG, evaluating models with metrics such as precision, recall and F1 — work that
> resulted in 8 published scientific papers, including one accepted at XP 2026 (Springer LNBIP).
>
> I also maintain personal projects, such as pdfa-parser, a Python library published on PyPI for
> PDF/A conversion and validation, and Contratexto, a multiplayer semantic word game with a
> FastAPI/WebSocket backend and my own NLP library for similarity computation.
>
> Main technologies: Python (Django, Django REST Framework, FastAPI, Flask), Dart/Flutter,
> JavaScript/TypeScript (React, Next.js, Node), C and Java; PostgreSQL, Redis and NoSQL databases;
> RabbitMQ, Celery, MinIO and Docker; AWS, GitHub Actions and CI/CD; PyTest, OpenTelemetry and
> Grafana; and, on the data side, Pandas, NumPy, spaCy and NLP/LLM tooling.

Notas de uso:

- Para vagas mobile, começar pelo Central da Escola e cortar o parágrafo de pesquisa.
- Para vagas de dados/IA, inverter a ordem e abrir pela pesquisa em LLMs e NLP.

---

## 3. Investigação de um problema em produção em Python/Django

- **Data da resposta:** 27/08/2026
- **Idioma pedido:** português
- **Pergunta original:** *"Conte brevemente sobre uma situação em que você precisou investigar um
  problema em uma aplicação Python/Django em produção. Como identificou a causa e qual solução
  implementou?"*
- **Fontes:** [02-experiencia-profissional.md](02-experiencia-profissional.md) (Empório Sertanejo)
- ⚠ **O dossiê registra as ferramentas e a prática, não um incidente específico.** O exemplo abaixo é
  plausível e coerente com a stack, mas deve ser trocado pelo erro real (campo nulo, encoding,
  timeout de integração...) antes de enviar.

> Uma vez, no sistema em Django que eu mantinha no Empório Sertanejo, chegou um relato de que uma
> página estava quebrando em produção pra alguns usuários — mas no meu ambiente funcionava normal.
>
> Fui olhar o log do servidor e achei o traceback: era um erro ao tentar acessar um campo que estava
> vazio para alguns registros antigos do banco. Como esses registros só existiam em produção, o
> problema nunca aparecia no meu ambiente.
>
> Ajustei o código pra tratar esse caso em vez de assumir que o campo sempre existia, corrigi os
> registros no banco e escrevi um teste cobrindo essa situação pra não acontecer de novo.

Notas de uso:

- Existe uma versão mais longa dessa resposta, com OpenTelemetry, Grafana, N+1 no ORM e alerta de
  latência — o João preferiu a versão curta e mais realista.
