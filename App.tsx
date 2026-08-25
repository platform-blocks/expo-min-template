import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, Column, PlatformBlocksProvider, Text, Title } from '@platform-blocks/ui';

export default function App() {
  return (
    <SafeAreaProvider>
      <PlatformBlocksProvider>
        <StatusBar style="auto" />
        <Column style={{ flex: 1 }} justify="center" align="center" p="lg" gap="lg">
          <Card variant="elevated" p="lg" style={{ maxWidth: 480, width: '100%' }}>
            <Column gap="md">
              <Title order={1}>Hello, Platform Blocks 👋</Title>
              <Text colorVariant="secondary">
                Edit App.tsx to start building. The provider is already set up, so every
                component, hook, and theme token is ready to use.
              </Text>
              <Button
                title="Read the docs"
                variant="filled"
                onPress={() => {
                  console.log('https://platform-blocks.com/getting-started');
                }}
              />
            </Column>
          </Card>
        </Column>
      </PlatformBlocksProvider>
    </SafeAreaProvider>
  );
}
