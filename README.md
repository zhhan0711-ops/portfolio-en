# Zhao Han - Software Engineering Portfolio

An English-language portfolio for backend, full-stack, and AI application / LLM agent internship applications.

## Live site

After the first successful GitHub Pages workflow, the portfolio will be available at:

**https://zhhan0711-ops.github.io/portfolio-en/**

## Featured case studies

- **ChainTrust** - an independently built smart-contract release-risk and review workspace using Next.js, FastAPI, PostgreSQL, structured AI output, Solidity, Hardhat, and ethers.js.
- **ProofLedger** - an independently built dispute-evidence and human-review workspace with deterministic linkage, bounded AI recommendations, and versioned Case Briefs.
- **ReqTest Agent** - a requirement-aware verification workflow connecting requirements, generated tests, isolated execution, and traceable evaluation evidence.
- **FoodShare** - a Django recipe community with authentication, REST APIs, AI Chef, and verified AWS EC2 / Nginx / uWSGI / HTTPS deployment.
- **StyleSphere** - a Spring Boot social-commerce platform where my scope covered authentication, security, users, and safe simulated-payment workflows.

Team projects explicitly separate my individual contribution from the system delivered by the team.

## Site structure

```text
dist/
├── index.html
├── about.html
├── projects.html
├── skills.html
├── resume.html
├── contact.html
├── projects/
│   ├── chaintrust.html
│   ├── proofledger.html
│   ├── reqtest-agent.html
│   ├── foodshare.html
│   └── stylesphere.html
└── assets/
    ├── css/
    ├── images/
    └── js/
```

## Run locally

Python:

```powershell
cd dist
python -m http.server 4173
```

Open `http://127.0.0.1:4173`.

Node.js is also supported:

```powershell
npx serve dist
```

## Deployment

The workflow in `.github/workflows/pages.yml` deploys the `dist` directory whenever `main` is updated.

If GitHub Pages has not been initialised for the repository, open **Settings > Pages**, select **GitHub Actions** as the source, and rerun the workflow.

## Content updates

- Replace screenshots in `dist/assets/images/` while preserving filenames, or update the corresponding HTML paths.
- Edit project content in `dist/projects/`.
- Update the online resume in `dist/resume.html`.
- Update contact links in `dist/assets/js/site.js` and `dist/contact.html`.

The downloadable PDF resume is intentionally not published in this repository.

## Privacy and security

- No `.env` files, API keys, RPC URLs, wallet keys, database credentials, or cloud secrets are committed.
- Private school-team source code is not copied into this portfolio.
- Deployment evidence is redacted before publication.
- Claims distinguish individual ownership from team outcomes and identify product limitations.

## Related repositories

- GitHub profile: https://github.com/zhhan0711-ops
- ChainTrust: https://github.com/zhhan0711-ops/chaintrust
- ProofLedger: https://github.com/zhhan0711-ops/proofledger

