# Project Docs (Living Documentation)

기획자(PM)와 개발자, 디자이너 간의 효율적인 커뮤니케이션을 위한 **실시간 문서화(Living Documentation)** 시스템입니다. 
구글 문서(Docs/Sheets) 등 파편화된 기획 문서의 한계를 극복하고, 구조화된 DB(Supabase)를 통해 화면 기획(UI Spec)과 기능 요구사항(PRD)을 한눈에 매핑하여 제공합니다.

## 🚀 기술 스택 (Tech Stack)
- **Frontend**: React 19, Vite, Tailwind CSS 4, React Router v7
- **State Management & Data Fetching**: `@tanstack/react-query`
- **Database / Backend**: Supabase (PostgreSQL)
- **Automation / Scripts**: Python 3.x (이전 구글 시트 동기화용 레거시)

## 📁 주요 폴더 구조
```text
.
├── AGENTS.md          # AI 코딩 어시스턴트용 규칙 및 프롬프트 가이드라인
├── project-docs/      # React 기반 프론트엔드 (Living Docs) 애플리케이션
│   ├── src/           
│   │   ├── components/ # 디바이스 시뮬레이터 및 트레이스 링크 등 공통 컴포넌트
│   │   ├── pages/      # 요구사항 정의서(PRD) 및 화면기획(UI) 페이지
│   │   ├── wireframes/ # 각 화면 기획별 목업(Wireframe) 컴포넌트
│   │   └── lib/        # Supabase 클라이언트 설정
│   └── package.json    # 프론트엔드 의존성
└── scripts/           # (Legacy) 구글 워크스페이스 문서 동기화 파이썬 스크립트 모음
```

## 🛠 실행 방법 (Getting Started)

### 1. 환경 변수 세팅
`project-docs` 폴더 내에 `.env.local` 파일을 생성하고 Supabase 연동 정보를 입력합니다.
```bash
VITE_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
VITE_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]
```

### 2. 패키지 설치 및 실행
```bash
cd project-docs
npm install
npm run dev
```

## 🏗 주요 기능 (Features)
- **추적성 보장 (Traceability)**: 화면 기획서의 특정 요소를 클릭하면 매핑된 요구사항 정의서(PRD)로 부드럽게 스크롤되며 하이라이트됩니다.
- **디바이스 시뮬레이터**: `iphone-17-pro`, `galaxy-s25-ultra-gesture`, `galaxy-fold-7-gesture` 등 다양한 최신 기기의 프레임 안에서 와이어프레임을 확인할 수 있습니다.
- **실시간 데이터 동기화**: 정적 하드코딩 데이터를 완전히 탈피하여 Supabase로부터 데이터를 비동기로 불러오고, React Query를 통해 캐싱하여 뛰어난 사용자 경험을 제공합니다.
