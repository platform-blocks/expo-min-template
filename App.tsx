import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, Column, PlocksProvider, Text, Title } from '@plocks/ui';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PlocksProvider>
          <StatusBar style="auto" />
          <Column style={{ flex: 1 }} justify="center" align="center" p="lg" gap="lg">
            <Card variant="elevated" p="lg" style={{ maxWidth: 480, width: '100%' }}>
              <Column gap="md">
                <Title order={1}>Hello, plocks 👋</Title>
                <Text c="secondary">
                  Edit App.tsx to start building. The provider is already set up, so every
                  component, hook, and theme token is ready to use.
                </Text>
                <Button
                  title="Read the docs"
                  variant="filled"
                  onPress={() => {
                    console.log('https://plocks.dev/getting-started');
                  }}
                />
              </Column>
            </Card>
          </Column>
        </PlocksProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
