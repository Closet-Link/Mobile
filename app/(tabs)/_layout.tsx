import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none', // 임시로 탭바 숨김 (현재는 홈 화면만 있음)
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
        }}
      />
    </Tabs>
  );
} 