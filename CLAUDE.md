# Livadra — CLAUDE.md

Session continuity document. Update after every significant implementation step.

## Skills
Before starting any task, scan `.claude/skills/` for relevant skill files and read any that apply before writing code.

## Project
An AI-powered social intelligence and situational humor assistant for real-world human interactions. Helps users navigate workplace tension, friend group dynamics, networking, parties, texting, dating, banter, and conversational flow. Humor is the tool, not the entire product.

## Product Vision

### What Livadra Is
A broader AI social copilot — not a dating reply generator. Three complementary modes:
- **Texting Mode** — quick one-off help with a specific message or situation
- **Live Mode** — real-time voice-input assistance for situations happening right now
- **Moments** — persistent ongoing social situations with memory and conversational continuity

### Tone
Human, subtle, context-aware, emotionally calibrated, naturally conversational.

**Avoid:** gimmicky rizz-app behavior, pickup-artist energy, try-hard humor, overly polished dialogue, forced cleverness.

**Prioritize:** realism, continuity, low cringe, emotional intelligence, conversational naturalness, socially believable responses.

### What the AI Must Understand
Dating, parties, texting, workplace interactions, networking, awkward silences, friend groups, social anxiety, casual banter, playful teasing, conflict de-escalation, first impressions, group dynamics.

### What the AI Must Avoid
Creepy behavior, manipulation, aggressive flirting, try-hard humor, edgy internet humor, offensive jokes, robotic phrasing, AI-sounding responses, cringe, pickup-artist framing.

### Non-Prescriptive Language (permanent product rule)
The app must **never** directly command users what to say ("Say this", "Use this line", "This will work"). All suggestions must be framed collaboratively: "You could say something like…", "A playful response could be…", "If the vibe feels right, you might try…"

Enforced in the `note` and `delivery` fields of every JSON response and in `prompts/v2/system_personality.txt`.

### Response Structure
Every AI response returns **structured JSON**: safe / playful / bold options (each with `text` + `note`) plus a top-level `delivery` field.

### Context Quality Principle
Thin context → generic responses. Rich context → responses that feel written for that exact moment. Encourage users to provide relationship, vibe, and goal in every request. Reflected in UX copy, placeholders, and onboarding.

## Landing Page — livadra_landing/

Separate repo: `https://github.com/TasfiatKhan/Livadra_Landing`

### Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 App Router |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animations | Framer Motion 11 |
| Language | TypeScript |
| Fonts | Lora (serif headings) + DM Sans (body) via next/font/google |

### Design System
- **Dark palette:** `--bg #121110`, `--surface #262320`, `--accent #C4956A`, `--text #EDE8E1`, `--safe #5A8F6B`, `--playful #7B6FA8`, `--bold #B85C4A`
- **Light palette:** `--bg #FDFAF7`, `--surface #FFFFFF`, `--text #1C1610`, `--text2 #5C4E41`. Same accent/safe/playful/bold as dark.
- **Theme switching:** `data-theme` on `<html>`; `ThemeContext` reads/writes `localStorage('livadra-theme')`; inline `<head>` script prevents flash.
- **Noise texture:** `body::before` SVG fractalNoise overlay (opacity 0.2 dark, 0.05 light)
- **Animations:** Framer Motion for phone float (`y: [0,-12,0]`, `rotate: -1`) and floating badges; CSS `@keyframes ticker` for social proof strip.

### Page Sections (top → bottom)
1. **Navbar** — fixed, scroll-aware, backdrop blur, sun/moon theme toggle, mobile CTA
2. **Hero** — "Never run out of things to say again.", trust items, animated phone mockup + floating badges
3. **Ticker** — scrolling social proof strip (CSS animation, items duplicated for seamless loop)
4. **Problem** — "Some conversations are hard" + anxiety spiral card visual
5. **Modes** — three cards (Texting / Live / Moments) with use-case lists
6. **Adaptability** — "Conversations are human everywhere." + staggered context chip grid
7. **Scenarios** — interactive 3-tab selector with sticky response display panel
8. **Differentiators** — 4-column features grid
9. **Testimonials** — 3 cards (Mara, Theo, Priya)
10. **Waitlist CTA** — bordered card with gradient top line, email capture form
11. **Footer** — 4-column grid

