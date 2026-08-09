# 소개 사이트 호스팅

[English](../hosting.md)

결정 상태: **2026-08-06 GitHub Pages 승인**.

공개 사이트: [https://idd.estre.so/](https://idd.estre.so/ko/)

[`../../site/`](../../site/)의 사이트 원본은 평범한 HTML과 CSS입니다. 서버 프로그램이 필요하지 않습니다. 그래서 첫 호스팅 선택은 쉽게 되돌릴 수 있습니다.

## 현재 결정

첫 공개 호스트로 GitHub Pages를 사용합니다. 특정 호스트에서만 동작하는 기능을 원본에 넣지 않습니다. 기록한 요구가 생겨 추가 제어가 추가 운영보다 중요해질 때 자체 호스팅으로 옮깁니다.

## GitHub Pages로 먼저 시작하기

장점:

- 공개 저장소와 배포 이력을 가까이 둘 수 있습니다.
- 애플리케이션 서버를 고치거나 감시할 필요가 없습니다.
- 사용자 지정 도메인에 HTTPS(암호화된 웹 연결)를 설정할 수 있지만, 이것만으로 사이트나 운영 전체의 안전이 증명되지는 않습니다.
- 같은 정적 파일을 나중에 옮길 수 있습니다.

비용:

- 서버에서 실행하는 애플리케이션 기능은 없습니다.
- 플랫폼 사용 한도와 배포 규칙을 따라야 합니다.
- 세부 인프라 동작을 프로젝트가 직접 통제하지 않습니다.

## 자체 호스팅으로 먼저 시작하기

장점:

- 서버, 응답 헤더, 배포 과정, 로그와 향후 실행 기능을 직접 통제합니다.
- 서버 동작이 이미 필요하다면 인프라 경로를 한 번만 만들 수 있습니다.

비용:

- 서버 보안, 업데이트, 가용성, 비용, 백업과 장애 대응이 즉시 프로젝트 작업이 됩니다.
- 현재 정적 사이트는 그 추가 기능을 사용하지 않습니다.

## 자체 호스팅으로 옮기는 조건

다음 조건 중 하나가 참이면 결정을 다시 봅니다.

- 필수 기능에 서버 코드가 필요합니다.
- 플랫폼 대역폭, 빌드 또는 배포 압력이 두 번의 검토 동안 계속됩니다.
- 법률, 개인정보 또는 계약 요구가 인프라 통제를 요구합니다.
- 필요한 로그, 응답 정책 또는 운영 관찰을 제공할 수 없습니다.
- 호스팅 장애나 공급자 의존성이 유지보수자가 기록한 한도를 넘습니다.

2026-11-04부터 90일마다 결정을 검토합니다. 나중에 옮길 때는 사용자 지정 도메인을 유지해 공개 링크가 바뀌지 않게 합니다.

## 현재 호스팅 정책

호스트에 종속되지 않는 정적 사이트를 GitHub Pages에 배포합니다. 자산에는 상대 주소를 유지하고 특정 호스트에서만 동작하는 실행 의존성을 두지 않습니다. 서버 동작, 지속적인 플랫폼 한도 압력, 규정상 통제 또는 운영 관찰 요구가 생기면 자체 호스팅을 다시 검토합니다.

## 확인한 출처

2026-08-06에 확인했습니다.

- [GitHub Pages란 무엇인가](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages 사용 한도](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [사용자 지정 도메인과 GitHub Pages 안내](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [GitHub Pages 사이트에 HTTPS 적용하기](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
