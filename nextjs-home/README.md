# Next.js HOME_FINAL

Figma에서 변환된 HOME_FINAL 페이지를 Next.js + Tailwind CSS + shadcn/ui로 구현한 프로젝트입니다.

## 🚀 시작하기

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 프로덕션 서버 실행
```bash
npm start
```

## 📁 프로젝트 구조

```
nextjs-home/
├── app/
│   ├── globals.css          # Tailwind CSS 설정
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 루트 페이지 (홈으로 리다이렉트)
│   └── home/
│       └── page.tsx         # HOME_FINAL 페이지
├── components/
│   └── ui/
│       └── button.tsx       # shadcn/ui 스타일 Button 컴포넌트
├── tailwind.config.js       # Tailwind CSS 설정
├── postcss.config.js        # PostCSS 설정
├── tsconfig.json            # TypeScript 설정
└── next.config.js           # Next.js 설정
```

## 🎨 Figma 변환 특징

- **Auto-Layout**: Figma의 Auto-Layout을 Tailwind의 `space-y-*`, `grid`, `flex`로 매핑
- **Constraints**: 반응형 디자인을 위한 Tailwind 클래스 적용
- **Color Tokens**: Figma 색상을 Tailwind 커스텀 색상으로 매핑
- **Typography**: Figma 텍스트 스타일을 Tailwind 폰트 클래스로 변환
- **Semantic HTML**: 의미있는 HTML 구조와 적절한 태그 사용

## 🌈 색상 시스템

```css
/* Tailwind 커스텀 색상 */
primary: '#1285ff'      /* 주요 액션 색상 */
secondary: '#4da3ff'    /* 보조 액션 색상 */
text-primary: '#121a0f' /* 주요 텍스트 */
text-secondary: '#212837' /* 보조 텍스트 */
text-muted: '#373737'   /* 비활성 텍스트 */
background-primary: '#f7fafc' /* 주요 배경 */
background-secondary: '#fafafa' /* 보조 배경 */
border: '#ededed'       /* 테두리 색상 */
```

## 📱 반응형 디자인

- 모바일 우선 접근법
- 최대 너비 393px (Figma 디자인 기준)
- Tailwind의 반응형 유틸리티 클래스 활용

## 🔧 커스터마이징

### 새로운 색상 추가
`tailwind.config.js`의 `extend.colors` 섹션에 추가

### 새로운 컴포넌트 추가
`components/ui/` 디렉토리에 새로운 컴포넌트 생성

### 페이지 추가
`app/` 디렉토리에 새로운 라우트 생성

## �� 라이센스

MIT License