### Key Files
- `src/app/globals.css` — CSS vars (dark + light), noise texture, `@keyframes ticker`
- `src/app/layout.tsx` — fonts, OG/Twitter metadata, flash-prevention script, `suppressHydrationWarning`
- `src/context/ThemeContext.tsx` — dark/light theme context, localStorage persistence
- `src/components/Providers.tsx` — client wrapper for ThemeProvider
- `src/components/ui/PhoneMockup.tsx` — animated phone with chat thread + AI suggestion cards
- `src/components/sections/AdaptabilitySection.tsx` — context chip grid
- `src/components/sections/ScenarioSection.tsx` — interactive tabs with React state
- `src/components/sections/WaitlistSection.tsx` — email form (TODO: wire to email service)
- `src/components/ui/AnimatedSection.tsx` — scroll-triggered Framer Motion wrapper

### Waitlist Integration
`WaitlistSection.tsx` uses a `setTimeout` mock — no emails are captured. Wire to Mailchimp / ConvertKit / Loops before launch.

---

## Current Status (as of 2026-05-16)
All Phase 1 + Phase 1.5 features complete. Landing page live on GitHub. UX refinement phase underway.

**Pending migrations (run once if not already applied):**
```
sudo docker compose exec backend python manage.py migrate
sudo docker compose up --build -d
```
Applies: `responses/0002_copiedresponse`, `moments/0001_initial`, `moments/0002_momentmessage_response_record`.

## Upcoming — Phase 1.75: UX Refinement
- Apply theme tokens to remaining non-screen components (navigation headers, modals)
- Screen-by-screen UX pass: spacing, visual hierarchy, empty states
- Onboarding flow polish

## Upcoming — Phase 2: Analytics Dashboard
Admin/developer view first; user-facing "your stats" screen later. Data already collected:
- `AIResponseRecord` — mode, relationship_context, situation_summary, response_json, prompt_version, feedback_counts
- `ResponseFeedback` — natural/loved/cringe/risky per response per user
- `SavedResponse` — saved option text per user

Planned surfaces: feedback distribution by mode, usage patterns, option type save rates, Moments engagement stats.

Pre-dashboard: remove debug `print` statements in `LiveVoiceView`; broader scenario coverage in prompts; consider prompt v3.

## Upcoming — Other
- Profiles with stale `persona_type` values (`roaster`, `quick_wit`, `deadpan`) need data cleanup before production.

## Stack
| Layer | Technology |
|-------|-----------|
| Backend | Django 4.2 + DRF |
| Database | PostgreSQL 15 |
| Cache | Redis 7 |
| Auth | JWT via djangorestframework-simplejwt |
| AI | Claude API — `claude-sonnet-4-6` |
| AI response | Structured JSON via DRF `Response` |
| Frontend | React Native + Expo bare workflow |
| Language | TypeScript (frontend), Python 3.11 (backend) |

## Architecture Rules (non-negotiable)
- **No direct Claude API calls from views.** All AI interactions go through `backend/services/ai_service.py`.
- **Prompts are three independent layers:** (a) user personality, (b) situational context, (c) request. Kept in `backend/prompts/v{n}/`.
- **Personality profile is always Redis-cached.** Cache logic in `backend/apps/profiles/cache.py`.
- **Frontend never calls API from screens.** All network calls go through `frontend/src/services/`.

## Django App Namespace
Apps live under `apps/` and are registered as `apps.users`, `apps.profiles`, `apps.humor`, etc. `AppConfig.name` must match this dotted path.

