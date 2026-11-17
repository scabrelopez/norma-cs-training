# Norma CS Training Sample

A fictional, deliberately imperfect sample application for the Norma Customer Success Enablement course.

Do not deploy this code, run it with real data or use it in production.

## Purpose
- Create a private GitHub or Bitbucket repository with these files at the root.
- Connect the repository to Norma and run a Full Scan.
- Investigate the Issues and Findings that Norma returns.

## Contents
- `requirements.txt` and `package.json`: manifests that Norma reads to detect the stack.
- `backend/app.py`: a small Flask API.
- `frontend/dashboard.js`: a small browser module.
- `sample-data/scans.json`: synthetic data for context. It does not create Issues in Norma.

The results that Norma returns depend on the current rulesets. Record what you see.

No real credentials, tokens or customer data are included.
