# expo-min-template

Minimal [Expo](https://expo.dev) starter for [Platform Blocks](https://platform-blocks.com) — a single screen with the provider set up and nothing else to delete. Runs on iOS, Android, and web.

## Use this template

Click **Use this template** on GitHub to create your own repository from it, or scaffold directly:

```bash
npx create-expo-app@latest my-app --template https://github.com/platform-blocks/expo-min-template
```

## Get started

```bash
npm install
npx expo start
```

Press `i` for iOS simulator, `a` for Android emulator, or `w` for web.

## What's inside

- [`@platform-blocks/ui`](https://www.npmjs.com/package/@platform-blocks/ui) with all required peer dependencies installed
- `PlatformBlocksProvider` wired up in [`App.tsx`](./App.tsx) — theming, dark mode (follows the OS setting), overlays, and haptics all work out of the box
- TypeScript in strict mode

## Learn more

- [Getting started](https://platform-blocks.com/getting-started) — installation, provider, first component
- [Components](https://platform-blocks.com/components) — every component with live demos
- [Full template](https://github.com/platform-blocks/expo-template) — Expo Router, tabs, dark-mode toggle, tests, and linting

## License

MIT
