
import { View, Text, StyleSheet } from 'react-native';

const etudiants = [
  { id: 1, nom: 'Amine', note: 16 },
  { id: 2, nom: 'Youssef', note: 8 },
  { id: 3, nom: 'Salma', note: 14 },
  { id: 4, nom: 'Omar', note: 12 }
];

const total = etudiants.reduce((s, e) => s + e.note, 0);
const moyenne = total / etudiants.length;

export default function App() {
  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>Notes des étudiants</Text>
      <Text style={styles.moyenne}>Moyenne : {moyenne}/20</Text>
      {etudiants.map((e) => (
        <Text key={e.id} style={styles.ligne}>
          {e.nom} : {e.note}/20
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: { flex: 1, justifyContent: 'center', padding: 26,
    backgroundColor: '#F2F7FD' },
  titre: { fontSize: 24, fontWeight: 'bold', color: '#00235C',
    marginBottom: 16 },
  moyenne: { fontSize: 19, marginBottom: 20, color: '#003796' },
  ligne: { fontSize: 17, paddingVertical: 8, color: '#00235C' }
});
