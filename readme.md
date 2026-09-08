# AI Code Evaluation Framework

A GitHub-authenticated platform that ingests an org's repos, runs a 10-agent LLM code evaluation, answers questions over the code via RAG, and recommends roles and hackathon teams based on the scores.

This repo currently holds two planning docs — read them in this order:

## `ai-code-evaluation-framework.md`
The full system architecture spec. Covers the actors (admin/employer), the 5-layer architecture, GitHub OAuth flow, the API contracts, how ingestion/evaluation/RAG/recommendation each work internally, the DB schema, deployment topology, and the invariants we must not break while building. Start here to understand **what we're building and how the pieces fit together**.

## `team-assignments.md`
The task breakdown across the 5 of us (BE-1, BE-2, BE-3, FE-1, FE-2). Each section is a goal, acceptance criteria, tasks, an estimate, dependencies on other members, and a handoff checklist. Read this to see **what you personally own and who you're blocked by/blocking**.

## Quick orientation
- **BE-1**: API, auth, DB models
- **BE-2**: Worker — ingest, chunk, embed
- **BE-3**: Evaluation agents, orchestrator, recommendations, PRISM
- **FE-1**: Repo list + evaluation dashboard
- **FE-2**: Compare, Ask, Recommend, admin traces
