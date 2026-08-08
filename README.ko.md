<p align="center">
  <a href="https://soliestre.github.io/idd/ko/">
    <img src="assets/idd-readme-banner.png" alt="IDD 탐침이 증거 확인 지점을 지나 보호된 결정으로 이동하는 추상 이미지" width="100%">
  </a>
</p>

<h1 align="center">IDD: 구현 주도 개발</h1>

<p align="center">
  <a href="https://soliestre.github.io/idd/ko/"><img alt="GitHub Pages의 소개 사이트" src="https://img.shields.io/badge/site-GitHub%20Pages-7447FF?style=flat-square&amp;labelColor=12131A"></a>
  <a href="https://github.com/SoliEstre/idd/actions/workflows/validate.yml"><img alt="공개 콘텐츠 검증" src="https://github.com/SoliEstre/idd/actions/workflows/validate.yml/badge.svg?branch=main"></a>
  <a href="docs/ko/status.md"><img alt="프로젝트 상태: 연구 단계" src="https://img.shields.io/badge/status-research%20stage-FF826E?style=flat-square&amp;labelColor=12131A"></a>
  <a href="docs/ko/skills.md"><img alt="에이전트 스킬 버전 0.1.0 초안" src="https://img.shields.io/badge/agent%20skill-0.1.0--draft-F2D06B?style=flat-square&amp;labelColor=12131A"></a>
  <a href="LICENSE"><img alt="MIT 라이선스" src="https://img.shields.io/badge/license-MIT-AEF5D8?style=flat-square&amp;labelColor=12131A"></a>
  <a href="README.md"><img alt="영어로 읽기" src="https://img.shields.io/badge/read-EN-F3F0E8?style=flat-square&amp;labelColor=12131A"></a>
</p>

IDD는 첫 구현을 최종 답안으로 취급하지 않고, 작은 구현에서 배우기 위한 실험적 소프트웨어 개발 방법입니다.

작고 격리된 탐침을 만듭니다. 탐침이 보여 주는 증거를 관찰합니다. 사람이 제품의 의미를 결정합니다. 그다음에만 승인한 동작을 테스트, 계약, 평가와 독립 검증으로 보호합니다.

> 구현은 약속이 되기 전에 탐침입니다.

## 한눈에 보기

```text
의도와 안전 경계를 밝힙니다
  → 격리된 탐침 하나를 만듭니다
  → 증거를 모읍니다
  → 사람이 결정합니다
  → 테스트, 계약 또는 평가를 작성합니다
  → 공식 구현을 작성하거나 수정합니다
  → 독립적으로 검증합니다
  → 배포할 수 있는지 판단합니다
```

동작하는 코드라고 자동으로 통과하지 않습니다. 코드는 네 상태를 거칩니다.

```text
Probe → Candidate → Contracted → Shippable
```

- **Probe**는 중요한 질문 하나를 격리해서 탐색합니다.
- **Candidate**는 비교하거나 다듬을 가치가 있지만 아직 제품의 약속은 아닙니다.
- **Contracted** 동작에는 사람의 명시적 결정과 그에 맞는 테스트, 계약 또는 평가가 있습니다.
- **Shippable** 변경은 필요한 보안, 운영, 롤백과 독립 검증도 통과했습니다.

## 이 프로젝트가 필요한 이유

인공지능 코딩 에이전트는 팀이 문제를 완전히 설명하기 전에 동작하는 구현을 만들 수 있습니다. 이 속도는 학습을 도울 수 있습니다. 하지만 첫 구현의 우연한 동작을 영구적인 제품 약속으로 만들 수도 있습니다.

IDD는 두 결과를 분리합니다. 구현으로 증거를 발견하고, 그 증거가 약속이 되기 전에 명시적인 결정을 요구합니다.

IDD는 테스트 주도 개발을 대체하지 않습니다. 중요한 동작이 아직 불확실한 작업을 위한 경로입니다. 동작을 이미 알고 있다면 테스트나 계약을 먼저 작성합니다.

## 시작하기

- [IDD란 무엇인가](docs/ko/what-is-idd.md)
- [작업 방법](docs/ko/method.md)
- [안전 경계](docs/ko/safety.md)
- [에이전트 스킬과 플러그인 지원](docs/ko/skills.md)
- [프로젝트 상태](docs/ko/status.md)
- [호스팅 결정](docs/ko/hosting.md)
- [인공지능 시스템과 전문 독자를 위한 고밀도 사양](ai/idd-spec.md)
- [영문 문서](docs/README.md)

소개 사이트는 [soliestre.github.io/idd](https://soliestre.github.io/idd/ko/)에서 공개합니다. 호스트에 종속되지 않는 원본은 [`site/`](site/)에 그대로 둡니다.

## 에이전트에서 사용하기

기준 [`skills/idd/SKILL.md`](skills/idd/SKILL.md)는 Codex, Claude Code와 Gemini CLI용으로 함께 패키징합니다. Claude Code에서는 이 저장소에서 바로 설치할 수 있습니다.

```text
/plugin marketplace add SoliEstre/idd
/plugin install idd@idd
```

그다음 `/idd:idd`로 호출하거나 의미가 불명확한 제품·연동 작업을 설명해 자동 선택하게 합니다. Codex, Gemini CLI, GitHub Copilot, 검사 방법과 현재 배포 한계는 [에이전트 스킬과 플러그인 지원](docs/ko/skills.md)에 정리했습니다.

## 현재 한계와 이용 조건

IDD는 연구 단계 방법입니다. 실제 팀을 대상으로 IDD가 기존 방법보다 빠르거나 안전하거나 우수하다는 점을 아직 입증하지 않았습니다. 이는 홍보 문구가 아니라 통제된 파일럿으로 확인할 질문입니다.

제안된 세 단어 이름에서 마지막 글자가 뜻하는 단어도 아직 정하지 않았습니다. 공개 문서는 두 후보 중 하나를 확정 명칭으로 쓰는 대신 실제 행동을 설명합니다.

이 저장소는 [MIT 라이선스](LICENSE)로 제공합니다. 라이선스는 자료의 이용을 허용하지만 IDD의 효과를 입증하지는 않습니다.
