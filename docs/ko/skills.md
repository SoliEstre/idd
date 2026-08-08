# 에이전트 스킬과 플러그인 지원

IDD 0.1.0-draft는 `skills/idd/`에 하나의 기준 스킬을 제공합니다. Codex, Claude Code와 Gemini CLI가 이 기준 소스를 패키징해 복사본 차이를 줄입니다. 다만 실행 중 trigger·context·tool 동작은 플랫폼마다 다를 수 있고 아직 통제 검증하지 않았습니다.

## 지원 표면

| 에이전트 | 배포 표면 | 상태 |
|---|---|---|
| Codex | `.codex-plugin/plugin.json` + `skills/idd/` | 플러그인 manifest와 UI 메타데이터 제공. 공개 디렉터리에는 아직 제출하지 않았습니다. |
| Claude Code | `.claude-plugin/plugin.json`, marketplace manifest, 공용 스킬 | 이 GitHub 저장소에서 설치 가능. 스킬 명령은 `/idd:idd`입니다. |
| Gemini CLI | `gemini-extension.json` + 공용 스킬 | GitHub extension으로 설치 가능합니다. |
| GitHub Copilot | Agent Skills 호환 `skills/idd/` | 스킬 폴더 전체를 지원되는 프로젝트 또는 개인 경로로 복사합니다. |

플러그인은 지침과 결정론적 구조 검사기를 포함합니다. 외부 app, MCP 서버, 인증 정보나 암묵적 권한 부여는 없습니다.

## Claude Code

Claude Code 안에서 이 저장소를 marketplace로 추가하고 플러그인을 설치합니다.

```text
/plugin marketplace add SoliEstre/idd
/plugin install idd@idd
```

`/idd:idd`로 직접 호출하거나, 제품 의미가 불명확한 기능·연동 작업을 설명해 자동 선택하게 할 수 있습니다. 로컬 플러그인 개발에서는 다음을 실행합니다.

```powershell
claude --plugin-dir .
```

공식 형식: [Claude Code plugins](https://code.claude.com/docs/en/plugins)

## Gemini CLI

Gemini CLI 대화형 모드 밖에서 실행합니다.

```powershell
gemini extensions install https://github.com/SoliEstre/idd
```

Gemini가 extension의 `skills/idd/SKILL.md`를 발견합니다. 공식 형식: [Gemini CLI extension reference](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/reference.md)

## Codex

저장소에 Codex 플러그인 manifest, 스킬 UI 메타데이터와 공용 스킬이 있습니다. 사용 중인 Codex workspace가 제공하는 플러그인 개발·가져오기 표면에서 저장소를 시험하거나 가져옵니다. 사용 가능 여부는 plan, rollout, workspace 정책과 역할에 따라 달라질 수 있습니다. 플러그인은 외부 app이나 도구 의존성을 요청하지 않습니다.

공식 제품 안내: [Plugins in Codex](https://help.openai.com/en/articles/20001256-plugins-in-codex/)

## GitHub Copilot

`skills/idd` 전체를 `.agents/skills/idd`, `.github/skills/idd` 또는 다른 지원 경로로 복사합니다. `SKILL.md`와 함께 `references/`, `scripts/`, `agents/`를 유지합니다.

공식 형식: [Adding agent skills for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)

## 스킬이 강제하는 흐름

1. 구현 전에 불확실성과 위험으로 작업을 라우팅합니다.
2. 결정에 필요한 질문 하나마다 격리된 탐침 하나를 사용합니다.
3. 실행 전에 `idd-probe.json`을 검사합니다. `PASS`는 구조만 확인하며 탐침을 승인하지 않습니다.
4. 증거를 보존하고 사람의 명시적 결정에서 멈춥니다.
5. 승인된 동작만 계약과 테스트로 증류합니다.
6. 공식 구현을 다시 작성하고 독립된 증거 경로로 검증합니다.

스킬은 연구 초안입니다. 프롬프트를 결정론적 정책 엔진으로 바꾸지 않으며, 데이터의 실제 비식별화나 명령의 안전성을 증명하지 않고, IDD가 전달 결과를 개선한다고 입증하지 않습니다.

[English](../skills.md) · [스킬 원본](../../skills/idd/SKILL.md)