## Feature Scope
| Priority | Feature | Status |
|----------|---------|--------|
| 1 | Onboarding / Personality Profile | complete |
| 2 | Texting Mode | complete |
| 3 | Live Mode | complete |
| 4 | Structured JSON response format (3 options) | complete — full stack |
| 5 | `social_anxiety_level` on profile | complete — full stack |
| 6 | `relationship_context` + `relationship_other` + `environment` per-request | complete — full stack |
| 7 | Phase 1 analytics: AIResponseRecord, ResponseFeedback, SavedResponse | complete — full stack |
| 8 | Moments: persistent multi-turn conversation threads | complete — full stack |
| 9 | Saved responses screen | complete — full stack |
| 10 | Undoable single-selection feedback | complete — full stack |
| 11 | Moments feedback (per-message, record_id on MomentMessage) | complete — full stack |
| 12 | Active/Archived Moments toggle + 5 active cap | complete — full stack |
| 13 | Voice input for Moment continuation | complete — full stack |
| 14 | Copy button + delivery coaching on Moment assistant cards | complete — frontend |
| 15 | Copy tracking: CopiedResponse model + trackCopy in all screens | complete — full stack |
| 16 | Archive/Unarchive toggle on Moment thread header | complete — full stack |
| 17 | Tap-to-record (replaces hold-to-record) in Live Mode + Moments | complete — full stack |
| 18 | Live Mode: empty transcription guard + pulse animation | complete — full stack |
| 19 | Short punchy response enforcement in live_mode.txt + moments_mode.txt | complete — backend |
| 20 | Design token system (`theme.ts`) + applied to all screens | complete — frontend |
| 21 | Live Mode full redesign: record-only, dark layout, thumb-friendly | complete — frontend |
| 22 | UX nav cleanup: back buttons, avatar on Home | complete — frontend |
| 23 | Moments creation: remove mode + vibe fields, update situation label | complete — full stack |
| 24 | Empty transcription UX: Live Mode error copy, Moments coaching exchange | complete — full stack |
| 25 | Dark/light theme toggle: ThemeContext, darkColors, toggle on HomeScreen | complete — frontend |
| 26 | Livadra logo: SVG + LivadraLogo RN component | complete — frontend |
| 27 | Analytics dashboard | upcoming — Phase 2 |
| — | Delivery Coaching (v2) | out of scope |

## Working Style
- Architect decides approach, Claude executes.
- Confirm approach before writing significant code.
- Ask before making non-trivial assumptions.

## Settings Notes
- DB config uses individual vars (`DB_NAME`, `DB_USER`, etc.) — no `dj-database-url`.
- `ANTHROPIC_API_KEY` read directly by `AIService` via decouple, not surfaced in Django settings.
- Token blacklisting (`BLACKLIST_AFTER_ROTATION`) disabled — TODO before production.
- `PROFILE_CACHE_TTL` is in settings (not read by cache.py directly from env).

