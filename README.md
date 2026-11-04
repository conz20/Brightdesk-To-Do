# Brightdesk To Do

<p align="center"><img src="assets/branding/mark.svg" width="82" height="82" alt="Brightdesk brand mark"><br><strong>brightdesk</strong></p>
<p align="center"><img src="assets/branding/icons/to-do.svg" width="112" height="112" alt="Brightdesk To Do application icon"></p>

<p align="center"><strong>Manage daily tasks, due dates and personal priorities.</strong></p>

<p align="center"><a href="https://raw.githubusercontent.com/connormolloy12/Brightdesk-To-Do/main/assets/previews/to-do.svg"><img src="assets/previews/to-do.svg" width="100%" alt="Brightdesk To Do workspace design preview"></a></p>

<p align="center"><sub>Select the preview to open the full-size artwork.</sub></p>

> **Visual example:** This is the proposed Brightdesk To Do experience. It is a design concept, not a screenshot of a finished application.

## Standalone implementation

This repository contains the runnable standalone desktop application source for Brightdesk To-Do. The actual workspace is rendered by the app code, and the professional design layer is loaded at runtime from `src/design-system.css`. The preview artwork above remains a design concept, not a captured screenshot.

- [Desktop application shell](src/index.html)
- [Product module](src/todo-service.js)
- [Professional design system](src/design-system.css)
- [UI integration tests](tests/todo-ui-integration.test.js)
- [Shared Brightdesk Suite](https://github.com/connormolloy12/Brightdesk-suite)

## Shared Brightdesk design standard

The planned product follows the [Brightdesk visual and interaction standard](https://github.com/connormolloy12/Brightdesk-suite/blob/main/docs/BRIGHTDESK_VISUAL_STANDARD.md) for branding, icon usage, layout, responsive behaviour and accessibility.

## Product experience

Brightdesk To Do is planned as a simple local-first task manager for daily priorities, reminders and personal follow-through.

## Planned capabilities

- My Day, Important, Planned and Completed views.
- Fast task entry with dates, priorities and notes.
- Clear progress and completed states.
- Search and sort personal tasks.
- Keep task data on this device.

## Implementation status

**Standalone source committed to main.** This repository now includes an Electron app shell, the app modules, the shared visual design layer, Rust engine integration, build scripts and automated UI tests. The preview artwork remains concept art rather than a screenshot of the running application.

## Design brief

See [docs/DESIGN_BRIEF.md](docs/DESIGN_BRIEF.md) for planned screens, navigation and acceptance targets.

## Related project

[Brightdesk Office Suite](https://github.com/connormolloy12/Brightdesk-suite)
