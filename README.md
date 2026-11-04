# Brightdesk To Do

<p align="center"><img src="assets/branding/mark.svg" width="76" height="76" alt="Brightdesk mark"></p>
<p align="center"><img src="assets/branding/icons/to-do.svg" width="112" height="112" alt="Brightdesk To Do icon"></p>

<p align="center"><strong>Keep personal tasks, daily priorities and plans organised.</strong></p>

<p align="center"><a href="https://raw.githubusercontent.com/connormolloy12/Brightdesk-To-Do/main/assets/previews/to-do.svg"><img src="assets/previews/to-do.svg" width="100%" alt="Brightdesk To Do design preview"></a></p>

> **Preview note:** This artwork shows the intended visual direction. It is not a screenshot of the running software.

## Product

Brightdesk To Do is part of Brightdesk Office Suite. This repository contains the product-specific desktop edition and uses the shared Brightdesk engine. It opens directly into Brightdesk To Do; product switching is disabled.

## What you can do

- Organise work in My Day, Important, Planned, Tasks and Completed views.
- Add tasks, notes, due dates and priorities.
- Mark tasks complete or restore them.
- Search tasks and filter your work.
- Keep task data stored locally on this device.

## Development

Use Node.js **24.22.2**.

```sh
npm ci
npm run check:node
npm test
npm run rust:check
```

## Build desktop installers

Run the matching command on the target operating system:

```sh
npm run dist:win
npm run verify:desktop:win

npm run dist:mac
npm run verify:desktop:mac

npm run dist:linux
npm run verify:desktop:linux
```

The desktop build includes the Brightdesk Rust Node-API 8 engine. Rust formatting, Clippy, Cargo tests, native compilation and native integration tests must pass before a platform is considered verified. A JavaScript fallback keeps normal development startup available when the native module has not yet been built.

## Design brief

See [docs/DESIGN_BRIEF.md](docs/DESIGN_BRIEF.md) and the [shared Brightdesk visual standard](https://github.com/connormolloy12/Brightdesk-suite/blob/main/docs/BRIGHTDESK_VISUAL_STANDARD.md).

## Release status

Version **0.1.0** is the first-release development line. No download is advertised until the relevant platform build, checksum verification and release approval have completed.

## Related project

[Brightdesk Office Suite](https://github.com/connormolloy12/Brightdesk-suite) brings all ten approved Brightdesk products together.

## Identity and licence

Brightdesk is independent and is not affiliated with Microsoft. The source is provided under the MIT licence, with third-party notices included in the repository.