## Progress Log
- **2026-05-03** — Scaffolded full folder/file structure.
- **2026-05-03** — `config/settings/base.py` + `development.py` written; `production.py` stubbed.
- **2026-05-03** — Core Django files written (`manage.py`, `wsgi.py`, `asgi.py`, `urls.py`); backend bootable.
- **2026-05-03** — `users` app: custom `User` model (email-as-username, `AbstractBaseUser`), registration + `/me` endpoints.
- **2026-05-05** — `profiles` app: `UserProfile` model, profile signal, `ProfileView` (GET/PUT/PATCH `/api/profiles/me/`), Redis cache with re-prime on update.
- **2026-05-05** — Docker Engine installed; containers running, migrations applied, JWT auth verified.
- **2026-05-05** — `services/ai_service.py` + `redis_client.py`; three-layer prompt assembly; `prompts/v1/` templates written; `personality_description` added to profile serializers.
- **2026-05-05** — `humor` app: `TextingModeView` (POST `/api/humor/texting/`) + `LiveModeView` (POST `/api/humor/live/`); JWT-auth + onboarding-gated; `StreamingHttpResponse`.
- **2026-05-05** — `username` field added to `UserProfile` (migration 0004); `conversation` → `context` rename across serializer/view/prompt.
- **2026-05-05** — Backend complete; both AI endpoints verified end-to-end.
- **2026-05-06** — Frontend foundation: Axios API client with JWT interceptors + token refresh, `authService`, `AuthContext`, navigation stack (AppNavigator → Auth/MainNavigator), LoginScreen + RegisterScreen.
- **2026-05-06** — Frontend feature-complete: `profileService`, `useProfile`, `PersonalitySetupScreen`, `TextingModeScreen`, `LiveModeScreen`.
- **2026-05-06** — Bug fixes: `index.js` entry point added, `password_confirm` fix, Hermes streaming → axios JSON, `ALLOWED_HOSTS` updated for device IP.
- **2026-05-06** — Prompts rewritten to v2: structured JSON output (safe/playful/bold + delivery); `ai_service.py` switched to `messages.create()` + `json.loads()`; `str.replace()` used in prompt builder to avoid KeyError on JSON braces.
- **2026-05-06** — Frontend updated for JSON responses: `useAIResponse` hook, `AIResponse`/`AIOption` types in `src/types/humor.ts`, `OptionCard` + `DeliveryCard` UI in both mode screens.
- **2026-05-06** — Context expansion: `social_anxiety_level`, `relationship_context`, `relationship_other`, `environment` added to `UserProfile` + both request serializers; `AIService._resolve_relationship()` added; v2 prompts updated; non-prescriptive language rule enforced in `system_personality.txt`.
- **2026-05-07** — Voice input for Live Mode: `LiveVoiceView` with Whisper transcription, hold-to-record UI via `expo-av`, swipeable response cards; `LIVE_VOICE_PATH` in `humorService.ts`.
- **2026-05-07** — Copy buttons on OptionCards (`expo-clipboard`, "Copied!" flash 1.5s); HomeScreen onboarding gate via `useProfile` + `navigation.replace`.
- **2026-05-07** — HomeScreen built (`src/screens/HomeScreen.tsx`); `PersonaType` replaced with social styles (Storyteller, Charmer, Observer, Witty One, Confident One); migration 0006.
- **2026-05-07** — `apps.responses`: `AIResponseRecord`, `ResponseFeedback`, `SavedResponse` models; `/api/responses/feedback/` + `/api/responses/save/`; feedback row on all OptionCards.
- **2026-05-07** — "Edit profile" → "My Profile" across HomeScreen, TextingModeScreen, LiveModeScreen.
- **2026-05-07** — `social_anxiety_level` chip selector in PersonalitySetupScreen; `SOCIAL_ANXIETY_LEVELS` constant; added to `Profile` + `ProfileUpdate` types.
- **2026-05-07** — Moments full-stack: `apps.moments`, `Moment` + `MomentMessage` models, 4 endpoints (`/api/moments/`), 19-exchange cap, `AIService.get_response_with_history()`, `MomentsScreen` + `MomentDetailScreen`.
- **2026-05-08** — `SavedResponsesScreen` + `GET /api/responses/saved/`; feedback rewritten as undoable single-selection; Moments feedback via `MomentMessage.response_record` FK.
- **2026-05-08** — Input placeholders updated in TextingModeScreen + LiveModeScreen with workplace/friend/networking examples.
- **2026-05-10** — `SavedResponsesScreen`: fixed `useFocusEffect` receiving async directly — inner `async function fetch()` pattern required.
- **2026-05-10** — Active/Archived Moments toggle: `ACTIVE_MOMENT_CAP = 5` in backend; `showArchived` pill toggle in `MomentsScreen`.
- **2026-05-10** — Voice continuation for Moments: `audio: FileField` in `MomentContinueSerializer`, Whisper in `MomentContinueView`, record button in `MomentDetailScreen` continue bar; fixed `relContext` guard blocking recording in thread view.
- **2026-05-10** — Copy + delivery on Moment cards: `msgCopied` + `deliveryExpanded` (`Record<number, ...>`) state keyed by `msg.id` in `MomentDetailScreen`.
- **2026-05-10** — `CopiedResponse` model + `POST /api/responses/copy/`; `trackCopy()` in `responsesService.ts`; fire-and-forget in all copy handlers.
- **2026-05-10** — Archive/Unarchive toggle on `MomentDetailScreen` header; `MomentArchiveView.patch()` toggles with 5-cap check; archived banner shows exchange count.
- **2026-05-10** — Tap-to-record replaces hold-to-record in LiveModeScreen + MomentDetailScreen (`onPress` + `toggleRecording()` helper).
- **2026-05-10** — Empty transcription guard in `LiveVoiceView` (< 10 chars → 400); pulse via `Animated.parallel` (scale 1→1.28 + opacity 1→0.55).
- **2026-05-10** — Short response enforcement in `live_mode.txt` + `moments_mode.txt`; live `max_tokens` 1024 → 600.
- **2026-05-11** — Design token system: `frontend/src/theme.ts` with `lightColors`, `typography`, `spacing`, `radii`, `shadow.card`; applied to all 9 screens via `useMemo([colors])`.
- **2026-05-12** — Livadra logo: `logo.svg` + `LivadraLogo.tsx` RN component; HomeScreen text replaced with `<LivadraLogo size={56} />`.
- **2026-05-12** — UX nav cleanup: `←` back buttons on Texting/Moments screens; HomeScreen avatar circle (first letter of username) → PersonalitySetup.
- **2026-05-12** — Moments creation form: removed Mode selector + environment field; relabelled "What's the situation?" → "What's the situation and what do you need?".
- **2026-05-12** — Empty transcription UX: Live Mode error copy updated; Moments sends coaching exchange instead of 400.
- **2026-05-12** — Dark/light theme toggle: `darkColors` + `AppColors` in `theme.ts`; `ThemeContext` with SecureStore persistence; all 9 screens use `useTheme()`; toggle button on HomeScreen.
- **2026-05-12** — Live Mode full redesign: record-only UI, dark layout (`#1A1A1A`), thumb-zone button, `relationship_context` optional in `LiveVoiceRequestSerializer`.
- **2026-05-13** — Landing page built and pushed: Next.js 15 + Tailwind + Framer Motion; all 11 sections live at `https://github.com/TasfiatKhan/Livadra_Landing`.
- **2026-05-13** — Landing page warm tone: `--bg #121110`, noise 0.4 → 0.2, `AdaptabilitySection` added between Modes and Scenarios.
- **2026-05-13** — AI prompts v2 refinement: quality test added ("would a smooth person say this?"), type descriptions sharpened, anti-pattern rules added to all 4 files in `backend/prompts/v2/`.
- **2026-05-14** — Profile save navigates to `Home` instead of `TextingMode` (`PersonalitySetupScreen.handleSubmit`).
- **2026-05-14** — Landing page copy: hero headline → "Never run out of things to say again."; scenario 1 options rewritten; scenario 3 playful placeholder removed; Texting Mode card trimmed.
- **2026-05-15** — Landing page dark/light toggle: `ThemeContext.tsx`, `Providers.tsx`, light CSS palette, Navbar sun/moon button, flash-prevention inline script, `suppressHydrationWarning` on `<html>` + `<body>`.
- **2026-05-16** — 23 global Claude Code skills created in `~/.claude/skills/` covering full Livadra stack (Django, RN, Next.js, prompts, auth, analytics, design tokens, and more).
- **2026-05-16** — `MissionSection` added between Problem and Modes: eyebrow, serif headline "Built for the moments that matter most.", two staggered paragraphs with Framer Motion whileInView reveals.
- **2026-05-16** — Loops waitlist integration: `src/app/api/waitlist/route.ts` POSTs to Loops API with `LOOPS_API_KEY` (server-only); `WaitlistSection` real fetch, `AnimatePresence` success fade, inline API error message.
- **2026-05-17** — Next.js upgraded to latest version.
- **2026-05-18** — Skills library: 3 new lead skills (`backend-lead`, `frontend-lead`, `app-lead`) as stack-agnostic decision frameworks with coordination protocols; all 13 existing skills de-Livadra-ified (generic key names, model names, screen names).
- **2026-05-19** — Navbar mobile fix: removed `display: 'flex'` inline style from nav links `<ul>` that was overriding Tailwind's `hidden md:flex`, causing links to always render on mobile.
