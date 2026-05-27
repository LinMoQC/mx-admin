# CHANGELOG


## 8.1.0 (2026-05-28)

* release: v8.1.0
* feat(admin): migrate blurhash → thumbhash across admin UI ([980fe52](https://github.com/mx-space/mx-admin/commit/980fe52))
* feat(admin): add translation review section to AI settings ([c746c33](https://github.com/mx-space/mx-admin/commit/c746c33))
* refactor(admin): drop markdown client-side image hash compute (server-side now authoritative) ([24aadd8](https://github.com/mx-space/mx-admin/commit/24aadd8))

## 7.3.0 (2026-05-15)

* release: v7.3.0 ([963b6a9](https://github.com/mx-space/mx-admin/commit/963b6a9))
* feat(shorthand): multi-enrichment preview for recently entries (#1044) ([d03256b](https://github.com/mx-space/mx-admin/commit/d03256b)), closes [#1044](https://github.com/mx-space/mx-admin/issues/1044)
* chore(deps): bump @haklex/* to 0.11.0 ([8d98a22](https://github.com/mx-space/mx-admin/commit/8d98a22))
* chore(deps): bump @haklex/* to 0.12.0 ([be37002](https://github.com/mx-space/mx-admin/commit/be37002))
* chore(deps): bump @haklex/* to 0.13.0 ([8ff334a](https://github.com/mx-space/mx-admin/commit/8ff334a))

## 7.2.0 (2026-05-14)

* release: v7.2.0 ([54989a5](https://github.com/mx-space/mx-admin/commit/54989a5))
* chore(deps): bump @haklex/* from 0.8.0 to 0.9.1 ([1155ee2](https://github.com/mx-space/mx-admin/commit/1155ee2))
* chore(deps): bump @haklex/* to 0.10.0 ([d010c18](https://github.com/mx-space/mx-admin/commit/d010c18))
* chore(deps): bump @haklex/* to 0.9.2 ([5a39cb7](https://github.com/mx-space/mx-admin/commit/5a39cb7))
* feat(admin): enrichment management page + search-index master-detail refactor ([5216a7d](https://github.com/mx-space/mx-admin/commit/5216a7d))

## <small>7.1.7 (2026-05-12)</small>

* chore: release v7.1.7 ([d102e05](https://github.com/mx-space/mx-admin/commit/d102e05))
* fix(deps): dedupe @codemirror/state by bumping CodeMirror and @haklex/* to latest ([00a4fa2](https://github.com/mx-space/mx-admin/commit/00a4fa2))
* docs: add keymap architecture and posts-list redesign specs ([eda0d7d](https://github.com/mx-space/mx-admin/commit/eda0d7d))

## <small>7.1.6 (2026-05-11)</small>

* release: v7.1.6 ([7d4bbe5](https://github.com/mx-space/mx-admin/commit/7d4bbe5))
* refactor(rich-react): route LinkCard through haklex plugin pipeline ([fabc70e](https://github.com/mx-space/mx-admin/commit/fabc70e))

## <small>7.1.5 (2026-05-11)</small>

* release: v7.1.5 ([b0c8ce4](https://github.com/mx-space/mx-admin/commit/b0c8ce4))
* style(admin): rich editor content mt-4 and conditional toolbar chrome ([f2a2a67](https://github.com/mx-space/mx-admin/commit/f2a2a67))
* chore(deps): bump @haklex/* to 0.8.0 ([6a1b03f](https://github.com/mx-space/mx-admin/commit/6a1b03f))
* chore(rich-react): migrate to @haklex 0.7.0 with vendored Shiro ([47c6666](https://github.com/mx-space/mx-admin/commit/47c6666))

## <small>7.1.4 (2026-05-10)</small>

* release: v7.1.4 ([abcae3b](https://github.com/mx-space/mx-admin/commit/abcae3b))
* fix(admin): align field names with backend *At rename ([6f81a3f](https://github.com/mx-space/mx-admin/commit/6f81a3f)), closes [mx-space/core#2659](https://github.com/mx-space/core/issues/2659)
* fix(admin): 修正 Top10 前端跳转 (#1027) ([c38c198](https://github.com/mx-space/mx-admin/commit/c38c198)), closes [#1027](https://github.com/mx-space/mx-admin/issues/1027)
* feat(search-index): admin rebuild card + validation page (#1040) ([9e942a3](https://github.com/mx-space/mx-admin/commit/9e942a3)), closes [#1040](https://github.com/mx-space/mx-admin/issues/1040)

## <small>7.1.3 (2026-05-09)</small>

* release: v7.1.3 ([c9032a2](https://github.com/mx-space/mx-admin/commit/c9032a2))
* fix: use literal 'mx-admin' for dashboard release lookup ([561d18a](https://github.com/mx-space/mx-admin/commit/561d18a))

## <small>7.1.2 (2026-05-08)</small>

* release: v7.1.2 ([b6455d9](https://github.com/mx-space/mx-admin/commit/b6455d9))
* feat: enrichment support ([8c9bb61](https://github.com/mx-space/mx-admin/commit/8c9bb61))
* chore(deps): bump @haklex/* to 0.4.1 ([df02505](https://github.com/mx-space/mx-admin/commit/df02505))

## <small>7.1.1 (2026-05-07)</small>

* chore: release v7.1.1 ([98f2b92](https://github.com/mx-space/mx-admin/commit/98f2b92))
* feat(enrichment): surface per-locale cache rows + locale-aware refresh ([814a143](https://github.com/mx-space/mx-admin/commit/814a143))

## 7.1.0 (2026-05-07)

* release: v7.1.0 ([a51228a](https://github.com/mx-space/mx-admin/commit/a51228a))
* feat: add specs for charts, views migration, and table effort ([af0df1c](https://github.com/mx-space/mx-admin/commit/af0df1c))
* feat(enrichment): admin enrichment view + readiness-driven status bar ([46c69e2](https://github.com/mx-space/mx-admin/commit/46c69e2))
* chore: round favicon corners ([70b6c55](https://github.com/mx-space/mx-admin/commit/70b6c55))
* chore: sync apps/admin to 7.0.1 and use recursive bump ([1e02a95](https://github.com/mx-space/mx-admin/commit/1e02a95))

## <small>7.0.1 (2026-05-05)</small>

* release: v7.0.1 ([224c6d6](https://github.com/mx-space/mx-admin/commit/224c6d6))
* fix(release): sync apps/admin version on bump and CI ([bfec41d](https://github.com/mx-space/mx-admin/commit/bfec41d))
* chore: refresh brand logo ([1c1b771](https://github.com/mx-space/mx-admin/commit/1c1b771))

## 7.0.0 (2026-05-04)

* release: v7.0.0 ([a7646f4](https://github.com/mx-space/mx-admin/commit/a7646f4))
* refactor: align types and API with mx-core v11 (#1036) ([f3362a3](https://github.com/mx-space/mx-admin/commit/f3362a3)), closes [#1036](https://github.com/mx-space/mx-admin/issues/1036)

## <small>6.8.1 (2026-05-01)</small>

* release: v6.8.1 ([fd6fd0b](https://github.com/mx-space/mx-admin/commit/fd6fd0b))
* fix(ci): zip release artifact from apps/admin to preserve dist/* layout ([03f6968](https://github.com/mx-space/mx-admin/commit/03f6968))

## 6.8.0 (2026-05-01)

* release: v6.8.0 ([547489e](https://github.com/mx-space/mx-admin/commit/547489e))
* feat(files): comment images management page ([dcdd122](https://github.com/mx-space/mx-admin/commit/dcdd122))
* fix(ci): allow esbuild build scripts for pnpm 11.x ([5527ba3](https://github.com/mx-space/mx-admin/commit/5527ba3))
* fix(ci): upgrade vitest to v4 and remove esbuild build approval ([f9ae6af](https://github.com/mx-space/mx-admin/commit/f9ae6af))
* refactor: restructure pnpm workspace and remove unused components ([95e312d](https://github.com/mx-space/mx-admin/commit/95e312d))
* chore(deps): bump @haklex/* to 0.4.0 and align excalidraw 0.18 ([ee69d67](https://github.com/mx-space/mx-admin/commit/ee69d67))

## <small>6.7.4 (2026-04-29)</small>

* release: v6.7.4 ([8c9c10a](https://github.com/mx-space/mx-admin/commit/8c9c10a))
* chore(deps): bump @haklex/* to 0.2.0 and lexical to 0.44 ([c774b4c](https://github.com/mx-space/mx-admin/commit/c774b4c))
* chore(deps): bump @haklex/* to 0.3.0 ([c19d760](https://github.com/mx-space/mx-admin/commit/c19d760))
* chore(deps): bump @haklex/* to 0.3.1 ([a364226](https://github.com/mx-space/mx-admin/commit/a364226))
* chore(deps): bump @haklex/* to 0.3.3 ([3c863fb](https://github.com/mx-space/mx-admin/commit/3c863fb))
* chore(deps): bump @haklex/* to 0.3.4 ([126aedd](https://github.com/mx-space/mx-admin/commit/126aedd))
* fix(editor): prevent focus reset to last line on click bubbling ([902dbbe](https://github.com/mx-space/mx-admin/commit/902dbbe))

## <small>6.7.3 (2026-04-28)</small>

* release: v6.7.3 ([620909a](https://github.com/mx-space/mx-admin/commit/620909a))
* feat(editor/agent): expose document meta read/update tools to AI agent ([7908fc0](https://github.com/mx-space/mx-admin/commit/7908fc0))
* chore: bump pnpm to 11.0.0 and migrate config ([413a196](https://github.com/mx-space/mx-admin/commit/413a196))
* chore(deps): bump @haklex/* to 0.1.1 ([602217a](https://github.com/mx-space/mx-admin/commit/602217a))

## <small>6.7.2 (2026-04-28)</small>

* release: v6.7.2 ([862b036](https://github.com/mx-space/mx-admin/commit/862b036))
* feat(ai-config): expose min text length threshold for auto summary/insights ([05d748f](https://github.com/mx-space/mx-admin/commit/05d748f))

## <small>6.7.1 (2026-04-25)</small>

* release: v6.7.1 ([5f8f7d3](https://github.com/mx-space/mx-admin/commit/5f8f7d3))
* chore(deps): bump @haklex/* to 0.0.110 ([22899e1](https://github.com/mx-space/mx-admin/commit/22899e1))
* chore(deps): bump @haklex/* to 0.1.0 ([5411e10](https://github.com/mx-space/mx-admin/commit/5411e10))

## 6.7.0 (2026-04-21)

* release: v6.7.0 ([8dbb7fd](https://github.com/mx-space/mx-admin/commit/8dbb7fd))
* feat(ai-summary): split auto-generate toggle into create/update ([9f82ba6](https://github.com/mx-space/mx-admin/commit/9f82ba6))

## 6.6.0 (2026-04-21)

* release: v6.5.0 ([a49d5ef](https://github.com/mx-space/mx-admin/commit/a49d5ef))
* release: v6.6.0 ([ea89efa](https://github.com/mx-space/mx-admin/commit/ea89efa))
* feat(ai-insights): admin api layer ([58ff557](https://github.com/mx-space/mx-admin/commit/58ff557))
* feat(ai-insights): admin detail panel with markdown ([d5c7b44](https://github.com/mx-space/mx-admin/commit/d5c7b44))
* feat(ai-insights): admin list component ([2c9c5af](https://github.com/mx-space/mx-admin/commit/2c9c5af))
* feat(ai-insights): admin page ([5feef84](https://github.com/mx-space/mx-admin/commit/5feef84))
* feat(ai-insights): admin settings section ([07557e3](https://github.com/mx-space/mx-admin/commit/07557e3))
* feat(ai-insights): manual batch generation and generate confirmation dialog ([169a32b](https://github.com/mx-space/mx-admin/commit/169a32b))
* feat(ai-insights): router entry and query keys ([935eb40](https://github.com/mx-space/mx-admin/commit/935eb40))
* chore(deps): bump @haklex/* to 0.0.109 ([2fff566](https://github.com/mx-space/mx-admin/commit/2fff566))

## <small>6.4.7 (2026-04-17)</small>

* release: v6.4.7 ([1b0e147](https://github.com/mx-space/mx-admin/commit/1b0e147))
* update ([d8d54bf](https://github.com/mx-space/mx-admin/commit/d8d54bf))

## <small>6.4.6 (2026-04-17)</small>

* release: v6.4.6 ([b512f9e](https://github.com/mx-space/mx-admin/commit/b512f9e))
* chore(deps): bump @haklex/* to 0.0.108 ([b18aa75](https://github.com/mx-space/mx-admin/commit/b18aa75))

## <small>6.4.5 (2026-04-17)</small>

* release: v6.4.5 ([3df0cea](https://github.com/mx-space/mx-admin/commit/3df0cea))
* chore(deps): bump @haklex/* to 0.0.107 ([03b991d](https://github.com/mx-space/mx-admin/commit/03b991d))

## <small>6.4.4 (2026-04-17)</small>

* release: v6.4.4 ([ad5a6c8](https://github.com/mx-space/mx-admin/commit/ad5a6c8))
* chore: update ([c7a6a81](https://github.com/mx-space/mx-admin/commit/c7a6a81))
* chore(deps): align @lexical packages to 0.43.0 ([a1a10ae](https://github.com/mx-space/mx-admin/commit/a1a10ae))
* chore(deps): align lexical to 0.43.0 ([4db3257](https://github.com/mx-space/mx-admin/commit/4db3257))
* chore(deps): bump @haklex/* to 0.0.105 ([ad481bf](https://github.com/mx-space/mx-admin/commit/ad481bf))
* chore(deps): bump @haklex/* to 0.0.106 ([d3930ae](https://github.com/mx-space/mx-admin/commit/d3930ae))
* chore(deps): sync lockfile for @haklex 0.0.105 ([1ba5965](https://github.com/mx-space/mx-admin/commit/1ba5965))
* docs: update screenshots ([21d2809](https://github.com/mx-space/mx-admin/commit/21d2809))

## <small>6.4.3 (2026-04-07)</small>

* release: v6.4.3 ([b5e81f7](https://github.com/mx-space/mx-admin/commit/b5e81f7))
* chore: update style ([b31980f](https://github.com/mx-space/mx-admin/commit/b31980f))
* fix: bump @haklex/* to 0.0.104 — fix Ask AI button click timing ([ed02bd3](https://github.com/mx-space/mx-admin/commit/ed02bd3))
* fix(editor): prevent double unmount crash when publishing with agent panel open ([3842090](https://github.com/mx-space/mx-admin/commit/3842090))
* fix(snippets): prevent type watcher from overwriting fetched editor data ([4bcf417](https://github.com/mx-space/mx-admin/commit/4bcf417))
* feat: add pinned selection indicator to agent chat input ([02e3d48](https://github.com/mx-space/mx-admin/commit/02e3d48))
* feat: integrate agent selection awareness from @haklex/* 0.0.102 ([12c455d](https://github.com/mx-space/mx-admin/commit/12c455d))
* feat(agent-chat): remember recent models and simplify editor bridges ([e6a7300](https://github.com/mx-space/mx-admin/commit/e6a7300))

## 6.5.0 (2026-04-05)

* release: v6.5.0 ([3335adc](https://github.com/mx-space/mx-admin/commit/3335adc))
* chore: add sepc ([bf443a7](https://github.com/mx-space/mx-admin/commit/bf443a7))
* chore(deps): bump @haklex/* to 0.0.100 ([4d586d5](https://github.com/mx-space/mx-admin/commit/4d586d5))
* chore(deps): bump @haklex/* to 0.0.101 ([e1f55cd](https://github.com/mx-space/mx-admin/commit/e1f55cd))
* chore(deps): bump @haklex/* to 0.0.97 ([c1253cf](https://github.com/mx-space/mx-admin/commit/c1253cf))
* chore(deps): bump @haklex/* to 0.0.98 ([5edf9b9](https://github.com/mx-space/mx-admin/commit/5edf9b9))
* fix: mapProviderType double-mapping bug and NestedDocPlugin duplication ([3a0ffdd](https://github.com/mx-space/mx-admin/commit/3a0ffdd))
* fix: use createElement instead of JSX to avoid Vue VNode in React tree ([8ecd614](https://github.com/mx-space/mx-admin/commit/8ecd614))
* fix(agent): add conversation history context and sticky diff review bar ([f27ed3e](https://github.com/mx-space/mx-admin/commit/f27ed3e))
* fix(editor): preserve insert order in accept batch handler ([f3514d9](https://github.com/mx-space/mx-admin/commit/f3514d9))
* fix(reapply): collapse tool call groups by default ([646a30b](https://github.com/mx-space/mx-admin/commit/646a30b))
* fix(reapply): use consistent total count in group replay summary ([cb70ccb](https://github.com/mx-space/mx-admin/commit/cb70ccb))
* feat: add agent API client and RichAgentEditor component ([b75f43e](https://github.com/mx-space/mx-admin/commit/b75f43e))
* feat: add agent chat re-apply interaction for tool calls, groups, and diff batches ([37bb07a](https://github.com/mx-space/mx-admin/commit/37bb07a))
* feat: add AgentChatPanel root Vue component ([17a2f85](https://github.com/mx-space/mx-admin/commit/17a2f85))
* feat: add conversation sync for agent chat persistence ([a428d36](https://github.com/mx-space/mx-admin/commit/a428d36))
* feat: add SplitPanel reusable layout component ([7dd55bc](https://github.com/mx-space/mx-admin/commit/7dd55bc))
* feat: add useAgentSetup Vue composable for store + provider ([478c9ea](https://github.com/mx-space/mx-admin/commit/478c9ea))
* feat: add useAgentStore composable (Zustand → Vue bridge) ([5800f08](https://github.com/mx-space/mx-admin/commit/5800f08))
* feat: add Vue agent chat bubble components ([a4ac1d9](https://github.com/mx-space/mx-admin/commit/a4ac1d9))
* feat: add Vue ChatInput component with auto-resize ([9feed81](https://github.com/mx-space/mx-admin/commit/9feed81))
* feat: add Vue ChatMessageList with bubble merge logic ([d5ea259](https://github.com/mx-space/mx-admin/commit/d5ea259))
* feat: add Vue ModelSelector with NPopselect ([2708f1f](https://github.com/mx-space/mx-admin/commit/2708f1f))
* feat: integrate SplitPanel + Vue AgentChatPanel into editor ([b344deb](https://github.com/mx-space/mx-admin/commit/b344deb))
* feat: port useConversationSync to Vue composable ([3f672e7](https://github.com/mx-space/mx-admin/commit/3f672e7))
* feat: update agent chat integration with new components and error handling ([574ae3b](https://github.com/mx-space/mx-admin/commit/574ae3b))
* feat: wire agent mode through editor component chain ([5946160](https://github.com/mx-space/mx-admin/commit/5946160))
* feat: wire AI agent panel into note editor ([33c2d8c](https://github.com/mx-space/mx-admin/commit/33c2d8c))
* feat: wire AI agent panel into post editor ([2868a6c](https://github.com/mx-space/mx-admin/commit/2868a6c))
* feat(agent-chat): add multi-session history with switcher UI ([d720638](https://github.com/mx-space/mx-admin/commit/d720638))
* feat(reapply): add Re-apply UI to ToolCall, ToolCallGroup, and DiffReviewBubble ([4c09bdc](https://github.com/mx-space/mx-admin/commit/4c09bdc))
* feat(reapply): add replay composable with types, state, and orchestration ([b48e6ac](https://github.com/mx-space/mx-admin/commit/b48e6ac))
* feat(reapply): wire replay composable and thread props through component tree ([4c61848](https://github.com/mx-space/mx-admin/commit/4c61848))
* docs: add agent session history design spec ([5bddf4f](https://github.com/mx-space/mx-admin/commit/5bddf4f))
* docs: add agent session history implementation plan ([0c9392a](https://github.com/mx-space/mx-admin/commit/0c9392a))
* docs: add Vue agent chat UI spec and implementation plan ([597858c](https://github.com/mx-space/mx-admin/commit/597858c))
* docs: revise agent session history plan per GPT-5.4 review ([34a99fa](https://github.com/mx-space/mx-admin/commit/34a99fa))
* refactor: remove old React agent chat bridge files ([ea10941](https://github.com/mx-space/mx-admin/commit/ea10941))

## <small>6.4.2 (2026-04-01)</small>

* release: v6.4.2 ([a8efe64](https://github.com/mx-space/mx-admin/commit/a8efe64))
* fix: reply ([cee88cb](https://github.com/mx-space/mx-admin/commit/cee88cb))
* fix(drafts): use computeDeltaStats for Lexical version diff header ([a8a6dd1](https://github.com/mx-space/mx-admin/commit/a8a6dd1))
* refactor(drafts): integrate computeDeltaStats for improved diff calculations ([e816017](https://github.com/mx-space/mx-admin/commit/e816017))
* chore(deps): bump @haklex/* to 0.0.91 ([1984d77](https://github.com/mx-space/mx-admin/commit/1984d77))
* chore(deps): bump @haklex/* to 0.0.93 ([47f4a0a](https://github.com/mx-space/mx-admin/commit/47f4a0a))
* chore(deps): bump @haklex/* to 0.0.94 ([4b7352e](https://github.com/mx-space/mx-admin/commit/4b7352e))

## <small>6.4.1 (2026-03-28)</small>

* release: v6.4.1 ([e1729c5](https://github.com/mx-space/mx-admin/commit/e1729c5))
* feat(ai): add optional subtitle field to translation interfaces and components ([45dfee8](https://github.com/mx-space/mx-admin/commit/45dfee8))
* chore(deps): bump @haklex/* to 0.0.86 ([fac440c](https://github.com/mx-space/mx-admin/commit/fac440c))
* chore(deps): bump @haklex/* to 0.0.87 ([a9772fb](https://github.com/mx-space/mx-admin/commit/a9772fb))
* chore(deps): bump @haklex/* to 0.0.88 ([4a5947e](https://github.com/mx-space/mx-admin/commit/4a5947e))
* chore(deps): bump @haklex/* to 0.0.90 ([ce9e5bc](https://github.com/mx-space/mx-admin/commit/ce9e5bc))

## 6.4.0 (2026-03-14)

* release: v6.4.0 ([ce24ee9](https://github.com/mx-space/mx-admin/commit/ce24ee9))
* fix: support flat comments in admin ([6d24402](https://github.com/mx-space/mx-admin/commit/6d24402))
* feat(ai): add slug backfill page and task type support ([5de47bd](https://github.com/mx-space/mx-admin/commit/5de47bd))

## 6.3.0 (2026-03-13)

* release: v6.3.0 ([5429909](https://github.com/mx-space/mx-admin/commit/5429909))
* feat(note): expose slug in admin and fix type errors ([e8dc9b0](https://github.com/mx-space/mx-admin/commit/e8dc9b0))
* chore(deps): bump @haklex/* to 0.0.84 ([16d3e9d](https://github.com/mx-space/mx-admin/commit/16d3e9d))
* chore(deps): bump @haklex/* to 0.0.85 ([c8479f1](https://github.com/mx-space/mx-admin/commit/c8479f1))

## <small>6.2.3 (2026-03-13)</small>

* release: v6.2.3 ([32dc742](https://github.com/mx-space/mx-admin/commit/32dc742))
* chore(deps): bump @haklex/* to 0.0.77 ([079f4a4](https://github.com/mx-space/mx-admin/commit/079f4a4))
* chore(deps): bump @haklex/* to 0.0.78 ([a47647a](https://github.com/mx-space/mx-admin/commit/a47647a))
* chore(deps): bump @haklex/* to 0.0.79 ([9a71a95](https://github.com/mx-space/mx-admin/commit/9a71a95))
* chore(deps): bump @haklex/* to 0.0.80 ([c1c8261](https://github.com/mx-space/mx-admin/commit/c1c8261))
* chore(deps): bump @haklex/* to 0.0.81 ([83b1779](https://github.com/mx-space/mx-admin/commit/83b1779))
* chore(deps): bump @haklex/* to 0.0.82 ([e1f30c9](https://github.com/mx-space/mx-admin/commit/e1f30c9))
* chore(deps): bump @haklex/* to 0.0.83 ([d7a682a](https://github.com/mx-space/mx-admin/commit/d7a682a))
* feat(editor): integrate Lexical editor support in various components ([0ba53a2](https://github.com/mx-space/mx-admin/commit/0ba53a2))

## <small>6.2.2 (2026-03-09)</small>

* release: v6.2.2 ([fadc27e](https://github.com/mx-space/mx-admin/commit/fadc27e))
* chore(deps): bump @haklex/* to 0.0.71 ([532c344](https://github.com/mx-space/mx-admin/commit/532c344))
* chore(deps): bump @haklex/* to 0.0.72 ([269d646](https://github.com/mx-space/mx-admin/commit/269d646))
* chore(deps): bump @haklex/* to 0.0.73 ([bab702c](https://github.com/mx-space/mx-admin/commit/bab702c))
* chore(deps): bump @haklex/* to 0.0.74 ([55a772b](https://github.com/mx-space/mx-admin/commit/55a772b))
* chore(deps): bump @haklex/* to 0.0.75 ([c99c86f](https://github.com/mx-space/mx-admin/commit/c99c86f))
* chore(deps): bump @haklex/* to 0.0.76 ([94301ba](https://github.com/mx-space/mx-admin/commit/94301ba))

## <small>6.2.1 (2026-03-08)</small>

* release: v6.2.1 ([5890c57](https://github.com/mx-space/mx-admin/commit/5890c57))
* feat(ai): add translation entries management ([b71e926](https://github.com/mx-space/mx-admin/commit/b71e926))

## 6.2.0 (2026-03-08)

* release: v6.2.0 ([d57e928](https://github.com/mx-space/mx-admin/commit/d57e928))
* refactor(ai): update summary config to use summaryTargetLanguages array ([8d8789f](https://github.com/mx-space/mx-admin/commit/8d8789f))

## <small>6.1.9 (2026-03-08)</small>

* release: v6.1.9 ([72d5569](https://github.com/mx-space/mx-admin/commit/72d5569))
* fix: adjust z-index for sidebar overlay ([4d7d19d](https://github.com/mx-space/mx-admin/commit/4d7d19d))

## <small>6.1.8 (2026-03-07)</small>

* release: v6.1.8 ([291129c](https://github.com/mx-space/mx-admin/commit/291129c))
* chore(deps): bump @haklex packages to 0.0.62 ([6d7c244](https://github.com/mx-space/mx-admin/commit/6d7c244))
* chore(deps): bump @haklex packages to 0.0.63 ([f27069b](https://github.com/mx-space/mx-admin/commit/f27069b))
* chore(deps): bump @haklex packages to 0.0.64 ([aa2a8f1](https://github.com/mx-space/mx-admin/commit/aa2a8f1))
* chore(deps): bump @haklex/* to 0.0.65 ([2411f1c](https://github.com/mx-space/mx-admin/commit/2411f1c))
* chore(deps): bump @haklex/* to 0.0.66 ([4b5b120](https://github.com/mx-space/mx-admin/commit/4b5b120))
* chore(deps): bump @haklex/* to 0.0.67 ([af7fbf0](https://github.com/mx-space/mx-admin/commit/af7fbf0))
* chore(deps): bump @haklex/* to 0.0.68 ([9c5316d](https://github.com/mx-space/mx-admin/commit/9c5316d))
* chore(deps): bump @haklex/* to 0.0.70 ([de52bc8](https://github.com/mx-space/mx-admin/commit/de52bc8))
* docs: update CLAUDE.md ([0819735](https://github.com/mx-space/mx-admin/commit/0819735))
* feat: integrate @haklex/rich-ext-nested-doc extension ([4ceecdc](https://github.com/mx-space/mx-admin/commit/4ceecdc))

## <small>6.1.7 (2026-03-05)</small>

* release: v6.1.7 ([67b5b51](https://github.com/mx-space/mx-admin/commit/67b5b51))
* feat(editor): enhance rich editor toolbar behavior ([3883fb7](https://github.com/mx-space/mx-admin/commit/3883fb7))

## <small>6.1.6 (2026-03-04)</small>

* release: v6.1.6 ([6fa2a38](https://github.com/mx-space/mx-admin/commit/6fa2a38))
* chore: update @haklex/* packages to 0.0.59 and integrate rich-plugin-toolbar ([c0a996b](https://github.com/mx-space/mx-admin/commit/c0a996b))

## <small>6.1.5 (2026-03-02)</small>

* release: v6.1.5 ([de056ec](https://github.com/mx-space/mx-admin/commit/de056ec))
* feat(editor): integrate excalidraw with server file upload/update ([cfeef53](https://github.com/mx-space/mx-admin/commit/cfeef53))

## <small>6.1.4 (2026-03-02)</small>

* release: v6.1.4 ([613cce4](https://github.com/mx-space/mx-admin/commit/613cce4))
* fix: analyze activity tab data fetch ([20dd445](https://github.com/mx-space/mx-admin/commit/20dd445))

## <small>6.1.3 (2026-03-02)</small>

* release: v6.1.3 ([0b66dad](https://github.com/mx-space/mx-admin/commit/0b66dad))
* refactor(layout): extract first panel border to SplitPanel component ([d1ad694](https://github.com/mx-space/mx-admin/commit/d1ad694))

## <small>6.1.2 (2026-03-01)</small>

* release: v6.1.2 ([8edca0e](https://github.com/mx-space/mx-admin/commit/8edca0e))
* fix: add webhook dispatch list ([3fbac71](https://github.com/mx-space/mx-admin/commit/3fbac71))

## <small>6.1.1 (2026-03-01)</small>

* release: v6.1.1 ([13f4f02](https://github.com/mx-space/mx-admin/commit/13f4f02))
* feat: enhance RichEditor and RichWriteEditor with focus functionality ([0fee4d9](https://github.com/mx-space/mx-admin/commit/0fee4d9))
* feat(ai-tasks): show failed languages and smart retry label for partial-failed tasks ([ee77538](https://github.com/mx-space/mx-admin/commit/ee77538))
* fix: lexical editor debug editor ([7f5f37e](https://github.com/mx-space/mx-admin/commit/7f5f37e))

## 6.1.0 (2026-02-28)

* release: v6.1.0 ([01b21a5](https://github.com/mx-space/mx-admin/commit/01b21a5))
* feat: add vite-plugin-vue-inspector for enhanced development experience ([f42c8d8](https://github.com/mx-space/mx-admin/commit/f42c8d8))
* feat: enhance AI translation functionality and sidebar UI ([9076dc9](https://github.com/mx-space/mx-admin/commit/9076dc9))
* feat: enhance error handling and validation in query and request layers ([4da9d6b](https://github.com/mx-space/mx-admin/commit/4da9d6b))
* feat: integrate preferred content format in note, page, and post writing views ([58b2125](https://github.com/mx-space/mx-admin/commit/58b2125))
* feat: integrate rich text editor and markdown support in WriteEditor ([5f00291](https://github.com/mx-space/mx-admin/commit/5f00291))
* feat: update dependencies and enhance draft recovery modal functionality ([e09e6d1](https://github.com/mx-space/mx-admin/commit/e09e6d1))
* feat: update dependencies and introduce LexicalDebugButton for enhanced debugging ([11e3764](https://github.com/mx-space/mx-admin/commit/11e3764))
* feat: update SplitPanelLayout to accept string values for size properties ([40f848e](https://github.com/mx-space/mx-admin/commit/40f848e))
* feat: upgrade @haklex packages and enhance editor functionality ([092200d](https://github.com/mx-space/mx-admin/commit/092200d))
* chore: remove upload-queue and S3 upload, update editor and write views ([9efa49a](https://github.com/mx-space/mx-admin/commit/9efa49a))
* chore: update @haklex packages to version 0.0.15 for improved performance ([aa23e6d](https://github.com/mx-space/mx-admin/commit/aa23e6d))
* chore: update @haklex packages to version 0.0.40 for improved performance ([b35890f](https://github.com/mx-space/mx-admin/commit/b35890f))
* chore: upgrade @haklex packages to version 0.0.41 for improved performance ([bdf300e](https://github.com/mx-space/mx-admin/commit/bdf300e))
* chore: upgrade @haklex packages to version 0.0.42 for improved performance ([cd139a5](https://github.com/mx-space/mx-admin/commit/cd139a5))
* chore: upgrade @haklex packages to version 0.0.44 for improved performance and features ([8ea04ee](https://github.com/mx-space/mx-admin/commit/8ea04ee))

## <small>6.0.8 (2026-02-16)</small>

* release: v6.0.8 ([74fa5eb](https://github.com/mx-space/mx-admin/commit/74fa5eb))
* fix: optimize mobile header layout for write views ([807e74a](https://github.com/mx-space/mx-admin/commit/807e74a))
* feat: add new cron task for syncing published images to S3 ([fd95b5c](https://github.com/mx-space/mx-admin/commit/fd95b5c))

## <small>6.0.7 (2026-02-14)</small>

* release: v6.0.7 ([2cf5c6a](https://github.com/mx-space/mx-admin/commit/2cf5c6a))
* refactor: replace NInput with BorderlessInput in summary and translation lists ([66577c9](https://github.com/mx-space/mx-admin/commit/66577c9))
* fix: remove unnecessary elements from category detail panel ([d923b79](https://github.com/mx-space/mx-admin/commit/d923b79))
* feat: enhance category management view with new features ([b8cb7f6](https://github.com/mx-space/mx-admin/commit/b8cb7f6))

## <small>6.0.6 (2026-02-08)</small>

* release: v6.0.6 ([dc0c938](https://github.com/mx-space/mx-admin/commit/dc0c938))
* fix: correct modal button callback for email template reset ([371a65b](https://github.com/mx-space/mx-admin/commit/371a65b))
* fix: update email template request to bypass transformation ([e63087e](https://github.com/mx-space/mx-admin/commit/e63087e))
* fix: update snippet card routing paths for improved clarity ([d798994](https://github.com/mx-space/mx-admin/commit/d798994))
* feat: add custom path support for snippets ([50a2c57](https://github.com/mx-space/mx-admin/commit/50a2c57))
* feat: enhance image upload handling and status toggle functionality ([3c8c59a](https://github.com/mx-space/mx-admin/commit/3c8c59a))
* feat: enhance WYSIWYG editor with new block features and styling ([2add82a](https://github.com/mx-space/mx-admin/commit/2add82a))
* feat: implement collapsible details block in WYSIWYG editor ([8aca7bc](https://github.com/mx-space/mx-admin/commit/8aca7bc))
* refactor: code editor ([4612357](https://github.com/mx-space/mx-admin/commit/4612357))
* refactor: consolidate Monaco editor into unified module ([9914ab8](https://github.com/mx-space/mx-admin/commit/9914ab8))

## <small>6.0.5 (2026-02-07)</small>

* release: v6.0.5 ([7d61caa](https://github.com/mx-space/mx-admin/commit/7d61caa))
* feat: add serverless API integration and logging features ([629c40e](https://github.com/mx-space/mx-admin/commit/629c40e))

## <small>6.0.4 (2026-02-06)</small>

* release: v6.0.4 ([e607f82](https://github.com/mx-space/mx-admin/commit/e607f82))
* feat: add initial loading state and theme initialization ([9a6757e](https://github.com/mx-space/mx-admin/commit/9a6757e))

## <small>6.0.3 (2026-02-06)</small>

* release: v6.0.3 ([5567695](https://github.com/mx-space/mx-admin/commit/5567695))
* refactor: improve article sorting in charts section ([f9b78b4](https://github.com/mx-space/mx-admin/commit/f9b78b4))
* refactor: update layout components for consistency and clarity ([20eea4e](https://github.com/mx-space/mx-admin/commit/20eea4e))

## <small>6.0.2 (2026-02-06)</small>

* release: v6.0.2 ([d2698e2](https://github.com/mx-space/mx-admin/commit/d2698e2))
* refactor: clean up src/views code for clarity and consistency ([f7f0523](https://github.com/mx-space/mx-admin/commit/f7f0523))
* fix: enhance shell output handling and update panel reload logic ([d86bb3b](https://github.com/mx-space/mx-admin/commit/d86bb3b))

## <small>6.0.1 (2026-02-06)</small>

* release: v6.0.1 ([fb12181](https://github.com/mx-space/mx-admin/commit/fb12181))
* refactor: remove AuthnModel interface and clean up login view layout ([32848d4](https://github.com/mx-space/mx-admin/commit/32848d4))

## 6.0.0 (2026-02-06)

* release: v6.0.0 ([fc93347](https://github.com/mx-space/mx-admin/commit/fc93347))
* feat: optimize reading rank with lightweight top readings API and UI improvements ([9dee6ff](https://github.com/mx-space/mx-admin/commit/9dee6ff))
* refactor: drop legacy user auth ([b23e84d](https://github.com/mx-space/mx-admin/commit/b23e84d))

## 5.11.0 (2026-02-04)

* release: v5.11.0 ([c400032](https://github.com/mx-space/mx-admin/commit/c400032))
* refactor: remove cron job management API methods from health.ts ([2a1663c](https://github.com/mx-space/mx-admin/commit/2a1663c))
* feat: implement cron task management API and UI components ([a31a106](https://github.com/mx-space/mx-admin/commit/a31a106))

## <small>5.10.3 (2026-02-03)</small>

* release: v5.10.3 ([39d2209](https://github.com/mx-space/mx-admin/commit/39d2209))
* style: refine toast close button styles for improved layout ([10ad9af](https://github.com/mx-space/mx-admin/commit/10ad9af))
* feat: enhance AI comment review functionality and update toast styles ([2589db3](https://github.com/mx-space/mx-admin/commit/2589db3))
* feat: extend ArticleSelectorModal to include Page type ([465afb3](https://github.com/mx-space/mx-admin/commit/465afb3))
* fix: update input class for improved accessibility and styling ([1071941](https://github.com/mx-space/mx-admin/commit/1071941))

## <small>5.10.2 (2026-02-02)</small>

* release: v5.10.2 ([7ee4ca0](https://github.com/mx-space/mx-admin/commit/7ee4ca0))
* refactor: update imports and improve TypeScript configuration ([d233e87](https://github.com/mx-space/mx-admin/commit/d233e87))
* feat: enhance BackupEmptyState component with restore functionality ([cb0f0ae](https://github.com/mx-space/mx-admin/commit/cb0f0ae))

## <small>5.10.1 (2026-02-02)</small>

* release: v5.10.1 ([1fe7061](https://github.com/mx-space/mx-admin/commit/1fe7061))
* fix: correct API response handling in PasskeyEntry component ([22b2798](https://github.com/mx-space/mx-admin/commit/22b2798))

## 5.10.0 (2026-02-02)

* release: v5.10.0 ([564886d](https://github.com/mx-space/mx-admin/commit/564886d))
* feat: add email testing functionality to health API and config form ([dfc0f88](https://github.com/mx-space/mx-admin/commit/dfc0f88))

## <small>5.9.3 (2026-02-02)</small>

* release: v5.9.3 ([cf6f700](https://github.com/mx-space/mx-admin/commit/cf6f700))
* feat: add mobile back button to SubTaskDetailPanel ([c206b7c](https://github.com/mx-space/mx-admin/commit/c206b7c))
* style: enhance responsive design for task components ([ecc5c6a](https://github.com/mx-space/mx-admin/commit/ecc5c6a))

## <small>5.9.2 (2026-02-01)</small>

* release: v5.9.2 ([d99b3c7](https://github.com/mx-space/mx-admin/commit/d99b3c7))
* fix: update avatar upload component dimensions for consistency ([7a3c986](https://github.com/mx-space/mx-admin/commit/7a3c986))
* fix: update visibility prop in AiTaskQueue component ([2504657](https://github.com/mx-space/mx-admin/commit/2504657))

## <small>5.9.1 (2026-02-01)</small>

* release: v5.9.1 ([d02be64](https://github.com/mx-space/mx-admin/commit/d02be64))
* chore: update rollup and pnpm versions ([6f00a13](https://github.com/mx-space/mx-admin/commit/6f00a13))
* feat: add task deletion functionality to AI task management ([e3e55a5](https://github.com/mx-space/mx-admin/commit/e3e55a5))

## 5.9.0 (2026-02-01)

* release: v5.9.0 ([fddd48d](https://github.com/mx-space/mx-admin/commit/fddd48d))
* feat: enhance AI task management and layout components ([6f1f840](https://github.com/mx-space/mx-admin/commit/6f1f840))

## 5.8.0 (2026-01-31)

* release: v5.8.0 ([91df320](https://github.com/mx-space/mx-admin/commit/91df320))
* fix: correct property name in subscription API and related components ([95a76f4](https://github.com/mx-space/mx-admin/commit/95a76f4))
* fix: update layout dimensions for task management component ([ca882b3](https://github.com/mx-space/mx-admin/commit/ca882b3))
* feat: implement AI task management system ([aa09198](https://github.com/mx-space/mx-admin/commit/aa09198))
* feat: integrate AI model queries with localStorage persistence ([0c945e6](https://github.com/mx-space/mx-admin/commit/0c945e6))

## <small>5.7.1 (2026-01-29)</small>

* release: v5.7.1 ([b078036](https://github.com/mx-space/mx-admin/commit/b078036))
* feat: implement drag-to-dismiss functionality for sidebar on mobile ([f07fb2f](https://github.com/mx-space/mx-admin/commit/f07fb2f))

## 5.7.0 (2026-01-28)

* release: v5.7.0 ([9a8bd33](https://github.com/mx-space/mx-admin/commit/9a8bd33))
* refactor: update translation detail panel to use form for submission ([8135524](https://github.com/mx-space/mx-admin/commit/8135524))
* feat: enhance AI API and UI components for summaries and translations ([b82c5eb](https://github.com/mx-space/mx-admin/commit/b82c5eb))
* feat: implement optimistic updates for translation management ([6a1f168](https://github.com/mx-space/mx-admin/commit/6a1f168))
* chore: update API timeout and refine UI components ([4e43aa0](https://github.com/mx-space/mx-admin/commit/4e43aa0))

## 5.6.0 (2026-01-28)

* release: v5.6.0 ([eddd505](https://github.com/mx-space/mx-admin/commit/eddd505))
* refactor: clean up WriteEditor component and enhance translation detail panel ([0369883](https://github.com/mx-space/mx-admin/commit/0369883))
* refactor: disable empty line WYSIWYG extension in Codemirror editor ([7120951](https://github.com/mx-space/mx-admin/commit/7120951))
* feat: add AI translation functionality and components ([c054d8d](https://github.com/mx-space/mx-admin/commit/c054d8d))
* feat: enhance account settings layout and functionality ([b1273b6](https://github.com/mx-space/mx-admin/commit/b1273b6))
* feat: enhance draft model and detail view with versioning support ([3d2cb5a](https://github.com/mx-space/mx-admin/commit/3d2cb5a))
* feat: enhance WYSIWYG editor with GitHub alert styles and blockquote support ([a356d13](https://github.com/mx-space/mx-admin/commit/a356d13))
* feat: refactor settings layout with new components and improved structure ([872de4f](https://github.com/mx-space/mx-admin/commit/872de4f))
* feat: refactor snippets view with Master-Detail layout ([42ce3ce](https://github.com/mx-space/mx-admin/commit/42ce3ce))
* fix: loading style ([1423591](https://github.com/mx-space/mx-admin/commit/1423591))
* fix: panel width ([de41c66](https://github.com/mx-space/mx-admin/commit/de41c66))

## <small>5.5.1 (2026-01-27)</small>

* release: v5.5.1 ([008b89b](https://github.com/mx-space/mx-admin/commit/008b89b))
* chore: ci ([3520c1c](https://github.com/mx-space/mx-admin/commit/3520c1c))

## 5.5.0 (2026-01-27)

* release: v5.5.0 ([4487799](https://github.com/mx-space/mx-admin/commit/4487799))
* chore: update typo ([cad6077](https://github.com/mx-space/mx-admin/commit/cad6077))
* chore: update vite ([aa51cd6](https://github.com/mx-space/mx-admin/commit/aa51cd6))
* feat: draft diff ui optimize ([65fa17a](https://github.com/mx-space/mx-admin/commit/65fa17a))

## <small>5.4.5 (2026-01-26)</small>

* release: v5.4.5 ([8d48437](https://github.com/mx-space/mx-admin/commit/8d48437))
* feat: introduce Master-Detail layout for improved content management ([bd670e8](https://github.com/mx-space/mx-admin/commit/bd670e8))
* feat: refactor AI summary page with Master-Detail layout and new components ([3f3abab](https://github.com/mx-space/mx-admin/commit/3f3abab))
* chore: opensource prompt ([471e9b7](https://github.com/mx-space/mx-admin/commit/471e9b7))

## <small>5.4.4 (2026-01-25)</small>

* release: v5.4.4 ([494ccba](https://github.com/mx-space/mx-admin/commit/494ccba))
* style: update scrollbar styles for light and dark themes ([0439806](https://github.com/mx-space/mx-admin/commit/0439806))
* feat: add history diff modal for draft version comparison ([cd30f8d](https://github.com/mx-space/mx-admin/commit/cd30f8d))
* feat: enhance draft management with new components and layout improvements ([c007606](https://github.com/mx-space/mx-admin/commit/c007606))

## <small>5.4.3 (2026-01-25)</small>

* release: v5.4.3 ([c6bab4b](https://github.com/mx-space/mx-admin/commit/c6bab4b))
* style: update WYSIWYG image component styles ([b7da0d7](https://github.com/mx-space/mx-admin/commit/b7da0d7))

## <small>5.4.2 (2026-01-25)</small>

* release: v5.4.2 ([591d876](https://github.com/mx-space/mx-admin/commit/591d876))
* refactor: update comment management layout and pagination ([873843b](https://github.com/mx-space/mx-admin/commit/873843b))
* feat: implement split layout for comment management ([1796f8c](https://github.com/mx-space/mx-admin/commit/1796f8c))

## <small>5.4.1 (2026-01-25)</small>

* release: v5.4.1 ([f008a56](https://github.com/mx-space/mx-admin/commit/f008a56))
* feat: add keyboard shortcut for saving drafts and improve note/post creation flow ([2e745f4](https://github.com/mx-space/mx-admin/commit/2e745f4))
* feat: enhance WYSIWYG editor functionality and styling ([904afc9](https://github.com/mx-space/mx-admin/commit/904afc9))
* feat: implement draft management features with upload queue ([7492e17](https://github.com/mx-space/mx-admin/commit/7492e17))
* feat: integrate emoji picker and enhance comment management features ([2d8e738](https://github.com/mx-space/mx-admin/commit/2d8e738))
* style: enhance error icon styling in WYSIWYG image component ([57ddc21](https://github.com/mx-space/mx-admin/commit/57ddc21))

## 5.4.0 (2026-01-24)

* release: v5.4.0 ([65f3236](https://github.com/mx-space/mx-admin/commit/65f3236))
* refactor: update comments and subscription APIs for batch operations ([33244a4](https://github.com/mx-space/mx-admin/commit/33244a4))
* feat: refactor settings layout and enhance configuration forms ([3d42692](https://github.com/mx-space/mx-admin/commit/3d42692))
* style: update uploading spinner dimensions in WYSIWYG image component ([2ddbc46](https://github.com/mx-space/mx-admin/commit/2ddbc46))

## 5.3.0 (2026-01-24)

* release: v5.3.0 ([e09252c](https://github.com/mx-space/mx-admin/commit/e09252c))
* feat: enhance file management interface ([38a5fcd](https://github.com/mx-space/mx-admin/commit/38a5fcd))
* feat: enhance sidebar and mobile menu interaction ([1230c42](https://github.com/mx-space/mx-admin/commit/1230c42))
* feat: image paste and upload ([f049d45](https://github.com/mx-space/mx-admin/commit/f049d45))
* feat: implement image upload functionality in editor ([b1c14ac](https://github.com/mx-space/mx-admin/commit/b1c14ac))
* feat: implement slash menu functionality ([eef465e](https://github.com/mx-space/mx-admin/commit/eef465e))
* fix(admin): 修正前端跳转 (#1018) ([b17ec81](https://github.com/mx-space/mx-admin/commit/b17ec81)), closes [#1018](https://github.com/mx-space/mx-admin/issues/1018)
* fix(dashboard): fix site word count not displaying ([ba8827c](https://github.com/mx-space/mx-admin/commit/ba8827c))
* chore!: clean logs module ([41cb3e3](https://github.com/mx-space/mx-admin/commit/41cb3e3))

## 5.2.0 (2026-01-22)

* release: v5.2.0 ([43ceedf](https://github.com/mx-space/mx-admin/commit/43ceedf))
* feat: add analysic chart ([2af156a](https://github.com/mx-space/mx-admin/commit/2af156a))
* fix(dashboard): optimize traffic source chart with top 5 aggregation ([d19b5d8](https://github.com/mx-space/mx-admin/commit/d19b5d8))

## <small>5.1.4 (2026-01-22)</small>

* release: v5.1.4 ([59b6c5f](https://github.com/mx-space/mx-admin/commit/59b6c5f))
* feat: add rounded button components ([c47a604](https://github.com/mx-space/mx-admin/commit/c47a604))

## <small>5.1.3 (2026-01-22)</small>

* release: v5.1.3 ([9b37ed5](https://github.com/mx-space/mx-admin/commit/9b37ed5))
* feat: redesign setup view ([4f0e38d](https://github.com/mx-space/mx-admin/commit/4f0e38d))
* chore: remove deploy workflow ([f7b3668](https://github.com/mx-space/mx-admin/commit/f7b3668))

## <small>5.1.2 (2026-01-21)</small>

* release: v5.1.2 ([b859136](https://github.com/mx-space/mx-admin/commit/b859136))
* feat: enhance snippets API and UI interactions ([3ceb168](https://github.com/mx-space/mx-admin/commit/3ceb168))
* feat: integrate vue-sonner for toast notifications ([074068a](https://github.com/mx-space/mx-admin/commit/074068a))
* chore: remove auto-import ([dd6e472](https://github.com/mx-space/mx-admin/commit/dd6e472))

## <small>5.1.1 (2026-01-20)</small>

* release: v5.1.1 ([6d329cd](https://github.com/mx-space/mx-admin/commit/6d329cd))
* refactor: api data typing transform and cm editor ([42e775a](https://github.com/mx-space/mx-admin/commit/42e775a))

## 5.1.0 (2026-01-20)

* release: v5.1.0 ([96154e9](https://github.com/mx-space/mx-admin/commit/96154e9))
* feat: add draft ID support to notes, pages, and posts ([d21fc76](https://github.com/mx-space/mx-admin/commit/d21fc76))
* feat: add Lit support and enhance WYSIWYG editor functionality ([c61867b](https://github.com/mx-space/mx-admin/commit/c61867b))
* feat: add search functionality for posts and notes ([98e424e](https://github.com/mx-space/mx-admin/commit/98e424e))
* feat: implement typography standards and image editing functionality ([c244514](https://github.com/mx-space/mx-admin/commit/c244514))
* refactor: improve comment management logic and remove console log ([7568a88](https://github.com/mx-space/mx-admin/commit/7568a88))
* refactor: remove virtual scroll extension and enhance cursor navigation in WYSIWYG mode ([32987f4](https://github.com/mx-space/mx-admin/commit/32987f4))
* refactor: update data structures in aggregate and options APIs ([88aa601](https://github.com/mx-space/mx-admin/commit/88aa601))

## <small>5.0.1 (2026-01-19)</small>

* release: v5.0.1 ([8aafc95](https://github.com/mx-space/mx-admin/commit/8aafc95))
* refactor: standardize CSS syntax and enhance transition durations ([5210eb4](https://github.com/mx-space/mx-admin/commit/5210eb4))
* feat: add meta presets management functionality ([833dc5b](https://github.com/mx-space/mx-admin/commit/833dc5b))

## 5.0.0 (2026-01-18)

* release: v5.0.0 ([7bcef81](https://github.com/mx-space/mx-admin/commit/7bcef81))
* update ([603cefa](https://github.com/mx-space/mx-admin/commit/603cefa))
* feat: new ui (#1014) ([71f0f07](https://github.com/mx-space/mx-admin/commit/71f0f07)), closes [#1014](https://github.com/mx-space/mx-admin/issues/1014)

## <small>4.12.1 (2026-01-14)</small>

* release: v4.12.1 ([1ab031f](https://github.com/mx-space/mx-admin/commit/1ab031f))
* fix(deps): update dependency js-yaml to v4.1.1 [security] (#1003) ([c056466](https://github.com/mx-space/mx-admin/commit/c056466)), closes [#1003](https://github.com/mx-space/mx-admin/issues/1003)
* fix(deps): update dependency monaco-editor-auto-typings to v0.4.6 (#977) ([a8dd0f2](https://github.com/mx-space/mx-admin/commit/a8dd0f2)), closes [#977](https://github.com/mx-space/mx-admin/issues/977)
* fix(deps): update dependency pinia to v2.3.1 (#992) ([4eb23ae](https://github.com/mx-space/mx-admin/commit/4eb23ae)), closes [#992](https://github.com/mx-space/mx-admin/issues/992)
* fix(deps): update dependency qs to v6.14.1 [security] (#1007) ([721ad0f](https://github.com/mx-space/mx-admin/commit/721ad0f)), closes [#1007](https://github.com/mx-space/mx-admin/issues/1007)
* fix(deps): update dependency validator to v13.15.22 [security] (#1002) ([4103015](https://github.com/mx-space/mx-admin/commit/4103015)), closes [#1002](https://github.com/mx-space/mx-admin/issues/1002)
* fix(sidebar): prevent unintended collapse behavior (#1011) ([8f78f3d](https://github.com/mx-space/mx-admin/commit/8f78f3d)), closes [#1011](https://github.com/mx-space/mx-admin/issues/1011)
* fix(version): improve version comparison logic (#1010) ([a4f5119](https://github.com/mx-space/mx-admin/commit/a4f5119)), closes [#1010](https://github.com/mx-space/mx-admin/issues/1010)
* chore(deps): update dependency vite to v6.4.1 [security] (#990) ([e921096](https://github.com/mx-space/mx-admin/commit/e921096)), closes [#990](https://github.com/mx-space/mx-admin/issues/990)
* feat(shorthand): 速记支持编辑和显示修改时间 (#1012) ([9fb375e](https://github.com/mx-space/mx-admin/commit/9fb375e)), closes [#1012](https://github.com/mx-space/mx-admin/issues/1012)

## 4.12.0 (2026-01-12)

* release: v4.12.0 ([8c55126](https://github.com/mx-space/mx-admin/commit/8c55126))
* feat: ai settings update ([d0c282f](https://github.com/mx-space/mx-admin/commit/d0c282f))
* feat(editor): markdown toolbar (#1008) ([a9c983a](https://github.com/mx-space/mx-admin/commit/a9c983a)), closes [#1008](https://github.com/mx-space/mx-admin/issues/1008)

## 4.11.0 (2025-11-24)

* release: v4.11.0 ([fb48c24](https://github.com/mx-space/mx-admin/commit/fb48c24))
* feat: 优化token创建以及查看逻辑并修复Safari后台创建token后不显示token内容 (#1000) ([4aa1e65](https://github.com/mx-space/mx-admin/commit/4aa1e65)), closes [#1000](https://github.com/mx-space/mx-admin/issues/1000)
* feat(link): add button to convert approved friend-link avatars to inline (#1004) ([e7cd6cf](https://github.com/mx-space/mx-admin/commit/e7cd6cf)), closes [#1004](https://github.com/mx-space/mx-admin/issues/1004)

## <small>4.10.3 (2025-07-17)</small>

* release: v4.10.3 ([7f38999](https://github.com/mx-space/mx-admin/commit/7f38999))
* feat: enhance note and post management with status toggle component ([7f4c8b9](https://github.com/mx-space/mx-admin/commit/7f4c8b9))

## <small>4.10.2 (2025-07-17)</small>

* release: v4.10.2 ([bbb7b42](https://github.com/mx-space/mx-admin/commit/bbb7b42))
* revert: post write ([c7f7e5e](https://github.com/mx-space/mx-admin/commit/c7f7e5e))

## <small>4.10.1 (2025-07-10)</small>

* release: v4.10.1 ([f5e5ee2](https://github.com/mx-space/mx-admin/commit/f5e5ee2))
* chore: update package.json to use pnpm@10.12.4 and change prepare script to use simple-git-hooks ([2a450fb](https://github.com/mx-space/mx-admin/commit/2a450fb))

## 4.10.0 (2025-07-10)

* release: v4.10.0 ([e58d55f](https://github.com/mx-space/mx-admin/commit/e58d55f))
* feat: 添加发布状态管理功能 (#994) ([9176a99](https://github.com/mx-space/mx-admin/commit/9176a99)), closes [#994](https://github.com/mx-space/mx-admin/issues/994)
* feat: 添加更新详情弹窗 (#996) ([bf31e88](https://github.com/mx-space/mx-admin/commit/bf31e88)), closes [#996](https://github.com/mx-space/mx-admin/issues/996)

## 4.9.0 (2025-01-08)

* release: v4.9.0 ([7c1b853](https://github.com/mx-space/mx-admin/commit/7c1b853))
* feat: Add WebGL-based image processing (encodeImageToBlurhashWebgl) for better performance (#983) ([650b91b](https://github.com/mx-space/mx-admin/commit/650b91b)), closes [#983](https://github.com/mx-space/mx-admin/issues/983)
* feat: replace NSwitch with NCheckbox for WebGL flag in ImageDetailSection ([47fab29](https://github.com/mx-space/mx-admin/commit/47fab29))
* chore: update deps ([e5f23e5](https://github.com/mx-space/mx-admin/commit/e5f23e5))
* chore: update deps ([1d2b274](https://github.com/mx-space/mx-admin/commit/1d2b274))
* chore: update deps ([b2ec99f](https://github.com/mx-space/mx-admin/commit/b2ec99f))
* fix: config form number type ([3c5214e](https://github.com/mx-space/mx-admin/commit/3c5214e))

## <small>4.8.1 (2024-11-26)</small>

* release: v4.8.1 ([8603a54](https://github.com/mx-space/mx-admin/commit/8603a54))
* fix: typing ([03fa6df](https://github.com/mx-space/mx-admin/commit/03fa6df))
* fix: vite config ([ac44646](https://github.com/mx-space/mx-admin/commit/ac44646))
* chore: update deps ([64c71d3](https://github.com/mx-space/mx-admin/commit/64c71d3))

## 4.8.0 (2024-11-26)

* release: v4.8.0 ([d50dbe6](https://github.com/mx-space/mx-admin/commit/d50dbe6))
* refactor: better-auth ([7af2a78](https://github.com/mx-space/mx-admin/commit/7af2a78))
* refactor: remove lodash ([389f6b3](https://github.com/mx-space/mx-admin/commit/389f6b3))
* chore: update deps ([c1e3c4d](https://github.com/mx-space/mx-admin/commit/c1e3c4d))
* fix: typing ([907b7f7](https://github.com/mx-space/mx-admin/commit/907b7f7))

## <small>4.7.4 (2024-10-25)</small>

* release: v4.7.4 ([81b123a](https://github.com/mx-space/mx-admin/commit/81b123a))
* feat: add site like count ([c76ac96](https://github.com/mx-space/mx-admin/commit/c76ac96))

## <small>4.7.3 (2024-09-04)</small>

* release: v4.7.3 ([d132f0f](https://github.com/mx-space/mx-admin/commit/d132f0f))
* fix: reader avatar style ([834909c](https://github.com/mx-space/mx-admin/commit/834909c))
* feat: google oauth ([9287b48](https://github.com/mx-space/mx-admin/commit/9287b48))

## <small>4.7.2 (2024-09-03)</small>

* release: v4.7.2 ([61e8524](https://github.com/mx-space/mx-admin/commit/61e8524))
* refactor: oauth factory ([8c24ba1](https://github.com/mx-space/mx-admin/commit/8c24ba1))

## <small>4.7.1 (2024-09-02)</small>

* release: v4.7.1 ([cf796ed](https://github.com/mx-space/mx-admin/commit/cf796ed))
* chore: change descrption ([463938a](https://github.com/mx-space/mx-admin/commit/463938a))

## 4.7.0 (2024-09-02)

* release: v4.7.0 ([88c5214](https://github.com/mx-space/mx-admin/commit/88c5214))
* chore: update deps ([76f130f](https://github.com/mx-space/mx-admin/commit/76f130f))
* refactor: update oauth section ([b049108](https://github.com/mx-space/mx-admin/commit/b049108))
* feat: authjs integrate (#951) ([b75cbff](https://github.com/mx-space/mx-admin/commit/b75cbff)), closes [#951](https://github.com/mx-space/mx-admin/issues/951)

## <small>4.6.2 (2024-08-25)</small>

* release: v4.6.2 ([22a606c](https://github.com/mx-space/mx-admin/commit/22a606c))
* chore: update deps ([b980f8c](https://github.com/mx-space/mx-admin/commit/b980f8c))
* fix: image blurhash logic ([bf54dd4](https://github.com/mx-space/mx-admin/commit/bf54dd4))

## <small>4.6.1 (2024-08-16)</small>

* release: v4.6.1 ([c13b812](https://github.com/mx-space/mx-admin/commit/c13b812))
* fix: token api fetcher ([bfd75e8](https://github.com/mx-space/mx-admin/commit/bfd75e8))

## 4.6.0 (2024-08-16)

* release: v4.6.0 ([7d465a2](https://github.com/mx-space/mx-admin/commit/7d465a2))
* feat: add blur hash ([8fbfa66](https://github.com/mx-space/mx-admin/commit/8fbfa66))
* Update FUNDING.yml (#941) ([8a4a30f](https://github.com/mx-space/mx-admin/commit/8a4a30f)), closes [#941](https://github.com/mx-space/mx-admin/issues/941)

## <small>4.5.3 (2024-08-06)</small>

* release: v4.5.3 ([caf11bd](https://github.com/mx-space/mx-admin/commit/caf11bd))
* fix(deps): update dependency marked to v13.0.2 (#925) ([8a56db0](https://github.com/mx-space/mx-admin/commit/8a56db0)), closes [#925](https://github.com/mx-space/mx-admin/issues/925)
* fix(deps): update dependency marked to v13.0.3 (#935) ([b5065a5](https://github.com/mx-space/mx-admin/commit/b5065a5)), closes [#935](https://github.com/mx-space/mx-admin/issues/935)
* fix(deps): update dependency openai to v4.53.1 (#927) ([4675155](https://github.com/mx-space/mx-admin/commit/4675155)), closes [#927](https://github.com/mx-space/mx-admin/issues/927)
* fix(deps): update dependency qs to v6.12.3 (#928) ([ccfec76](https://github.com/mx-space/mx-admin/commit/ccfec76)), closes [#928](https://github.com/mx-space/mx-admin/issues/928)
* fix(deps): update dependency vue-router to v4.4.0 (#920) ([6bcfff9](https://github.com/mx-space/mx-admin/commit/6bcfff9)), closes [#920](https://github.com/mx-space/mx-admin/issues/920)
* chore: update deps ([c31c2ac](https://github.com/mx-space/mx-admin/commit/c31c2ac))
* chore: update deps ([2694193](https://github.com/mx-space/mx-admin/commit/2694193))
* chore(deps): update dependency @biomejs/biome to v1.8.3 (#919) ([77c99e4](https://github.com/mx-space/mx-admin/commit/77c99e4)), closes [#919](https://github.com/mx-space/mx-admin/issues/919)
* chore(deps): update dependency @innei/prettier to v0.14.0 (#930) ([31963cd](https://github.com/mx-space/mx-admin/commit/31963cd)), closes [#930](https://github.com/mx-space/mx-admin/issues/930)
* chore(deps): update dependency lint-staged to v15.2.8 (#939) ([93f938b](https://github.com/mx-space/mx-admin/commit/93f938b)), closes [#939](https://github.com/mx-space/mx-admin/issues/939)
* chore(deps): update dependency postcss to v8.4.39 (#922) ([6354a80](https://github.com/mx-space/mx-admin/commit/6354a80)), closes [#922](https://github.com/mx-space/mx-admin/issues/922)
* chore(deps): update dependency prettier to v3.3.3 (#931) ([6fd7dec](https://github.com/mx-space/mx-admin/commit/6fd7dec)), closes [#931](https://github.com/mx-space/mx-admin/issues/931)
* chore(deps): update dependency vite to v5.3.3 (#924) ([adec63c](https://github.com/mx-space/mx-admin/commit/adec63c)), closes [#924](https://github.com/mx-space/mx-admin/issues/924)
* chore(deps): update dependency vite-plugin-checker to v0.7.2 (#929) ([b982b58](https://github.com/mx-space/mx-admin/commit/b982b58)), closes [#929](https://github.com/mx-space/mx-admin/issues/929)
* chore(deps): update peaceiris/actions-gh-pages action to v4 (#921) ([0b77b39](https://github.com/mx-space/mx-admin/commit/0b77b39)), closes [peaceiris/actions-#pages](https://github.com/peaceiris/actions-/issues/pages) [#921](https://github.com/mx-space/mx-admin/issues/921)
* chore(deps): update vue monorepo to v3.4.31 (#918) ([7306015](https://github.com/mx-space/mx-admin/commit/7306015)), closes [#918](https://github.com/mx-space/mx-admin/issues/918)
* chore(deps): update vue monorepo to v3.4.34 (#933) ([f4faf0d](https://github.com/mx-space/mx-admin/commit/f4faf0d)), closes [#933](https://github.com/mx-space/mx-admin/issues/933)
* chore(deps): update vue monorepo to v3.4.35 (#940) ([a26f287](https://github.com/mx-space/mx-admin/commit/a26f287)), closes [#940](https://github.com/mx-space/mx-admin/issues/940)

## <small>4.5.2 (2024-06-09)</small>

* release: v4.5.2 ([a6ca5a2](https://github.com/mx-space/mx-admin/commit/a6ca5a2))
* feat: split preview ([b64c807](https://github.com/mx-space/mx-admin/commit/b64c807))

## <small>4.5.1 (2024-05-31)</small>

* release: v4.5.1 ([5c18859](https://github.com/mx-space/mx-admin/commit/5c18859))
* fix: add yaml parse err message (#911) ([7022b67](https://github.com/mx-space/mx-admin/commit/7022b67)), closes [#911](https://github.com/mx-space/mx-admin/issues/911)
* fix: monaco style ([5a5c3d1](https://github.com/mx-space/mx-admin/commit/5a5c3d1))
* feat: add copy link button ([0444628](https://github.com/mx-space/mx-admin/commit/0444628))

## 4.5.0 (2024-05-19)

* release: v4.5.0 ([d5b41a4](https://github.com/mx-space/mx-admin/commit/d5b41a4))
* fix: custom app color ([e6e7f7b](https://github.com/mx-space/mx-admin/commit/e6e7f7b))

## <small>4.4.4 (2024-05-19)</small>

* release: v4.4.4 ([f49ced7](https://github.com/mx-space/mx-admin/commit/f49ced7))
* chore: fix typing ([875bfb8](https://github.com/mx-space/mx-admin/commit/875bfb8))
* chore(deps): update dependency postcss-preset-env to v9.5.13 (#901) ([3ff02f2](https://github.com/mx-space/mx-admin/commit/3ff02f2)), closes [#901](https://github.com/mx-space/mx-admin/issues/901)
* chore(deps): update vue monorepo to v3.4.27 (#903) ([2bfefe8](https://github.com/mx-space/mx-admin/commit/2bfefe8)), closes [#903](https://github.com/mx-space/mx-admin/issues/903)
* fix: refresh button color ([c7ca0cc](https://github.com/mx-space/mx-admin/commit/c7ca0cc))
* fix(deps): update dependency canvas-confetti to v1.9.3 (#904) ([16639b1](https://github.com/mx-space/mx-admin/commit/16639b1)), closes [#904](https://github.com/mx-space/mx-admin/issues/904)
* fix(deps): update dependency crossbell.js to v1.11.9 (#891) ([07368b9](https://github.com/mx-space/mx-admin/commit/07368b9)), closes [#891](https://github.com/mx-space/mx-admin/issues/891)
* feat: title link with token query ([752cf94](https://github.com/mx-space/mx-admin/commit/752cf94))

## <small>4.4.3 (2024-05-09)</small>

* release: v4.4.3 ([744706c](https://github.com/mx-space/mx-admin/commit/744706c))
* fix: align center ([351a556](https://github.com/mx-space/mx-admin/commit/351a556))
* fix: kaomoji button type ([fe257c3](https://github.com/mx-space/mx-admin/commit/fe257c3))

## <small>4.4.2 (2024-05-05)</small>

* release: v4.4.2 ([09824e1](https://github.com/mx-space/mx-admin/commit/09824e1))
* fix: naive ui button ([19f5d67](https://github.com/mx-space/mx-admin/commit/19f5d67))
* chore: update uwu ([0fa6051](https://github.com/mx-space/mx-admin/commit/0fa6051))

## <small>4.4.1 (2024-05-05)</small>

* release: v4.4.1 ([07be53a](https://github.com/mx-space/mx-admin/commit/07be53a))
* fix: asset path in page proxy ([612980c](https://github.com/mx-space/mx-admin/commit/612980c))

## 4.4.0 (2024-05-04)

* release: v4.4.0 ([0beb21f](https://github.com/mx-space/mx-admin/commit/0beb21f))
* chore: deps ([b53b893](https://github.com/mx-space/mx-admin/commit/b53b893))
* chore: import style ([0c0cf27](https://github.com/mx-space/mx-admin/commit/0c0cf27))
* chore: to biome ([52db876](https://github.com/mx-space/mx-admin/commit/52db876))
* feat: ai helper ([c31cc75](https://github.com/mx-space/mx-admin/commit/c31cc75))

## <small>4.3.4 (2024-05-04)</small>

* release: v4.3.4 ([638e3fb](https://github.com/mx-space/mx-admin/commit/638e3fb))
* chore: change boolean name (#900) ([9cf402d](https://github.com/mx-space/mx-admin/commit/9cf402d)), closes [#900](https://github.com/mx-space/mx-admin/issues/900)
* chore: update readme ([d354a2b](https://github.com/mx-space/mx-admin/commit/d354a2b))
* chore: update readme.md ([b78f13d](https://github.com/mx-space/mx-admin/commit/b78f13d))

## <small>4.3.3 (2024-05-03)</small>

* release: v4.3.3 ([cfd3108](https://github.com/mx-space/mx-admin/commit/cfd3108))
* fix: generate ai summary modal ([270044b](https://github.com/mx-space/mx-admin/commit/270044b))

## <small>4.3.2 (2024-05-02)</small>

* release: v4.3.2 ([d959de2](https://github.com/mx-space/mx-admin/commit/d959de2))
* feat: update theme ([76fb1dc](https://github.com/mx-space/mx-admin/commit/76fb1dc))
* feat: uwu ([223eb6f](https://github.com/mx-space/mx-admin/commit/223eb6f))
* fix(deps): update dependency @antv/g2 to ^4.2.11 (#883) ([d7e370d](https://github.com/mx-space/mx-admin/commit/d7e370d)), closes [#883](https://github.com/mx-space/mx-admin/issues/883)
* fix(deps): update dependency @mx-space/api-client to v1.12.1 (#887) ([2b8a9d4](https://github.com/mx-space/mx-admin/commit/2b8a9d4)), closes [#887](https://github.com/mx-space/mx-admin/issues/887)
* fix(deps): update dependency ejs to v3.1.10 [security] (#898) ([df4808b](https://github.com/mx-space/mx-admin/commit/df4808b)), closes [#898](https://github.com/mx-space/mx-admin/issues/898)
* fix(deps): update dependency qs to v6.12.1 (#885) ([fec6b07](https://github.com/mx-space/mx-admin/commit/fec6b07)), closes [#885](https://github.com/mx-space/mx-admin/issues/885)
* chore(deps): update dependency @innei/prettier to v0.13.1 (#884) ([a2d4769](https://github.com/mx-space/mx-admin/commit/a2d4769)), closes [#884](https://github.com/mx-space/mx-admin/issues/884)
* chore(deps): update dependency postcss-preset-env to v9.5.9 (#894) ([10d5fa1](https://github.com/mx-space/mx-admin/commit/10d5fa1)), closes [#894](https://github.com/mx-space/mx-admin/issues/894)
* chore(deps): update dependency typescript to v5.4.5 (#895) ([2504e54](https://github.com/mx-space/mx-admin/commit/2504e54)), closes [#895](https://github.com/mx-space/mx-admin/issues/895)
* chore(deps): update pnpm/action-setup action to v3 (#892) ([0d8c2d4](https://github.com/mx-space/mx-admin/commit/0d8c2d4)), closes [#892](https://github.com/mx-space/mx-admin/issues/892)

## <small>4.3.1 (2024-05-01)</small>

* release: v4.3.1 ([a4a3706](https://github.com/mx-space/mx-admin/commit/a4a3706))
* fix: add ai summary pagination component ([557d287](https://github.com/mx-space/mx-admin/commit/557d287))

## 4.3.0 (2024-04-26)

* release: v4.3.0 ([9fc7f35](https://github.com/mx-space/mx-admin/commit/9fc7f35))
* feat: ai summary ([d2da40e](https://github.com/mx-space/mx-admin/commit/d2da40e))
* feat: ai view ([014102f](https://github.com/mx-space/mx-admin/commit/014102f))
* chore: add clean script ([f8bf5fd](https://github.com/mx-space/mx-admin/commit/f8bf5fd))
* fix: downgrade eslint v8 ([bd7e190](https://github.com/mx-space/mx-admin/commit/bd7e190))

## <small>4.2.8 (2024-04-26)</small>

* release: v4.2.8 ([3e4a9e6](https://github.com/mx-space/mx-admin/commit/3e4a9e6))
* feat: support get video dim ([b57b40e](https://github.com/mx-space/mx-admin/commit/b57b40e))

## <small>4.2.7 (2024-04-22)</small>

* release: v4.2.7 ([bc9b187](https://github.com/mx-space/mx-admin/commit/bc9b187))
* fix: table style ([4dd3b7a](https://github.com/mx-space/mx-admin/commit/4dd3b7a))

## <small>4.2.6 (2024-04-22)</small>

* release: v4.2.6 ([0a525e1](https://github.com/mx-space/mx-admin/commit/0a525e1))
* fix: file update type, closes #896 ([3335d36](https://github.com/mx-space/mx-admin/commit/3335d36)), closes [#896](https://github.com/mx-space/mx-admin/issues/896)
* fix: typing ([25947b5](https://github.com/mx-space/mx-admin/commit/25947b5))
* chore: rename `NButton` props ([29cf42d](https://github.com/mx-space/mx-admin/commit/29cf42d))

## <small>4.2.5 (2024-04-20)</small>

* release: v4.2.5 ([7b7149b](https://github.com/mx-space/mx-admin/commit/7b7149b))
* feat: cm search ([4d335f0](https://github.com/mx-space/mx-admin/commit/4d335f0))
* feat: markdown export ([fca4349](https://github.com/mx-space/mx-admin/commit/fca4349))
* chore: update xterm ([4e45d8d](https://github.com/mx-space/mx-admin/commit/4e45d8d))

## <small>4.2.4 (2024-04-20)</small>

* release: v4.2.4 ([ce441d6](https://github.com/mx-space/mx-admin/commit/ce441d6))
* fix: setup ([70a0240](https://github.com/mx-space/mx-admin/commit/70a0240))

## <small>4.2.3 (2024-04-11)</small>

* release: v4.2.3 ([9fb7588](https://github.com/mx-space/mx-admin/commit/9fb7588))
* feat: make reading duration more easier to read (#893) ([d10a4a0](https://github.com/mx-space/mx-admin/commit/d10a4a0)), closes [#893](https://github.com/mx-space/mx-admin/issues/893)

## <small>4.2.2 (2024-04-06)</small>

* release: v4.2.2 ([f7ed562](https://github.com/mx-space/mx-admin/commit/f7ed562))
* chore: update deps ([cd2facd](https://github.com/mx-space/mx-admin/commit/cd2facd))
* chore!: remove deprecated field ([af7f816](https://github.com/mx-space/mx-admin/commit/af7f816))

## <small>4.2.1 (2024-03-27)</small>

* release: v4.2.1 ([5a36390](https://github.com/mx-space/mx-admin/commit/5a36390))
* fix: comment ref ([590c172](https://github.com/mx-space/mx-admin/commit/590c172))

## 4.2.0 (2024-03-23)

* release: v4.2.0 ([af585e5](https://github.com/mx-space/mx-admin/commit/af585e5))
* feat: add ALL method for fn ([102baba](https://github.com/mx-space/mx-admin/commit/102baba))
* chore(deps): update dependency @innei/prettier to v0.12.4 (#877) ([07e8668](https://github.com/mx-space/mx-admin/commit/07e8668)), closes [#877](https://github.com/mx-space/mx-admin/issues/877)
* chore(deps): update dependency @types/sortablejs to v1.15.8 (#870) ([bc653c8](https://github.com/mx-space/mx-admin/commit/bc653c8)), closes [#870](https://github.com/mx-space/mx-admin/issues/870)
* chore(deps): update dependency @vueuse/core to v10.9.0 (#873) ([fc19a0c](https://github.com/mx-space/mx-admin/commit/fc19a0c)), closes [#873](https://github.com/mx-space/mx-admin/issues/873)
* chore(deps): update dependency vite to v5.1.6 (#872) ([47915bf](https://github.com/mx-space/mx-admin/commit/47915bf)), closes [#872](https://github.com/mx-space/mx-admin/issues/872)
* chore(deps): update dependency vite-plugin-mkcert to v1.17.4 (#875) ([045033d](https://github.com/mx-space/mx-admin/commit/045033d)), closes [#875](https://github.com/mx-space/mx-admin/issues/875)
* fix(deps): update dependency qs to v6.12.0 (#874) ([5959c90](https://github.com/mx-space/mx-admin/commit/5959c90)), closes [#874](https://github.com/mx-space/mx-admin/issues/874)

## <small>4.1.1 (2024-02-21)</small>

* release: v4.1.1 ([6b1fcd6](https://github.com/mx-space/mx-admin/commit/6b1fcd6))
* fix: api url transformer ([fe89cdf](https://github.com/mx-space/mx-admin/commit/fe89cdf))

## 4.1.0 (2024-02-20)

* release: v4.1.0 ([a488ca5](https://github.com/mx-space/mx-admin/commit/a488ca5))
* feat: reading rank panel ([0db59ae](https://github.com/mx-space/mx-admin/commit/0db59ae))
* chore: readme ([e551d94](https://github.com/mx-space/mx-admin/commit/e551d94))

## 4.0.0 (2024-02-16)

* release: v4.0.0 ([5debef4](https://github.com/mx-space/mx-admin/commit/5debef4))
* fix: markdown highlight, fuck codemirror ([e02985e](https://github.com/mx-space/mx-admin/commit/e02985e))

## <small>3.39.1 (2024-02-16)</small>

* release: v3.39.1 ([6294c8b](https://github.com/mx-space/mx-admin/commit/6294c8b))
* fix: read duration data model ([c20d3f7](https://github.com/mx-space/mx-admin/commit/c20d3f7))

## 3.39.0 (2024-02-15)

* release: v3.39.0 ([7fe448a](https://github.com/mx-space/mx-admin/commit/7fe448a))
* refactor!: note model alignment core ([db4098e](https://github.com/mx-space/mx-admin/commit/db4098e))
* fix: persistent notification closure within the same version (#869) ([6b7567f](https://github.com/mx-space/mx-admin/commit/6b7567f)), closes [#869](https://github.com/mx-space/mx-admin/issues/869)
* fix(deps): update codemirror (#860) ([e0cd931](https://github.com/mx-space/mx-admin/commit/e0cd931)), closes [#860](https://github.com/mx-space/mx-admin/issues/860)
* fix(deps): update dependency crossbell.js to v1.11.3 (#861) ([89974f2](https://github.com/mx-space/mx-admin/commit/89974f2)), closes [#861](https://github.com/mx-space/mx-admin/issues/861)
* chore(deps): update actions/cache action to v4 (#862) ([0dc3383](https://github.com/mx-space/mx-admin/commit/0dc3383)), closes [#862](https://github.com/mx-space/mx-admin/issues/862)
* chore(deps): update dependency @types/validator to v13.11.9 (#864) ([7755fab](https://github.com/mx-space/mx-admin/commit/7755fab)), closes [#864](https://github.com/mx-space/mx-admin/issues/864)
* chore(deps): update vue monorepo to v3.4.19 (#867) ([6eb825e](https://github.com/mx-space/mx-admin/commit/6eb825e)), closes [#867](https://github.com/mx-space/mx-admin/issues/867)

## <small>3.38.1 (2024-02-14)</small>

* release: v3.38.1 ([c604e29](https://github.com/mx-space/mx-admin/commit/c604e29))
* feat: make AI summary persistent and customizable (#868) ([ac2b841](https://github.com/mx-space/mx-admin/commit/ac2b841)), closes [#868](https://github.com/mx-space/mx-admin/issues/868)

## 3.38.0 (2024-02-12)

* release: v3.38.0 ([ec5ef6c](https://github.com/mx-space/mx-admin/commit/ec5ef6c))
* feat: support custom openai base url (#863) ([dfde89e](https://github.com/mx-space/mx-admin/commit/dfde89e)), closes [#863](https://github.com/mx-space/mx-admin/issues/863)
* feat: support reading duartion ([fba9dc4](https://github.com/mx-space/mx-admin/commit/fba9dc4))

## <small>3.37.7 (2024-02-07)</small>

* release: v3.37.7 ([5f2eb96](https://github.com/mx-space/mx-admin/commit/5f2eb96))
* refactor: remove stupid code ([a93cc66](https://github.com/mx-space/mx-admin/commit/a93cc66))
* fix:  category getter in ManagePostListView ([ca24fce](https://github.com/mx-space/mx-admin/commit/ca24fce))

## <small>3.37.6 (2024-02-04)</small>

* release: v3.37.6 ([19eaecc](https://github.com/mx-space/mx-admin/commit/19eaecc))
* fix: broken lockfile ([11fedb0](https://github.com/mx-space/mx-admin/commit/11fedb0))

## <small>3.37.5 (2024-02-04)</small>

* release: v3.37.5 ([463ac46](https://github.com/mx-space/mx-admin/commit/463ac46))
* fix(act): listen route change and fetch data ([9662368](https://github.com/mx-space/mx-admin/commit/9662368))
* chore(deps): update dependency @vueuse/core to ^10.7.2 (#857) ([45d680b](https://github.com/mx-space/mx-admin/commit/45d680b)), closes [#857](https://github.com/mx-space/mx-admin/issues/857)

## <small>3.37.4 (2024-02-03)</small>

* release: v3.37.4 ([56cecfe](https://github.com/mx-space/mx-admin/commit/56cecfe))
* feat: add file type ([5906f64](https://github.com/mx-space/mx-admin/commit/5906f64))

## <small>3.37.3 (2024-02-02)</small>

* release: v3.37.3 ([f6af2b4](https://github.com/mx-space/mx-admin/commit/f6af2b4))
* fix: api error ([c53a4ad](https://github.com/mx-space/mx-admin/commit/c53a4ad))

## <small>3.37.2 (2024-02-02)</small>

* release: v3.37.2 ([21cf0e1](https://github.com/mx-space/mx-admin/commit/21cf0e1))
* chore: lockfile ([3cfcccf](https://github.com/mx-space/mx-admin/commit/3cfcccf))

## <small>3.37.1 (2024-02-02)</small>

* release: v3.37.1 ([e2f6583](https://github.com/mx-space/mx-admin/commit/e2f6583))
* fix: log view ([78515b2](https://github.com/mx-space/mx-admin/commit/78515b2))
* fix: socket connection ([cbb459b](https://github.com/mx-space/mx-admin/commit/cbb459b))
* feat: Update dependencies and add PAGE_PROXY flag ([b68696c](https://github.com/mx-space/mx-admin/commit/b68696c))

## 3.37.0 (2024-01-31)

* release: v3.37.0 ([626045a](https://github.com/mx-space/mx-admin/commit/626045a))
* chore: update deps ([384130d](https://github.com/mx-space/mx-admin/commit/384130d))
* fix: kick session all ([b39bee2](https://github.com/mx-space/mx-admin/commit/b39bee2))

## <small>3.36.3 (2024-01-30)</small>

* release: v3.36.3 ([531d650](https://github.com/mx-space/mx-admin/commit/531d650))
* fix: allow openai in browser ([68183c7](https://github.com/mx-space/mx-admin/commit/68183c7))
* fix: upgrade vue to 3.4 ([4baeaeb](https://github.com/mx-space/mx-admin/commit/4baeaeb))
* fix: xlog externalUrl ([c56c2bb](https://github.com/mx-space/mx-admin/commit/c56c2bb))
* chore: update deps ([2e601eb](https://github.com/mx-space/mx-admin/commit/2e601eb))
* chore(deps): bump follow-redirects from 1.15.3 to 1.15.4 (#852) ([2ce7eb1](https://github.com/mx-space/mx-admin/commit/2ce7eb1)), closes [#852](https://github.com/mx-space/mx-admin/issues/852)
* chore(deps): update dependency @innei/eslint-config-vue-ts to v0.12.1 (#848) ([cb24e86](https://github.com/mx-space/mx-admin/commit/cb24e86)), closes [#848](https://github.com/mx-space/mx-admin/issues/848)
* chore(deps): update dependency @types/validator to v13.11.8 (#853) ([f99f242](https://github.com/mx-space/mx-admin/commit/f99f242)), closes [#853](https://github.com/mx-space/mx-admin/issues/853)
* chore(deps): update dependency postcss to v8.4.33 (#850) ([b42d1ab](https://github.com/mx-space/mx-admin/commit/b42d1ab)), closes [#850](https://github.com/mx-space/mx-admin/issues/850)
* chore(deps): update vue monorepo to v3.4.15 (#858) ([e9fa567](https://github.com/mx-space/mx-admin/commit/e9fa567)), closes [#858](https://github.com/mx-space/mx-admin/issues/858)

## <small>3.36.2 (2024-01-08)</small>

* release: v3.36.2 ([2ddda5a](https://github.com/mx-space/mx-admin/commit/2ddda5a))
* fix: attach token in hash mode ([601f9de](https://github.com/mx-space/mx-admin/commit/601f9de))
* chore: upgrade vue ([c63517e](https://github.com/mx-space/mx-admin/commit/c63517e))
* chore(deps): update dependency @vitejs/plugin-vue to v5.0.2 (#845) ([ed94d8b](https://github.com/mx-space/mx-admin/commit/ed94d8b)), closes [#845](https://github.com/mx-space/mx-admin/issues/845)
* chore(deps): update dependency @vueuse/core to ^10.7.1 (#846) ([68069b8](https://github.com/mx-space/mx-admin/commit/68069b8)), closes [#846](https://github.com/mx-space/mx-admin/issues/846)

## <small>3.36.1 (2023-12-28)</small>

* release: v3.36.1 ([dff391b](https://github.com/mx-space/mx-admin/commit/dff391b))
* chore: update deps ([34f9051](https://github.com/mx-space/mx-admin/commit/34f9051))
* fix: remove empty secret ([ee0c9e6](https://github.com/mx-space/mx-admin/commit/ee0c9e6))
* fix: tag space ([28e650b](https://github.com/mx-space/mx-admin/commit/28e650b))

## 3.36.0 (2023-12-24)

* release: v3.36.0 ([aafb1e7](https://github.com/mx-space/mx-admin/commit/aafb1e7))
* feat: event tag ([c39bb60](https://github.com/mx-space/mx-admin/commit/c39bb60))
* feat: webhook panel (#842) ([3fda218](https://github.com/mx-space/mx-admin/commit/3fda218)), closes [#842](https://github.com/mx-space/mx-admin/issues/842)
* chore(deps): update dependency @vueuse/core to ^10.7.0 (#839) ([120a61a](https://github.com/mx-space/mx-admin/commit/120a61a)), closes [#839](https://github.com/mx-space/mx-admin/issues/839)
* chore(deps): update dependency vite to v5.0.10 (#836) ([f723081](https://github.com/mx-space/mx-admin/commit/f723081)), closes [#836](https://github.com/mx-space/mx-admin/issues/836)
* chore(deps): update vue monorepo to v3.3.13 (#837) ([da011f6](https://github.com/mx-space/mx-admin/commit/da011f6)), closes [#837](https://github.com/mx-space/mx-admin/issues/837)
* fix(deps): update dependency @codemirror/view to v6.22.3 (#838) ([ecdef52](https://github.com/mx-space/mx-admin/commit/ecdef52)), closes [#838](https://github.com/mx-space/mx-admin/issues/838)

## <small>3.35.3 (2023-12-24)</small>

* release: v3.35.3 ([e41d062](https://github.com/mx-space/mx-admin/commit/e41d062))
* fix: broken pnpm lock file ([2eb8e25](https://github.com/mx-space/mx-admin/commit/2eb8e25))
* fix: patch the node data for mood ([c684c9b](https://github.com/mx-space/mx-admin/commit/c684c9b))
* fix: setup-api api default and redirect ([1ec3497](https://github.com/mx-space/mx-admin/commit/1ec3497))
* fix(deps): update dependency @antv/g2 to ^4.2.10 (#831) ([39e549e](https://github.com/mx-space/mx-admin/commit/39e549e)), closes [#831](https://github.com/mx-space/mx-admin/issues/831)
* refactor: adjust route component location ([af23e17](https://github.com/mx-space/mx-admin/commit/af23e17))

## <small>3.35.2 (2023-12-11)</small>

* release: v3.35.2 ([6519afb](https://github.com/mx-space/mx-admin/commit/6519afb))
* chore: update deps ([9fffcec](https://github.com/mx-space/mx-admin/commit/9fffcec))
* fix: vue proxy track loop ([8e793b9](https://github.com/mx-space/mx-admin/commit/8e793b9))

## <small>3.35.1 (2023-12-10)</small>

* release: v3.35.1 ([9d22fc2](https://github.com/mx-space/mx-admin/commit/9d22fc2))
* fix: login update token logic ([e3904cf](https://github.com/mx-space/mx-admin/commit/e3904cf))
* feat: add passkey login ([121c913](https://github.com/mx-space/mx-admin/commit/121c913))

## 3.35.0 (2023-12-10)

* release: v3.35.0 ([f717688](https://github.com/mx-space/mx-admin/commit/f717688))
* feat: login with passkey (#833) ([dc662e0](https://github.com/mx-space/mx-admin/commit/dc662e0)), closes [#833](https://github.com/mx-space/mx-admin/issues/833)

## <small>3.34.2 (2023-12-05)</small>

* release: v3.34.2 ([41ea379](https://github.com/mx-space/mx-admin/commit/41ea379))
* fix:preview ([64e9bc0](https://github.com/mx-space/mx-admin/commit/64e9bc0))

## <small>3.34.1 (2023-12-03)</small>

* release: v3.34.1 ([cdc981e](https://github.com/mx-space/mx-admin/commit/cdc981e))
* feat: json highlight ([d809700](https://github.com/mx-space/mx-admin/commit/d809700))
* fix: backup action icon ([55f4297](https://github.com/mx-space/mx-admin/commit/55f4297))

## 3.34.0 (2023-12-02)

* release: v3.34.0 ([4345eb6](https://github.com/mx-space/mx-admin/commit/4345eb6))
* fix: config form style with spacer ([9fe8442](https://github.com/mx-space/mx-admin/commit/9fe8442))
* fix(deps): update dependency canvas-confetti to v1.9.2 (#828) ([66acd4b](https://github.com/mx-space/mx-admin/commit/66acd4b)), closes [#828](https://github.com/mx-space/mx-admin/issues/828)
* chore(deps): update dependency @vueuse/core to ^10.6.1 (#822) ([29a12a2](https://github.com/mx-space/mx-admin/commit/29a12a2)), closes [#822](https://github.com/mx-space/mx-admin/issues/822)
* chore(deps): update dependency unplugin-auto-import to v0.17.1 (#816) ([58bcc3e](https://github.com/mx-space/mx-admin/commit/58bcc3e)), closes [#816](https://github.com/mx-space/mx-admin/issues/816)

## <small>3.33.7 (2023-11-30)</small>

* release: v3.33.7 ([99774b3](https://github.com/mx-space/mx-admin/commit/99774b3))
* fix: type error ([607d62b](https://github.com/mx-space/mx-admin/commit/607d62b))
* chore(deps): update actions/checkout action to v4 (#823) ([c145b9a](https://github.com/mx-space/mx-admin/commit/c145b9a)), closes [#823](https://github.com/mx-space/mx-admin/issues/823)
* chore(deps): update actions/setup-node action to v4 (#824) ([9992c31](https://github.com/mx-space/mx-admin/commit/9992c31)), closes [#824](https://github.com/mx-space/mx-admin/issues/824)
* chore(deps): update dependency @innei/eslint-config-vue-ts to v0.12.0 (#829) ([aca3e33](https://github.com/mx-space/mx-admin/commit/aca3e33)), closes [#829](https://github.com/mx-space/mx-admin/issues/829)
* chore(deps): update dependency rollup-plugin-visualizer to v5.9.3 (#826) ([13c16f0](https://github.com/mx-space/mx-admin/commit/13c16f0)), closes [#826](https://github.com/mx-space/mx-admin/issues/826)
* chore(deps): update vue monorepo to v3.3.9 (#827) ([ac8c805](https://github.com/mx-space/mx-admin/commit/ac8c805)), closes [#827](https://github.com/mx-space/mx-admin/issues/827)

## <small>3.33.6 (2023-11-22)</small>

* release: v3.33.6 ([2bb8874](https://github.com/mx-space/mx-admin/commit/2bb8874))
* fix: upstream token cleaner ([1d0c296](https://github.com/mx-space/mx-admin/commit/1d0c296))

## <small>3.33.5 (2023-11-22)</small>

* release: v3.33.5 ([ea3d8b5](https://github.com/mx-space/mx-admin/commit/ea3d8b5))
* fix: add tab for restore when init ([02b7004](https://github.com/mx-space/mx-admin/commit/02b7004))
* chore: update deps ([84d9146](https://github.com/mx-space/mx-admin/commit/84d9146))
* chore: update deps ([309dfb6](https://github.com/mx-space/mx-admin/commit/309dfb6))
* refactor: store token what if upstream ([59ecf5f](https://github.com/mx-space/mx-admin/commit/59ecf5f))

## <small>3.33.4 (2023-11-16)</small>

* release: v3.33.4 ([112bec6](https://github.com/mx-space/mx-admin/commit/112bec6))
* feat: attach token from query ([791b63c](https://github.com/mx-space/mx-admin/commit/791b63c))
* chore(deps): update dependency @types/ejs to v3.1.5 (#810) ([02c0435](https://github.com/mx-space/mx-admin/commit/02c0435)), closes [#810](https://github.com/mx-space/mx-admin/issues/810)
* chore(deps): update dependency @types/event-source-polyfill to v1.0.3 (#811) ([aca1e42](https://github.com/mx-space/mx-admin/commit/aca1e42)), closes [#811](https://github.com/mx-space/mx-admin/issues/811)
* chore(deps): update dependency @types/lodash-es to v4.17.10 (#812) ([ea691a0](https://github.com/mx-space/mx-admin/commit/ea691a0)), closes [#812](https://github.com/mx-space/mx-admin/issues/812)
* chore(deps): update dependency @types/markdown-escape to v1.1.2 (#813) ([beff32a](https://github.com/mx-space/mx-admin/commit/beff32a)), closes [#813](https://github.com/mx-space/mx-admin/issues/813)
* chore(deps): update dependency @types/sortablejs to v1.15.4 (#815) ([4f256d9](https://github.com/mx-space/mx-admin/commit/4f256d9)), closes [#815](https://github.com/mx-space/mx-admin/issues/815)
* chore(deps): update vue monorepo to v3.3.8 (#817) ([21c7727](https://github.com/mx-space/mx-admin/commit/21c7727)), closes [#817](https://github.com/mx-space/mx-admin/issues/817)

## <small>3.33.3 (2023-11-02)</small>

* release: v3.33.3 ([8d1c55a](https://github.com/mx-space/mx-admin/commit/8d1c55a))
* feat: see more today ips ([f73d095](https://github.com/mx-space/mx-admin/commit/f73d095))
* feat(comment): `cmd+enter` to reply submit ([7336677](https://github.com/mx-space/mx-admin/commit/7336677))

## <small>3.33.2 (2023-11-01)</small>

* release: v3.33.2 ([b634f8a](https://github.com/mx-space/mx-admin/commit/b634f8a))
* refactor: remove other editors ([dfbbb07](https://github.com/mx-space/mx-admin/commit/dfbbb07))

## <small>3.33.1 (2023-11-01)</small>

* release: v3.33.1 ([63712af](https://github.com/mx-space/mx-admin/commit/63712af))
* fix: post table title render ([29a851e](https://github.com/mx-space/mx-admin/commit/29a851e))

## 3.33.0 (2023-10-31)

* release: v3.33.0 ([dc2fb1f](https://github.com/mx-space/mx-admin/commit/dc2fb1f))
* fix: number format type error ([c1db1d8](https://github.com/mx-space/mx-admin/commit/c1db1d8))
* feat: dashboard count ([9a1c9b7](https://github.com/mx-space/mx-admin/commit/9a1c9b7))

## <small>3.32.7 (2023-10-29)</small>

* release: v3.32.7 ([df5acdf](https://github.com/mx-space/mx-admin/commit/df5acdf))
* feat(topic-detail): support nav to note edit ([162463c](https://github.com/mx-space/mx-admin/commit/162463c))
* chore(deps): update dependency vite to v4.5.0 (#801) ([f870505](https://github.com/mx-space/mx-admin/commit/f870505)), closes [#801](https://github.com/mx-space/mx-admin/issues/801)

## <small>3.32.6 (2023-10-21)</small>

* release: v3.32.6 ([ab3e4e0](https://github.com/mx-space/mx-admin/commit/ab3e4e0))
* fix: analyze table paginator ([44d3141](https://github.com/mx-space/mx-admin/commit/44d3141))
* fix: typo ([ce53f69](https://github.com/mx-space/mx-admin/commit/ce53f69))
* fix(deps): update dependency crossbell.js to v1.9.0 (#807) ([3807a80](https://github.com/mx-space/mx-admin/commit/3807a80)), closes [#807](https://github.com/mx-space/mx-admin/issues/807)
* fix(deps): update dependency pinia to v2.1.7 (#808) ([1f1e28e](https://github.com/mx-space/mx-admin/commit/1f1e28e)), closes [#808](https://github.com/mx-space/mx-admin/issues/808)
* chore(deps): update dependency @types/js-yaml to v4.0.8 (#805) ([0929495](https://github.com/mx-space/mx-admin/commit/0929495)), closes [#805](https://github.com/mx-space/mx-admin/issues/805)
* chore(deps): update dependency @types/validator to v13.11.5 (#806) ([2e58ed3](https://github.com/mx-space/mx-admin/commit/2e58ed3)), closes [#806](https://github.com/mx-space/mx-admin/issues/806)

## <small>3.32.5 (2023-10-14)</small>

* release: v3.32.5 ([dd56214](https://github.com/mx-space/mx-admin/commit/dd56214))
* fix: edit topic title ([b36d73d](https://github.com/mx-space/mx-admin/commit/b36d73d))
* fix(deps): update codemirror (#799) ([9d6eb19](https://github.com/mx-space/mx-admin/commit/9d6eb19)), closes [#799](https://github.com/mx-space/mx-admin/issues/799)
* fix(deps): update dependency crossbell.js to v1.8.1 (#800) ([5b9d837](https://github.com/mx-space/mx-admin/commit/5b9d837)), closes [#800](https://github.com/mx-space/mx-admin/issues/800)
* fix(deps): update dependency vue-router to v4.2.5 (#797) ([aa15c0d](https://github.com/mx-space/mx-admin/commit/aa15c0d)), closes [#797](https://github.com/mx-space/mx-admin/issues/797)
* chore: update deps ([c416b3e](https://github.com/mx-space/mx-admin/commit/c416b3e))
* chore(deps): update dependency @vitejs/plugin-vue to v4.4.0 (#803) ([2b669f1](https://github.com/mx-space/mx-admin/commit/2b669f1)), closes [#803](https://github.com/mx-space/mx-admin/issues/803)
* chore(deps): update dependency @vueuse/core to v10.5.0 (#804) ([892c45c](https://github.com/mx-space/mx-admin/commit/892c45c)), closes [#804](https://github.com/mx-space/mx-admin/issues/804)
* chore(deps): update dependency vue-eslint-parser to v9.3.2 (#802) ([df0a68d](https://github.com/mx-space/mx-admin/commit/df0a68d)), closes [#802](https://github.com/mx-space/mx-admin/issues/802)
* chore(deps): update pnpm/action-setup action to v2.4.0 (#798) ([bbc9fe5](https://github.com/mx-space/mx-admin/commit/bbc9fe5)), closes [#798](https://github.com/mx-space/mx-admin/issues/798)

## <small>3.32.4 (2023-09-24)</small>

* release: v3.32.4 ([a5e7a75](https://github.com/mx-space/mx-admin/commit/a5e7a75))
* fix: codemirror error ([c3f6da1](https://github.com/mx-space/mx-admin/commit/c3f6da1))

## <small>3.32.3 (2023-09-24)</small>

* release: v3.32.3 ([810a1dc](https://github.com/mx-space/mx-admin/commit/810a1dc))
* chore: update deps ([1fe9c9e](https://github.com/mx-space/mx-admin/commit/1fe9c9e))
* chore: update patch or minor deps ([1ce1435](https://github.com/mx-space/mx-admin/commit/1ce1435))
* chore(deps): update dependency @types/js-yaml to v4.0.6 (#791) ([f989041](https://github.com/mx-space/mx-admin/commit/f989041)), closes [#791](https://github.com/mx-space/mx-admin/issues/791)
* chore(deps): update dependency @vueuse/core to v10.4.1 (#794) ([fcd267b](https://github.com/mx-space/mx-admin/commit/fcd267b)), closes [#794](https://github.com/mx-space/mx-admin/issues/794)
* chore(deps): update dependency rollup to ^3.29.1 (#781) ([ce0d7ff](https://github.com/mx-space/mx-admin/commit/ce0d7ff)), closes [#781](https://github.com/mx-space/mx-admin/issues/781)
* chore(deps): update dependency vite-plugin-vue-devtools to v0.5.1 (#773) ([6300a64](https://github.com/mx-space/mx-admin/commit/6300a64)), closes [#773](https://github.com/mx-space/mx-admin/issues/773)
* chore(deps): update dependency vite-tsconfig-paths to v4.2.1 (#787) ([2f2d254](https://github.com/mx-space/mx-admin/commit/2f2d254)), closes [#787](https://github.com/mx-space/mx-admin/issues/787)
* fix(deps): update codemirror (#788) ([8724da7](https://github.com/mx-space/mx-admin/commit/8724da7)), closes [#788](https://github.com/mx-space/mx-admin/issues/788)
* fix(deps): update dependency @huacnlee/autocorrect to v2.8.5 (#789) ([3afde1c](https://github.com/mx-space/mx-admin/commit/3afde1c)), closes [#789](https://github.com/mx-space/mx-admin/issues/789)
* fix(deps): update dependency crossbell.js to v1.6.4 (#790) ([5ab7f2e](https://github.com/mx-space/mx-admin/commit/5ab7f2e)), closes [#790](https://github.com/mx-space/mx-admin/issues/790)
* fix(deps): update dependency marked to v7.0.5 (#793) ([c1aacc5](https://github.com/mx-space/mx-admin/commit/c1aacc5)), closes [#793](https://github.com/mx-space/mx-admin/issues/793)

## <small>3.32.2 (2023-08-22)</small>

* release: v3.32.2 ([e3b7ec6](https://github.com/mx-space/mx-admin/commit/e3b7ec6))
* chore(deps): update dependency postcss to v8.4.28 (#779) ([30bb0cd](https://github.com/mx-space/mx-admin/commit/30bb0cd)), closes [#779](https://github.com/mx-space/mx-admin/issues/779)
* fix(deps): update dependency crossbell.js to v1.6.1 (#775) ([bcdb844](https://github.com/mx-space/mx-admin/commit/bcdb844)), closes [#775](https://github.com/mx-space/mx-admin/issues/775)
* fix(deps): update dependency vite-plugin-windicss to v1.9.1 (#776) ([d11b3df](https://github.com/mx-space/mx-admin/commit/d11b3df)), closes [#776](https://github.com/mx-space/mx-admin/issues/776)

## <small>3.32.1 (2023-08-10)</small>

* release: v3.32.1 ([143a612](https://github.com/mx-space/mx-admin/commit/143a612))
* fix: remove webshell entry ([3e56743](https://github.com/mx-space/mx-admin/commit/3e56743))

## 3.32.0 (2023-08-10)

* release: v3.32.0 ([2ab39df](https://github.com/mx-space/mx-admin/commit/2ab39df))
* chore: update deps ([f62efb5](https://github.com/mx-space/mx-admin/commit/f62efb5))
* feat: activity tab ([42f2bcb](https://github.com/mx-space/mx-admin/commit/42f2bcb))

## <small>3.31.1 (2023-08-10)</small>

* release: v3.31.1 ([8e0c3ad](https://github.com/mx-space/mx-admin/commit/8e0c3ad))
* chore: fix renovate config ([053b470](https://github.com/mx-space/mx-admin/commit/053b470))
* chore: update deps ([6282d86](https://github.com/mx-space/mx-admin/commit/6282d86))
* chore: update deps ([47c901b](https://github.com/mx-space/mx-admin/commit/47c901b))
* chore(deps): update dependency postcss-preset-env to v9.1.1 (#771) ([4d9d566](https://github.com/mx-space/mx-admin/commit/4d9d566)), closes [#771](https://github.com/mx-space/mx-admin/issues/771)
* chore(deps): update dependency rollup to ^3.28.0 (#772) ([267b3fb](https://github.com/mx-space/mx-admin/commit/267b3fb)), closes [#772](https://github.com/mx-space/mx-admin/issues/772)

## 3.31.0 (2023-07-27)

* release: v3.31.0 ([692a3cf](https://github.com/mx-space/mx-admin/commit/692a3cf))
* feat: post message for preview page ([9058be6](https://github.com/mx-space/mx-admin/commit/9058be6))
* feat: post message for preview page ([e7f231f](https://github.com/mx-space/mx-admin/commit/e7f231f))

## <small>3.30.10 (2023-07-22)</small>

* release: v3.30.10 ([3a83fe1](https://github.com/mx-space/mx-admin/commit/3a83fe1))
* fix: remove some unsafe lib ([f5beee5](https://github.com/mx-space/mx-admin/commit/f5beee5))
* fix: update crossbell ([1ed9b3b](https://github.com/mx-space/mx-admin/commit/1ed9b3b))
* chore: rename ([a317d79](https://github.com/mx-space/mx-admin/commit/a317d79))
* chore: typo ([5e26d22](https://github.com/mx-space/mx-admin/commit/5e26d22))

## <small>3.30.9 (2023-07-18)</small>

* release: v3.30.9 ([14835fd](https://github.com/mx-space/mx-admin/commit/14835fd))
* fix: rollback cm6 deps ([efc0df7](https://github.com/mx-space/mx-admin/commit/efc0df7))
* fix: upgrade cm6 ([542ecef](https://github.com/mx-space/mx-admin/commit/542ecef))

## <small>3.30.8 (2023-07-18)</small>

* release: v3.30.8 ([b4281da](https://github.com/mx-space/mx-admin/commit/b4281da))
* fix md parser in windows (#770) ([abbb846](https://github.com/mx-space/mx-admin/commit/abbb846)), closes [#770](https://github.com/mx-space/mx-admin/issues/770)

## <small>3.30.7 (2023-07-10)</small>

* release: v3.30.7 ([c5fb1be](https://github.com/mx-space/mx-admin/commit/c5fb1be))
* feat: split analyze table ([01773e5](https://github.com/mx-space/mx-admin/commit/01773e5))
* chore: update deps ([4ea94a2](https://github.com/mx-space/mx-admin/commit/4ea94a2))

## <small>3.30.6 (2023-07-08)</small>

* release: v3.30.6 ([1c5d5b8](https://github.com/mx-space/mx-admin/commit/1c5d5b8))
* feat: add vite-vue-devtool ([398a240](https://github.com/mx-space/mx-admin/commit/398a240))

## <small>3.30.5 (2023-06-24)</small>

* release: v3.30.5 ([08cbd5a](https://github.com/mx-space/mx-admin/commit/08cbd5a))
* fix: crossbell connect ([67a37b4](https://github.com/mx-space/mx-admin/commit/67a37b4))

## <small>3.30.4 (2023-06-24)</small>

* release: v3.30.4 ([4ee8f10](https://github.com/mx-space/mx-admin/commit/4ee8f10))
* fix: image fetch dim ([a44b902](https://github.com/mx-space/mx-admin/commit/a44b902))
* fix: preview cover image should show ([507c0ef](https://github.com/mx-space/mx-admin/commit/507c0ef))
* fix(deps): update all non-major dependencies (#766) ([4e03cd3](https://github.com/mx-space/mx-admin/commit/4e03cd3)), closes [#766](https://github.com/mx-space/mx-admin/issues/766)
* fix(deps): update all non-major dependencies (#767) ([56bd200](https://github.com/mx-space/mx-admin/commit/56bd200)), closes [#767](https://github.com/mx-space/mx-admin/issues/767)
* chore: rename note copywrite ([d106c4a](https://github.com/mx-space/mx-admin/commit/d106c4a))
* chore(deps): update all non-major dependencies (#765) ([7ffccf8](https://github.com/mx-space/mx-admin/commit/7ffccf8)), closes [#765](https://github.com/mx-space/mx-admin/issues/765)

## <small>3.30.3 (2023-05-25)</small>

* release: v3.30.3 ([4b9c27e](https://github.com/mx-space/mx-admin/commit/4b9c27e))
* chore: bump deps ([a1e4bb4](https://github.com/mx-space/mx-admin/commit/a1e4bb4))
* chore(deps): update dependency @types/marked to v5 (#764) ([fa90947](https://github.com/mx-space/mx-admin/commit/fa90947)), closes [#764](https://github.com/mx-space/mx-admin/issues/764)
* fix(deps): update all non-major dependencies (#762) ([d3a5930](https://github.com/mx-space/mx-admin/commit/d3a5930)), closes [#762](https://github.com/mx-space/mx-admin/issues/762)
* fix(deps): update all non-major dependencies (#763) ([9eb6188](https://github.com/mx-space/mx-admin/commit/9eb6188)), closes [#763](https://github.com/mx-space/mx-admin/issues/763)

## <small>3.30.2 (2023-05-17)</small>

* release: v3.30.2 ([282b1df](https://github.com/mx-space/mx-admin/commit/282b1df))
* fix: sidebar menu item clickable area ([d084d10](https://github.com/mx-space/mx-admin/commit/d084d10))

## <small>3.30.1 (2023-05-11)</small>

* release: v3.30.1 ([6e74304](https://github.com/mx-space/mx-admin/commit/6e74304))
* fix: xlog publish ([7fc708c](https://github.com/mx-space/mx-admin/commit/7fc708c))
* fix: xlog text add new line of end ([a3f7920](https://github.com/mx-space/mx-admin/commit/a3f7920))
* fix(deps): update all non-major dependencies (#760) ([f19a698](https://github.com/mx-space/mx-admin/commit/f19a698)), closes [#760](https://github.com/mx-space/mx-admin/issues/760)
* chore: update crossbell.js ([e602975](https://github.com/mx-space/mx-admin/commit/e602975))
* ci: update renovate ([ebca45b](https://github.com/mx-space/mx-admin/commit/ebca45b))

## 3.30.0 (2023-04-30)

* release: v3.30.0 ([6761a43](https://github.com/mx-space/mx-admin/commit/6761a43))
* feat: support page reorder dnd ([17a9101](https://github.com/mx-space/mx-admin/commit/17a9101))
* fix: update text color in dark mode ([33079f0](https://github.com/mx-space/mx-admin/commit/33079f0))

## <small>3.29.8 (2023-04-29)</small>

* release: v3.29.8 ([997ac0f](https://github.com/mx-space/mx-admin/commit/997ac0f))
* feat: support post cover ([f3001fa](https://github.com/mx-space/mx-admin/commit/f3001fa))
* fix: vite alias ([0af9ed4](https://github.com/mx-space/mx-admin/commit/0af9ed4))
* fix(snippet): use session to store data ([b21275d](https://github.com/mx-space/mx-admin/commit/b21275d))

## <small>3.29.7 (2023-04-28)</small>

* release: v3.29.7 ([f25f090](https://github.com/mx-space/mx-admin/commit/f25f090))
* refactor: remove crossbell-universal connector ([6337d21](https://github.com/mx-space/mx-admin/commit/6337d21))
* fix: memoed web url ([f48859f](https://github.com/mx-space/mx-admin/commit/f48859f))
* fix(deps): update dependency @codemirror/view to v6.10.0 (#739) ([691e52b](https://github.com/mx-space/mx-admin/commit/691e52b)), closes [#739](https://github.com/mx-space/mx-admin/issues/739)
* fix(deps): update dependency js-cookie to v3.0.5 (#753) ([67dc608](https://github.com/mx-space/mx-admin/commit/67dc608)), closes [#753](https://github.com/mx-space/mx-admin/issues/753)
* fix(deps): update dependency unidata.js to v0.7.20 (#748) ([49de229](https://github.com/mx-space/mx-admin/commit/49de229)), closes [#748](https://github.com/mx-space/mx-admin/issues/748)
* chore(deps): update dependency @vitejs/plugin-vue to v4.2.1 (#754) ([4903c8e](https://github.com/mx-space/mx-admin/commit/4903c8e)), closes [#754](https://github.com/mx-space/mx-admin/issues/754)
* chore(deps): update dependency vite to v4.3.3 (#755) ([e0f41ed](https://github.com/mx-space/mx-admin/commit/e0f41ed)), closes [#755](https://github.com/mx-space/mx-admin/issues/755)

## <small>3.29.6 (2023-04-24)</small>

* release: v3.29.6 ([30eeaa8](https://github.com/mx-space/mx-admin/commit/30eeaa8))
* fix: update codemirror deps ([18515ff](https://github.com/mx-space/mx-admin/commit/18515ff))
* fix: update header style for edit ([33b3c2c](https://github.com/mx-space/mx-admin/commit/33b3c2c))
* fix(comment): omit `children` key ([11e73e4](https://github.com/mx-space/mx-admin/commit/11e73e4))
* fix(deps): update dependency @vueuse/core to v10.1.0 (#751) ([ff0f2d9](https://github.com/mx-space/mx-admin/commit/ff0f2d9)), closes [#751](https://github.com/mx-space/mx-admin/issues/751)
* fix(deps): update dependency js-cookie to v3.0.4 (#750) ([998435b](https://github.com/mx-space/mx-admin/commit/998435b)), closes [#750](https://github.com/mx-space/mx-admin/issues/750)
* fix(deps): update dependency pinia to v2.0.35 (#749) ([1168500](https://github.com/mx-space/mx-admin/commit/1168500)), closes [#749](https://github.com/mx-space/mx-admin/issues/749)
* chore(deps): update dependency postcss to v8.4.23 (#744) ([f642700](https://github.com/mx-space/mx-admin/commit/f642700)), closes [#744](https://github.com/mx-space/mx-admin/issues/744)
* chore(deps): update dependency prettier to v2.8.8 (#752) ([56d0ece](https://github.com/mx-space/mx-admin/commit/56d0ece)), closes [#752](https://github.com/mx-space/mx-admin/issues/752)
* chore(deps): update dependency vite to v4.3.1 (#747) ([ad8fb52](https://github.com/mx-space/mx-admin/commit/ad8fb52)), closes [#747](https://github.com/mx-space/mx-admin/issues/747)

## <small>3.29.5 (2023-04-22)</small>

* release: v3.29.5 ([6791c2c](https://github.com/mx-space/mx-admin/commit/6791c2c))
* fix: preview url ([8856372](https://github.com/mx-space/mx-admin/commit/8856372))

## <small>3.29.4 (2023-04-22)</small>

* release: v3.29.4 ([09e98d5](https://github.com/mx-space/mx-admin/commit/09e98d5))
* feat: support preview in editor ([3aeaef8](https://github.com/mx-space/mx-admin/commit/3aeaef8))

## <small>3.29.3 (2023-04-19)</small>

* release: v3.29.3 ([5d6c605](https://github.com/mx-space/mx-admin/commit/5d6c605))
* chore: update deps ([fed07a5](https://github.com/mx-space/mx-admin/commit/fed07a5))
* fix: codemirror code font ([4ad67fa](https://github.com/mx-space/mx-admin/commit/4ad67fa))
* fix: missing monospace for cm ([548ee04](https://github.com/mx-space/mx-admin/commit/548ee04))
* fix(cm): markdown tag style ([e7498d7](https://github.com/mx-space/mx-admin/commit/e7498d7))
* feat: support codemirror auto fonts ([d0acaf0](https://github.com/mx-space/mx-admin/commit/d0acaf0))

## <small>3.29.2 (2023-04-17)</small>

* release: v3.29.2 ([c6787c3](https://github.com/mx-space/mx-admin/commit/c6787c3))
* fix: add tags for cm ([8225d2e](https://github.com/mx-space/mx-admin/commit/8225d2e))
* fix(deps): update dependency monaco-editor to v0.37.1 (#731) ([895ad45](https://github.com/mx-space/mx-admin/commit/895ad45)), closes [#731](https://github.com/mx-space/mx-admin/issues/731)
* fix(deps): update dependency monaco-editor-auto-typings to v0.4.4 (#732) ([dc24c22](https://github.com/mx-space/mx-admin/commit/dc24c22)), closes [#732](https://github.com/mx-space/mx-admin/issues/732)
* fix(deps): update dependency pinia to v2.0.34 (#734) ([769395e](https://github.com/mx-space/mx-admin/commit/769395e)), closes [#734](https://github.com/mx-space/mx-admin/issues/734)
* fix(deps): update dependency unidata.js to v0.7.18 (#733) ([d663b5d](https://github.com/mx-space/mx-admin/commit/d663b5d)), closes [#733](https://github.com/mx-space/mx-admin/issues/733)
* feat(cm-editor): add mono font for code ([2556cf4](https://github.com/mx-space/mx-admin/commit/2556cf4))
* chore: update deps ([093762a](https://github.com/mx-space/mx-admin/commit/093762a))
* chore(deps): update dependency @types/validator to v13.7.15 (#741) ([b1885ba](https://github.com/mx-space/mx-admin/commit/b1885ba)), closes [#741](https://github.com/mx-space/mx-admin/issues/741)
* chore(deps): update dependency @vueuse/core to v10 (#742) ([5280534](https://github.com/mx-space/mx-admin/commit/5280534)), closes [#742](https://github.com/mx-space/mx-admin/issues/742)
* chore(deps): update dependency postcss-preset-env to v8.3.1 (#736) ([1d8c6a2](https://github.com/mx-space/mx-admin/commit/1d8c6a2)), closes [#736](https://github.com/mx-space/mx-admin/issues/736)
* chore(deps): update dependency typescript to v5.0.4 (#735) ([d68da5a](https://github.com/mx-space/mx-admin/commit/d68da5a)), closes [#735](https://github.com/mx-space/mx-admin/issues/735)
* chore(deps): update dependency unplugin-auto-import to v0.15.3 (#743) ([0a4009e](https://github.com/mx-space/mx-admin/commit/0a4009e)), closes [#743](https://github.com/mx-space/mx-admin/issues/743)
* chore(deps): update dependency vite-tsconfig-paths to v4.2.0 (#737) ([33c40cb](https://github.com/mx-space/mx-admin/commit/33c40cb)), closes [#737](https://github.com/mx-space/mx-admin/issues/737)

## <small>3.29.1 (2023-04-15)</small>

* release: v3.29.1 ([225eef2](https://github.com/mx-space/mx-admin/commit/225eef2))
* fix parse md bug (#740) ([64df08b](https://github.com/mx-space/mx-admin/commit/64df08b)), closes [#740](https://github.com/mx-space/mx-admin/issues/740)

## 3.29.0 (2023-04-08)

* release: v3.29.0 ([59152d8](https://github.com/mx-space/mx-admin/commit/59152d8))
* feat: add footer for xlog sync ([72415d8](https://github.com/mx-space/mx-admin/commit/72415d8))
* fix(event): nav to `state=1` on apply event ([fda415e](https://github.com/mx-space/mx-admin/commit/fda415e))

## <small>3.28.3 (2023-04-07)</small>

* release: v3.28.3 ([85da78d](https://github.com/mx-space/mx-admin/commit/85da78d))
* fix: get xlog pageId by own slug or nid ([796edc5](https://github.com/mx-space/mx-admin/commit/796edc5))
* fix: openai icon fill color ([a16c6d1](https://github.com/mx-space/mx-admin/commit/a16c6d1))
* fix: re-use pageId ([40f4922](https://github.com/mx-space/mx-admin/commit/40f4922))
* fix: restore lockfile ([4625497](https://github.com/mx-space/mx-admin/commit/4625497))
* fix: typo (#729) ([3e9d987](https://github.com/mx-space/mx-admin/commit/3e9d987)), closes [#729](https://github.com/mx-space/mx-admin/issues/729)
* fix: xlog urls should be line feed ([bb1415c](https://github.com/mx-space/mx-admin/commit/bb1415c))
* fix(deps): update dependency ansi_up to v5.2.1 (#726) ([771ed22](https://github.com/mx-space/mx-admin/commit/771ed22)), closes [#726](https://github.com/mx-space/mx-admin/issues/726)
* fix(deps): update dependency monaco-editor to v0.37.0 (#727) ([a760f2a](https://github.com/mx-space/mx-admin/commit/a760f2a)), closes [#727](https://github.com/mx-space/mx-admin/issues/727)
* feat: improve xlog sync (#730) ([bfa43f3](https://github.com/mx-space/mx-admin/commit/bfa43f3)), closes [#730](https://github.com/mx-space/mx-admin/issues/730)
* chore(deps): update dependency postcss-preset-env to v8.3.0 (#724) ([3d93bf5](https://github.com/mx-space/mx-admin/commit/3d93bf5)), closes [#724](https://github.com/mx-space/mx-admin/issues/724)
* chore(deps): update dependency vite-tsconfig-paths to v4.0.8 (#711) ([e7e7efb](https://github.com/mx-space/mx-admin/commit/e7e7efb)), closes [#711](https://github.com/mx-space/mx-admin/issues/711)

## <small>3.28.2 (2023-04-05)</small>

* release: v3.28.2 ([922aaf4](https://github.com/mx-space/mx-admin/commit/922aaf4))
* fix: skip sync to xlog if post if hide ([759a5af](https://github.com/mx-space/mx-admin/commit/759a5af))
* feat: add info of xLog in post list view ([14654c7](https://github.com/mx-space/mx-admin/commit/14654c7))
* feat: fetch pageId first if meta is empty ([1c8e075](https://github.com/mx-space/mx-admin/commit/1c8e075))
* fix!: rename `ipfs` to `cid` ([ec9418f](https://github.com/mx-space/mx-admin/commit/ec9418f))

## <small>3.28.1 (2023-04-05)</small>

* release: v3.28.1 ([5260b75](https://github.com/mx-space/mx-admin/commit/5260b75))
* feat: add store crossbell metadata ([08712c1](https://github.com/mx-space/mx-admin/commit/08712c1))
* feat: add tags for sync to xlog ([ce7607d](https://github.com/mx-space/mx-admin/commit/ce7607d))
* chore: update docs ([4bbdd38](https://github.com/mx-space/mx-admin/commit/4bbdd38))

## 3.28.0 (2023-04-05)

* release: v3.28.0 ([0e17cfa](https://github.com/mx-space/mx-admin/commit/0e17cfa))
* fix: async load xLog connector ([2841c88](https://github.com/mx-space/mx-admin/commit/2841c88))
* fix: change open ai icon ([52ac47b](https://github.com/mx-space/mx-admin/commit/52ac47b))
* feat: support connect to rss3 xLog (#728 ([097976b](https://github.com/mx-space/mx-admin/commit/097976b)), closes [#728](https://github.com/mx-space/mx-admin/issues/728)
* chore: fix typo ([4445444](https://github.com/mx-space/mx-admin/commit/4445444))
* chore: update pnpm version ([3d2233c](https://github.com/mx-space/mx-admin/commit/3d2233c))
* chore(ai): change thing ([663b5b5](https://github.com/mx-space/mx-admin/commit/663b5b5))

## <small>3.27.5 (2023-03-24)</small>

* release: v3.27.5 ([095514d](https://github.com/mx-space/mx-admin/commit/095514d))
* feat: ai generate summary ([5da9b15](https://github.com/mx-space/mx-admin/commit/5da9b15))

## <small>3.27.4 (2023-03-24)</small>

* release: v3.27.4 ([72c1812](https://github.com/mx-space/mx-admin/commit/72c1812))
* fix: markdown yaml parser ([57efe5d](https://github.com/mx-space/mx-admin/commit/57efe5d))
* fix(deps): update codemirror (#503) ([465b0e6](https://github.com/mx-space/mx-admin/commit/465b0e6)), closes [#503](https://github.com/mx-space/mx-admin/issues/503)
* fix(deps): update dependency @antv/g2 to v4.2.10 (#712) ([89bb469](https://github.com/mx-space/mx-admin/commit/89bb469)), closes [#712](https://github.com/mx-space/mx-admin/issues/712)
* fix(deps): update dependency ejs to v3.1.9 (#708) ([e6787cc](https://github.com/mx-space/mx-admin/commit/e6787cc)), closes [#708](https://github.com/mx-space/mx-admin/issues/708)
* chore(deps): update dependency @innei/eslint-config-vue-ts to v0.9.8 (#705) ([d4058b5](https://github.com/mx-space/mx-admin/commit/d4058b5)), closes [#705](https://github.com/mx-space/mx-admin/issues/705)
* chore(deps): update dependency @types/lodash-es to v4.17.7 (#710) ([805d214](https://github.com/mx-space/mx-admin/commit/805d214)), closes [#710](https://github.com/mx-space/mx-admin/issues/710)
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v3.0.1 (#716) ([a2bdfec](https://github.com/mx-space/mx-admin/commit/a2bdfec)), closes [#716](https://github.com/mx-space/mx-admin/issues/716)
* chore(deps): update dependency prettier to v2.8.5 (#717) ([04f00d2](https://github.com/mx-space/mx-admin/commit/04f00d2)), closes [#717](https://github.com/mx-space/mx-admin/issues/717)
* chore(deps): update dependency typescript to v5 (#715) ([5b25e32](https://github.com/mx-space/mx-admin/commit/5b25e32)), closes [#715](https://github.com/mx-space/mx-admin/issues/715)
* chore(deps): update dependency vite to v4.2.0 (#714) ([0856909](https://github.com/mx-space/mx-admin/commit/0856909)), closes [#714](https://github.com/mx-space/mx-admin/issues/714)

## <small>3.27.3 (2023-03-14)</small>

* release: v3.27.3 ([f5c045f](https://github.com/mx-space/mx-admin/commit/f5c045f))
* fix: autocorrect reactive ([c857ba2](https://github.com/mx-space/mx-admin/commit/c857ba2))
* fix: useStorageObject cached ([6c552d1](https://github.com/mx-space/mx-admin/commit/6c552d1))
* fix(deps): update dependency @mx-space/api-client to v1.3.5 (#707) ([b3fceee](https://github.com/mx-space/mx-admin/commit/b3fceee)), closes [#707](https://github.com/mx-space/mx-admin/issues/707)
* chore(deps): update dependency @innei/prettier to v0.9.8 (#706) ([6cfc67b](https://github.com/mx-space/mx-admin/commit/6cfc67b)), closes [#706](https://github.com/mx-space/mx-admin/issues/706)
* chore(deps): update dependency vite-plugin-wasm to v3.2.2 (#704) ([f4b5162](https://github.com/mx-space/mx-admin/commit/f4b5162)), closes [#704](https://github.com/mx-space/mx-admin/issues/704)

## <small>3.27.2 (2023-03-07)</small>

* release: v3.27.2 ([b31f65c](https://github.com/mx-space/mx-admin/commit/b31f65c))
* chore(deps): update dependency @types/validator to v13.7.13 (#701) ([7e74de2](https://github.com/mx-space/mx-admin/commit/7e74de2)), closes [#701](https://github.com/mx-space/mx-admin/issues/701)
* chore(deps): update dependency unplugin-auto-import to v0.15.1 (#699) ([c88e645](https://github.com/mx-space/mx-admin/commit/c88e645)), closes [#699](https://github.com/mx-space/mx-admin/issues/699)
* chore(deps): update dependency vite to v4.1.4 (#694) ([3a440d5](https://github.com/mx-space/mx-admin/commit/3a440d5)), closes [#694](https://github.com/mx-space/mx-admin/issues/694)
* fix(deps): update dependency @vueuse/core to v9.13.0 (#695) ([9a0b6e5](https://github.com/mx-space/mx-admin/commit/9a0b6e5)), closes [#695](https://github.com/mx-space/mx-admin/issues/695)
* fix(deps): update dependency monaco-editor to v0.36.1 (#700) ([f7cde0b](https://github.com/mx-space/mx-admin/commit/f7cde0b)), closes [#700](https://github.com/mx-space/mx-admin/issues/700)
* fix(deps): update dependency pinia to v2.0.33 (#702) ([a1828bd](https://github.com/mx-space/mx-admin/commit/a1828bd)), closes [#702](https://github.com/mx-space/mx-admin/issues/702)
* fix(deps): update dependency qs to v6.11.1 (#703) ([710629c](https://github.com/mx-space/mx-admin/commit/710629c)), closes [#703](https://github.com/mx-space/mx-admin/issues/703)

## <small>3.27.1 (2023-02-21)</small>

* release: v3.27.1 ([8643a08](https://github.com/mx-space/mx-admin/commit/8643a08))
* feat: add `@type/node` for function editor completion ([60799ee](https://github.com/mx-space/mx-admin/commit/60799ee))
* feat: subscribe enable status show on page title ([d6329a3](https://github.com/mx-space/mx-admin/commit/d6329a3))
* chore(deps): update dependency @types/ejs to v3.1.2 (#692) ([5f872b8](https://github.com/mx-space/mx-admin/commit/5f872b8)), closes [#692](https://github.com/mx-space/mx-admin/issues/692)
* chore(deps): update dependency postcss-nested to v6.0.1 (#696) ([9c9b0be](https://github.com/mx-space/mx-admin/commit/9c9b0be)), closes [#696](https://github.com/mx-space/mx-admin/issues/696)
* chore(deps): update dependency unplugin-auto-import to v0.14.4 (#693) ([866807c](https://github.com/mx-space/mx-admin/commit/866807c)), closes [#693](https://github.com/mx-space/mx-admin/issues/693)
* chore(deps): update dependency vite-plugin-checker to v0.5.6 (#671) ([5ae77cd](https://github.com/mx-space/mx-admin/commit/5ae77cd)), closes [#671](https://github.com/mx-space/mx-admin/issues/671)
* fix(deps): update dependency pinia to v2.0.32 (#697) ([052b6ff](https://github.com/mx-space/mx-admin/commit/052b6ff)), closes [#697](https://github.com/mx-space/mx-admin/issues/697)
* fix(deps): update dependency socket.io-client to v4.6.1 (#698) ([f322cdb](https://github.com/mx-space/mx-admin/commit/f322cdb)), closes [#698](https://github.com/mx-space/mx-admin/issues/698)

## 3.27.0 (2023-02-14)

* release: v3.27.0 ([1a746a6](https://github.com/mx-space/mx-admin/commit/1a746a6))
* chore: update deps ([1d481b7](https://github.com/mx-space/mx-admin/commit/1d481b7))
* chore(debug): change thing ([f43fb85](https://github.com/mx-space/mx-admin/commit/f43fb85))
* chore(deps): update dependency @types/event-source-polyfill to v1.0.1 (#674) ([217b6da](https://github.com/mx-space/mx-admin/commit/217b6da)), closes [#674](https://github.com/mx-space/mx-admin/issues/674)
* chore(deps): update dependency prettier to v2.8.4 (#682) ([c3c51e6](https://github.com/mx-space/mx-admin/commit/c3c51e6)), closes [#682](https://github.com/mx-space/mx-admin/issues/682)
* chore(deps): update dependency typescript to v4.9.5 (#678) ([63b3950](https://github.com/mx-space/mx-admin/commit/63b3950)), closes [#678](https://github.com/mx-space/mx-admin/issues/678)
* chore(deps): update dependency unplugin-auto-import to v0.13.0 (#675) ([e4f016b](https://github.com/mx-space/mx-admin/commit/e4f016b)), closes [#675](https://github.com/mx-space/mx-admin/issues/675)
* chore(deps): update dependency vite to v4.1.1 (#683) ([8ff28b4](https://github.com/mx-space/mx-admin/commit/8ff28b4)), closes [#683](https://github.com/mx-space/mx-admin/issues/683)
* chore(deps): update dependency vite-plugin-wasm to v3.2.1 (#684) ([320184d](https://github.com/mx-space/mx-admin/commit/320184d)), closes [#684](https://github.com/mx-space/mx-admin/issues/684)
* chore(deps): update vue monorepo to v3.2.47 (#680) ([91f95eb](https://github.com/mx-space/mx-admin/commit/91f95eb)), closes [#680](https://github.com/mx-space/mx-admin/issues/680)
* fix(deps): update dependency @antv/g2 to v4.2.9 (#681) ([2010e62](https://github.com/mx-space/mx-admin/commit/2010e62)), closes [#681](https://github.com/mx-space/mx-admin/issues/681)
* fix(deps): update dependency @huacnlee/autocorrect to v2.6.2 (#685) ([9f1d751](https://github.com/mx-space/mx-admin/commit/9f1d751)), closes [#685](https://github.com/mx-space/mx-admin/issues/685)
* fix(deps): update dependency @mx-space/api-client to v1.2.0 (#676) ([37ee9c0](https://github.com/mx-space/mx-admin/commit/37ee9c0)), closes [#676](https://github.com/mx-space/mx-admin/issues/676)
* fix(deps): update dependency @vueuse/core to v9.12.0 (#650) ([872ec79](https://github.com/mx-space/mx-admin/commit/872ec79)), closes [#650](https://github.com/mx-space/mx-admin/issues/650)
* fix(deps): update dependency monaco-editor to v0.35.0 (#687) ([2ed2ab6](https://github.com/mx-space/mx-admin/commit/2ed2ab6)), closes [#687](https://github.com/mx-space/mx-admin/issues/687)
* fix(deps): update dependency pinia to v2.0.30 (#679) ([fbc0af2](https://github.com/mx-space/mx-admin/commit/fbc0af2)), closes [#679](https://github.com/mx-space/mx-admin/issues/679)
* fix(deps): update dependency socket.io-client to v4.6.0 (#688) ([9b4b75c](https://github.com/mx-space/mx-admin/commit/9b4b75c)), closes [#688](https://github.com/mx-space/mx-admin/issues/688)
* fix(deps): update dependency validator to v13.9.0 (#689) ([97d5c92](https://github.com/mx-space/mx-admin/commit/97d5c92)), closes [#689](https://github.com/mx-space/mx-admin/issues/689)
* fix(location): built-in fn ([9db5dda](https://github.com/mx-space/mx-admin/commit/9db5dda))
* fix(shiju): popover color ([0850fc3](https://github.com/mx-space/mx-admin/commit/0850fc3))
* feat: subscribe support (#690) ([bd5e327](https://github.com/mx-space/mx-admin/commit/bd5e327)), closes [#690](https://github.com/mx-space/mx-admin/issues/690)
* feat(snippet): support built-in action ([d776fe3](https://github.com/mx-space/mx-admin/commit/d776fe3))

## <small>3.26.7 (2023-01-30)</small>

* release: v3.26.7 ([7b3f969](https://github.com/mx-space/mx-admin/commit/7b3f969))
* fix: sidebar layout margin left on phone ([5455cb2](https://github.com/mx-space/mx-admin/commit/5455cb2))

## <small>3.26.6 (2023-01-29)</small>

* release: v3.26.6 ([87b045a](https://github.com/mx-space/mx-admin/commit/87b045a))
* feat(sidebar): optimized collapse animation ([942c520](https://github.com/mx-space/mx-admin/commit/942c520))
* fix(ci): max_old_size for build ([0f7b742](https://github.com/mx-space/mx-admin/commit/0f7b742))

## <small>3.26.5 (2023-01-24)</small>

* release: v3.26.5 ([20d3630](https://github.com/mx-space/mx-admin/commit/20d3630))
* chore: update deps ([c7d911e](https://github.com/mx-space/mx-admin/commit/c7d911e))
* fix(setup): form submit error (#665) ([78cba92](https://github.com/mx-space/mx-admin/commit/78cba92)), closes [#665](https://github.com/mx-space/mx-admin/issues/665)

## <small>3.26.4 (2023-01-11)</small>

* release: v3.26.4 ([27a2eb8](https://github.com/mx-space/mx-admin/commit/27a2eb8))
* ci: max build memory usage ([e18ac1d](https://github.com/mx-space/mx-admin/commit/e18ac1d))

## <small>3.26.3 (2023-01-11)</small>

* release: v3.26.3 ([652bfb9](https://github.com/mx-space/mx-admin/commit/652bfb9))
* chore: update deps ([145ba45](https://github.com/mx-space/mx-admin/commit/145ba45))
* fix: graph number overflow (#664) ([d766e30](https://github.com/mx-space/mx-admin/commit/d766e30)), closes [#664](https://github.com/mx-space/mx-admin/issues/664)

## <small>3.26.2 (2022-12-30)</small>

* release: v3.26.2 ([8a76536](https://github.com/mx-space/mx-admin/commit/8a76536))
* feat: autocorrect (#657) ([e26e3da](https://github.com/mx-space/mx-admin/commit/e26e3da)), closes [#657](https://github.com/mx-space/mx-admin/issues/657)
* fix: ci build ([a66f1b9](https://github.com/mx-space/mx-admin/commit/a66f1b9))

## <small>3.26.1 (2022-12-25)</small>

* release: v3.26.1 ([f318945](https://github.com/mx-space/mx-admin/commit/f318945))
* chore: fix punctuation ([02e672c](https://github.com/mx-space/mx-admin/commit/02e672c))
* chore: update deps ([96a3a01](https://github.com/mx-space/mx-admin/commit/96a3a01))
* fix: delete more backup ([7c50a2b](https://github.com/mx-space/mx-admin/commit/7c50a2b))

## 3.26.0 (2022-12-23)

* release: v3.26.0 ([0714ca7](https://github.com/mx-space/mx-admin/commit/0714ca7))
* fix: support shorthand comment ([f868372](https://github.com/mx-space/mx-admin/commit/f868372))

## <small>3.25.3 (2022-12-18)</small>

* release: v3.25.3 ([c5e4883](https://github.com/mx-space/mx-admin/commit/c5e4883))
* fix: build render url ([ab65acf](https://github.com/mx-space/mx-admin/commit/ab65acf))

## <small>3.25.2 (2022-12-15)</small>

* release: v3.25.2 ([bf2cf68](https://github.com/mx-space/mx-admin/commit/bf2cf68))
* feat: update xterm.4 ([f6359ab](https://github.com/mx-space/mx-admin/commit/f6359ab))
* chore: update deps ([b7523dc](https://github.com/mx-space/mx-admin/commit/b7523dc))
* chore(deps): update dependency unplugin-auto-import to v0.12.1 (#646) ([f6c52a2](https://github.com/mx-space/mx-admin/commit/f6c52a2)), closes [#646](https://github.com/mx-space/mx-admin/issues/646)

## <small>3.25.1 (2022-12-11)</small>

* release: v3.25.1 ([f5198f5](https://github.com/mx-space/mx-admin/commit/f5198f5))
* chore: update deps ([3a3d71a](https://github.com/mx-space/mx-admin/commit/3a3d71a))
* chore(deps): update dependency unplugin-auto-import to v0.12.0 (#635) ([22fcb00](https://github.com/mx-space/mx-admin/commit/22fcb00)), closes [#635](https://github.com/mx-space/mx-admin/issues/635)
* fix: dialog cannot be closed (#643) ([d1b0551](https://github.com/mx-space/mx-admin/commit/d1b0551)), closes [#643](https://github.com/mx-space/mx-admin/issues/643)
* fix(deps): update dependency marked to v4.2.4 (#640) ([0580f10](https://github.com/mx-space/mx-admin/commit/0580f10)), closes [#640](https://github.com/mx-space/mx-admin/issues/640)
* fix(deps): update dependency pinia to v2.0.28 (#631) ([99c9d5f](https://github.com/mx-space/mx-admin/commit/99c9d5f)), closes [#631](https://github.com/mx-space/mx-admin/issues/631)

## 3.25.0 (2022-11-25)

* release: v3.25.0 ([68a4953](https://github.com/mx-space/mx-admin/commit/68a4953))
* fix: lock spec deps ([a3961f9](https://github.com/mx-space/mx-admin/commit/a3961f9))
* fix(deps): update dependency markdown-escape to v2 (#627) ([7326731](https://github.com/mx-space/mx-admin/commit/7326731)), closes [#627](https://github.com/mx-space/mx-admin/issues/627)
* fix(deps): update dependency marked to v4.2.3 (#630) ([2413930](https://github.com/mx-space/mx-admin/commit/2413930)), closes [#630](https://github.com/mx-space/mx-admin/issues/630)
* fix(deps): update dependency pinia to v2.0.25 (#628) ([dc7b709](https://github.com/mx-space/mx-admin/commit/dc7b709)), closes [#628](https://github.com/mx-space/mx-admin/issues/628)
* chore: update deps ([4a09494](https://github.com/mx-space/mx-admin/commit/4a09494))
* chore(deps): update dependency @types/validator to v13.7.10 (#619) ([c1ee224](https://github.com/mx-space/mx-admin/commit/c1ee224)), closes [#619](https://github.com/mx-space/mx-admin/issues/619)
* chore(deps): update dependency @vitejs/plugin-vue to v3.2.0 (#615) ([307dfd8](https://github.com/mx-space/mx-admin/commit/307dfd8)), closes [#615](https://github.com/mx-space/mx-admin/issues/615)
* chore(deps): update dependency @vueuse/core to v9.5.0 (#617) ([024a564](https://github.com/mx-space/mx-admin/commit/024a564)), closes [#617](https://github.com/mx-space/mx-admin/issues/617)
* chore(deps): update dependency postcss to v8.4.19 (#623) ([96e23a9](https://github.com/mx-space/mx-admin/commit/96e23a9)), closes [#623](https://github.com/mx-space/mx-admin/issues/623)
* chore(deps): update dependency postcss-preset-env to v7.8.3 (#624) ([4aafc6a](https://github.com/mx-space/mx-admin/commit/4aafc6a)), closes [#624](https://github.com/mx-space/mx-admin/issues/624)
* chore(deps): update dependency unplugin-auto-import to v0.11.5 (#629) ([c970118](https://github.com/mx-space/mx-admin/commit/c970118)), closes [#629](https://github.com/mx-space/mx-admin/issues/629)
* feat(snippet): support for secret ([4987863](https://github.com/mx-space/mx-admin/commit/4987863))

## <small>3.24.2 (2022-11-12)</small>

* release: v3.24.2 ([e778ed8](https://github.com/mx-space/mx-admin/commit/e778ed8))
* chore(deps): update dependency @types/validator to v13.7.8 (#604) ([1237882](https://github.com/mx-space/mx-admin/commit/1237882)), closes [#604](https://github.com/mx-space/mx-admin/issues/604)
* chore(deps): update dependency @types/validator to v13.7.9 (#611) ([10239be](https://github.com/mx-space/mx-admin/commit/10239be)), closes [#611](https://github.com/mx-space/mx-admin/issues/611)
* chore(deps): update dependency @vueuse/core to v9.3.1 (#606) ([63ee347](https://github.com/mx-space/mx-admin/commit/63ee347)), closes [#606](https://github.com/mx-space/mx-admin/issues/606)
* chore(deps): update dependency postcss to v8.4.18 (#599) ([257242c](https://github.com/mx-space/mx-admin/commit/257242c)), closes [#599](https://github.com/mx-space/mx-admin/issues/599)
* chore(deps): update dependency postcss-nested to v6 (#596) ([e29ad19](https://github.com/mx-space/mx-admin/commit/e29ad19)), closes [#596](https://github.com/mx-space/mx-admin/issues/596)
* chore(deps): update dependency rollup-plugin-visualizer to v5.8.3 (#603) ([8b0f966](https://github.com/mx-space/mx-admin/commit/8b0f966)), closes [#603](https://github.com/mx-space/mx-admin/issues/603)
* chore(deps): update dependency typescript to v4.8.4 (#587) ([1336257](https://github.com/mx-space/mx-admin/commit/1336257)), closes [#587](https://github.com/mx-space/mx-admin/issues/587)
* chore(deps): update dependency unplugin-auto-import to v0.11.4 (#613) ([44b54aa](https://github.com/mx-space/mx-admin/commit/44b54aa)), closes [#613](https://github.com/mx-space/mx-admin/issues/613)
* chore(deps): update dependency vite to v3.1.8 (#589) ([0574132](https://github.com/mx-space/mx-admin/commit/0574132)), closes [#589](https://github.com/mx-space/mx-admin/issues/589)
* chore(deps): update dependency vite to v3.2.2 (#618) ([1e5bd83](https://github.com/mx-space/mx-admin/commit/1e5bd83)), closes [#618](https://github.com/mx-space/mx-admin/issues/618)
* chore(deps): update dependency vite to v3.2.3 (#621) ([e98093e](https://github.com/mx-space/mx-admin/commit/e98093e)), closes [#621](https://github.com/mx-space/mx-admin/issues/621)
* chore(deps): update dependency vite-tsconfig-paths to v3.5.2 (#610) ([36c6441](https://github.com/mx-space/mx-admin/commit/36c6441)), closes [#610](https://github.com/mx-space/mx-admin/issues/610)
* chore(deps): update pnpm/action-setup action to v2.2.4 (#605) ([24645b2](https://github.com/mx-space/mx-admin/commit/24645b2)), closes [#605](https://github.com/mx-space/mx-admin/issues/605)
* chore(deps): update vue monorepo to v3.2.45 (#622) ([f89ee27](https://github.com/mx-space/mx-admin/commit/f89ee27)), closes [#622](https://github.com/mx-space/mx-admin/issues/622)
* fix: project editor height ([644eb65](https://github.com/mx-space/mx-admin/commit/644eb65))
* fix(deps): update dependency @mx-space/api-client to v1.0.0-beta.3 (#609) ([b77b0a3](https://github.com/mx-space/mx-admin/commit/b77b0a3)), closes [#609](https://github.com/mx-space/mx-admin/issues/609)
* fix(deps): update dependency marked to v4.2.2 (#620) ([ff93b81](https://github.com/mx-space/mx-admin/commit/ff93b81)), closes [#620](https://github.com/mx-space/mx-admin/issues/620)
* fix(deps): update dependency monaco-editor to v0.34.1 (#608) ([296640e](https://github.com/mx-space/mx-admin/commit/296640e)), closes [#608](https://github.com/mx-space/mx-admin/issues/608)
* fix(deps): update dependency octokit to v2.0.10 (#614) ([7dd01d0](https://github.com/mx-space/mx-admin/commit/7dd01d0)), closes [#614](https://github.com/mx-space/mx-admin/issues/614)
* fix(deps): update dependency octokit to v2.0.9 (#600) ([a7c6436](https://github.com/mx-space/mx-admin/commit/a7c6436)), closes [#600](https://github.com/mx-space/mx-admin/issues/600)
* fix(deps): update dependency socket.io-client to v4.5.3 (#602) ([f3f56a6](https://github.com/mx-space/mx-admin/commit/f3f56a6)), closes [#602](https://github.com/mx-space/mx-admin/issues/602)
* fix(deps): update dependency vue-router to v4.1.6 (#612) ([6b1272b](https://github.com/mx-space/mx-admin/commit/6b1272b)), closes [#612](https://github.com/mx-space/mx-admin/issues/612)

## <small>3.24.1 (2022-10-15)</small>

* release: v3.24.1 ([adc6db5](https://github.com/mx-space/mx-admin/commit/adc6db5))
* fix: ts error ([944ab09](https://github.com/mx-space/mx-admin/commit/944ab09))
* chore: change changelog generator ([f0d208d](https://github.com/mx-space/mx-admin/commit/f0d208d))

## 3.24.0 (2022-10-15)

* release: v3.24.0 ([0454fd7](https://github.com/mx-space/mx-admin/commit/0454fd7))
* feat(link): support audit result form ([d94d8ee](https://github.com/mx-space/mx-admin/commit/d94d8ee))
* chore(deps): update dependency @innei/prettier to v0.9.5 (#591) ([27eb338](https://github.com/mx-space/mx-admin/commit/27eb338)), closes [#591](https://github.com/mx-space/mx-admin/issues/591)
* chore(deps): update dependency @vitejs/plugin-vue to v3.1.2 (#594) ([4e7eb48](https://github.com/mx-space/mx-admin/commit/4e7eb48)), closes [#594](https://github.com/mx-space/mx-admin/issues/594)
* chore(deps): update pnpm/action-setup action to v2.2.3 (#598) ([9b15fdd](https://github.com/mx-space/mx-admin/commit/9b15fdd)), closes [#598](https://github.com/mx-space/mx-admin/issues/598)
* chore(deps): update vue monorepo to v3.2.41 (#601) ([9b0c54e](https://github.com/mx-space/mx-admin/commit/9b0c54e)), closes [#601](https://github.com/mx-space/mx-admin/issues/601)
* fix(deps): update dependency naive-ui to v2.33.5 (#595) ([2a861f7](https://github.com/mx-space/mx-admin/commit/2a861f7)), closes [#595](https://github.com/mx-space/mx-admin/issues/595)
* fix(deps): update dependency pinia to v2.0.23 (#597) ([5a89703](https://github.com/mx-space/mx-admin/commit/5a89703)), closes [#597](https://github.com/mx-space/mx-admin/issues/597)

## <small>3.23.7 (2022-10-07)</small>

* release: v3.23.7 ([07e204b](https://github.com/mx-space/mx-admin/commit/07e204b))
* fix: update panel ([3ae957b](https://github.com/mx-space/mx-admin/commit/3ae957b))
* fix(deps): update dependency @antv/g2 to v4.2.8 (#581) ([ee041e4](https://github.com/mx-space/mx-admin/commit/ee041e4)), closes [#581](https://github.com/mx-space/mx-admin/issues/581)
* fix(deps): update dependency marked to v4.1.1 (#593) ([e1e5326](https://github.com/mx-space/mx-admin/commit/e1e5326)), closes [#593](https://github.com/mx-space/mx-admin/issues/593)
* fix(write): add clearable on some field in drawer ([3bce4bc](https://github.com/mx-space/mx-admin/commit/3bce4bc))
* chore: setting ([7076a9f](https://github.com/mx-space/mx-admin/commit/7076a9f))
* chore(deps): update dependency @innei/eslint-config-vue-ts to v0.9.5 (#590) ([d429982](https://github.com/mx-space/mx-admin/commit/d429982)), closes [#590](https://github.com/mx-space/mx-admin/issues/590)
* chore(deps): update dependency @types/validator to v13.7.7 (#584) ([bd40b4c](https://github.com/mx-space/mx-admin/commit/bd40b4c)), closes [#584](https://github.com/mx-space/mx-admin/issues/584)
* chore(deps): update dependency @vueuse/core to v9.3.0 (#586) ([64662ec](https://github.com/mx-space/mx-admin/commit/64662ec)), closes [#586](https://github.com/mx-space/mx-admin/issues/586)
* chore(deps): update dependency postcss to v8.4.17 (#592) ([734384d](https://github.com/mx-space/mx-admin/commit/734384d)), closes [#592](https://github.com/mx-space/mx-admin/issues/592)
* chore(deps): update dependency postcss-preset-env to v7.8.2 (#577) ([52ce982](https://github.com/mx-space/mx-admin/commit/52ce982)), closes [#577](https://github.com/mx-space/mx-admin/issues/577)
* chore(deps): update dependency rollup-plugin-visualizer to v5.8.2 (#585) ([232b9ef](https://github.com/mx-space/mx-admin/commit/232b9ef)), closes [#585](https://github.com/mx-space/mx-admin/issues/585)
* chore(deps): update dependency vite to v3.1.3 (#578) ([fa43fc9](https://github.com/mx-space/mx-admin/commit/fa43fc9)), closes [#578](https://github.com/mx-space/mx-admin/issues/578)
* chore(deps): update dependency vite-tsconfig-paths to v3.5.1 (#583) ([23d32e5](https://github.com/mx-space/mx-admin/commit/23d32e5)), closes [#583](https://github.com/mx-space/mx-admin/issues/583)
* chore(deps): update vue monorepo to v3.2.40 (#588) ([1de8ec8](https://github.com/mx-space/mx-admin/commit/1de8ec8)), closes [#588](https://github.com/mx-space/mx-admin/issues/588)

## <small>3.23.6 (2022-09-14)</small>

* release: v3.23.6 ([b3d4988](https://github.com/mx-space/mx-admin/commit/b3d4988))
* chore: update vue & naive-ui ([4f21ef4](https://github.com/mx-space/mx-admin/commit/4f21ef4))
* chore(deps): update dependency @types/marked to v4.0.7 (#571) ([1c3cc02](https://github.com/mx-space/mx-admin/commit/1c3cc02)), closes [#571](https://github.com/mx-space/mx-admin/issues/571)
* chore(deps): update dependency postcss-preset-env to v7.8.1 (#570) ([b36abe0](https://github.com/mx-space/mx-admin/commit/b36abe0)), closes [#570](https://github.com/mx-space/mx-admin/issues/570)
* chore(deps): update dependency typescript to v4.8.3 (#434) ([af7da49](https://github.com/mx-space/mx-admin/commit/af7da49)), closes [#434](https://github.com/mx-space/mx-admin/issues/434)
* chore(deps): update dependency vite to v3.1.0 (#566) ([1faeb71](https://github.com/mx-space/mx-admin/commit/1faeb71)), closes [#566](https://github.com/mx-space/mx-admin/issues/566)
* fix(deps): update dependency @bytebase/vue-kbar to v0.1.8 (#573) ([4ed28d8](https://github.com/mx-space/mx-admin/commit/4ed28d8)), closes [#573](https://github.com/mx-space/mx-admin/issues/573)
* fix(deps): update dependency vite-plugin-windicss to v1.8.8 (#574) ([65b15cb](https://github.com/mx-space/mx-admin/commit/65b15cb)), closes [#574](https://github.com/mx-space/mx-admin/issues/574)

## <small>3.23.5 (2022-09-06)</small>

* release: v3.23.5 ([e7db1c7](https://github.com/mx-space/mx-admin/commit/e7db1c7))
* chore(deps): update dependency @vitejs/plugin-vue to v3.1.0 (#565) ([7a3ed74](https://github.com/mx-space/mx-admin/commit/7a3ed74)), closes [#565](https://github.com/mx-space/mx-admin/issues/565)
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v2.0.1 (#562) ([144249e](https://github.com/mx-space/mx-admin/commit/144249e)), closes [#562](https://github.com/mx-space/mx-admin/issues/562)
* chore(deps): update dependency @vueuse/core to v9.2.0 (#568) ([e7884a3](https://github.com/mx-space/mx-admin/commit/e7884a3)), closes [#568](https://github.com/mx-space/mx-admin/issues/568)
* chore(deps): update dependency rollup-plugin-visualizer to v5.8.1 (#564) ([ee316f3](https://github.com/mx-space/mx-admin/commit/ee316f3)), closes [#564](https://github.com/mx-space/mx-admin/issues/564)
* chore(deps): update dependency vite-plugin-checker to v0.5.1 (#556) ([dc258ee](https://github.com/mx-space/mx-admin/commit/dc258ee)), closes [#556](https://github.com/mx-space/mx-admin/issues/556)
* chore(deps): update vue monorepo to v3.2.38 (#561) ([c342b7f](https://github.com/mx-space/mx-admin/commit/c342b7f)), closes [#561](https://github.com/mx-space/mx-admin/issues/561)
* fix: kv-editor may disappear (#567) ([a8b0d85](https://github.com/mx-space/mx-admin/commit/a8b0d85)), closes [#567](https://github.com/mx-space/mx-admin/issues/567)
* fix(deps): update dependency marked to v4.1.0 (#549) ([79bd8e4](https://github.com/mx-space/mx-admin/commit/79bd8e4)), closes [#549](https://github.com/mx-space/mx-admin/issues/549)
* fix(deps): update dependency naive-ui to v2.33.2 (#560) ([e4f6b2b](https://github.com/mx-space/mx-admin/commit/e4f6b2b)), closes [#560](https://github.com/mx-space/mx-admin/issues/560)
* fix(deps): update dependency socket.io-client to v4.5.2 (#563) ([8ed3a8b](https://github.com/mx-space/mx-admin/commit/8ed3a8b)), closes [#563](https://github.com/mx-space/mx-admin/issues/563)

## <small>3.23.4 (2022-08-29)</small>

* release: v3.23.4 ([c138039](https://github.com/mx-space/mx-admin/commit/c138039))
* chore(deps): update dependency @vueuse/core to v9.1.1 (#554) ([dfe8b16](https://github.com/mx-space/mx-admin/commit/dfe8b16)), closes [#554](https://github.com/mx-space/mx-admin/issues/554)
* fix(deps): update dependency camelcase-keys to v8.0.2 (#559) ([a2e0478](https://github.com/mx-space/mx-admin/commit/a2e0478)), closes [#559](https://github.com/mx-space/mx-admin/issues/559)
* fix(deps): update dependency naive-ui to v2.33.0 (#558) ([c867e2b](https://github.com/mx-space/mx-admin/commit/c867e2b)), closes [#558](https://github.com/mx-space/mx-admin/issues/558)
* fix(deps): update dependency pinia to v2.0.21 (#551) ([872db33](https://github.com/mx-space/mx-admin/commit/872db33)), closes [#551](https://github.com/mx-space/mx-admin/issues/551)
* fix(deps): update dependency vue-router to v4.1.5 (#553) ([536e95b](https://github.com/mx-space/mx-admin/commit/536e95b)), closes [#553](https://github.com/mx-space/mx-admin/issues/553)
*  fix: auth token expires time ([3626d81](https://github.com/mx-space/mx-admin/commit/3626d81))

## <small>3.23.3 (2022-08-27)</small>

* release: v3.23.3 ([e905687](https://github.com/mx-space/mx-admin/commit/e905687))
* fix: sidebar navigation ([46f79ae](https://github.com/mx-space/mx-admin/commit/46f79ae))

## <small>3.23.2 (2022-08-27)</small>

* release: v3.23.2 ([a211b78](https://github.com/mx-space/mx-admin/commit/a211b78))
* fix: check init error ([80ca971](https://github.com/mx-space/mx-admin/commit/80ca971))
* fix: collapse button style ([0e838d7](https://github.com/mx-space/mx-admin/commit/0e838d7))
* fix: sidebar layout ([434d556](https://github.com/mx-space/mx-admin/commit/434d556))
* feat(post & note): custom created time ([eee5a3d](https://github.com/mx-space/mx-admin/commit/eee5a3d))

## <small>3.23.1 (2022-08-23)</small>

* release: v3.23.1 ([bd7bf52](https://github.com/mx-space/mx-admin/commit/bd7bf52))
* refactor: pick out check init ([fc4290a](https://github.com/mx-space/mx-admin/commit/fc4290a))

## 3.23.0 (2022-08-21)

* release: v3.23.0 ([a71abba](https://github.com/mx-space/mx-admin/commit/a71abba))
* feat: function method support ([1674c8a](https://github.com/mx-space/mx-admin/commit/1674c8a))
* feat: re-design list of snippet ([f5a391a](https://github.com/mx-space/mx-admin/commit/f5a391a))
* fix(deps): update dependency event-source-polyfill to v1.0.31 (#543) ([bdd68ee](https://github.com/mx-space/mx-admin/commit/bdd68ee)), closes [#543](https://github.com/mx-space/mx-admin/issues/543)
* fix(deps): update dependency octokit to v2.0.7 (#540) ([e4e414d](https://github.com/mx-space/mx-admin/commit/e4e414d)), closes [#540](https://github.com/mx-space/mx-admin/issues/540)
* chore(deps): update dependency @vitejs/plugin-vue to v3.0.3 (#546) ([508ee10](https://github.com/mx-space/mx-admin/commit/508ee10)), closes [#546](https://github.com/mx-space/mx-admin/issues/546)

## <small>3.22.6 (2022-08-13)</small>

* release: v3.22.6 ([6334c2d](https://github.com/mx-space/mx-admin/commit/6334c2d))
* perf: improve editor perfermance ([51e38fc](https://github.com/mx-space/mx-admin/commit/51e38fc))
* fix(deps): update dependency monaco-editor-auto-typings to v0.4.3 (#541) ([776d895](https://github.com/mx-space/mx-admin/commit/776d895)), closes [#541](https://github.com/mx-space/mx-admin/issues/541)
* fix(deps): update dependency pinia to v2.0.18 (#542) ([c26440e](https://github.com/mx-space/mx-admin/commit/c26440e)), closes [#542](https://github.com/mx-space/mx-admin/issues/542)
* chore(deps): update dependency @types/validator to v13.7.5 (#536) ([c18d156](https://github.com/mx-space/mx-admin/commit/c18d156)), closes [#536](https://github.com/mx-space/mx-admin/issues/536)
* chore(deps): update dependency @vitejs/plugin-vue to v3.0.2 (#544) ([967124c](https://github.com/mx-space/mx-admin/commit/967124c)), closes [#544](https://github.com/mx-space/mx-admin/issues/544)
* chore(deps): update dependency postcss to v8.4.16 (#538) ([5e49850](https://github.com/mx-space/mx-admin/commit/5e49850)), closes [#538](https://github.com/mx-space/mx-admin/issues/538)

## <small>3.22.5 (2022-08-07)</small>

* release: v3.22.5 ([4b6ecd5](https://github.com/mx-space/mx-admin/commit/4b6ecd5))
* fix: auto focus password input ([69ee750](https://github.com/mx-space/mx-admin/commit/69ee750))
* fix: note count number overflow ([8ad31c5](https://github.com/mx-space/mx-admin/commit/8ad31c5))
* feat: add comment is whispers icon ([074f1d8](https://github.com/mx-space/mx-admin/commit/074f1d8))

## <small>3.22.4 (2022-08-06)</small>

* release: v3.22.4 ([3b08fcf](https://github.com/mx-space/mx-admin/commit/3b08fcf))
* chore: cleanup ([11df0cb](https://github.com/mx-space/mx-admin/commit/11df0cb))
* chore: update deps ([fed5428](https://github.com/mx-space/mx-admin/commit/fed5428))
* chore(deps): update dependency @innei/eslint-config-vue-ts to v0.9.4 (#526) ([85d6d0b](https://github.com/mx-space/mx-admin/commit/85d6d0b)), closes [#526](https://github.com/mx-space/mx-admin/issues/526)
* chore(deps): update dependency unplugin-auto-import to v0.10.1 (#524) ([4373e1f](https://github.com/mx-space/mx-admin/commit/4373e1f)), closes [#524](https://github.com/mx-space/mx-admin/issues/524)
* chore(deps): update dependency vite to v3.0.4 (#522) ([b0b2642](https://github.com/mx-space/mx-admin/commit/b0b2642)), closes [#522](https://github.com/mx-space/mx-admin/issues/522)
* fix: note icon dislocation when resize (#537) ([82185b4](https://github.com/mx-space/mx-admin/commit/82185b4)), closes [#537](https://github.com/mx-space/mx-admin/issues/537)
* fix(deps): update dependency @mx-space/api-client to v0.10.14 (#528) ([883078b](https://github.com/mx-space/mx-admin/commit/883078b)), closes [#528](https://github.com/mx-space/mx-admin/issues/528)
* fix(deps): update dependency event-source-polyfill to v1.0.28 (#534) ([5b0e4a5](https://github.com/mx-space/mx-admin/commit/5b0e4a5)), closes [#534](https://github.com/mx-space/mx-admin/issues/534)
* fix(deps): update dependency naive-ui to v2.32.1 (#533) ([f5bda9a](https://github.com/mx-space/mx-admin/commit/f5bda9a)), closes [#533](https://github.com/mx-space/mx-admin/issues/533)
* fix(deps): update dependency pinia to v2.0.17 (#529) ([f86f891](https://github.com/mx-space/mx-admin/commit/f86f891)), closes [#529](https://github.com/mx-space/mx-admin/issues/529)
* fix(deps): update dependency vue-router to v4.1.3 (#531) ([99e43ae](https://github.com/mx-space/mx-admin/commit/99e43ae)), closes [#531](https://github.com/mx-space/mx-admin/issues/531)
* ci: comment temporary ([0d4ea5a](https://github.com/mx-space/mx-admin/commit/0d4ea5a))
* feat: kick out all session ([f7bdcd6](https://github.com/mx-space/mx-admin/commit/f7bdcd6))

## <small>3.22.3 (2022-07-24)</small>

* release: v3.22.3 ([821e612](https://github.com/mx-space/mx-admin/commit/821e612))
* fix: geo timeout info ([30b8a01](https://github.com/mx-space/mx-admin/commit/30b8a01))
* fix: meta sync ([fc5d7a9](https://github.com/mx-space/mx-admin/commit/fc5d7a9))
* fix: vite dns ([4654d7e](https://github.com/mx-space/mx-admin/commit/4654d7e))
* fix: vue lifecycle unmount ([d08be39](https://github.com/mx-space/mx-admin/commit/d08be39))
* fix(deps): update dependency @mx-space/api-client to v0.10.13 (#523) ([76e0b45](https://github.com/mx-space/mx-admin/commit/76e0b45)), closes [#523](https://github.com/mx-space/mx-admin/issues/523)
* fix(deps): update dependency @vueuse/core to v8.9.2 (#502) ([302ff66](https://github.com/mx-space/mx-admin/commit/302ff66)), closes [#502](https://github.com/mx-space/mx-admin/issues/502)
* fix(deps): update dependency @vueuse/core to v8.9.3 (#516) ([2d05a1a](https://github.com/mx-space/mx-admin/commit/2d05a1a)), closes [#516](https://github.com/mx-space/mx-admin/issues/516)
* fix(deps): update dependency @vueuse/core to v8.9.4 (#520) ([48a499a](https://github.com/mx-space/mx-admin/commit/48a499a)), closes [#520](https://github.com/mx-space/mx-admin/issues/520)
* fix(deps): update dependency date-fns to v2.29.1 (#525) ([4fd1680](https://github.com/mx-space/mx-admin/commit/4fd1680)), closes [#525](https://github.com/mx-space/mx-admin/issues/525)
* fix(deps): update dependency octokit to v2.0.4 (#521) ([6688ea2](https://github.com/mx-space/mx-admin/commit/6688ea2)), closes [#521](https://github.com/mx-space/mx-admin/issues/521)
* fix(deps): update dependency pinia to v2.0.16 (#508) ([f90ecf0](https://github.com/mx-space/mx-admin/commit/f90ecf0)), closes [#508](https://github.com/mx-space/mx-admin/issues/508)
* fix(deps): update dependency vite-plugin-windicss to v1.8.7 (#515) ([cf88d5b](https://github.com/mx-space/mx-admin/commit/cf88d5b)), closes [#515](https://github.com/mx-space/mx-admin/issues/515)
* fix(output): auto scroll to end ([4d83f68](https://github.com/mx-space/mx-admin/commit/4d83f68))
* chore: optimize eslint config ([88fdf84](https://github.com/mx-space/mx-admin/commit/88fdf84))
* chore(deps): update dependency @innei/prettier to v0.9.3 (#519) ([edcae36](https://github.com/mx-space/mx-admin/commit/edcae36)), closes [#519](https://github.com/mx-space/mx-admin/issues/519)
* chore(deps): update dependency @innei/prettier to v0.9.4 (#527) ([172e03b](https://github.com/mx-space/mx-admin/commit/172e03b)), closes [#527](https://github.com/mx-space/mx-admin/issues/527)
* chore(deps): update dependency @vitejs/plugin-vue to v3.0.1 (#511) ([9a2552a](https://github.com/mx-space/mx-admin/commit/9a2552a)), closes [#511](https://github.com/mx-space/mx-admin/issues/511)
* chore(deps): update dependency rollup-plugin-visualizer to v5.7.0 (#517) ([a80040b](https://github.com/mx-space/mx-admin/commit/a80040b)), closes [#517](https://github.com/mx-space/mx-admin/issues/517)
* chore(deps): update dependency rollup-plugin-visualizer to v5.7.1 (#518) ([fe9be7c](https://github.com/mx-space/mx-admin/commit/fe9be7c)), closes [#518](https://github.com/mx-space/mx-admin/issues/518)
* chore(deps): update dependency unplugin-auto-import to v0.9.3 (#514) ([f896981](https://github.com/mx-space/mx-admin/commit/f896981)), closes [#514](https://github.com/mx-space/mx-admin/issues/514)
* chore(deps): update dependency vite to v3.0.1 (#510) ([50de500](https://github.com/mx-space/mx-admin/commit/50de500)), closes [#510](https://github.com/mx-space/mx-admin/issues/510)
* chore(deps): update dependency vite-plugin-checker to v0.4.9 (#509) ([51f4812](https://github.com/mx-space/mx-admin/commit/51f4812)), closes [#509](https://github.com/mx-space/mx-admin/issues/509)
* perf: upgrade vite 3 (#513) ([96e7277](https://github.com/mx-space/mx-admin/commit/96e7277)), closes [#513](https://github.com/mx-space/mx-admin/issues/513)

## <small>3.22.2 (2022-07-12)</small>

* release: v3.22.2 ([e19696f](https://github.com/mx-space/mx-admin/commit/e19696f))
* fix: add height limit for shell output ([ce1f8cf](https://github.com/mx-space/mx-admin/commit/ce1f8cf))
* fix: tag check value ([66f7f17](https://github.com/mx-space/mx-admin/commit/66f7f17))
* fix(deps): update dependency marked to v4.0.18 (#506) ([bc6f1dd](https://github.com/mx-space/mx-admin/commit/bc6f1dd)), closes [#506](https://github.com/mx-space/mx-admin/issues/506)
* fix(deps): update dependency octokit to v2 (#500) ([1e2a004](https://github.com/mx-space/mx-admin/commit/1e2a004)), closes [#500](https://github.com/mx-space/mx-admin/issues/500)
* fix(deps): update dependency pinia to v2.0.15 (#505) ([91b6beb](https://github.com/mx-space/mx-admin/commit/91b6beb)), closes [#505](https://github.com/mx-space/mx-admin/issues/505)
* fix(deps): update dependency vue-router to v4.1.2 (#504) ([63f180c](https://github.com/mx-space/mx-admin/commit/63f180c)), closes [#504](https://github.com/mx-space/mx-admin/issues/504)
* feat: add new shell output modal ([a3473ae](https://github.com/mx-space/mx-admin/commit/a3473ae))
* chore(deps): update typescript-eslint monorepo to v5.30.6 (#507) ([a70c22c](https://github.com/mx-space/mx-admin/commit/a70c22c)), closes [#507](https://github.com/mx-space/mx-admin/issues/507)

## <small>3.22.1 (2022-07-09)</small>

* release: v3.22.1 ([9b2fa5f](https://github.com/mx-space/mx-admin/commit/9b2fa5f))
* fix: update lock file ([1cbecbf](https://github.com/mx-space/mx-admin/commit/1cbecbf))
* feat: comment markdown render ([09c52fb](https://github.com/mx-space/mx-admin/commit/09c52fb))
* chore: remove default logo ([07949e1](https://github.com/mx-space/mx-admin/commit/07949e1))

## 3.22.0 (2022-07-08)

* release: v3.22.0 ([bb44279](https://github.com/mx-space/mx-admin/commit/bb44279))
* feat: add support update ([ecaee7c](https://github.com/mx-space/mx-admin/commit/ecaee7c))
* feat: add update button to notification ([184bd6a](https://github.com/mx-space/mx-admin/commit/184bd6a))
* feat: support parse netease id from url ([e3ecf9f](https://github.com/mx-space/mx-admin/commit/e3ecf9f))

## <small>3.21.1 (2022-07-07)</small>

* release: v3.21.1 ([902a84d](https://github.com/mx-space/mx-admin/commit/902a84d))
* fix: kbar ([91fa751](https://github.com/mx-space/mx-admin/commit/91fa751))
* fix(deps): update dependency @mx-space/api-client to v0.10.12 (#492) ([79060cf](https://github.com/mx-space/mx-admin/commit/79060cf)), closes [#492](https://github.com/mx-space/mx-admin/issues/492)
* fix(deps): update dependency naive-ui to v2.30.8 (#479) ([5040da4](https://github.com/mx-space/mx-admin/commit/5040da4)), closes [#479](https://github.com/mx-space/mx-admin/issues/479)
* ci: fix release ci ([69920fa](https://github.com/mx-space/mx-admin/commit/69920fa))
* feat: load avatar lazy ([72f34d4](https://github.com/mx-space/mx-admin/commit/72f34d4))
* chore: remove ignore deps `@codemirror` ([cbec100](https://github.com/mx-space/mx-admin/commit/cbec100))
* chore(deps): update dependency eslint to v8.19.0 (#474) ([7fcdb74](https://github.com/mx-space/mx-admin/commit/7fcdb74)), closes [#474](https://github.com/mx-space/mx-admin/issues/474)
* chore(deps): update dependency postcss-preset-env to v7.7.2 (#487) ([0b059e0](https://github.com/mx-space/mx-admin/commit/0b059e0)), closes [#487](https://github.com/mx-space/mx-admin/issues/487)
* chore(deps): update dependency unplugin-auto-import to v0.9.2 (#488) ([914c8a7](https://github.com/mx-space/mx-admin/commit/914c8a7)), closes [#488](https://github.com/mx-space/mx-admin/issues/488)

## 3.21.0 (2022-07-04)

* release: v3.21.0 ([084dce2](https://github.com/mx-space/mx-admin/commit/084dce2))
* feat: realtime output when install deps ([7fb223d](https://github.com/mx-space/mx-admin/commit/7fb223d))
* feat: support install and update deps ([ac85e62](https://github.com/mx-space/mx-admin/commit/ac85e62))
* fix: add auth on output ([c0695e2](https://github.com/mx-space/mx-admin/commit/c0695e2))
* fix: do not show update app if in dev ([f1c294d](https://github.com/mx-space/mx-admin/commit/f1c294d))
* fix: ws auth failed ([c590ada](https://github.com/mx-space/mx-admin/commit/c590ada))
* fix：analyze spelling (#493) ([3410944](https://github.com/mx-space/mx-admin/commit/3410944)), closes [#493](https://github.com/mx-space/mx-admin/issues/493)
* ci: fix ([5ab9a18](https://github.com/mx-space/mx-admin/commit/5ab9a18))
* ci: speed up ([9f26bcb](https://github.com/mx-space/mx-admin/commit/9f26bcb))

## <small>3.20.1 (2022-06-26)</small>

* release: v3.20.1 ([d1e823c](https://github.com/mx-space/mx-admin/commit/d1e823c))
* feat: login session ([d4e6e8d](https://github.com/mx-space/mx-admin/commit/d4e6e8d))
* fix!: replace render path ([0c51b90](https://github.com/mx-space/mx-admin/commit/0c51b90))
* fix: pin icon color ([1aa76de](https://github.com/mx-space/mx-admin/commit/1aa76de))

## 3.20.0 (2022-06-26)

* release: v3.20.0 ([a2a6171](https://github.com/mx-space/mx-admin/commit/a2a6171))
* feat: related post (#491) ([90b52cf](https://github.com/mx-space/mx-admin/commit/90b52cf)), closes [#491](https://github.com/mx-space/mx-admin/issues/491)
* fix: login button dislocation when resize close #480 ([ab6fd66](https://github.com/mx-space/mx-admin/commit/ab6fd66)), closes [#480](https://github.com/mx-space/mx-admin/issues/480)
* fix(deps): update dependency camelcase-keys to v8.0.1 (#483) ([e95ff41](https://github.com/mx-space/mx-admin/commit/e95ff41)), closes [#483](https://github.com/mx-space/mx-admin/issues/483)
* fix(deps): update dependency monaco-editor-auto-typings to v0.4.2 (#477) ([a0fdf1f](https://github.com/mx-space/mx-admin/commit/a0fdf1f)), closes [#477](https://github.com/mx-space/mx-admin/issues/477)
* fix(deps): update dependency octokit to v1.8.1 (#484) ([12e9ceb](https://github.com/mx-space/mx-admin/commit/12e9ceb)), closes [#484](https://github.com/mx-space/mx-admin/issues/484)
* chore(deps): update dependency unplugin-auto-import to v0.9.0 (#485) ([fe4e364](https://github.com/mx-space/mx-admin/commit/fe4e364)), closes [#485](https://github.com/mx-space/mx-admin/issues/485)

## <small>3.19.7 (2022-06-21)</small>

* release: v3.19.7 ([8cb1558](https://github.com/mx-space/mx-admin/commit/8cb1558))
* fix: step2 validation (#478) ([e2f3597](https://github.com/mx-space/mx-admin/commit/e2f3597)), closes [#478](https://github.com/mx-space/mx-admin/issues/478)
* fix(deps): update dependency @mx-space/api-client to v0.10.11 (#475) ([7f71239](https://github.com/mx-space/mx-admin/commit/7f71239)), closes [#475](https://github.com/mx-space/mx-admin/issues/475)
* fix(deps): update dependency naive-ui to v2.30.5 (#476) ([6508b6d](https://github.com/mx-space/mx-admin/commit/6508b6d)), closes [#476](https://github.com/mx-space/mx-admin/issues/476)
* chore: copywrite ([b402941](https://github.com/mx-space/mx-admin/commit/b402941))
* chore(deps): update dependency prettier to v2.7.1 (#471) ([7d10158](https://github.com/mx-space/mx-admin/commit/7d10158)), closes [#471](https://github.com/mx-space/mx-admin/issues/471)
* chore(deps): update dependency unplugin-auto-import to v0.8.8 (#465) ([c68aeef](https://github.com/mx-space/mx-admin/commit/c68aeef)), closes [#465](https://github.com/mx-space/mx-admin/issues/465)
* chore(deps): update typescript-eslint monorepo to v5.29.0 (#466) ([0412bcb](https://github.com/mx-space/mx-admin/commit/0412bcb)), closes [#466](https://github.com/mx-space/mx-admin/issues/466)

## <small>3.19.6 (2022-06-19)</small>

* release: v3.19.6 ([a519806](https://github.com/mx-space/mx-admin/commit/a519806))
* chore: ci config ([993f722](https://github.com/mx-space/mx-admin/commit/993f722))
* chore(deps): update dependency eslint-plugin-vue to v9.1.1 (#463) ([783f7db](https://github.com/mx-space/mx-admin/commit/783f7db)), closes [#463](https://github.com/mx-space/mx-admin/issues/463)
* chore(deps): update dependency prettier to v2.7.0 (#467) ([4444a6a](https://github.com/mx-space/mx-admin/commit/4444a6a)), closes [#467](https://github.com/mx-space/mx-admin/issues/467)
* chore(deps): update dependency vite to v2.9.12 (#462) ([51e1016](https://github.com/mx-space/mx-admin/commit/51e1016)), closes [#462](https://github.com/mx-space/mx-admin/issues/462)
* fix: order ([7cd4327](https://github.com/mx-space/mx-admin/commit/7cd4327))
* fix(deps): update dependency @antv/g2 to v4.2.3 (#469) ([0c782b1](https://github.com/mx-space/mx-admin/commit/0c782b1)), closes [#469](https://github.com/mx-space/mx-admin/issues/469)
* fix(deps): update dependency @mx-space/api-client to v0.10.10 (#470) ([69d7bac](https://github.com/mx-space/mx-admin/commit/69d7bac)), closes [#470](https://github.com/mx-space/mx-admin/issues/470)
* fix(deps): update dependency @vueuse/core to v8.7.4 (#472) ([3a06284](https://github.com/mx-space/mx-admin/commit/3a06284)), closes [#472](https://github.com/mx-space/mx-admin/issues/472)
* fix(deps): update dependency marked to v4.0.17 (#464) ([2cfe281](https://github.com/mx-space/mx-admin/commit/2cfe281)), closes [#464](https://github.com/mx-space/mx-admin/issues/464)
* fix(deps): update dependency naive-ui to v2.30.4 (#468) ([eee9401](https://github.com/mx-space/mx-admin/commit/eee9401)), closes [#468](https://github.com/mx-space/mx-admin/issues/468)
* fix(deps): update dependency octokit to v1.8.0 (#458) ([56d05bd](https://github.com/mx-space/mx-admin/commit/56d05bd)), closes [#458](https://github.com/mx-space/mx-admin/issues/458)
* feat: json5 snippate ([035a75c](https://github.com/mx-space/mx-admin/commit/035a75c))
* feat: make select become single choice (#473) ([d05cb20](https://github.com/mx-space/mx-admin/commit/d05cb20)), closes [#473](https://github.com/mx-space/mx-admin/issues/473)
* refactor: kv editor disabled label ([da44545](https://github.com/mx-space/mx-admin/commit/da44545))

## <small>3.19.5 (2022-06-12)</small>

* release: v3.19.5 ([3065643](https://github.com/mx-space/mx-admin/commit/3065643))
* feat: add logout ([9d35ece](https://github.com/mx-space/mx-admin/commit/9d35ece))
* feat: post pin ([b0221aa](https://github.com/mx-space/mx-admin/commit/b0221aa))
* refactor: remove clsx ([d865b16](https://github.com/mx-space/mx-admin/commit/d865b16))
* fix: filter duplicate note ([b16c9e5](https://github.com/mx-space/mx-admin/commit/b16c9e5))

## <small>3.19.4 (2022-06-11)</small>

* release: v3.19.3 ([118b151](https://github.com/mx-space/mx-admin/commit/118b151))
* release: v3.19.4 ([de6564e](https://github.com/mx-space/mx-admin/commit/de6564e))
* fix: remove auth token expired time ([b8e46b2](https://github.com/mx-space/mx-admin/commit/b8e46b2))
* fix: router guard ([a4f84f0](https://github.com/mx-space/mx-admin/commit/a4f84f0))
* fix(dashboard): card badge flash ([00eefbc](https://github.com/mx-space/mx-admin/commit/00eefbc))
* fix(deps): update dependency vue-router to v4.0.16 (#461) ([0258eef](https://github.com/mx-space/mx-admin/commit/0258eef)), closes [#461](https://github.com/mx-space/mx-admin/issues/461)
* refactor: remove vditor ([890def2](https://github.com/mx-space/mx-admin/commit/890def2))
* feat: update codemirror to v6 ([a08b1f6](https://github.com/mx-space/mx-admin/commit/a08b1f6))

## <small>3.19.2 (2022-06-08)</small>

* release: v3.19.2 ([1111424](https://github.com/mx-space/mx-admin/commit/1111424))
* feat: add history for setup-api ([4ba2676](https://github.com/mx-space/mx-admin/commit/4ba2676))
* fix: KVEditor (#457) ([0705413](https://github.com/mx-space/mx-admin/commit/0705413)), closes [#457](https://github.com/mx-space/mx-admin/issues/457)
* fix(deps): update dependency camelcase-keys to v8 (#452) ([e534ce0](https://github.com/mx-space/mx-admin/commit/e534ce0)), closes [#452](https://github.com/mx-space/mx-admin/issues/452)
* fix(deps): update dependency naive-ui to v2.30.2 (#451) ([449e573](https://github.com/mx-space/mx-admin/commit/449e573)), closes [#451](https://github.com/mx-space/mx-admin/issues/451)
* fix(deps): update dependency qs to v6.10.5 (#456) ([7e880ce](https://github.com/mx-space/mx-admin/commit/7e880ce)), closes [#456](https://github.com/mx-space/mx-admin/issues/456)
* chore: cleanup ([2478977](https://github.com/mx-space/mx-admin/commit/2478977))
* chore(deps): update typescript-eslint monorepo to v5.27.1 (#455) ([bf5451f](https://github.com/mx-space/mx-admin/commit/bf5451f)), closes [#455](https://github.com/mx-space/mx-admin/issues/455)
* chore(deps): update vue monorepo to v3.2.37 (#453) ([9e31254](https://github.com/mx-space/mx-admin/commit/9e31254)), closes [#453](https://github.com/mx-space/mx-admin/issues/453)

## <small>3.19.1 (2022-06-04)</small>

* release: v3.19.1 ([1eb0b5f](https://github.com/mx-space/mx-admin/commit/1eb0b5f))
* fix: json config form ([3c77155](https://github.com/mx-space/mx-admin/commit/3c77155))
* fix(deps): update dependency @mx-space/api-client to v0.10.8 (#443) ([9f0504b](https://github.com/mx-space/mx-admin/commit/9f0504b)), closes [#443](https://github.com/mx-space/mx-admin/issues/443)
* fix(deps): update dependency @vueuse/core to v8.6.0 (#445) ([f3a9686](https://github.com/mx-space/mx-admin/commit/f3a9686)), closes [#445](https://github.com/mx-space/mx-admin/issues/445)
* fix(deps): update dependency naive-ui to v2.29.1 (#447) ([6e7b012](https://github.com/mx-space/mx-admin/commit/6e7b012)), closes [#447](https://github.com/mx-space/mx-admin/issues/447)
* chore(deps): update dependency eslint-plugin-vue to v9.1.0 (#446) ([e77c341](https://github.com/mx-space/mx-admin/commit/e77c341)), closes [#446](https://github.com/mx-space/mx-admin/issues/446)
* chore(deps): update dependency postcss-preset-env to v7.7.1 (#444) ([4f92bbe](https://github.com/mx-space/mx-admin/commit/4f92bbe)), closes [#444](https://github.com/mx-space/mx-admin/issues/444)
* chore(deps): update dependency unplugin-auto-import to v0.8.7 (#448) ([1c2892c](https://github.com/mx-space/mx-admin/commit/1c2892c)), closes [#448](https://github.com/mx-space/mx-admin/issues/448)

## 3.19.0 (2022-06-03)

* release: v3.19.0 ([d2a0e4b](https://github.com/mx-space/mx-admin/commit/d2a0e4b))
* chore: cleanup ([b542f3f](https://github.com/mx-space/mx-admin/commit/b542f3f))
* chore(deps): update dependency unplugin-auto-import to v0.8.6 (#441) ([f587a09](https://github.com/mx-space/mx-admin/commit/f587a09)), closes [#441](https://github.com/mx-space/mx-admin/issues/441)
* chore(deps): update dependency vite-tsconfig-paths to v3.5.0 (#436) ([c5cd7b7](https://github.com/mx-space/mx-admin/commit/c5cd7b7)), closes [#436](https://github.com/mx-space/mx-admin/issues/436)
* chore(deps): update pnpm/action-setup action to v2.2.2 (#440) ([0ac2db3](https://github.com/mx-space/mx-admin/commit/0ac2db3)), closes [#440](https://github.com/mx-space/mx-admin/issues/440)
* chore(deps): update typescript-eslint monorepo to v5.27.0 (#442) ([51deba6](https://github.com/mx-space/mx-admin/commit/51deba6)), closes [#442](https://github.com/mx-space/mx-admin/issues/442)
* fix: chrome autofill ([d0f131c](https://github.com/mx-space/mx-admin/commit/d0f131c))
* fix: jsonschema form get value ([1991788](https://github.com/mx-space/mx-admin/commit/1991788))
* fix(deps): update dependency @antv/g2 to v4.2.2 (#437) ([3e6846e](https://github.com/mx-space/mx-admin/commit/3e6846e)), closes [#437](https://github.com/mx-space/mx-admin/issues/437)
* fix(deps): update dependency @mx-space/api-client to v0.10.5 (#435) ([8f07025](https://github.com/mx-space/mx-admin/commit/8f07025)), closes [#435](https://github.com/mx-space/mx-admin/issues/435)
* fix(deps): update dependency vditor to v3.8.15 (#432) ([bcf2039](https://github.com/mx-space/mx-admin/commit/bcf2039)), closes [#432](https://github.com/mx-space/mx-admin/issues/432)
* feat: json schema generate form init ([cc6f6fc](https://github.com/mx-space/mx-admin/commit/cc6f6fc))

## <small>3.18.4 (2022-05-28)</small>

* release: v3.18.4 ([e02c163](https://github.com/mx-space/mx-admin/commit/e02c163))
* feat: idempotence key ([f963f28](https://github.com/mx-space/mx-admin/commit/f963f28))
* docs: add password ([4259dc8](https://github.com/mx-space/mx-admin/commit/4259dc8))
* fix: correct spelling mistakes (#439) ([6a23b05](https://github.com/mx-space/mx-admin/commit/6a23b05)), closes [#439](https://github.com/mx-space/mx-admin/issues/439)

## <small>3.18.3 (2022-05-26)</small>

* release: v3.18.3 ([0bf4f3c](https://github.com/mx-space/mx-admin/commit/0bf4f3c))
* fix: revert deploy ([fb87da1](https://github.com/mx-space/mx-admin/commit/fb87da1))
* docs: add demo ([85977c3](https://github.com/mx-space/mx-admin/commit/85977c3))
* chore: update deps ([9195f56](https://github.com/mx-space/mx-admin/commit/9195f56))

## <small>3.18.2 (2022-05-25)</small>

* release: v3.18.2 ([32f984b](https://github.com/mx-space/mx-admin/commit/32f984b))
* chore: add notice for demo ([2ce2a32](https://github.com/mx-space/mx-admin/commit/2ce2a32))

## <small>3.18.1 (2022-05-25)</small>

* release: v3.18.1 ([abab960](https://github.com/mx-space/mx-admin/commit/abab960))
* chore: ignore codemirror deps ([69e186d](https://github.com/mx-space/mx-admin/commit/69e186d))
* fix: codemirror theme revert version ([30fca90](https://github.com/mx-space/mx-admin/commit/30fca90))
* fix: file upload modal can not close ([f0d4212](https://github.com/mx-space/mx-admin/commit/f0d4212))

## 3.18.0 (2022-05-24)

* release: v3.18.0 ([dca6058](https://github.com/mx-space/mx-admin/commit/dca6058))
* fix: parse meta field ([f1bcb38](https://github.com/mx-space/mx-admin/commit/f1bcb38))
* fix: scroll container scroll end event ([70a68e0](https://github.com/mx-space/mx-admin/commit/70a68e0))
* fix(deps): update dependency @mx-space/api-client to v0.10.4 (#430) ([8d53157](https://github.com/mx-space/mx-admin/commit/8d53157)), closes [#430](https://github.com/mx-space/mx-admin/issues/430)
* chore(deps): update typescript-eslint monorepo to v5.26.0 (#423) ([8249298](https://github.com/mx-space/mx-admin/commit/8249298)), closes [#423](https://github.com/mx-space/mx-admin/issues/423)

## 3.18.0-alpha.1 (2022-05-22)

* release: v3.18.0-alpha.1 ([7223453](https://github.com/mx-space/mx-admin/commit/7223453))
* refactor: extract upload wrapper ([9fb5767](https://github.com/mx-space/mx-admin/commit/9fb5767))
* fix: topic upload ([372ed8d](https://github.com/mx-space/mx-admin/commit/372ed8d))

## 3.18.0-alpha.0 (2022-05-22)

* release: v3.18.0-alpha.0 ([0dc9745](https://github.com/mx-space/mx-admin/commit/0dc9745))
* feat: file manage init ([7cb8f16](https://github.com/mx-space/mx-admin/commit/7cb8f16))
* chore: rename fn path ([d064b83](https://github.com/mx-space/mx-admin/commit/d064b83))
* fix: comment table selection column too narrow ([95da7de](https://github.com/mx-space/mx-admin/commit/95da7de))
* fix: thing and hotkey to toggle sidebar ([d9c0578](https://github.com/mx-space/mx-admin/commit/d9c0578))
* fix: topic icon ([07a6a7c](https://github.com/mx-space/mx-admin/commit/07a6a7c))
* fix: update lock file ([0f717aa](https://github.com/mx-space/mx-admin/commit/0f717aa))

## <small>3.17.1 (2022-05-21)</small>

* release: v3.17.1 ([393fea3](https://github.com/mx-space/mx-admin/commit/393fea3))
* fix: fix list style and improve css compatibility ([c12ba3d](https://github.com/mx-space/mx-admin/commit/c12ba3d))
* feat: header bar mask ([61955f1](https://github.com/mx-space/mx-admin/commit/61955f1))

## 3.17.0 (2022-05-21)

* release: v3.17.0 ([405f95d](https://github.com/mx-space/mx-admin/commit/405f95d))
* chore: update deps ([d5e1417](https://github.com/mx-space/mx-admin/commit/d5e1417))

## 3.17.0-alpha.1 (2022-05-21)

* release: v3.17.0-alpha.1 ([3d6c3e0](https://github.com/mx-space/mx-admin/commit/3d6c3e0))
* fix: filter of note select ([3bb8b05](https://github.com/mx-space/mx-admin/commit/3bb8b05))

## 3.17.0-alpha.0 (2022-05-20)

* release: v3.17.0-alpha.0 ([7225496](https://github.com/mx-space/mx-admin/commit/7225496))
* feat: add note to topic ([b69fa29](https://github.com/mx-space/mx-admin/commit/b69fa29))
* feat: note topic drawer ([4c83163](https://github.com/mx-space/mx-admin/commit/4c83163))
* feat: topic api ([526b6d6](https://github.com/mx-space/mx-admin/commit/526b6d6))
* feat: topic detail modal ([d26cbf0](https://github.com/mx-space/mx-admin/commit/d26cbf0))
* feat: topic init ([e782e16](https://github.com/mx-space/mx-admin/commit/e782e16))
* feat: topic list ([073c80e](https://github.com/mx-space/mx-admin/commit/073c80e))
* feat: topic note preivew ([d5d4b73](https://github.com/mx-space/mx-admin/commit/d5d4b73))
* fix: analyze skeleton ([e188019](https://github.com/mx-space/mx-admin/commit/e188019))
* fix: setting bug ([7d83b35](https://github.com/mx-space/mx-admin/commit/7d83b35))
* fix: topic modal ([afc21e3](https://github.com/mx-space/mx-admin/commit/afc21e3))
* chore: code style ([92d12a5](https://github.com/mx-space/mx-admin/commit/92d12a5))
* chore: lint ([56c0951](https://github.com/mx-space/mx-admin/commit/56c0951))
* refactor: move to pinia ([a83e513](https://github.com/mx-space/mx-admin/commit/a83e513))

## <small>3.16.23 (2022-05-18)</small>

* release: v3.16.23 ([28d2305](https://github.com/mx-space/mx-admin/commit/28d2305))
* fix(deps): update dependency @vueuse/core to v8.5.0 (#421) ([7e32580](https://github.com/mx-space/mx-admin/commit/7e32580)), closes [#421](https://github.com/mx-space/mx-admin/issues/421)
* fix(deps): update dependency ejs to v3.1.8 (#419) ([05fc387](https://github.com/mx-space/mx-admin/commit/05fc387)), closes [#419](https://github.com/mx-space/mx-admin/issues/419)
* fix(deps): update dependency naive-ui to v2.28.4 (#414) ([86bcd85](https://github.com/mx-space/mx-admin/commit/86bcd85)), closes [#414](https://github.com/mx-space/mx-admin/issues/414)
* fix(deps): update dependency vditor to v3.8.14 (#415) ([54babca](https://github.com/mx-space/mx-admin/commit/54babca)), closes [#415](https://github.com/mx-space/mx-admin/issues/415)
* chore(deps): update dependency vite to v2.9.9 (#417) ([d27b1cf](https://github.com/mx-space/mx-admin/commit/d27b1cf)), closes [#417](https://github.com/mx-space/mx-admin/issues/417)
* chore(deps): update dependency vue-eslint-parser to v9 (#420) ([42dc57c](https://github.com/mx-space/mx-admin/commit/42dc57c)), closes [#420](https://github.com/mx-space/mx-admin/issues/420)
* chore(deps): update dependency windicss to v3.5.3 (#413) ([5a586fa](https://github.com/mx-space/mx-admin/commit/5a586fa)), closes [#413](https://github.com/mx-space/mx-admin/issues/413)
* chore(deps): update typescript-eslint monorepo to v5.24.0 (#404) ([d8281dc](https://github.com/mx-space/mx-admin/commit/d8281dc)), closes [#404](https://github.com/mx-space/mx-admin/issues/404)

## <small>3.16.22 (2022-05-10)</small>

* release: v3.16.22 ([8f86295](https://github.com/mx-space/mx-admin/commit/8f86295))
* fix: comment action flash when switch tab ([6ca83b8](https://github.com/mx-space/mx-admin/commit/6ca83b8))
* fix: disable pnpm 7 strict peer deps ([3cd2241](https://github.com/mx-space/mx-admin/commit/3cd2241))
* fix(comment): clear selection when switch tab ([6495751](https://github.com/mx-space/mx-admin/commit/6495751))
* chore: deps ([9d75188](https://github.com/mx-space/mx-admin/commit/9d75188))
* chore: update deps ([71972db](https://github.com/mx-space/mx-admin/commit/71972db))
* chore(deps): update dependency eslint to v8.15.0 (#412) ([fdf14c0](https://github.com/mx-space/mx-admin/commit/fdf14c0)), closes [#412](https://github.com/mx-space/mx-admin/issues/412)

## <small>3.16.21 (2022-05-04)</small>

* release: v3.16.21 ([4b0d379](https://github.com/mx-space/mx-admin/commit/4b0d379))
* fix: ci node version ([63671e9](https://github.com/mx-space/mx-admin/commit/63671e9))

## <small>3.16.20 (2022-05-04)</small>

* release: v3.16.20 ([bfe81c4](https://github.com/mx-space/mx-admin/commit/bfe81c4))
* chore: update deps ([a3c2574](https://github.com/mx-space/mx-admin/commit/a3c2574))
* chore: update deps ([78b4086](https://github.com/mx-space/mx-admin/commit/78b4086))
* chore(deps): update dependency eslint-plugin-vue to v8.7.1 (#396) ([a7e55d4](https://github.com/mx-space/mx-admin/commit/a7e55d4)), closes [#396](https://github.com/mx-space/mx-admin/issues/396)
* chore(deps): update vue monorepo to v3.2.33 (#385) ([6fc5d1d](https://github.com/mx-space/mx-admin/commit/6fc5d1d)), closes [#385](https://github.com/mx-space/mx-admin/issues/385)
* fix: text drawer label width & key value input ([7151cbb](https://github.com/mx-space/mx-admin/commit/7151cbb))
* fix(deps): update dependency @antv/g2 to v4.2.0 (#395) ([9aee4b8](https://github.com/mx-space/mx-admin/commit/9aee4b8)), closes [#395](https://github.com/mx-space/mx-admin/issues/395)
* fix(deps): update dependency @mx-space/api-client to v0.9.4 (#398) ([cef3cc4](https://github.com/mx-space/mx-admin/commit/cef3cc4)), closes [#398](https://github.com/mx-space/mx-admin/issues/398)
* fix(deps): update dependency @vueuse/core to v8.3.1 (#393) ([b98ca59](https://github.com/mx-space/mx-admin/commit/b98ca59)), closes [#393](https://github.com/mx-space/mx-admin/issues/393)
* fix(deps): update dependency naive-ui to v2.28.2 (#394) ([2c2be9e](https://github.com/mx-space/mx-admin/commit/2c2be9e)), closes [#394](https://github.com/mx-space/mx-admin/issues/394)

## <small>3.16.19 (2022-04-30)</small>

* release: v3.16.19 ([ad97731](https://github.com/mx-space/mx-admin/commit/ad97731))
* feat: add text macro option ([43d4e43](https://github.com/mx-space/mx-admin/commit/43d4e43))

## <small>3.16.19-alpha.3 (2022-04-23)</small>

* release: v3.16.19-alpha.3 ([32ea927](https://github.com/mx-space/mx-admin/commit/32ea927))
* feat: meta editor ([ca85d5d](https://github.com/mx-space/mx-admin/commit/ca85d5d))

## <small>3.16.19-alpha.2 (2022-04-22)</small>

* release: v3.16.19-alpha.2 ([5e9e804](https://github.com/mx-space/mx-admin/commit/5e9e804))
* fix: remove banner if not in debug mode ([e7952bf](https://github.com/mx-space/mx-admin/commit/e7952bf))
* fix(deps): update dependency @vueuse/core to v8.3.0 (#386) ([3a528bc](https://github.com/mx-space/mx-admin/commit/3a528bc)), closes [#386](https://github.com/mx-space/mx-admin/issues/386)
* fix(deps): update dependency ejs to v3.1.7 (#391) ([4533ba0](https://github.com/mx-space/mx-admin/commit/4533ba0)), closes [#391](https://github.com/mx-space/mx-admin/issues/391)
* fix(deps): update dependency naive-ui to v2.28.1 (#390) ([eb6fd3a](https://github.com/mx-space/mx-admin/commit/eb6fd3a)), closes [#390](https://github.com/mx-space/mx-admin/issues/390)
* chore: update readme ([1f212f2](https://github.com/mx-space/mx-admin/commit/1f212f2))
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.3.10 (#382) ([275d8af](https://github.com/mx-space/mx-admin/commit/275d8af)), closes [#382](https://github.com/mx-space/mx-admin/issues/382)
* chore(deps): update dependency vite-plugin-checker to v0.4.6 (#384) ([a44fd40](https://github.com/mx-space/mx-admin/commit/a44fd40)), closes [#384](https://github.com/mx-space/mx-admin/issues/384)
* chore(deps): update typescript-eslint monorepo to v5.20.0 (#387) ([ad985b3](https://github.com/mx-space/mx-admin/commit/ad985b3)), closes [#387](https://github.com/mx-space/mx-admin/issues/387)

## <small>3.16.19-alpha.1 (2022-04-19)</small>

* release: v3.16.19-alpha.1 ([2bfd250](https://github.com/mx-space/mx-admin/commit/2bfd250))
* fix: remove hash ([0ec7003](https://github.com/mx-space/mx-admin/commit/0ec7003))

## <small>3.16.19-alpha.0 (2022-04-19)</small>

* release: v3.16.19-alpha.0 ([0d308bb](https://github.com/mx-space/mx-admin/commit/0d308bb))
* fix: guard loop ([6b8be0f](https://github.com/mx-space/mx-admin/commit/6b8be0f))

## <small>3.16.18 (2022-04-19)</small>

* release: v3.16.18 ([ad87d3d](https://github.com/mx-space/mx-admin/commit/ad87d3d))
* chore: remove env ([49b6c21](https://github.com/mx-space/mx-admin/commit/49b6c21))

## <small>3.16.17 (2022-04-19)</small>

* release: v3.16.17 ([767470c](https://github.com/mx-space/mx-admin/commit/767470c))
* feat: setup api ([fd4938c](https://github.com/mx-space/mx-admin/commit/fd4938c))

## <small>3.16.16 (2022-04-19)</small>

* release: v3.16.15 ([e77cedf](https://github.com/mx-space/mx-admin/commit/e77cedf))
* release: v3.16.16 ([3180864](https://github.com/mx-space/mx-admin/commit/3180864))
* fix: category form (#389) ([5da4e82](https://github.com/mx-space/mx-admin/commit/5da4e82)), closes [#389](https://github.com/mx-space/mx-admin/issues/389)
* fix(deps): update dependency @antv/g2 to v4.1.50 (#381) ([6cf3deb](https://github.com/mx-space/mx-admin/commit/6cf3deb)), closes [#381](https://github.com/mx-space/mx-admin/issues/381)
* fix(deps): update dependency @mx-space/api-client to v0.9.1 (#366) ([5981e1e](https://github.com/mx-space/mx-admin/commit/5981e1e)), closes [#366](https://github.com/mx-space/mx-admin/issues/366)
* fix(deps): update dependency @mx-space/api-client to v0.9.2 (#376) ([fd26eda](https://github.com/mx-space/mx-admin/commit/fd26eda)), closes [#376](https://github.com/mx-space/mx-admin/issues/376)
* fix(deps): update dependency @vueuse/core to v8.2.5 (#365) ([9a8c854](https://github.com/mx-space/mx-admin/commit/9a8c854)), closes [#365](https://github.com/mx-space/mx-admin/issues/365)
* fix(deps): update dependency marked to v4.0.13 (#367) ([b7a27b6](https://github.com/mx-space/mx-admin/commit/b7a27b6)), closes [#367](https://github.com/mx-space/mx-admin/issues/367)
* fix(deps): update dependency marked to v4.0.14 (#374) ([ffd16ff](https://github.com/mx-space/mx-admin/commit/ffd16ff)), closes [#374](https://github.com/mx-space/mx-admin/issues/374)
* fix(deps): update dependency monaco-editor-auto-typings to v0.3.2 (#370) ([cf626cd](https://github.com/mx-space/mx-admin/commit/cf626cd)), closes [#370](https://github.com/mx-space/mx-admin/issues/370)
* fix(deps): update dependency naive-ui to v2.28.0 (#373) ([a7f8727](https://github.com/mx-space/mx-admin/commit/a7f8727)), closes [#373](https://github.com/mx-space/mx-admin/issues/373)
* fix(deps): update dependency vite-plugin-windicss to v1.8.4 (#379) ([96384c8](https://github.com/mx-space/mx-admin/commit/96384c8)), closes [#379](https://github.com/mx-space/mx-admin/issues/379)
* chore(deps): update dependency @innei-util/prettier to v0.8.2 (#378) ([36322d0](https://github.com/mx-space/mx-admin/commit/36322d0)), closes [#378](https://github.com/mx-space/mx-admin/issues/378)
* chore(deps): update dependency eslint to v8.13.0 ([fd62dcc](https://github.com/mx-space/mx-admin/commit/fd62dcc))
* chore(deps): update dependency eslint-plugin-vue to v8.6.0 (#364) ([8a887e6](https://github.com/mx-space/mx-admin/commit/8a887e6)), closes [#364](https://github.com/mx-space/mx-admin/issues/364)
* chore(deps): update dependency unplugin-auto-import to v0.7.0 (#372) ([22f357d](https://github.com/mx-space/mx-admin/commit/22f357d)), closes [#372](https://github.com/mx-space/mx-admin/issues/372)
* chore(deps): update dependency unplugin-auto-import to v0.7.1 (#380) ([b5f1160](https://github.com/mx-space/mx-admin/commit/b5f1160)), closes [#380](https://github.com/mx-space/mx-admin/issues/380)
* chore(deps): update dependency vite to v2.9.5 (#383) ([fab1320](https://github.com/mx-space/mx-admin/commit/fab1320)), closes [#383](https://github.com/mx-space/mx-admin/issues/383)
* chore(deps): update typescript-eslint monorepo to v5.19.0 (#375) ([5fadefb](https://github.com/mx-space/mx-admin/commit/5fadefb)), closes [#375](https://github.com/mx-space/mx-admin/issues/375)
* chore(deps): update vue monorepo to v3.2.32 (#377) ([9df0825](https://github.com/mx-space/mx-admin/commit/9df0825)), closes [#377](https://github.com/mx-space/mx-admin/issues/377)

## <small>3.16.14 (2022-04-10)</small>

* release: v3.16.14 ([04dd2bb](https://github.com/mx-space/mx-admin/commit/04dd2bb))
* fix: auto save hook ([841e03a](https://github.com/mx-space/mx-admin/commit/841e03a))
* fix: login env bg ([0a1ad59](https://github.com/mx-space/mx-admin/commit/0a1ad59))
* fix: markdown image record parse ([9bc28ea](https://github.com/mx-space/mx-admin/commit/9bc28ea))
* fix: monaco resolution ([eb9787a](https://github.com/mx-space/mx-admin/commit/eb9787a))
* fix: remove token (#369) ([e3cff9f](https://github.com/mx-space/mx-admin/commit/e3cff9f)), closes [#369](https://github.com/mx-space/mx-admin/issues/369)

## <small>3.16.13 (2022-04-05)</small>

* release: v3.16.13 ([f62233c](https://github.com/mx-space/mx-admin/commit/f62233c))
* fix: github api error message ([9fc354f](https://github.com/mx-space/mx-admin/commit/9fc354f))
* fix: update notice ([afa5d9c](https://github.com/mx-space/mx-admin/commit/afa5d9c))
* fix(deps): update dependency @vueuse/core to v8.2.4 (#358) ([7350edd](https://github.com/mx-space/mx-admin/commit/7350edd)), closes [#358](https://github.com/mx-space/mx-admin/issues/358)
* chore(deps): update dependency prettier to v2.6.2 (#361) ([ebfa5d4](https://github.com/mx-space/mx-admin/commit/ebfa5d4)), closes [#361](https://github.com/mx-space/mx-admin/issues/361)
* chore(deps): update dependency vite-plugin-checker to v0.4.5 (#363) ([3d15d59](https://github.com/mx-space/mx-admin/commit/3d15d59)), closes [#363](https://github.com/mx-space/mx-admin/issues/363)
* chore(deps): update typescript-eslint monorepo to v5.18.0 (#353) ([a22d5a5](https://github.com/mx-space/mx-admin/commit/a22d5a5)), closes [#353](https://github.com/mx-space/mx-admin/issues/353)

## <small>3.16.12 (2022-04-05)</small>

* release: v3.16.12 ([51eeec8](https://github.com/mx-space/mx-admin/commit/51eeec8))
* feat: check update ([7c9b8ad](https://github.com/mx-space/mx-admin/commit/7c9b8ad))
* feat: import snippets ([596f30e](https://github.com/mx-space/mx-admin/commit/596f30e))
* fix: monaco dispose ([81c822f](https://github.com/mx-space/mx-admin/commit/81c822f))
* fix: submit method ([56000e5](https://github.com/mx-space/mx-admin/commit/56000e5))
* chore: import order ([4fd68b2](https://github.com/mx-space/mx-admin/commit/4fd68b2))

## <small>3.16.11 (2022-04-01)</small>

* release: v3.16.11 ([0cc53ed](https://github.com/mx-space/mx-admin/commit/0cc53ed))
* chore: update deps ([03df39a](https://github.com/mx-space/mx-admin/commit/03df39a))
* chore(deps): update actions/cache action to v3 (#340) ([0004731](https://github.com/mx-space/mx-admin/commit/0004731)), closes [#340](https://github.com/mx-space/mx-admin/issues/340)
* chore(deps): update dependency @innei-util/prettier to v0.5.0 (#344) ([afc79b3](https://github.com/mx-space/mx-admin/commit/afc79b3)), closes [#344](https://github.com/mx-space/mx-admin/issues/344)
* chore(deps): update dependency @types/marked to v4.0.3 (#341) ([e537eb5](https://github.com/mx-space/mx-admin/commit/e537eb5)), closes [#341](https://github.com/mx-space/mx-admin/issues/341)
* chore(deps): update dependency @types/validator to v13.7.2 (#350) ([bf5c113](https://github.com/mx-space/mx-admin/commit/bf5c113)), closes [#350](https://github.com/mx-space/mx-admin/issues/350)
* chore(deps): update dependency @vitejs/plugin-vue to v2.3.1 (#356) ([744d010](https://github.com/mx-space/mx-admin/commit/744d010)), closes [#356](https://github.com/mx-space/mx-admin/issues/356)
* chore(deps): update dependency eslint to v8.12.0 (#351) ([2955dc3](https://github.com/mx-space/mx-admin/commit/2955dc3)), closes [#351](https://github.com/mx-space/mx-admin/issues/351)
* chore(deps): update dependency prettier to v2.6.1 (#347) ([710cc43](https://github.com/mx-space/mx-admin/commit/710cc43)), closes [#347](https://github.com/mx-space/mx-admin/issues/347)
* chore(deps): update dependency unplugin-auto-import to v0.6.8 (#354) ([799614a](https://github.com/mx-space/mx-admin/commit/799614a)), closes [#354](https://github.com/mx-space/mx-admin/issues/354)
* chore(deps): update dependency vite-plugin-checker to v0.4.4 (#345) ([7133768](https://github.com/mx-space/mx-admin/commit/7133768)), closes [#345](https://github.com/mx-space/mx-admin/issues/345)
* chore(deps): update typescript-eslint monorepo to v5.16.0 (#342) ([238d581](https://github.com/mx-space/mx-admin/commit/238d581)), closes [#342](https://github.com/mx-space/mx-admin/issues/342)
* fix(deps): update dependency @antv/g2 to v4.1.48 (#343) ([4ecb6e6](https://github.com/mx-space/mx-admin/commit/4ecb6e6)), closes [#343](https://github.com/mx-space/mx-admin/issues/343)
* fix(deps): update dependency @antv/g2 to v4.1.49 (#348) ([32f3ea7](https://github.com/mx-space/mx-admin/commit/32f3ea7)), closes [#348](https://github.com/mx-space/mx-admin/issues/348)
* fix(deps): update dependency @mx-space/api-client to v0.8.2 (#338) ([2997d5c](https://github.com/mx-space/mx-admin/commit/2997d5c)), closes [#338](https://github.com/mx-space/mx-admin/issues/338)
* fix(deps): update dependency @vueuse/core to v8.2.0 (#349) ([c8d12da](https://github.com/mx-space/mx-admin/commit/c8d12da)), closes [#349](https://github.com/mx-space/mx-admin/issues/349)
* fix(deps): update dependency naive-ui to v2.27.0 (#352) ([95a9958](https://github.com/mx-space/mx-admin/commit/95a9958)), closes [#352](https://github.com/mx-space/mx-admin/issues/352)

## <small>3.16.10 (2022-03-23)</small>

* release: v3.16.10 ([4b3c2eb](https://github.com/mx-space/mx-admin/commit/4b3c2eb))
* fix: resolve path polyfill ([04dc940](https://github.com/mx-space/mx-admin/commit/04dc940))

## <small>3.16.9 (2022-03-23)</small>

* release: v3.16.9 ([9f6af15](https://github.com/mx-space/mx-admin/commit/9f6af15))
* feat: add email field for friend ([04c0029](https://github.com/mx-space/mx-admin/commit/04c0029))
* feat: auto typings for monaco ([b0737a8](https://github.com/mx-space/mx-admin/commit/b0737a8))
* chore: update deps ([710dab5](https://github.com/mx-space/mx-admin/commit/710dab5))
* chore(deps): update dependency prettier to v2.6.0 (#334) ([9649c2c](https://github.com/mx-space/mx-admin/commit/9649c2c)), closes [#334](https://github.com/mx-space/mx-admin/issues/334)
* chore(deps): update typescript-eslint monorepo to v5.15.0 (#330) ([48c68dc](https://github.com/mx-space/mx-admin/commit/48c68dc)), closes [#330](https://github.com/mx-space/mx-admin/issues/330)
* fix(deps): update dependency @bytebase/vue-kbar to v0.1.7 (#336) ([da01f1d](https://github.com/mx-space/mx-admin/commit/da01f1d)), closes [#336](https://github.com/mx-space/mx-admin/issues/336)
* fix(deps): update dependency @vueuse/core to v8.1.2 (#337) ([7548252](https://github.com/mx-space/mx-admin/commit/7548252)), closes [#337](https://github.com/mx-space/mx-admin/issues/337)

## <small>3.16.8 (2022-03-19)</small>

* release: v3.16.8 ([cde7be9](https://github.com/mx-space/mx-admin/commit/cde7be9))
* feat: add friend options ([b1ff921](https://github.com/mx-space/mx-admin/commit/b1ff921))

## <small>3.16.7 (2022-03-19)</small>

* release: v3.16.7 ([2472377](https://github.com/mx-space/mx-admin/commit/2472377))

## <small>3.16.6 (2022-03-19)</small>

* release: v3.16.6 ([b58c221](https://github.com/mx-space/mx-admin/commit/b58c221))
* feaf: add clean cache entry ([adce5ed](https://github.com/mx-space/mx-admin/commit/adce5ed))
* chore(deps): update dependency @innei-util/prettier to v0.4.1 (#331) ([67ef3d4](https://github.com/mx-space/mx-admin/commit/67ef3d4)), closes [#331](https://github.com/mx-space/mx-admin/issues/331)
* chore(deps): update dependency postcss to v8.4.12 (#333) ([671e8e7](https://github.com/mx-space/mx-admin/commit/671e8e7)), closes [#333](https://github.com/mx-space/mx-admin/issues/333)
* chore(deps): update dependency vite-plugin-checker to v0.4.3 (#328) ([2fcea03](https://github.com/mx-space/mx-admin/commit/2fcea03)), closes [#328](https://github.com/mx-space/mx-admin/issues/328)
* fix(deps): update dependency @vueuse/core to v8.0.1 (#329) ([57f39bb](https://github.com/mx-space/mx-admin/commit/57f39bb)), closes [#329](https://github.com/mx-space/mx-admin/issues/329)
* fix(deps): update dependency @vueuse/core to v8.1.1 (#335) ([062aac5](https://github.com/mx-space/mx-admin/commit/062aac5)), closes [#335](https://github.com/mx-space/mx-admin/issues/335)

## <small>3.16.5 (2022-03-14)</small>

* release: v3.16.5 ([74c59f5](https://github.com/mx-space/mx-admin/commit/74c59f5))
* feat: support serverless typescrpt format ([abb9e32](https://github.com/mx-space/mx-admin/commit/abb9e32))

## <small>3.16.4 (2022-03-13)</small>

* release: v3.16.4 ([333f8ea](https://github.com/mx-space/mx-admin/commit/333f8ea))
* chore(deps): update dependency eslint to v8.11.0 (#327) ([8750002](https://github.com/mx-space/mx-admin/commit/8750002)), closes [#327](https://github.com/mx-space/mx-admin/issues/327)
* chore(deps): update dependency unplugin-auto-import to v0.6.4 (#323) ([fa765d4](https://github.com/mx-space/mx-admin/commit/fa765d4)), closes [#323](https://github.com/mx-space/mx-admin/issues/323)
* fix: hide kbar search for debug route ([87c9859](https://github.com/mx-space/mx-admin/commit/87c9859))
* fix: stat polling ([298fa44](https://github.com/mx-space/mx-admin/commit/298fa44))
* fix(deps): update dependency @mx-space/api-client to v0.7.4 (#325) ([9ed88a4](https://github.com/mx-space/mx-admin/commit/9ed88a4)), closes [#325](https://github.com/mx-space/mx-admin/issues/325)
* fix(deps): update dependency monaco-editor to v0.33.0 (#326) ([1ce4c47](https://github.com/mx-space/mx-admin/commit/1ce4c47)), closes [#326](https://github.com/mx-space/mx-admin/issues/326)
* fix(snippet): clear list after delete rows ([37d8d90](https://github.com/mx-space/mx-admin/commit/37d8d90))
* feat: delete more snippet once ([375cdb6](https://github.com/mx-space/mx-admin/commit/375cdb6))
* refactor: extract delete confirm button ([b1abcc3](https://github.com/mx-space/mx-admin/commit/b1abcc3))

## <small>3.16.3 (2022-03-12)</small>

* release: v3.16.3 ([ddd4d17](https://github.com/mx-space/mx-admin/commit/ddd4d17))
* feat: add monaco theme ([48455b3](https://github.com/mx-space/mx-admin/commit/48455b3))
* feat: add unSave confirm on editor ([82616c7](https://github.com/mx-space/mx-admin/commit/82616c7))
* feat: json schema validate ([7c0b1b8](https://github.com/mx-space/mx-admin/commit/7c0b1b8))
* feat(snippet): add filter of reference name ([802deae](https://github.com/mx-space/mx-admin/commit/802deae))

## <small>3.16.2 (2022-03-11)</small>

* release: v3.16.2 ([286b0f4](https://github.com/mx-space/mx-admin/commit/286b0f4))
* feat: fetch type declare from server ([3b29ed8](https://github.com/mx-space/mx-admin/commit/3b29ed8))
* fix(deps): update dependency @vueuse/core to v8 (#324) ([8ac819f](https://github.com/mx-space/mx-admin/commit/8ac819f)), closes [#324](https://github.com/mx-space/mx-admin/issues/324)
* fix(deps): update dependency naive-ui to v2.26.4 (#321) ([97589cd](https://github.com/mx-space/mx-admin/commit/97589cd)), closes [#321](https://github.com/mx-space/mx-admin/issues/321)
* fix(deps): update dependency vue-router to v4.0.14 (#322) ([4971c9f](https://github.com/mx-space/mx-admin/commit/4971c9f)), closes [#322](https://github.com/mx-space/mx-admin/issues/322)

## <small>3.16.1 (2022-03-11)</small>

* release: v3.16.1 ([3a0ed33](https://github.com/mx-space/mx-admin/commit/3a0ed33))
* feat: add code intelisense editor ([c9492a8](https://github.com/mx-space/mx-admin/commit/c9492a8))
* feat: add serverless type declare ([a641cf6](https://github.com/mx-space/mx-admin/commit/a641cf6))
* fix: serverless debug view ([01b4f18](https://github.com/mx-space/mx-admin/commit/01b4f18))
* fix: serverless link and editor loading status ([f259dd3](https://github.com/mx-space/mx-admin/commit/f259dd3))
* fix(deps): update dependency naive-ui to v2.26.3 (#320) ([245dd7d](https://github.com/mx-space/mx-admin/commit/245dd7d)), closes [#320](https://github.com/mx-space/mx-admin/issues/320)
* chore(deps): update dependency postcss to v8.4.8 (#318) ([6991433](https://github.com/mx-space/mx-admin/commit/6991433)), closes [#318](https://github.com/mx-space/mx-admin/issues/318)
* chore(deps): update typescript-eslint monorepo to v5.14.0 (#319) ([63a28c1](https://github.com/mx-space/mx-admin/commit/63a28c1)), closes [#319](https://github.com/mx-space/mx-admin/issues/319)
* draft: monaco auto typings ([b35c096](https://github.com/mx-space/mx-admin/commit/b35c096))

## 3.16.0 (2022-03-09)

* release: v3.16.0 ([29f52df](https://github.com/mx-space/mx-admin/commit/29f52df))
* chore: add function icon ([3a00150](https://github.com/mx-space/mx-admin/commit/3a00150))
* chore: add lock registry ([14b0699](https://github.com/mx-space/mx-admin/commit/14b0699))
* chore: add todo ([a57ba37](https://github.com/mx-space/mx-admin/commit/a57ba37))
* chore(snippet): `private` set default to true ([9f0d352](https://github.com/mx-space/mx-admin/commit/9f0d352))
* feat: change monaco default theme ([798c95a](https://github.com/mx-space/mx-admin/commit/798c95a))
* feat: init serverless function ([047039a](https://github.com/mx-space/mx-admin/commit/047039a))
* feat: serverless debug ([5fc1a00](https://github.com/mx-space/mx-admin/commit/5fc1a00))
* fix: add pt for main container ([84d558a](https://github.com/mx-space/mx-admin/commit/84d558a))
* fix: env default value ([ef21d77](https://github.com/mx-space/mx-admin/commit/ef21d77))
* fix: snippet function default ([04d6eba](https://github.com/mx-space/mx-admin/commit/04d6eba))
* fix: temp allow create func no need valid ([2d0fdd5](https://github.com/mx-space/mx-admin/commit/2d0fdd5))
* fix: trimstart for default function template ([59e9ffc](https://github.com/mx-space/mx-admin/commit/59e9ffc))
* fix(deps): update dependency @mx-space/api-client to v0.7.2 (#317) ([c642ea7](https://github.com/mx-space/mx-admin/commit/c642ea7)), closes [#317](https://github.com/mx-space/mx-admin/issues/317)
* fix(deps): update dependency @vueuse/core to v7.7.1 (#314) ([5241904](https://github.com/mx-space/mx-admin/commit/5241904)), closes [#314](https://github.com/mx-space/mx-admin/issues/314)
* fix(deps): update dependency naive-ui to v2.26.1 (#316) ([303610d](https://github.com/mx-space/mx-admin/commit/303610d)), closes [#316](https://github.com/mx-space/mx-admin/issues/316)
* fix(deps): update dependency vite-plugin-windicss to v1.8.3 (#315) ([2829fc5](https://github.com/mx-space/mx-admin/commit/2829fc5)), closes [#315](https://github.com/mx-space/mx-admin/issues/315)

## <small>3.15.11 (2022-03-06)</small>

* release: v3.15.11 ([b127971](https://github.com/mx-space/mx-admin/commit/b127971))
* feat: add note filter ([a5daaf3](https://github.com/mx-space/mx-admin/commit/a5daaf3))
* fix: header z-index ([d6b9822](https://github.com/mx-space/mx-admin/commit/d6b9822))

## <small>3.15.10 (2022-03-05)</small>

* release: v3.15.10 ([ecbb7c6](https://github.com/mx-space/mx-admin/commit/ecbb7c6))
* fix: lock file ([2f7aa30](https://github.com/mx-space/mx-admin/commit/2f7aa30))
* fix: page drawer ([9b49667](https://github.com/mx-space/mx-admin/commit/9b49667))
* fix(deps): update dependency vite-plugin-windicss to v1.8.2 (#310) ([025d762](https://github.com/mx-space/mx-admin/commit/025d762)), closes [#310](https://github.com/mx-space/mx-admin/issues/310)
* chore(deps): update dependency @vitejs/plugin-vue to v2.2.4 (#299) ([9cbbb2a](https://github.com/mx-space/mx-admin/commit/9cbbb2a)), closes [#299](https://github.com/mx-space/mx-admin/issues/299)
* chore(deps): update dependency windicss to v3.5.1 (#309) ([c281420](https://github.com/mx-space/mx-admin/commit/c281420)), closes [#309](https://github.com/mx-space/mx-admin/issues/309)

## <small>3.15.9 (2022-03-03)</small>

* release: v3.15.9 ([49ce49a](https://github.com/mx-space/mx-admin/commit/49ce49a))
* fix: remove post `hide` field ([7dd9531](https://github.com/mx-space/mx-admin/commit/7dd9531))
* fix(deps): update dependency @antv/g2 to v4.1.47 (#311) ([9342564](https://github.com/mx-space/mx-admin/commit/9342564)), closes [#311](https://github.com/mx-space/mx-admin/issues/311)
* fix(deps): update dependency @vueuse/core to v7.7.0 (#298) ([57edb2c](https://github.com/mx-space/mx-admin/commit/57edb2c)), closes [#298](https://github.com/mx-space/mx-admin/issues/298)
* fix(deps): update dependency naive-ui to v2.25.8 (#291) ([d972049](https://github.com/mx-space/mx-admin/commit/d972049)), closes [#291](https://github.com/mx-space/mx-admin/issues/291)
* fix(deps): update dependency naive-ui to v2.26.0 (#306) ([dc098f9](https://github.com/mx-space/mx-admin/commit/dc098f9)), closes [#306](https://github.com/mx-space/mx-admin/issues/306)
* fix(deps): update dependency vditor to v3.8.12 (#312) ([49dca78](https://github.com/mx-space/mx-admin/commit/49dca78)), closes [#312](https://github.com/mx-space/mx-admin/issues/312)
* fix(deps): update dependency vite-plugin-windicss to v1.8.1 (#297) ([dcf36d8](https://github.com/mx-space/mx-admin/commit/dcf36d8)), closes [#297](https://github.com/mx-space/mx-admin/issues/297)
* fix(deps): update dependency vue-router to v4.0.13 (#302) ([1f3607d](https://github.com/mx-space/mx-admin/commit/1f3607d)), closes [#302](https://github.com/mx-space/mx-admin/issues/302)
* fix(deps): update dependency xterm to v4.18.0 (#305) ([f1e1dfc](https://github.com/mx-space/mx-admin/commit/f1e1dfc)), closes [#305](https://github.com/mx-space/mx-admin/issues/305)
* chore(deps): update actions/checkout action to v3 (#307) ([c1bcc9b](https://github.com/mx-space/mx-admin/commit/c1bcc9b)), closes [#307](https://github.com/mx-space/mx-admin/issues/307)
* chore(deps): update actions/setup-node action to v3 (#293) ([8d4fb01](https://github.com/mx-space/mx-admin/commit/8d4fb01)), closes [#293](https://github.com/mx-space/mx-admin/issues/293)
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.3.8 (#300) ([fd68fa1](https://github.com/mx-space/mx-admin/commit/fd68fa1)), closes [#300](https://github.com/mx-space/mx-admin/issues/300)
* chore(deps): update dependency eslint to v8.10.0 (#295) ([3397b2b](https://github.com/mx-space/mx-admin/commit/3397b2b)), closes [#295](https://github.com/mx-space/mx-admin/issues/295)
* chore(deps): update dependency rollup-plugin-visualizer to v5.6.0 (#294) ([af836e3](https://github.com/mx-space/mx-admin/commit/af836e3)), closes [#294](https://github.com/mx-space/mx-admin/issues/294)
* chore(deps): update dependency typescript to v4.6.2 (#304) ([5b60c12](https://github.com/mx-space/mx-admin/commit/5b60c12)), closes [#304](https://github.com/mx-space/mx-admin/issues/304)
* chore(deps): update dependency vite to v2.8.5 (#301) ([a6a79fe](https://github.com/mx-space/mx-admin/commit/a6a79fe)), closes [#301](https://github.com/mx-space/mx-admin/issues/301)
* chore(deps): update dependency vite to v2.8.6 (#308) ([35bb8f7](https://github.com/mx-space/mx-admin/commit/35bb8f7)), closes [#308](https://github.com/mx-space/mx-admin/issues/308)
* chore(deps): update dependency windicss to v3.5.0 (#296) ([81a1317](https://github.com/mx-space/mx-admin/commit/81a1317)), closes [#296](https://github.com/mx-space/mx-admin/issues/296)
* chore(deps): update pnpm/action-setup action to v2.2.1 (#292) ([26c6050](https://github.com/mx-space/mx-admin/commit/26c6050)), closes [#292](https://github.com/mx-space/mx-admin/issues/292)
* chore(deps): update typescript-eslint monorepo to v5.13.0 (#303) ([56a9af1](https://github.com/mx-space/mx-admin/commit/56a9af1)), closes [#303](https://github.com/mx-space/mx-admin/issues/303)

## <small>3.15.8 (2022-02-25)</small>

* release: v3.15.8 ([5830459](https://github.com/mx-space/mx-admin/commit/5830459))
* fix: nested css `:global` with postcss ([2b5a719](https://github.com/mx-space/mx-admin/commit/2b5a719))

## <small>3.15.7 (2022-02-24)</small>

* release: v3.15.7 ([04015b4](https://github.com/mx-space/mx-admin/commit/04015b4))
* chore: add hash to asset, server do cache for ([1ac1536](https://github.com/mx-space/mx-admin/commit/1ac1536))

## <small>3.15.6 (2022-02-24)</small>

* release: v3.15.6 ([cb530c4](https://github.com/mx-space/mx-admin/commit/cb530c4))
* fix: add id for injection script ([01824e3](https://github.com/mx-space/mx-admin/commit/01824e3))
* fix: update codemirror by re-resolve lock file ([dbd5bd3](https://github.com/mx-space/mx-admin/commit/dbd5bd3))
* chore: update deps ([b8f64b6](https://github.com/mx-space/mx-admin/commit/b8f64b6))

## <small>3.15.5 (2022-02-23)</small>

* release: v3.15.5 ([224c569](https://github.com/mx-space/mx-admin/commit/224c569))
* chore: add funding ([d39459c](https://github.com/mx-space/mx-admin/commit/d39459c))
* chore(deps): update dependency @vitejs/plugin-vue to v2.2.2 (#282) ([e2f1c23](https://github.com/mx-space/mx-admin/commit/e2f1c23)), closes [#282](https://github.com/mx-space/mx-admin/issues/282)
* chore(deps): update dependency eslint-plugin-vue to v8.5.0 (#286) ([4296eda](https://github.com/mx-space/mx-admin/commit/4296eda)), closes [#286](https://github.com/mx-space/mx-admin/issues/286)
* chore(deps): update dependency unplugin-auto-import to v0.6.1 (#284) ([a0ec49e](https://github.com/mx-space/mx-admin/commit/a0ec49e)), closes [#284](https://github.com/mx-space/mx-admin/issues/284)
* chore(deps): update dependency vite to v2.8.4 (#280) ([2ace742](https://github.com/mx-space/mx-admin/commit/2ace742)), closes [#280](https://github.com/mx-space/mx-admin/issues/280)
* chore(deps): update dependency vite-tsconfig-paths to v3.4.1 (#289) ([92b5229](https://github.com/mx-space/mx-admin/commit/92b5229)), closes [#289](https://github.com/mx-space/mx-admin/issues/289)
* chore(deps): update dependency vue-eslint-parser to v8.3.0 (#287) ([4da84e5](https://github.com/mx-space/mx-admin/commit/4da84e5)), closes [#287](https://github.com/mx-space/mx-admin/issues/287)
* chore(deps): update dependency windicss to v3.4.4 (#285) ([6aa2ca3](https://github.com/mx-space/mx-admin/commit/6aa2ca3)), closes [#285](https://github.com/mx-space/mx-admin/issues/285)
* chore(deps): update pnpm/action-setup action to v2.2.0 (#290) ([7de9908](https://github.com/mx-space/mx-admin/commit/7de9908)), closes [#290](https://github.com/mx-space/mx-admin/issues/290)
* chore(deps): update typescript-eslint monorepo to v5.12.1 (#283) ([7d7d2ed](https://github.com/mx-space/mx-admin/commit/7d7d2ed)), closes [#283](https://github.com/mx-space/mx-admin/issues/283)
* fix(deps): update dependency naive-ui to v2.25.3 (#288) ([00eb3ea](https://github.com/mx-space/mx-admin/commit/00eb3ea)), closes [#288](https://github.com/mx-space/mx-admin/issues/288)
* fix(deps): update dependency vite-plugin-windicss to v1.7.1 (#277) ([103c3ab](https://github.com/mx-space/mx-admin/commit/103c3ab)), closes [#277](https://github.com/mx-space/mx-admin/issues/277)

## <small>3.15.4 (2022-02-18)</small>

* release: v3.15.3 ([5e1d264](https://github.com/mx-space/mx-admin/commit/5e1d264))
* release: v3.15.4 ([9136095](https://github.com/mx-space/mx-admin/commit/9136095))
* fix: downgrade checker ([0297069](https://github.com/mx-space/mx-admin/commit/0297069))
* fix: log view color and bg-color ([21ee0ba](https://github.com/mx-space/mx-admin/commit/21ee0ba))
* fix: mocano worker ([afffa6f](https://github.com/mx-space/mx-admin/commit/afffa6f))
* fix: only hide or secret add token search ([2764050](https://github.com/mx-space/mx-admin/commit/2764050))
* fix: reconn pty twice ([5a8cbe2](https://github.com/mx-space/mx-admin/commit/5a8cbe2))
* fix: trim username ([b248753](https://github.com/mx-space/mx-admin/commit/b248753))
* fix: try tsc error (#281) ([6a35b55](https://github.com/mx-space/mx-admin/commit/6a35b55)), closes [#281](https://github.com/mx-space/mx-admin/issues/281)
* fix(deps): update dependency @antv/g2 to v4.1.46 ([913c48d](https://github.com/mx-space/mx-admin/commit/913c48d))
* fix(deps): update dependency @vueuse/core to v7.6.2 ([e5e7813](https://github.com/mx-space/mx-admin/commit/e5e7813))
* ci: use latest pnpm ([2bb87bf](https://github.com/mx-space/mx-admin/commit/2bb87bf))
* chore: update readme ([3fdf804](https://github.com/mx-space/mx-admin/commit/3fdf804))
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.3.5 ([df64cd8](https://github.com/mx-space/mx-admin/commit/df64cd8))
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.3.7 ([628a65e](https://github.com/mx-space/mx-admin/commit/628a65e))
* chore(deps): update dependency eslint to v8.9.0 ([f078e48](https://github.com/mx-space/mx-admin/commit/f078e48))
* chore(deps): update dependency unplugin-auto-import to v0.6.0 ([324ae2a](https://github.com/mx-space/mx-admin/commit/324ae2a))
* chore(deps): update dependency vite to v2.8.1 ([8851da9](https://github.com/mx-space/mx-admin/commit/8851da9))
* chore(deps): update dependency vite to v2.8.3 ([fa6c241](https://github.com/mx-space/mx-admin/commit/fa6c241))
* chore(deps): update dependency vite-plugin-checker to v0.4.2 ([e5defb3](https://github.com/mx-space/mx-admin/commit/e5defb3))
* chore(deps): update typescript-eslint monorepo to v5.12.0 ([6c222ac](https://github.com/mx-space/mx-admin/commit/6c222ac))
* chore(deps): update vue monorepo to v3.2.31 ([8ca8434](https://github.com/mx-space/mx-admin/commit/8ca8434))
* feat: pty session record ([1391cee](https://github.com/mx-space/mx-admin/commit/1391cee))
* refactor: move pty socket connection ([799217c](https://github.com/mx-space/mx-admin/commit/799217c))

## <small>3.15.2 (2022-02-12)</small>

* release: v3.15.2 ([fc58f31](https://github.com/mx-space/mx-admin/commit/fc58f31))
* chore(cdn): replace `cdn` to `fastly` ([0fb7888](https://github.com/mx-space/mx-admin/commit/0fb7888))
* chore(deps): update pnpm/action-setup action to v2.1.0 ([39d5324](https://github.com/mx-space/mx-admin/commit/39d5324))
* feat: change xterm font ([e451bd1](https://github.com/mx-space/mx-admin/commit/e451bd1))
* fix(deps): update dependency camelcase-keys to v7.0.2 ([6ecad89](https://github.com/mx-space/mx-admin/commit/6ecad89))
* fix(deps): update dependency naive-ui to v2.25.2 ([cf4ab86](https://github.com/mx-space/mx-admin/commit/cf4ab86))

## <small>3.15.1 (2022-02-11)</small>

* release: v3.15.1 ([5f51413](https://github.com/mx-space/mx-admin/commit/5f51413))
* fix: socket reconnect if disconnect ([bc6ea85](https://github.com/mx-space/mx-admin/commit/bc6ea85))

## 3.15.0 (2022-02-10)

* release: v3.15.0 ([b0112e4](https://github.com/mx-space/mx-admin/commit/b0112e4))
* fix: change copy ([2489bd6](https://github.com/mx-space/mx-admin/commit/2489bd6))
* fix: modify some icon ([4eac5fd](https://github.com/mx-space/mx-admin/commit/4eac5fd))
* feat: add terminal options ([a698df8](https://github.com/mx-space/mx-admin/commit/a698df8))
* feat: improve xterm background ([d80faed](https://github.com/mx-space/mx-admin/commit/d80faed))
* feat: pty support & webshell embed ([14bad3d](https://github.com/mx-space/mx-admin/commit/14bad3d))
* refactor: header comp ([7ddc3da](https://github.com/mx-space/mx-admin/commit/7ddc3da))
* docs: update readme ([c31402a](https://github.com/mx-space/mx-admin/commit/c31402a))

## <small>3.14.3 (2022-02-09)</small>

* release: v3.14.3 ([e7483e9](https://github.com/mx-space/mx-admin/commit/e7483e9))
* fix: revert vite-check version ([e1e6107](https://github.com/mx-space/mx-admin/commit/e1e6107))
* ci: page build ci ([496eb67](https://github.com/mx-space/mx-admin/commit/496eb67))

## <small>3.14.2 (2022-02-09)</small>

* release: v3.14.2 ([4021729](https://github.com/mx-space/mx-admin/commit/4021729))
* pref: async load xterm ([386f5b6](https://github.com/mx-space/mx-admin/commit/386f5b6))

## <small>3.14.1 (2022-02-09)</small>

* release: v3.14.1 ([63d9c92](https://github.com/mx-space/mx-admin/commit/63d9c92))
* chore: clean up ([74142e5](https://github.com/mx-space/mx-admin/commit/74142e5))
* refactor: extract xicons out ([5d0b73d](https://github.com/mx-space/mx-admin/commit/5d0b73d))
* feat: native log list & xterm support ([1a56c57](https://github.com/mx-space/mx-admin/commit/1a56c57))

## 3.14.0 (2022-02-08)

* release: v3.14.0 ([ae3e91f](https://github.com/mx-space/mx-admin/commit/ae3e91f))
* feat: add kbar ([1e2a15f](https://github.com/mx-space/mx-admin/commit/1e2a15f))

## <small>3.13.3 (2022-02-06)</small>

* release: v3.13.3 ([7801bbe](https://github.com/mx-space/mx-admin/commit/7801bbe))
* chore: clean useless compoent import ([2686594](https://github.com/mx-space/mx-admin/commit/2686594))
* chore(deps): update dependency eslint-plugin-vue to v8.4.1 ([30654be](https://github.com/mx-space/mx-admin/commit/30654be))
* chore(deps): update typescript-eslint monorepo to v5.10.2 ([d702035](https://github.com/mx-space/mx-admin/commit/d702035))
* fix: debug storage setting ([b878959](https://github.com/mx-space/mx-admin/commit/b878959))
* fix(deps): update dependency @mx-space/api-client to v0.6.2 ([1b7ee82](https://github.com/mx-space/mx-admin/commit/1b7ee82))
* fix(deps): update dependency monaco-editor to v0.32.1 ([951f41d](https://github.com/mx-space/mx-admin/commit/951f41d))

## <small>3.13.2 (2022-01-31)</small>

* release: v3.13.2 ([524dec7](https://github.com/mx-space/mx-admin/commit/524dec7))
* fix: move bundled js into single folder ([1bd34f0](https://github.com/mx-space/mx-admin/commit/1bd34f0))
* fix: store token ([b2c7618](https://github.com/mx-space/mx-admin/commit/b2c7618))
* fix(friend): try error in check health ([c0beba4](https://github.com/mx-space/mx-admin/commit/c0beba4))
* docs: update readme ([b4d79aa](https://github.com/mx-space/mx-admin/commit/b4d79aa))

## <small>3.13.1 (2022-01-31)</small>

* release: v3.13.1 ([4e5a4ae](https://github.com/mx-space/mx-admin/commit/4e5a4ae))
* feat: link check ([731abd1](https://github.com/mx-space/mx-admin/commit/731abd1))
* fix: add loading status on fetch image detail ([502a51a](https://github.com/mx-space/mx-admin/commit/502a51a))

## 3.13.0 (2022-01-30)

* release: v3.13.0 ([2902a3f](https://github.com/mx-space/mx-admin/commit/2902a3f))
* feat: add markdown image manage ([865d3e6](https://github.com/mx-space/mx-admin/commit/865d3e6))
* feat: inject env into build ([211aa74](https://github.com/mx-space/mx-admin/commit/211aa74))
* fix: revert vue version ([17d83a9](https://github.com/mx-space/mx-admin/commit/17d83a9))
* docs: change readme ([dff555c](https://github.com/mx-space/mx-admin/commit/dff555c))
* chore: update deps ([e0aacc4](https://github.com/mx-space/mx-admin/commit/e0aacc4))
* chore(deps): update vue monorepo ([f9850e9](https://github.com/mx-space/mx-admin/commit/f9850e9))
* chore(deps): update vue monorepo ([ea051c1](https://github.com/mx-space/mx-admin/commit/ea051c1))

## 3.12.0 (2022-01-22)

* release: v3.12.0 ([ee1e892](https://github.com/mx-space/mx-admin/commit/ee1e892))
* chore: cleanup ([63c007c](https://github.com/mx-space/mx-admin/commit/63c007c))
* fix: fetch data when paginate ([3b01490](https://github.com/mx-space/mx-admin/commit/3b01490))
* fix: n-list style ([66508ce](https://github.com/mx-space/mx-admin/commit/66508ce))
* fix: project list display created ([0434d84](https://github.com/mx-space/mx-admin/commit/0434d84))
* fix(project): nav to project url ([2a048d0](https://github.com/mx-space/mx-admin/commit/2a048d0))
* feat: get images from markdown ([300ba5f](https://github.com/mx-space/mx-admin/commit/300ba5f))
* feat: jump to simple render ([ee29eb8](https://github.com/mx-space/mx-admin/commit/ee29eb8))
* feat: project list new design ([9936966](https://github.com/mx-space/mx-admin/commit/9936966))

## <small>3.11.12 (2022-01-21)</small>

* release: v3.11.12 ([eca8b9d](https://github.com/mx-space/mx-admin/commit/eca8b9d))
* feat: fetch project from github ([09efd87](https://github.com/mx-space/mx-admin/commit/09efd87))

## <small>3.11.11 (2022-01-18)</small>

* release: v3.11.11 ([43f3d0f](https://github.com/mx-space/mx-admin/commit/43f3d0f))
* chore: update deps ([7cac9a1](https://github.com/mx-space/mx-admin/commit/7cac9a1))
* chore(deps): update dependency rollup-plugin-visualizer to v5.5.4 ([8775215](https://github.com/mx-space/mx-admin/commit/8775215))
* chore(deps): update dependency unplugin-auto-import to v0.5.11 ([3c66365](https://github.com/mx-space/mx-admin/commit/3c66365))
* chore(deps): update dependency windicss to v3.4.3 ([826d8d0](https://github.com/mx-space/mx-admin/commit/826d8d0))
* chore(deps): update typescript-eslint monorepo to v5.10.0 ([ab0dd3a](https://github.com/mx-space/mx-admin/commit/ab0dd3a))
* fix: remove header bg ([48cc119](https://github.com/mx-space/mx-admin/commit/48cc119))
* fix(deps): update dependency @antv/g2 to v4.1.40 ([7b5f670](https://github.com/mx-space/mx-admin/commit/7b5f670))
* fix(deps): update dependency vite-plugin-windicss to v1.6.3 ([60e3832](https://github.com/mx-space/mx-admin/commit/60e3832))

## <small>3.11.10 (2022-01-15)</small>

* release: 3.11.9 ([9d2143d](https://github.com/mx-space/mx-admin/commit/9d2143d))
* release: v3.11.10 ([c54b0c8](https://github.com/mx-space/mx-admin/commit/c54b0c8))
* fix: adjust header blur ([ee1ba2d](https://github.com/mx-space/mx-admin/commit/ee1ba2d))
* fix: default allow comment switch ([705994c](https://github.com/mx-space/mx-admin/commit/705994c))
* refactor: extract kv-editor as component ([8916d20](https://github.com/mx-space/mx-admin/commit/8916d20))
* chore: remove field ([83d14e9](https://github.com/mx-space/mx-admin/commit/83d14e9))

## <small>3.11.8 (2022-01-13)</small>

* release: v3.11.8 ([e5206f9](https://github.com/mx-space/mx-admin/commit/e5206f9))
* fix: comment nav to post path use category slug ([06b2655](https://github.com/mx-space/mx-admin/commit/06b2655))

## <small>3.11.7 (2022-01-11)</small>

* release: v3.11.7 ([125f157](https://github.com/mx-space/mx-admin/commit/125f157))
* refactor: extract drawer to univerial comp ([7aea992](https://github.com/mx-space/mx-admin/commit/7aea992))
* fix: add missing event type ([f8bbccb](https://github.com/mx-space/mx-admin/commit/f8bbccb))
* feat: add debug fake data ([b1a3e5f](https://github.com/mx-space/mx-admin/commit/b1a3e5f))

## <small>3.11.6 (2022-01-11)</small>

* release: v3.11.6 ([0877fc2](https://github.com/mx-space/mx-admin/commit/0877fc2))
* feat: debug console ([a03e0d6](https://github.com/mx-space/mx-admin/commit/a03e0d6))

## <small>3.11.5 (2022-01-10)</small>

* release: v3.11.5 ([b503d58](https://github.com/mx-space/mx-admin/commit/b503d58))
* chore: extract comp ([35a947d](https://github.com/mx-space/mx-admin/commit/35a947d))
* fix: layout re-redener twice ([0da8e8e](https://github.com/mx-space/mx-admin/commit/0da8e8e))
* fix: snippet post data ([f7ee716](https://github.com/mx-space/mx-admin/commit/f7ee716))

## <small>3.11.4 (2022-01-09)</small>

* release: v3.11.4 ([f6daf99](https://github.com/mx-space/mx-admin/commit/f6daf99))
* feat: custom email reply template ([5acb540](https://github.com/mx-space/mx-admin/commit/5acb540))

## <small>3.11.3 (2022-01-08)</small>

* release: v3.11.3 ([decd820](https://github.com/mx-space/mx-admin/commit/decd820))
* feat: add user social id ([bec4a3c](https://github.com/mx-space/mx-admin/commit/bec4a3c))

## <small>3.11.2 (2022-01-08)</small>

* release: v3.11.2 ([8396a5f](https://github.com/mx-space/mx-admin/commit/8396a5f))
* fix: editor tabsize set to 2 ([6761e7d](https://github.com/mx-space/mx-admin/commit/6761e7d))
* fix(deps): update dependency vue to v3.2.26 ([0ab3887](https://github.com/mx-space/mx-admin/commit/0ab3887))
* chore(deps): update dependency @types/validator to v13.7.1 ([8873702](https://github.com/mx-space/mx-admin/commit/8873702))
* chore(deps): update dependency unplugin-auto-import to v0.5.5 ([050ad87](https://github.com/mx-space/mx-admin/commit/050ad87))
* chore(deps): update dependency windicss to v3.4.2 ([495dd5b](https://github.com/mx-space/mx-admin/commit/495dd5b))

## <small>3.11.1 (2022-01-04)</small>

* release: v3.11.1 ([f2e68bc](https://github.com/mx-space/mx-admin/commit/f2e68bc))
* fix(deps): update dependency naive-ui to v2.23.2 ([c9c3c15](https://github.com/mx-space/mx-admin/commit/c9c3c15))
* fix(edit): if title is empty enter loading loop ([df11a27](https://github.com/mx-space/mx-admin/commit/df11a27))
* chore: remove tailwind deps ([4938248](https://github.com/mx-space/mx-admin/commit/4938248))
* chore(deps): update dependency vite to v2.7.10 ([f474ca7](https://github.com/mx-space/mx-admin/commit/f474ca7))

## 3.11.0 (2021-12-23)

* release: v3.11.0 ([e28670f](https://github.com/mx-space/mx-admin/commit/e28670f))
* fix(snippet): get current type text on post data raw ([3475f44](https://github.com/mx-space/mx-admin/commit/3475f44))
* feat: replace taildwind with windicss ([bec9bef](https://github.com/mx-space/mx-admin/commit/bec9bef))
* feat(snippet): yaml support ([938cce7](https://github.com/mx-space/mx-admin/commit/938cce7))

## <small>3.10.4 (2021-12-21)</small>

* release: v3.10.4 ([26bdaa6](https://github.com/mx-space/mx-admin/commit/26bdaa6))
* feat: add quick preview ([ec10a21](https://github.com/mx-space/mx-admin/commit/ec10a21))
* feat: parse markdown yaml ([dcac3d9](https://github.com/mx-space/mx-admin/commit/dcac3d9))

## <small>3.10.3 (2021-12-14)</small>

* release: v3.10.3 ([257bd17](https://github.com/mx-space/mx-admin/commit/257bd17))
* fix: update tailwind to 3, codemirror highlight bug ([d388909](https://github.com/mx-space/mx-admin/commit/d388909))

## <small>3.10.2 (2021-12-10)</small>

* release: v3.10.2 ([e9fcc27](https://github.com/mx-space/mx-admin/commit/e9fcc27))
* fix: post link nav error ([ab7ea01](https://github.com/mx-space/mx-admin/commit/ab7ea01))
* fix(deps): update dependency naive-ui to v2.21.5 ([cdb4d0f](https://github.com/mx-space/mx-admin/commit/cdb4d0f))
* fix(deps): update dependency vditor to v3.8.8 ([d5e0d7a](https://github.com/mx-space/mx-admin/commit/d5e0d7a))
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.3.1 ([a6cb31c](https://github.com/mx-space/mx-admin/commit/a6cb31c))
* chore(deps): update dependency eslint to v8.4.1 ([2fcde40](https://github.com/mx-space/mx-admin/commit/2fcde40))
* chore(deps): update dependency prettier to v2.5.1 ([9bc566b](https://github.com/mx-space/mx-admin/commit/9bc566b))

## <small>3.10.1 (2021-12-04)</small>

* release: v3.10.1 ([bc53801](https://github.com/mx-space/mx-admin/commit/bc53801))
* chore: update deps ([e8a9b7c](https://github.com/mx-space/mx-admin/commit/e8a9b7c))
* chore(deps): update dependency @vitejs/plugin-vue to v1.10.0 ([26b9318](https://github.com/mx-space/mx-admin/commit/26b9318))
* chore(deps): update dependency eslint to v8.4.0 ([e5df0f1](https://github.com/mx-space/mx-admin/commit/e5df0f1))
* chore(deps): update dependency postcss to v8.4.1 ([d4e64dd](https://github.com/mx-space/mx-admin/commit/d4e64dd))
* chore(deps): update dependency postcss to v8.4.4 ([1fd8151](https://github.com/mx-space/mx-admin/commit/1fd8151))
* chore(deps): update dependency prettier to v2.5.0 ([b685151](https://github.com/mx-space/mx-admin/commit/b685151))
* chore(deps): update dependency unplugin-auto-import to v0.4.20 ([c21efa6](https://github.com/mx-space/mx-admin/commit/c21efa6))
* chore(deps): update dependency unplugin-auto-import to v0.5.1 ([90d49f4](https://github.com/mx-space/mx-admin/commit/90d49f4))
* fix: class type define ([8445db6](https://github.com/mx-space/mx-admin/commit/8445db6))
* fix(deps): update dependency @vueuse/core to v7.1.1 ([dc06023](https://github.com/mx-space/mx-admin/commit/dc06023))
* fix(deps): update dependency class-transformer to v0.5.1 ([495547e](https://github.com/mx-space/mx-admin/commit/495547e))
* fix(deps): update dependency naive-ui to v2.21.1 ([df52998](https://github.com/mx-space/mx-admin/commit/df52998))

## 3.10.0 (2021-11-23)

* release: v3.10.0 ([3bb8793](https://github.com/mx-space/mx-admin/commit/3bb8793))
* chore: re-format ([a6d6ea0](https://github.com/mx-space/mx-admin/commit/a6d6ea0))
* feat: add external link on title field ([47f0407](https://github.com/mx-space/mx-admin/commit/47f0407))

## <small>3.9.8 (2021-11-21)</small>

* release: v3.9.8 ([cca6096](https://github.com/mx-space/mx-admin/commit/cca6096))
* chore: update deps ([60dd2a0](https://github.com/mx-space/mx-admin/commit/60dd2a0))
* fix(deps): update dependency @vueuse/core to v7 ([1ad0e81](https://github.com/mx-space/mx-admin/commit/1ad0e81))
* fix(deps): update dependency class-validator to v0.13.2 ([5ad9764](https://github.com/mx-space/mx-admin/commit/5ad9764))

## <small>3.9.7 (2021-11-20)</small>

* release: v ([23a0037](https://github.com/mx-space/mx-admin/commit/23a0037))
* release: v3.9.7 ([f657343](https://github.com/mx-space/mx-admin/commit/f657343))
* fix: add debug type for markdown import ([4d5330b](https://github.com/mx-space/mx-admin/commit/4d5330b))
* fix: mine type on windows, Why is windows so fucking ([3bcb480](https://github.com/mx-space/mx-admin/commit/3bcb480))

## <small>3.9.5 (2021-11-20)</small>

* release: v3.9.5 ([4c40612](https://github.com/mx-space/mx-admin/commit/4c40612))
* fix: lost page subtitle ([66b87a5](https://github.com/mx-space/mx-admin/commit/66b87a5))
* fix(deps): update dependency date-fns to v2.26.0 ([f825e59](https://github.com/mx-space/mx-admin/commit/f825e59))
* fix(deps): update dependency socket.io-client to v4.4.0 ([50d55e1](https://github.com/mx-space/mx-admin/commit/50d55e1))
* fix(deps): update dependency vue to v3.2.22 ([5863dcb](https://github.com/mx-space/mx-admin/commit/5863dcb))
* chore(deps): update dependency eslint-plugin-vue to v8.1.1 ([5dd614d](https://github.com/mx-space/mx-admin/commit/5dd614d))
* chore(deps): update dependency typescript to v4.5.2 ([5dbfaf5](https://github.com/mx-space/mx-admin/commit/5dbfaf5))

## <small>3.9.4 (2021-11-19)</small>

* release: v3.9.4 ([7aae9b0](https://github.com/mx-space/mx-admin/commit/7aae9b0))
* fix: ignore webkit tap highlight ([bff8f32](https://github.com/mx-space/mx-admin/commit/bff8f32))

## <small>3.9.3 (2021-11-17)</small>

* release: v3.9.3 ([fe66349](https://github.com/mx-space/mx-admin/commit/fe66349))
* fix: update to server ([057fbcd](https://github.com/mx-space/mx-admin/commit/057fbcd))

## <small>3.9.2 (2021-11-17)</small>

* release: v3.9.2 ([a113747](https://github.com/mx-space/mx-admin/commit/a113747))
* chore: update deps ([e092f95](https://github.com/mx-space/mx-admin/commit/e092f95))
* chore(deps): update dependency eslint-plugin-vue to v7.20.0 ([9a49624](https://github.com/mx-space/mx-admin/commit/9a49624))
* chore(deps): update typescript-eslint monorepo to v5.4.0 ([3af3a99](https://github.com/mx-space/mx-admin/commit/3af3a99))
* fix(deps): update dependency @vueuse/core to v6.9.1 ([9686bef](https://github.com/mx-space/mx-admin/commit/9686bef))
* fix(deps): update dependency naive-ui to v2.20.3 ([071fad2](https://github.com/mx-space/mx-admin/commit/071fad2))

## <small>3.9.1 (2021-11-09)</small>

* release: v3.9.1 ([33086a7](https://github.com/mx-space/mx-admin/commit/33086a7))
* fix: post model type error ([8ae70ed](https://github.com/mx-space/mx-admin/commit/8ae70ed))
* fix: read multi-comment callback ([2e0033a](https://github.com/mx-space/mx-admin/commit/2e0033a))
* fix(deps): update dependency @antv/g2 to v4.1.32 ([ab592d9](https://github.com/mx-space/mx-admin/commit/ab592d9))
* fix(deps): update dependency @antv/g2 to v4.1.34 ([1fe2eb1](https://github.com/mx-space/mx-admin/commit/1fe2eb1))
* fix(deps): update dependency @vueuse/core to v6.8.0 ([a9751ce](https://github.com/mx-space/mx-admin/commit/a9751ce))
* fix(deps): update dependency naive-ui to v2.19.11 ([95eb2d1](https://github.com/mx-space/mx-admin/commit/95eb2d1))
* fix(deps): update dependency naive-ui to v2.20.0 ([34eeb82](https://github.com/mx-space/mx-admin/commit/34eeb82))
* fix(deps): update dependency naive-ui to v2.20.2 ([f6ea15b](https://github.com/mx-space/mx-admin/commit/f6ea15b))
* fix(deps): update dependency validator to v13.7.0 ([73db735](https://github.com/mx-space/mx-admin/commit/73db735))
* fix(deps): update dependency xterm to v4.15.0 ([3d3a881](https://github.com/mx-space/mx-admin/commit/3d3a881))
* chore(deps): update dependency @types/validator to v13.6.5 ([4d453c6](https://github.com/mx-space/mx-admin/commit/4d453c6))
* chore(deps): update dependency autoprefixer to v10.4.0 ([6799d2c](https://github.com/mx-space/mx-admin/commit/6799d2c))
* chore(deps): update dependency eslint to v8.1.0 ([b840170](https://github.com/mx-space/mx-admin/commit/b840170))
* chore(deps): update dependency eslint to v8.2.0 ([fc29e2f](https://github.com/mx-space/mx-admin/commit/fc29e2f))
* chore(deps): update dependency postcss to v8.3.11 ([45406bb](https://github.com/mx-space/mx-admin/commit/45406bb))
* chore(deps): update dependency tailwindcss to v2.2.17 ([c27dc17](https://github.com/mx-space/mx-admin/commit/c27dc17))
* chore(deps): update dependency tailwindcss to v2.2.19 ([7188e93](https://github.com/mx-space/mx-admin/commit/7188e93))
* chore(deps): update dependency unplugin-auto-import to v0.4.13 ([e05364d](https://github.com/mx-space/mx-admin/commit/e05364d))
* chore(deps): update dependency vite to v2.6.13 ([d58d4fa](https://github.com/mx-space/mx-admin/commit/d58d4fa))
* chore(deps): update typescript-eslint monorepo to v5.3.1 ([9cff664](https://github.com/mx-space/mx-admin/commit/9cff664))
* chore(deps): update vue monorepo to v3.2.21 ([f00999b](https://github.com/mx-space/mx-admin/commit/f00999b))

## 3.9.0 (2021-10-22)

* release: v3.9.0 ([eb87911](https://github.com/mx-space/mx-admin/commit/eb87911))
* feat: add snippet manager ([9ad8229](https://github.com/mx-space/mx-admin/commit/9ad8229))
* feat: snippate link ([9514399](https://github.com/mx-space/mx-admin/commit/9514399))
* feat: snippet support ([599ca7a](https://github.com/mx-space/mx-admin/commit/599ca7a))
* fix: try to fix  right route in new window ([3589472](https://github.com/mx-space/mx-admin/commit/3589472))
* fix(deps): update codemirror ([21956e4](https://github.com/mx-space/mx-admin/commit/21956e4))
* fix(deps): update dependency @antv/g2 to v4.1.31 ([ea4b3dd](https://github.com/mx-space/mx-admin/commit/ea4b3dd))
* fix(deps): update dependency @vueuse/core to v6.6.2 ([a84cfb2](https://github.com/mx-space/mx-admin/commit/a84cfb2))
* fix(deps): update dependency naive-ui to v2.19.9 ([b29a69b](https://github.com/mx-space/mx-admin/commit/b29a69b))
* fix(deps): update dependency socket.io-client to v4.3.2 ([b3216b5](https://github.com/mx-space/mx-admin/commit/b3216b5))
* fix(deps): update vue monorepo ([98808eb](https://github.com/mx-space/mx-admin/commit/98808eb))
* chore(deps): update typescript-eslint monorepo to v5.1.0 ([d509f9e](https://github.com/mx-space/mx-admin/commit/d509f9e))

## <small>3.8.3 (2021-10-13)</small>

* release: v3.8.3 ([4b109a3](https://github.com/mx-space/mx-admin/commit/4b109a3))
* chore: update deps ([989056d](https://github.com/mx-space/mx-admin/commit/989056d))
* fix: link style ([22cfecd](https://github.com/mx-space/mx-admin/commit/22cfecd))

## <small>3.8.2 (2021-10-11)</small>

* release: v3.8.2 ([dd3c537](https://github.com/mx-space/mx-admin/commit/dd3c537))
* fix: table row style ([e6e0303](https://github.com/mx-space/mx-admin/commit/e6e0303))

## <small>3.8.1 (2021-10-09)</small>

* release: v3.8.1 ([5932ab3](https://github.com/mx-space/mx-admin/commit/5932ab3))
* chore: update deps ([ffd69d4](https://github.com/mx-space/mx-admin/commit/ffd69d4))
* feat: update timeline ([461b6ec](https://github.com/mx-space/mx-admin/commit/461b6ec))

## 3.8.0 (2021-10-08)

* release: v3.8.0 ([6793c17](https://github.com/mx-space/mx-admin/commit/6793c17))
* feat: new setup view ([fa30359](https://github.com/mx-space/mx-admin/commit/fa30359))
* chore: add changelog ([86fb964](https://github.com/mx-space/mx-admin/commit/86fb964))

## <small>3.7.1 (2021-10-07)</small>

* release: v3.7.1 ([3b0ee14](https://github.com/mx-space/mx-admin/commit/3b0ee14))
* chore: adjust copty ([db0d30b](https://github.com/mx-space/mx-admin/commit/db0d30b))
* chore: auto import types ([c8c5f6a](https://github.com/mx-space/mx-admin/commit/c8c5f6a))
* chore(deps): update dependency autoprefixer to v10.3.7 ([3a6a13e](https://github.com/mx-space/mx-admin/commit/3a6a13e))
* chore(deps): update dependency postcss to v8.3.9 ([52d81a2](https://github.com/mx-space/mx-admin/commit/52d81a2))
* chore(deps): update dependency typescript to v4.4.3 ([93408d7](https://github.com/mx-space/mx-admin/commit/93408d7))
* chore(deps): update dependency vite to v2.6.3 ([d663e06](https://github.com/mx-space/mx-admin/commit/d663e06))
* fix: mark catch value as any ([1684d43](https://github.com/mx-space/mx-admin/commit/1684d43))
* fix(deps): update dependency date-fns to v2.25.0 ([7e107ca](https://github.com/mx-space/mx-admin/commit/7e107ca))

## 3.7.0 (2021-10-05)

* release: v3.7.0 ([7d77304](https://github.com/mx-space/mx-admin/commit/7d77304))
* feat: codemirror toggle theme ([9f4f439](https://github.com/mx-space/mx-admin/commit/9f4f439))
* feat: editor fullscreen support ([1d0187b](https://github.com/mx-space/mx-admin/commit/1d0187b))
* chore(deps): update dependency eslint-plugin-vue to v7.19.0 ([e7a5c70](https://github.com/mx-space/mx-admin/commit/e7a5c70))
* chore(deps): update typescript-eslint monorepo to v4.33.0 ([357b971](https://github.com/mx-space/mx-admin/commit/357b971))
* fix(deps): update codemirror ([9f7d002](https://github.com/mx-space/mx-admin/commit/9f7d002))

## <small>3.6.10 (2021-10-04)</small>

* release: v3.6.10 ([c2889e6](https://github.com/mx-space/mx-admin/commit/c2889e6))
* feat: show system version ([dbaabe9](https://github.com/mx-space/mx-admin/commit/dbaabe9))

## <small>3.6.9 (2021-10-04)</small>

* release: v3.6.9 ([e5cc194](https://github.com/mx-space/mx-admin/commit/e5cc194))
* fix: codemirror deps version ([d27d6a4](https://github.com/mx-space/mx-admin/commit/d27d6a4))

## <small>3.6.7 (2021-10-04)</small>

* release: v3.6.7 ([4a07c00](https://github.com/mx-space/mx-admin/commit/4a07c00))

## <small>3.6.6 (2021-10-04)</small>

* chore: cleanup ([cd1a73d](https://github.com/mx-space/mx-admin/commit/cd1a73d))
* chore: update deps ([31e66c2](https://github.com/mx-space/mx-admin/commit/31e66c2))
* release: v3.6.6 ([c758f1e](https://github.com/mx-space/mx-admin/commit/c758f1e))

## <small>1.1.2 (2021-10-04)</small>

* ci: build and deploy ([85e5772](https://github.com/mx-space/mx-admin/commit/85e5772))
* fix: markdown import logic ([5c799da](https://github.com/mx-space/mx-admin/commit/5c799da))

## <small>3.6.5 (2021-10-04)</small>

* release: v3.6.5 ([11f543a](https://github.com/mx-space/mx-admin/commit/11f543a))
* fix: markdown import type ([56cc87e](https://github.com/mx-space/mx-admin/commit/56cc87e))

## <small>3.6.4 (2021-10-02)</small>

* release: v3.6.4 ([4501dcf](https://github.com/mx-space/mx-admin/commit/4501dcf))
* fix: set relative time if time is null ([6a367d6](https://github.com/mx-space/mx-admin/commit/6a367d6))

## <small>3.6.3 (2021-10-01)</small>

* release: v3.6.3 ([2832c04](https://github.com/mx-space/mx-admin/commit/2832c04))
* fix: change dashboard say icon ([4bf326a](https://github.com/mx-space/mx-admin/commit/4bf326a))
* fix: upload rollback content-type ([1f5b9f6](https://github.com/mx-space/mx-admin/commit/1f5b9f6))
* chore(deps): update dependency autoprefixer to v10.3.6 ([b162164](https://github.com/mx-space/mx-admin/commit/b162164))
* chore(deps): update vue monorepo to v3.2.19 ([d0bea10](https://github.com/mx-space/mx-admin/commit/d0bea10))

## <small>3.6.2 (2021-09-28)</small>

* release: v3.6.2 ([fc11c37](https://github.com/mx-space/mx-admin/commit/fc11c37))
* fix: table sort prop ([6c6bf77](https://github.com/mx-space/mx-admin/commit/6c6bf77))
* fix(deps): pin dependencies ([773a9ed](https://github.com/mx-space/mx-admin/commit/773a9ed))
* fix(deps): update dependency naive-ui to v2.19.3 ([f63d67d](https://github.com/mx-space/mx-admin/commit/f63d67d))
* fix(deps): update dependency vditor to v3.8.7 ([58734e3](https://github.com/mx-space/mx-admin/commit/58734e3))
* chore(deps): update dependency tailwindcss to v2.2.16 ([835905d](https://github.com/mx-space/mx-admin/commit/835905d))
* chore(deps): update typescript-eslint monorepo to v4.32.0 ([979e97f](https://github.com/mx-space/mx-admin/commit/979e97f))

## <small>3.6.1 (2021-09-28)</small>

* release: v3.6.1 ([040da50](https://github.com/mx-space/mx-admin/commit/040da50))
* fix: speed up editor loading, suspense component ([bb615b7](https://github.com/mx-space/mx-admin/commit/bb615b7))

## 3.6.0 (2021-09-28)

* release: v3.6.0 ([808ba40](https://github.com/mx-space/mx-admin/commit/808ba40))
* feat: add codemirror ([75fb704](https://github.com/mx-space/mx-admin/commit/75fb704))
* chore: cleanup ([4c173ff](https://github.com/mx-space/mx-admin/commit/4c173ff))
* refactor: editor toggle component ([c11e468](https://github.com/mx-space/mx-admin/commit/c11e468))
* pref: speed up route change ([6ea9490](https://github.com/mx-space/mx-admin/commit/6ea9490))

## <small>3.5.6 (2021-09-23)</small>

* release: v3.5.6 ([194e3b7](https://github.com/mx-space/mx-admin/commit/194e3b7))
* fix: auto complete tag auto focus ([72923e6](https://github.com/mx-space/mx-admin/commit/72923e6))

## <small>3.3.5 (2021-09-22)</small>

* release: v3.3.5 ([fbdec80](https://github.com/mx-space/mx-admin/commit/fbdec80))
* feat: add new markdown export option ([99dcb20](https://github.com/mx-space/mx-admin/commit/99dcb20))
* chore: remove plugins ([0e1346b](https://github.com/mx-space/mx-admin/commit/0e1346b))

## <small>3.3.4 (2021-09-22)</small>

* release: v3.3.4 ([2583105](https://github.com/mx-space/mx-admin/commit/2583105))
* feat: add shorthand ([d9bba81](https://github.com/mx-space/mx-admin/commit/d9bba81))
* fix: deep diff in system ([0697b56](https://github.com/mx-space/mx-admin/commit/0697b56))

## <small>3.3.3 (2021-09-22)</small>

* release: v3.3.3 ([0a94e61](https://github.com/mx-space/mx-admin/commit/0a94e61))
* fix: after setup reload ([74f6400](https://github.com/mx-space/mx-admin/commit/74f6400))

## <small>3.3.2 (2021-09-20)</small>

* release: v3.3.2 ([8e1c0f5](https://github.com/mx-space/mx-admin/commit/8e1c0f5))
* fix: link state update after del ([b2b5d60](https://github.com/mx-space/mx-admin/commit/b2b5d60))
* feat(notification): open window if not focus ([bca068c](https://github.com/mx-space/mx-admin/commit/bca068c))

## <small>3.3.1 (2021-09-20)</small>

* release: v3.3.1 ([50ab21a](https://github.com/mx-space/mx-admin/commit/50ab21a))
* fix: get location api params ([9851790](https://github.com/mx-space/mx-admin/commit/9851790))

## 3.3.0 (2021-09-20)

* release: v3.3.0 ([6abd422](https://github.com/mx-space/mx-admin/commit/6abd422))
* feat: auto complete for tag ([2affe98](https://github.com/mx-space/mx-admin/commit/2affe98))

## <small>3.2.8 (2021-09-20)</small>

* release: v3.2.8 ([cf183e7](https://github.com/mx-space/mx-admin/commit/cf183e7))
* fix: nav after setup ([cd46f99](https://github.com/mx-space/mx-admin/commit/cd46f99))
* fix: re-set init status ([70436d2](https://github.com/mx-space/mx-admin/commit/70436d2))

## <small>3.2.7 (2021-09-20)</small>

* release: v3.2.7 ([fcbadbd](https://github.com/mx-space/mx-admin/commit/fcbadbd))
* fix: vue hook outside ([30c3b51](https://github.com/mx-space/mx-admin/commit/30c3b51))

## <small>3.2.6 (2021-09-20)</small>

* release: v3.2.6 ([005d83d](https://github.com/mx-space/mx-admin/commit/005d83d))
* chore: update deps ([a775f0a](https://github.com/mx-space/mx-admin/commit/a775f0a))
* fix: reload page after register ([3728522](https://github.com/mx-space/mx-admin/commit/3728522))

## <small>3.2.5 (2021-09-20)</small>

* release: v3.2.5 ([3b14d93](https://github.com/mx-space/mx-admin/commit/3b14d93))
* fix: polling ([c2405c8](https://github.com/mx-space/mx-admin/commit/c2405c8))

## <small>3.2.4 (2021-09-20)</small>

* release: v3.2.4 ([cd8d1d4](https://github.com/mx-space/mx-admin/commit/cd8d1d4))
* fix: route import in prod ([0a3f0d8](https://github.com/mx-space/mx-admin/commit/0a3f0d8))

## <small>3.2.3 (2021-09-19)</small>

* release: v3.2.3 ([e1cfe40](https://github.com/mx-space/mx-admin/commit/e1cfe40))
* fix: get avatar `/undefine` ([830a64b](https://github.com/mx-space/mx-admin/commit/830a64b))
* fix: if !init, nav to `/setup` ([c067888](https://github.com/mx-space/mx-admin/commit/c067888))

## <small>3.2.2 (2021-09-19)</small>

* release: v3.2.2 ([a0ff6ee](https://github.com/mx-space/mx-admin/commit/a0ff6ee))
* feat: setup page ([9d6deb3](https://github.com/mx-space/mx-admin/commit/9d6deb3))

## <small>3.2.1 (2021-09-19)</small>

* release: v3.2.1 ([cc16beb](https://github.com/mx-space/mx-admin/commit/cc16beb))
* feat: polling cron status ([2f8aad3](https://github.com/mx-space/mx-admin/commit/2f8aad3))

## 3.2.0 (2021-09-19)

* release: v3.2.0 ([5d40d8f](https://github.com/mx-space/mx-admin/commit/5d40d8f))
* feat: page proxy ([8b770f6](https://github.com/mx-space/mx-admin/commit/8b770f6))

## <small>3.1.4 (2021-09-19)</small>

* release: v3.1.4 ([296500b](https://github.com/mx-space/mx-admin/commit/296500b))
* feat: pageproxy init ([4c62187](https://github.com/mx-space/mx-admin/commit/4c62187))

## <small>3.1.3 (2021-09-18)</small>

* release: v3.1.3 ([6e48a0c](https://github.com/mx-space/mx-admin/commit/6e48a0c))
* fix: cron date format ([b48f0c3](https://github.com/mx-space/mx-admin/commit/b48f0c3))
* fix: fuck chrome auto-fill ([84a5b90](https://github.com/mx-space/mx-admin/commit/84a5b90))
* fix(deps): pin dependency socket.io-client to 4.2.0 ([40d5968](https://github.com/mx-space/mx-admin/commit/40d5968))
* chore: update deps ([fd265bb](https://github.com/mx-space/mx-admin/commit/fd265bb))

## <small>3.1.2 (2021-09-16)</small>

* release: v3.1.2 ([db6f513](https://github.com/mx-space/mx-admin/commit/db6f513))
* Revert "fix: upper case cos" ([0ec293d](https://github.com/mx-space/mx-admin/commit/0ec293d))

## <small>3.1.1 (2021-09-16)</small>

* release: v3.1.1 ([4a68e52](https://github.com/mx-space/mx-admin/commit/4a68e52))
* fix: upper case cos ([dfd97b3](https://github.com/mx-space/mx-admin/commit/dfd97b3))

## 3.1.0 (2021-09-16)

* release: v3.1.0 ([f99ecc5](https://github.com/mx-space/mx-admin/commit/f99ecc5))
* feat: add log ([493615b](https://github.com/mx-space/mx-admin/commit/493615b))
* chore: cleanup ([4b8d2a0](https://github.com/mx-space/mx-admin/commit/4b8d2a0))

## <small>3.0.1 (2021-09-11)</small>

* release: v3.0.1 ([8f602ed](https://github.com/mx-space/mx-admin/commit/8f602ed))
* fix: patch category directly on posts ([3dfdea1](https://github.com/mx-space/mx-admin/commit/3dfdea1))

## 3.0.0 (2021-09-10)

* release: v3.0.0 ([cdc6fad](https://github.com/mx-space/mx-admin/commit/cdc6fad))
* docs: readme ([a7e6dc3](https://github.com/mx-space/mx-admin/commit/a7e6dc3))
* feat: other improvement ([54823e9](https://github.com/mx-space/mx-admin/commit/54823e9))
* feat: update api version ([d995eac](https://github.com/mx-space/mx-admin/commit/d995eac))
* fix: delete comment ([31b94fb](https://github.com/mx-space/mx-admin/commit/31b94fb))
* chore(deps): pin dependency typescript to v4.3.5 (#117) ([2079680](https://github.com/mx-space/mx-admin/commit/2079680)), closes [#117](https://github.com/mx-space/mx-admin/issues/117)
* chore(deps): update vue monorepo to v3.2.11 (#108) ([1505bcf](https://github.com/mx-space/mx-admin/commit/1505bcf)), closes [#108](https://github.com/mx-space/mx-admin/issues/108)

## 2.5.0 (2021-09-07)

* release: v2.5.0 ([4dda24a](https://github.com/mx-space/mx-admin/commit/4dda24a))
* chore: update deps ([d4daa1f](https://github.com/mx-space/mx-admin/commit/d4daa1f))

## <small>2.4.8 (2021-09-06)</small>

* release: v2.4.8 ([2d7f70a](https://github.com/mx-space/mx-admin/commit/2d7f70a))
* fix: remove `virtualScroll` to improve pref. ([06061bf](https://github.com/mx-space/mx-admin/commit/06061bf))

## <small>2.4.7 (2021-08-31)</small>

* release: v2.4.7 ([865ef4e](https://github.com/mx-space/mx-admin/commit/865ef4e))
* fix: download backup blob ([3d084bb](https://github.com/mx-space/mx-admin/commit/3d084bb))

## <small>2.4.6 (2021-08-19)</small>

* release: v2.4.6 ([a447820](https://github.com/mx-space/mx-admin/commit/a447820))
* fix: mobile layout ([3202735](https://github.com/mx-space/mx-admin/commit/3202735))

## <small>2.4.5 (2021-08-16)</small>

* release: v2.4.5 ([cffad88](https://github.com/mx-space/mx-admin/commit/cffad88))
* fix: vue3 re-render loop what fuck ([19e0a79](https://github.com/mx-space/mx-admin/commit/19e0a79))

## <small>2.4.3 (2021-08-14)</small>

* release: v2.4.3 ([d388b7b](https://github.com/mx-space/mx-admin/commit/d388b7b))

## <small>2.4.2 (2021-08-14)</small>

* release: v2.4.2 ([5f8c35f](https://github.com/mx-space/mx-admin/commit/5f8c35f))
* chore(deps): update dependency @vitejs/plugin-vue to v1.4.0 (#97) ([a4881b2](https://github.com/mx-space/mx-admin/commit/a4881b2)), closes [#97](https://github.com/mx-space/mx-admin/issues/97)
* chore(deps): update dependency eslint-plugin-vue to v7.15.1 (#84) ([e49295b](https://github.com/mx-space/mx-admin/commit/e49295b)), closes [#84](https://github.com/mx-space/mx-admin/issues/84)
* chore(deps): update dependency eslint-plugin-vue to v7.16.0 (#102) ([4a74a55](https://github.com/mx-space/mx-admin/commit/4a74a55)), closes [#102](https://github.com/mx-space/mx-admin/issues/102)
* chore(deps): update typescript-eslint monorepo to v4.29.0 (#95) ([d842f13](https://github.com/mx-space/mx-admin/commit/d842f13)), closes [#95](https://github.com/mx-space/mx-admin/issues/95)
* chore(deps): update typescript-eslint monorepo to v4.29.1 (#100) ([5e0794b](https://github.com/mx-space/mx-admin/commit/5e0794b)), closes [#100](https://github.com/mx-space/mx-admin/issues/100)
* chore(deps): update vue monorepo to v3.2.2 (#101) ([b69a62b](https://github.com/mx-space/mx-admin/commit/b69a62b)), closes [#101](https://github.com/mx-space/mx-admin/issues/101)
* fix(deps): update dependency @vueuse/core to v5.3.0 (#99) ([aae9c53](https://github.com/mx-space/mx-admin/commit/aae9c53)), closes [#99](https://github.com/mx-space/mx-admin/issues/99)
* fix(deps): update dependency naive-ui to v2.16.2 (#96) ([8c42945](https://github.com/mx-space/mx-admin/commit/8c42945)), closes [#96](https://github.com/mx-space/mx-admin/issues/96)
* fix(deps): update dependency vue-router to v4.0.11 (#98) ([b56f4d9](https://github.com/mx-space/mx-admin/commit/b56f4d9)), closes [#98](https://github.com/mx-space/mx-admin/issues/98)

## <small>2.4.1 (2021-08-02)</small>

* release: v2.4.1 ([4629b12](https://github.com/mx-space/mx-admin/commit/4629b12))
* chore: add option ([6e07e78](https://github.com/mx-space/mx-admin/commit/6e07e78))

## 2.4.0 (2021-08-02)

* release: v2.4.0 ([eba276d](https://github.com/mx-space/mx-admin/commit/eba276d))
* feat: improve post and note table view ([2219f3f](https://github.com/mx-space/mx-admin/commit/2219f3f))
* fix(deps): update dependency naive-ui to v2.16.0 (#94) ([fe098ae](https://github.com/mx-space/mx-admin/commit/fe098ae)), closes [#94](https://github.com/mx-space/mx-admin/issues/94)

## <small>2.3.7 (2021-08-01)</small>

* release: v2.3.7 ([2c222dc](https://github.com/mx-space/mx-admin/commit/2c222dc))
* chore: add `--no-git-tag-version` on yarn version ([b7daf4d](https://github.com/mx-space/mx-admin/commit/b7daf4d))
* chore: adjust comment table width ([0d7cefc](https://github.com/mx-space/mx-admin/commit/0d7cefc))

## <small>2.3.6 (2021-08-01)</small>

* v2.3.6 ([a94c176](https://github.com/mx-space/mx-admin/commit/a94c176))
* chore: update deps ([bbf4b7f](https://github.com/mx-space/mx-admin/commit/bbf4b7f))
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.1.7 (#76) ([73131eb](https://github.com/mx-space/mx-admin/commit/73131eb)), closes [#76](https://github.com/mx-space/mx-admin/issues/76)
* chore(deps): update dependency postcss-nested to v5.0.6 (#81) ([1bcfc9f](https://github.com/mx-space/mx-admin/commit/1bcfc9f)), closes [#81](https://github.com/mx-space/mx-admin/issues/81)
* chore(deps): update dependency vue-eslint-parser to v7.10.0 (#80) ([8b6762c](https://github.com/mx-space/mx-admin/commit/8b6762c)), closes [#80](https://github.com/mx-space/mx-admin/issues/80)
* fix(deps): update dependency naive-ui to v2.15.11 (#82) ([5f92f72](https://github.com/mx-space/mx-admin/commit/5f92f72)), closes [#82](https://github.com/mx-space/mx-admin/issues/82)

## <small>2.3.5-1 (2021-07-28)</small>

* v2.3.5-1 ([675f7f6](https://github.com/mx-space/mx-admin/commit/675f7f6))

## <small>2.3.5 (2021-07-28)</small>

* v2.3.5 ([c4adca9](https://github.com/mx-space/mx-admin/commit/c4adca9))
* chore: cname ([40fb625](https://github.com/mx-space/mx-admin/commit/40fb625))
* chore(deps): update dependency @vitejs/plugin-vue to v1.3.0 (#78) ([4163599](https://github.com/mx-space/mx-admin/commit/4163599)), closes [#78](https://github.com/mx-space/mx-admin/issues/78)
* chore(deps): update dependency vite to v2.4.4 (#77) ([b6c2003](https://github.com/mx-space/mx-admin/commit/b6c2003)), closes [#77](https://github.com/mx-space/mx-admin/issues/77)
* chore(deps): update typescript-eslint monorepo to v4.28.5 (#73) ([f0009c3](https://github.com/mx-space/mx-admin/commit/f0009c3)), closes [#73](https://github.com/mx-space/mx-admin/issues/73)
* fix(deps): update dependency js-cookie to v3 (#75) ([8997df7](https://github.com/mx-space/mx-admin/commit/8997df7)), closes [#75](https://github.com/mx-space/mx-admin/issues/75)
* fix(deps): update dependency naive-ui to v2.15.7 (#72) ([b72d525](https://github.com/mx-space/mx-admin/commit/b72d525)), closes [#72](https://github.com/mx-space/mx-admin/issues/72)
* fix(deps): update dependency naive-ui to v2.15.8 (#74) ([4cd4b66](https://github.com/mx-space/mx-admin/commit/4cd4b66)), closes [#74](https://github.com/mx-space/mx-admin/issues/74)
* fix(deps): update dependency naive-ui to v2.15.9 (#79) ([aefc8ba](https://github.com/mx-space/mx-admin/commit/aefc8ba)), closes [#79](https://github.com/mx-space/mx-admin/issues/79)

## <small>2.3.4 (2021-07-25)</small>

* v2.3.4 ([5d07720](https://github.com/mx-space/mx-admin/commit/5d07720))
* fix: avatar load style ([3af2799](https://github.com/mx-space/mx-admin/commit/3af2799))
* release: v2.3.3-beta ([d4b7233](https://github.com/mx-space/mx-admin/commit/d4b7233))

## <small>2.3.3-beta (2021-07-25)</small>

* v2.3.3-beta ([96417f2](https://github.com/mx-space/mx-admin/commit/96417f2))
* release: v2.3.2 ([82c5b74](https://github.com/mx-space/mx-admin/commit/82c5b74))

## <small>2.3.2 (2021-07-25)</small>

* v2.3.2 ([174cde7](https://github.com/mx-space/mx-admin/commit/174cde7))
* release: v2.3.1-alpha ([788d92f](https://github.com/mx-space/mx-admin/commit/788d92f))

## <small>2.3.1-alpha (2021-07-25)</small>

* v2.3.1-alpha ([17b7476](https://github.com/mx-space/mx-admin/commit/17b7476))
* release: v2.3.1 ([9c947bf](https://github.com/mx-space/mx-admin/commit/9c947bf))

## <small>2.3.1 (2021-07-25)</small>

* v2.3.1 ([f0fa4c0](https://github.com/mx-space/mx-admin/commit/f0fa4c0))
* fix(deps): update dependency @vueuse/core to v5.2.0 (#71) ([9947e44](https://github.com/mx-space/mx-admin/commit/9947e44)), closes [#71](https://github.com/mx-space/mx-admin/issues/71)
* fix(deps): update dependency date-fns to v2.23.0 (#68) ([e2d3592](https://github.com/mx-space/mx-admin/commit/e2d3592)), closes [#68](https://github.com/mx-space/mx-admin/issues/68)
* fix(deps): update dependency naive-ui to v2.15.6 (#60) ([9940a4c](https://github.com/mx-space/mx-admin/commit/9940a4c)), closes [#60](https://github.com/mx-space/mx-admin/issues/60)
* chore(deps): update dependency tailwindcss to v2.2.7 (#69) ([fef1f22](https://github.com/mx-space/mx-admin/commit/fef1f22)), closes [#69](https://github.com/mx-space/mx-admin/issues/69)

## 2.3.0 (2021-07-25)

* v2.3.0 ([8f42ca2](https://github.com/mx-space/mx-admin/commit/8f42ca2))
* feat: dark mode ([aa73834](https://github.com/mx-space/mx-admin/commit/aa73834))
* feat: improve search location ([bda48e3](https://github.com/mx-space/mx-admin/commit/bda48e3))

## 2.2.0 (2021-07-24)

* v2.2.0 ([d493e7d](https://github.com/mx-space/mx-admin/commit/d493e7d))
* feat: add custom location ([c180e13](https://github.com/mx-space/mx-admin/commit/c180e13))

## <small>2.1.6 (2021-07-24)</small>

* v2.1.6 ([ab804be](https://github.com/mx-space/mx-admin/commit/ab804be))
* fix: build without output ([bff887a](https://github.com/mx-space/mx-admin/commit/bff887a))

## <small>2.1.5 (2021-07-24)</small>

* v2.1.5 ([8bb04ab](https://github.com/mx-space/mx-admin/commit/8bb04ab))
* fix: note placeholder ([7ec6456](https://github.com/mx-space/mx-admin/commit/7ec6456))
* fix(deps): update dependency @antv/g2 to v4.1.21 (#54) ([d91b8ab](https://github.com/mx-space/mx-admin/commit/d91b8ab)), closes [#54](https://github.com/mx-space/mx-admin/issues/54)
* fix(deps): update dependency @vueuse/core to v5.1.4 (#53) ([8e3488c](https://github.com/mx-space/mx-admin/commit/8e3488c)), closes [#53](https://github.com/mx-space/mx-admin/issues/53)
* chore: update deps ([ee24ce0](https://github.com/mx-space/mx-admin/commit/ee24ce0))
* chore(deps): update dependency eslint-plugin-vue to v7.14.0 (#52) ([b30ecdc](https://github.com/mx-space/mx-admin/commit/b30ecdc)), closes [#52](https://github.com/mx-space/mx-admin/issues/52)
* chore(deps): update dependency tailwindcss to v2.2.6 (#66) ([abcd63d](https://github.com/mx-space/mx-admin/commit/abcd63d)), closes [#66](https://github.com/mx-space/mx-admin/issues/66)
* chore(deps): update dependency vite to v2.4.3 (#65) ([bf75017](https://github.com/mx-space/mx-admin/commit/bf75017)), closes [#65](https://github.com/mx-space/mx-admin/issues/65)
* chore(deps): update dependency vite-plugin-checker to v0.3.2 (#63) ([0629391](https://github.com/mx-space/mx-admin/commit/0629391)), closes [#63](https://github.com/mx-space/mx-admin/issues/63)
* chore(deps): update typescript-eslint monorepo to v4.28.4 (#64) ([cfaf510](https://github.com/mx-space/mx-admin/commit/cfaf510)), closes [#64](https://github.com/mx-space/mx-admin/issues/64)
* feat: auto save for note (beta) ([c24435b](https://github.com/mx-space/mx-admin/commit/c24435b))

## <small>2.1.4 (2021-07-19)</small>

* v2.1.4 ([0a5156c](https://github.com/mx-space/mx-admin/commit/0a5156c))
* chore: eslint config ([9521953](https://github.com/mx-space/mx-admin/commit/9521953))
* chore(deps): update dependency eslint to v7.31.0 (#48) ([74020f5](https://github.com/mx-space/mx-admin/commit/74020f5)), closes [#48](https://github.com/mx-space/mx-admin/issues/48)
* chore(deps): update dependency vite-plugin-checker to v0.3.1 (#62) ([68e859a](https://github.com/mx-space/mx-admin/commit/68e859a)), closes [#62](https://github.com/mx-space/mx-admin/issues/62)
* chore(deps): update vue monorepo (#61) ([199dd2d](https://github.com/mx-space/mx-admin/commit/199dd2d)), closes [#61](https://github.com/mx-space/mx-admin/issues/61)

## <small>2.1.3 (2021-07-17)</small>

* v2.1.3 ([2be67ae](https://github.com/mx-space/mx-admin/commit/2be67ae))
* fix: confirm hook ([f3556ab](https://github.com/mx-space/mx-admin/commit/f3556ab))

## <small>2.1.2 (2021-07-17)</small>

* v2.1.2 ([98cee0f](https://github.com/mx-space/mx-admin/commit/98cee0f))
* feat: auto save hook ([a42a85f](https://github.com/mx-space/mx-admin/commit/a42a85f))
* feat: use dialog confim instead of native confim ([92c3a6e](https://github.com/mx-space/mx-admin/commit/92c3a6e))
* fix: adjust table width ([ecbacf9](https://github.com/mx-space/mx-admin/commit/ecbacf9))
* fix(deps): update dependency monaco-editor to v0.26.1 (#59) ([2c91166](https://github.com/mx-space/mx-admin/commit/2c91166)), closes [#59](https://github.com/mx-space/mx-admin/issues/59)

## <small>2.1.1 (2021-07-15)</small>

* v2.1.1 ([5ded75b](https://github.com/mx-space/mx-admin/commit/5ded75b))
* fix: correct wrong property base on dto ([994151d](https://github.com/mx-space/mx-admin/commit/994151d))
* feat: loading editor toggle ([ba5bff6](https://github.com/mx-space/mx-admin/commit/ba5bff6))

## 2.1.0 (2021-07-14)

* v2.1.0 ([e6b006b](https://github.com/mx-space/mx-admin/commit/e6b006b))
* chore: update deps ([4fd9776](https://github.com/mx-space/mx-admin/commit/4fd9776))
* chore(deps): pin dependency vite-plugin-checker to 0.2.0 (#47) ([239ee0c](https://github.com/mx-space/mx-admin/commit/239ee0c)), closes [#47](https://github.com/mx-space/mx-admin/issues/47)
* chore(deps): update dependency autoprefixer to v10.3.1 (#56) ([a7cfec0](https://github.com/mx-space/mx-admin/commit/a7cfec0)), closes [#56](https://github.com/mx-space/mx-admin/issues/56)
* chore(deps): update dependency vite to v2.4.2 (#57) ([e089932](https://github.com/mx-space/mx-admin/commit/e089932)), closes [#57](https://github.com/mx-space/mx-admin/issues/57)
* chore(deps): update typescript-eslint monorepo to v4.28.3 (#58) ([bf033e5](https://github.com/mx-space/mx-admin/commit/bf033e5)), closes [#58](https://github.com/mx-space/mx-admin/issues/58)
* fix: vditor value change ([7727ed1](https://github.com/mx-space/mx-admin/commit/7727ed1))
* fix(deps): update dependency naive-ui to v2.15.4 (#55) ([8fe74f1](https://github.com/mx-space/mx-admin/commit/8fe74f1)), closes [#55](https://github.com/mx-space/mx-admin/issues/55)

## <small>2.0.1 (2021-07-09)</small>

* fix: ([c2bfc5e](https://github.com/mx-space/mx-admin/commit/c2bfc5e))
* v2.0.1 ([24e097e](https://github.com/mx-space/mx-admin/commit/24e097e))
* chore: ci ([22a5556](https://github.com/mx-space/mx-admin/commit/22a5556))
* chore: structure ([e42509e](https://github.com/mx-space/mx-admin/commit/e42509e))
* chore(deps): update dependency @vitejs/plugin-vue-jsx to v1.1.6 (#38) ([51906b0](https://github.com/mx-space/mx-admin/commit/51906b0)), closes [#38](https://github.com/mx-space/mx-admin/issues/38)
* chore(deps): update dependency prettier to v2.3.2 (#33) ([a78e076](https://github.com/mx-space/mx-admin/commit/a78e076)), closes [#33](https://github.com/mx-space/mx-admin/issues/33)
* chore(deps): update dependency typescript to v4.3.5 (#43) ([1f79285](https://github.com/mx-space/mx-admin/commit/1f79285)), closes [#43](https://github.com/mx-space/mx-admin/issues/43)
* chore(deps): update dependency vite to v2.4.1 (#50) ([42def04](https://github.com/mx-space/mx-admin/commit/42def04)), closes [#50](https://github.com/mx-space/mx-admin/issues/50)
* chore(deps): update typescript-eslint monorepo to v4.28.2 (#39) ([f0a2029](https://github.com/mx-space/mx-admin/commit/f0a2029)), closes [#39](https://github.com/mx-space/mx-admin/issues/39)
* chore(deps): update vue monorepo (#45) ([411fb3e](https://github.com/mx-space/mx-admin/commit/411fb3e)), closes [#45](https://github.com/mx-space/mx-admin/issues/45)
* fix: auto complete ([514cd25](https://github.com/mx-space/mx-admin/commit/514cd25))
* fix: downgrade io to v2 ([643803e](https://github.com/mx-space/mx-admin/commit/643803e))
* fix: login twice ([2858644](https://github.com/mx-space/mx-admin/commit/2858644))
* fix: mobile responsive ([c27f28a](https://github.com/mx-space/mx-admin/commit/c27f28a))
* fix: table font-size ([a7346df](https://github.com/mx-space/mx-admin/commit/a7346df))
* fix(comment): reply text reset ([7771f1c](https://github.com/mx-space/mx-admin/commit/7771f1c))
* fix(deps): pin dependencies (#42) ([d38711b](https://github.com/mx-space/mx-admin/commit/d38711b)), closes [#42](https://github.com/mx-space/mx-admin/issues/42)
* fix(deps): pin dependency date-fns to 2.22.1 (#34) ([de4814d](https://github.com/mx-space/mx-admin/commit/de4814d)), closes [#34](https://github.com/mx-space/mx-admin/issues/34)
* fix(deps): update dependency @vueuse/core to v5.1.0 (#49) ([6bcf118](https://github.com/mx-space/mx-admin/commit/6bcf118)), closes [#49](https://github.com/mx-space/mx-admin/issues/49)
* fix(deps): update dependency naive-ui to v2.15.1 (#41) ([52ed68c](https://github.com/mx-space/mx-admin/commit/52ed68c)), closes [#41](https://github.com/mx-space/mx-admin/issues/41)
* fix(deps): update dependency naive-ui to v2.15.3 (#46) ([04309e7](https://github.com/mx-space/mx-admin/commit/04309e7)), closes [#46](https://github.com/mx-space/mx-admin/issues/46)
* feat: add count ([f7fb1b5](https://github.com/mx-space/mx-admin/commit/f7fb1b5))
* feat: add plain editor ([56ee553](https://github.com/mx-space/mx-admin/commit/56ee553))
* feat: add shiju ([7669989](https://github.com/mx-space/mx-admin/commit/7669989))
* feat: edit column update ([d530f91](https://github.com/mx-space/mx-admin/commit/d530f91))
* feat: editor toggle ([be758ca](https://github.com/mx-space/mx-admin/commit/be758ca))
* feat: login bg custom ([becfda8](https://github.com/mx-space/mx-admin/commit/becfda8))
* refactor: some structure adjust ([2c8ec9d](https://github.com/mx-space/mx-admin/commit/2c8ec9d))

## 2.0.0 (2021-06-26)

* v2.0.0 ([458e472](https://github.com/mx-space/mx-admin/commit/458e472))
* chore: add prod env ([376525c](https://github.com/mx-space/mx-admin/commit/376525c))
* chore: change import vue ([1b22894](https://github.com/mx-space/mx-admin/commit/1b22894))
* chore: ci env ([15238bd](https://github.com/mx-space/mx-admin/commit/15238bd))
* chore: cleanup ([371b8ca](https://github.com/mx-space/mx-admin/commit/371b8ca))
* chore: cleanup ([4e4a4db](https://github.com/mx-space/mx-admin/commit/4e4a4db))
* chore: deps ([5a0934b](https://github.com/mx-space/mx-admin/commit/5a0934b))
* chore: optimize icon deps ([ef98503](https://github.com/mx-space/mx-admin/commit/ef98503))
* chore: remove compress because github pages not support ([977d2d3](https://github.com/mx-space/mx-admin/commit/977d2d3))
* chore: remove deps ([170e67a](https://github.com/mx-space/mx-admin/commit/170e67a))
* chore: vite https ([b41cc71](https://github.com/mx-space/mx-admin/commit/b41cc71))
* chore(deps): update dependency eslint-plugin-vue to v7.12.1 (#31) ([b4aae62](https://github.com/mx-space/mx-admin/commit/b4aae62)), closes [#31](https://github.com/mx-space/mx-admin/issues/31)
* chore(deps): update dependency tailwindcss to v2.2.4 (#20) ([e0b9059](https://github.com/mx-space/mx-admin/commit/e0b9059)), closes [#20](https://github.com/mx-space/mx-admin/issues/20)
* chore(deps): update typescript-eslint monorepo to v4.28.0 (#29) ([200f7a4](https://github.com/mx-space/mx-admin/commit/200f7a4)), closes [#29](https://github.com/mx-space/mx-admin/issues/29)
* chore(deps): update vue monorepo (#28) ([965dc8d](https://github.com/mx-space/mx-admin/commit/965dc8d)), closes [#28](https://github.com/mx-space/mx-admin/issues/28)
* fix: ci ([aae8719](https://github.com/mx-space/mx-admin/commit/aae8719))
* fix: dashboard grid wrong route ([48d1717](https://github.com/mx-space/mx-admin/commit/48d1717))
* fix: note columns width ([b81be34](https://github.com/mx-space/mx-admin/commit/b81be34))
* fix: table loading stat ([5cd5770](https://github.com/mx-space/mx-admin/commit/5cd5770))
* fix: v1 compatibility ([b1f472d](https://github.com/mx-space/mx-admin/commit/b1f472d))
* fix(deps): update dependency @antv/g2 to v4.1.19 (#30) ([ca3c39d](https://github.com/mx-space/mx-admin/commit/ca3c39d)), closes [#30](https://github.com/mx-space/mx-admin/issues/30)
* fix(deps): update dependency camelcase-keys to v7 (#32) ([f2d63ed](https://github.com/mx-space/mx-admin/commit/f2d63ed)), closes [#32](https://github.com/mx-space/mx-admin/issues/32)
* fix(deps): update dependency naive-ui to v2.14.0 (#24) ([544e822](https://github.com/mx-space/mx-admin/commit/544e822)), closes [#24](https://github.com/mx-space/mx-admin/issues/24)
* ci: pnpm ([1d653b2](https://github.com/mx-space/mx-admin/commit/1d653b2))
* pref: debounce resize ([3cc09da](https://github.com/mx-space/mx-admin/commit/3cc09da))
* refactor: use-confirm ([c214b96](https://github.com/mx-space/mx-admin/commit/c214b96))
* feat: add amap ([a9b1b9f](https://github.com/mx-space/mx-admin/commit/a9b1b9f))
* feat: add skeleton to data analyze ([18b1ff8](https://github.com/mx-space/mx-admin/commit/18b1ff8))
* release: v2.0.0-beta.3 ([b80a107](https://github.com/mx-space/mx-admin/commit/b80a107))

## 2.0.0-beta.3 (2021-06-21)

* v2.0.0-beta.3 ([5aaa46e](https://github.com/mx-space/mx-admin/commit/5aaa46e))

## 2.0.0-beta.2 (2021-06-20)

* v2.0.0-beta.2 ([4d72aed](https://github.com/mx-space/mx-admin/commit/4d72aed))
* feat: tailwind override style ([9da40f1](https://github.com/mx-space/mx-admin/commit/9da40f1))
* fix: analyze table col width ([269943c](https://github.com/mx-space/mx-admin/commit/269943c))
* fix: icon libray too large lead to vite build out of memory (#26) ([3e957dd](https://github.com/mx-space/mx-admin/commit/3e957dd)), closes [#26](https://github.com/mx-space/mx-admin/issues/26)
* fix: mobile style ([61b8c8d](https://github.com/mx-space/mx-admin/commit/61b8c8d))
* fix: typo ([5017ca7](https://github.com/mx-space/mx-admin/commit/5017ca7))
* chore: add license ([7be87b2](https://github.com/mx-space/mx-admin/commit/7be87b2))
* chore: ipv6 ([aa3f1c0](https://github.com/mx-space/mx-admin/commit/aa3f1c0))
* chore: optimize build (#27) ([191b5dc](https://github.com/mx-space/mx-admin/commit/191b5dc)), closes [#27](https://github.com/mx-space/mx-admin/issues/27)
* chore: remove sth ([1760238](https://github.com/mx-space/mx-admin/commit/1760238))
* chore(deps): update dependency vite to v2.3.8 (#4) ([c7b7f73](https://github.com/mx-space/mx-admin/commit/c7b7f73)), closes [#4](https://github.com/mx-space/mx-admin/issues/4)

## 2.0.0-alpha (2021-06-20)

* release: v2.0.0-alpha ([e39643c](https://github.com/mx-space/mx-admin/commit/e39643c))
* docs: readme ([52f15f5](https://github.com/mx-space/mx-admin/commit/52f15f5))
* feat: add login page ([c25db8d](https://github.com/mx-space/mx-admin/commit/c25db8d))
* feat: add login stat section ([5f9e555](https://github.com/mx-space/mx-admin/commit/5f9e555))
* feat: analyze view 1/2 ([753e6b1](https://github.com/mx-space/mx-admin/commit/753e6b1))
* feat: backup view ([98bda9e](https://github.com/mx-space/mx-admin/commit/98bda9e))
* feat: category view 1/2 ([16de4e9](https://github.com/mx-space/mx-admin/commit/16de4e9))
* feat: chart ([6055c37](https://github.com/mx-space/mx-admin/commit/6055c37))
* feat: comment ([13abecf](https://github.com/mx-space/mx-admin/commit/13abecf))
* feat: comment multi-action ([a964c51](https://github.com/mx-space/mx-admin/commit/a964c51))
* feat: content scrollbar custom ([887c2a4](https://github.com/mx-space/mx-admin/commit/887c2a4))
* feat: dashboard ([6d90108](https://github.com/mx-space/mx-admin/commit/6d90108))
* feat: friend audit view ([0006c41](https://github.com/mx-space/mx-admin/commit/0006c41))
* feat: friend view ([d24d3c6](https://github.com/mx-space/mx-admin/commit/d24d3c6))
* feat: init ([44a1bcf](https://github.com/mx-space/mx-admin/commit/44a1bcf))
* feat: layout ([5a406b1](https://github.com/mx-space/mx-admin/commit/5a406b1))
* feat: modify note weather & mood quickly ([bd2a8ce](https://github.com/mx-space/mx-admin/commit/bd2a8ce))
* feat: monaco editor ([f480a83](https://github.com/mx-space/mx-admin/commit/f480a83))
* feat: new a bug when filter and sort ([34b049f](https://github.com/mx-space/mx-admin/commit/34b049f))
* feat: note list ([c29c9e1](https://github.com/mx-space/mx-admin/commit/c29c9e1))
* feat: open site ([1308328](https://github.com/mx-space/mx-admin/commit/1308328))
* feat: page list view ([6349616](https://github.com/mx-space/mx-admin/commit/6349616))
* feat: parse markdown ([a8ecb63](https://github.com/mx-space/mx-admin/commit/a8ecb63))
* feat: parse markdown editor monaco ([e991eff](https://github.com/mx-space/mx-admin/commit/e991eff))
* feat: post table ([9a610dd](https://github.com/mx-space/mx-admin/commit/9a610dd))
* feat: post table ([70b81e6](https://github.com/mx-space/mx-admin/commit/70b81e6))
* feat: project view ([d8ee940](https://github.com/mx-space/mx-admin/commit/d8ee940))
* feat: project view ([fe8a69d](https://github.com/mx-space/mx-admin/commit/fe8a69d))
* feat: relative time popover ([c7179bb](https://github.com/mx-space/mx-admin/commit/c7179bb))
* feat: router guard ([253c445](https://github.com/mx-space/mx-admin/commit/253c445))
* feat: router suspense ([6e1af64](https://github.com/mx-space/mx-admin/commit/6e1af64))
* feat: say table ([851e0de](https://github.com/mx-space/mx-admin/commit/851e0de))
* feat: security view ([a94a90e](https://github.com/mx-space/mx-admin/commit/a94a90e))
* feat: setting tab 1 user ([6f03fc4](https://github.com/mx-space/mx-admin/commit/6f03fc4))
* feat: setting tab done ([214cb66](https://github.com/mx-space/mx-admin/commit/214cb66))
* feat: sidebar ([301bb40](https://github.com/mx-space/mx-admin/commit/301bb40))
* feat: sidebar ([bad2b2a](https://github.com/mx-space/mx-admin/commit/bad2b2a))
* feat: sidebar scrollbar ([b943551](https://github.com/mx-space/mx-admin/commit/b943551))
* feat: socket ([5fe5c88](https://github.com/mx-space/mx-admin/commit/5fe5c88))
* feat: system setting 1/2 ([4019fb7](https://github.com/mx-space/mx-admin/commit/4019fb7))
* feat: un-save post router hack ([632f84b](https://github.com/mx-space/mx-admin/commit/632f84b))
* feat: write base ([e202961](https://github.com/mx-space/mx-admin/commit/e202961))
* feat: write view ([8d12a7d](https://github.com/mx-space/mx-admin/commit/8d12a7d))
* feat(input): add material input ([464f91d](https://github.com/mx-space/mx-admin/commit/464f91d))
* feat(sidebar): add sidebar ([8ec2d41](https://github.com/mx-space/mx-admin/commit/8ec2d41))
* fix: build css prority ([91a4630](https://github.com/mx-space/mx-admin/commit/91a4630))
* fix: comment box kaomoji ([5085e30](https://github.com/mx-space/mx-admin/commit/5085e30))
* fix: eslint fix ([7da6935](https://github.com/mx-space/mx-admin/commit/7da6935))
* fix: hash router ([11091dd](https://github.com/mx-space/mx-admin/commit/11091dd))
* fix: n-spin ([15e36cc](https://github.com/mx-space/mx-admin/commit/15e36cc))
* fix: omit non-value env ([7513280](https://github.com/mx-space/mx-admin/commit/7513280))
* fix: prod bug ([116175e](https://github.com/mx-space/mx-admin/commit/116175e))
* fix: route build menu ([2b7019c](https://github.com/mx-space/mx-admin/commit/2b7019c))
* fix: say api url ([940f37f](https://github.com/mx-space/mx-admin/commit/940f37f))
* fix: sidebar layout responsive ([df1c6cd](https://github.com/mx-space/mx-admin/commit/df1c6cd))
* fix(deps): update dependency naive-ui to v2.12.0 (#10) ([d49ffab](https://github.com/mx-space/mx-admin/commit/d49ffab)), closes [#10](https://github.com/mx-space/mx-admin/issues/10)
* fix(deps): update dependency vue-router to v4.0.9 (#7) ([b0c5baa](https://github.com/mx-space/mx-admin/commit/b0c5baa)), closes [#7](https://github.com/mx-space/mx-admin/issues/7)
* chore: backup; ([c028e32](https://github.com/mx-space/mx-admin/commit/c028e32))
* chore: cleanup ([7205fa6](https://github.com/mx-space/mx-admin/commit/7205fa6))
* chore: config ([4700f29](https://github.com/mx-space/mx-admin/commit/4700f29))
* chore: Configure Renovate (#1) ([3b0cd37](https://github.com/mx-space/mx-admin/commit/3b0cd37)), closes [#1](https://github.com/mx-space/mx-admin/issues/1)
* chore: deps ([dc40da4](https://github.com/mx-space/mx-admin/commit/dc40da4))
* chore: env ([fb14512](https://github.com/mx-space/mx-admin/commit/fb14512))
* chore: extract component ([0308d71](https://github.com/mx-space/mx-admin/commit/0308d71))
* chore: fake language ([24b1f85](https://github.com/mx-space/mx-admin/commit/24b1f85))
* chore: rename ([6f20fb9](https://github.com/mx-space/mx-admin/commit/6f20fb9))
* chore: route and spa redirect ([c2d7b2d](https://github.com/mx-space/mx-admin/commit/c2d7b2d))
* chore: route name ([47185d3](https://github.com/mx-space/mx-admin/commit/47185d3))
* chore: router ([991d1af](https://github.com/mx-space/mx-admin/commit/991d1af))
* chore: update deps ([fd1b970](https://github.com/mx-space/mx-admin/commit/fd1b970))
* chore: update deps ([33cc816](https://github.com/mx-space/mx-admin/commit/33cc816))
* chore(deps): pin dependencies (#2) ([b411b75](https://github.com/mx-space/mx-admin/commit/b411b75)), closes [#2](https://github.com/mx-space/mx-admin/issues/2)
* chore(deps): update c-hive/gha-yarn-cache action to v2 (#22) ([6e45a42](https://github.com/mx-space/mx-admin/commit/6e45a42)), closes [#22](https://github.com/mx-space/mx-admin/issues/22)
* chore(deps): update dependency qs to v6.10.1 (#3) ([8ca61fc](https://github.com/mx-space/mx-admin/commit/8ca61fc)), closes [#3](https://github.com/mx-space/mx-admin/issues/3)
* chore(deps): update dependency typescript to v4.3.3 (#19) ([769ce25](https://github.com/mx-space/mx-admin/commit/769ce25)), closes [#19](https://github.com/mx-space/mx-admin/issues/19)
* revert: router hash ([0857282](https://github.com/mx-space/mx-admin/commit/0857282))
* ci: add workflow ([92bc6e5](https://github.com/mx-space/mx-admin/commit/92bc6e5))
* ci: yarn cache ([b0be98d](https://github.com/mx-space/mx-admin/commit/b0be98d))
* fix(!!!!!ts): tsconfig `esModuleInterop` !!!! ([b6e8b6c](https://github.com/mx-space/mx-admin/commit/b6e8b6c))
* refactor: naive ui and fxxk vue3 ([a33bba8](https://github.com/mx-space/mx-admin/commit/a33bba8))
* refactor(table): extract hook ([6595601](https://github.com/mx-space/mx-admin/commit/6595601))
* archieve: fuxk vue 3. ([edf3d2e](https://github.com/mx-space/mx-admin/commit/edf3d2e))
* fuck: fuck vue3 again ([510ef10](https://github.com/mx-space/mx-admin/commit/510ef10))
* fuck: vue3 fuck you!!!! ([87700c6](https://github.com/mx-space/mx-admin/commit/87700c6))
* fuck: what fuck primevue ????? ([694842d](https://github.com/mx-space/mx-admin/commit/694842d))
