import { StyleSheet, Text, View } from 'react-native';
import { Bottombar } from './components/Bottombar';


export default function App() {
  return (
      <Bottombar/>
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