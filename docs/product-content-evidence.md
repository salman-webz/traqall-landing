# Product content evidence

Reviewed 2026-11-01 against `/Users/salman/Projects/traqallFE` (portal on port 3001). Marketing changes are confined to `/Users/salman/Developer/builldings` (port 3000). No private API data is copied or connected to the website.

## Sources and decisions

All paths below are relative to the portal repository. The dashboard prefix is `app/[lang]/(dashboard)/`.

| Module | Implementation reviewed | Website coverage |
| --- | --- | --- |
| Timecards | `lib/timecards/statusWorkflow.ts`, `lib/timecards/timecardExportFields.ts`, dashboard `timecards/views/TimecardFilterModal.tsx`, `TimecardShow.tsx`, `TimecardViewDrawer.tsx`, and `timecards/modalpopup/timecard/` entry components | Draft submission, submitted approval/rejection, bulk and copy entry, hour splits, filters, configurable exports |
| Equipment | `lib/equipment/status-options.ts`, `lib/equipment/equipmentCheckout.ts`, dashboard `equipment/views/EquipmentViewDrawer.tsx` | Six statuses, checkout/return, usage with operator/project/cost code, meter, maintenance, attachments, linked issues |
| Materials | `lib/materials/log-types.ts`, `lib/materials/status-options.ts`, dashboard `materials/views/MaterialViewDrawer.tsx`, `components/materials/MaterialCatalogDetailPanel.tsx` | Catalog and project stock, six movement types, stock filters, alert quantity, unit cost, vendor and PO references |
| Small Tools | `lib/smalltools/status-options.ts`, `lib/smalltools/quantityActionCopy.ts`, dashboard `smalltools/views/SmallToolViewDrawer.tsx` | Company condition vs project status, quantities, checkout/check-in, transfer, returns, due dates, loss/damage, inventory history |
| Issues | `lib/issues/issue-types.ts`, `lib/issues/issue-tracking-options.ts`, `lib/issues/related-records.ts`, `components/issues/IssueDetailsPanel.tsx`, `IssueFilters.tsx` | Current issue types, priority labels, five workflow statuses, assignment/due date, related records, comments and activity |

The central `lib/services.js` supplies summaries, features, workflows, details, and module FAQs. The FAQ hub consumes the same module FAQs to prevent inconsistent descriptions. The main navigation now uses Issues, matching the portal. The existing /small-issues use-case page remains accessible and inherits the verified Issues workflow and screenshot.

Removed unsupported GPS-ready fleet marketing, compliance-ready assurances, blanket real-time claims, onboarding time promises, support response promises, and FAQ plan entitlements. Described stock indicators rather than promising delivered notifications, and configurable exports rather than guaranteed payroll compatibility. Existing illustrative assets remain contextual; the five user-provided mobile screenshots remain mapped to their original modules and are labeled as mobile list views on detail pages.

## Verification scope

Source inspection confirms implemented UI behavior, fields, options, and request paths. It does not prove backend availability, delivery of notifications, or enabled permissions in a particular account. Live portal interaction requires a working authenticated session; no credentials were read or bypassed. Public marketing pages do not fetch portal customer data. Existing screenshot content was supplied by the user and retained; no new customer records were captured.

## Checks performed

- Production build: passed, including all five module pages and the legacy small-issues page.
- Existing automated suite: 18 tests passed.
- Local asset check and whitespace/diff check: passed.
- Portal HTTP request returned 200, but fresh browser inspection produced a blank page and a subsequent navigation timed out. Authenticated portal screens and backend transactions were not verified.
- Marketing development server started on port 3000; the existing portal listener on port 3001 was left unchanged.
- Browser checks: homepage, all five module pages, small-issues, FAQ, services, and contact returned 200; three workflow steps and loaded screenshots verified on every module page. All 11 discovered internal link destinations returned successfully. No JavaScript page errors were captured. The Issues page at 390px viewport had no horizontal overflow; its mobile preview was visually inspected.

## Budget (November 4, 2026)

Marketing `/budget` copy was checked against `/Users/salman/Projects/traqallFE/components/budget/ProjectBudgetPage.tsx`, `BudgetEditorTable.tsx`, `BudgetPerformanceTable.tsx`, and `lib/budget/types.ts` / `api.ts`.

Verified: project selection; Performance and Editor tabs; labor, equipment, and materials budgets by cost code; category/project budget, actual, remaining and percentage metrics; searchable/sortable performance table; expandable category breakdowns; save/cancel; unsaved-change guard; financial visibility and edit permissions. Backend cost calculation was not independently verified; copy does not promise forecasting or accounting integrations.

Budget slide artwork is AI-generated and saved locally at `public/assets/images/slider/generated/budget.png`. It is an illustration, not a portal screenshot. The user-provided Budget screenshot was visible in chat but was not accessible as a local attachment file; it has not been substituted with generated UI.

The supplied Budget desktop screenshot is now saved at `public/assets/images/portal/budget.png` and displayed before Budget Capabilities using the shared portal preview. The homepage slider retains its separate generated artwork.
