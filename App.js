import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import songs from './models/songs';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{position: "absolute", zIndex: -10}} source={songs[0].art}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});