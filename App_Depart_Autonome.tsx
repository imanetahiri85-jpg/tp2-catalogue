import { View, Text, StyleSheet, ScrollView, FlatList  } from 'react-native';
 type Evenement = {
  id: string;
  titre: string;
  categorie: string;
  capacite: number;
  inscrits: number;
};
const evenement :Evenement []=[
  {id:'E01',titre:'Atelier React',categorie:'Atelier', capacite:25,inscrits:25},
  {id:'E02',titre:'Conférence IA',categorie:'Conférence', capacite:70,inscrits:52},
  {id:'E03',titre:'Sécurité mobile',categorie:'Atelier', capacite:20,inscrits:17},
  {id:'E04',titre:'Design UI',categorie:'Atelier', capacite:18,inscrits:9},
  {id:'E05',titre:'Forum projets',categorie:'Atelier', capacite:50,inscrits:49},
  {id:'E06',titre:'Découverte Git',categorie:'Atelier', capacite:24,inscrits:24},
];
type PlacesProps={
  capacite: number;
  inscrits: number;
};
function placesRestantes(e:PlacesProps ): number {
  return Math.max(0, e.capacite - e.inscrits);
};
function statutEvenement(e:PlacesProps ): string {
  const r = placesRestantes(e);

  if (r === 0) {
    return 'Complet';
  } else if (r >= 1 && r <= 3) {
    return 'Presque complet';
  } else {
    return 'Ouvert';
  }
};
const nombreEvenement = evenement.length;
const nombreComplets = evenement.filter(
  e => placesRestantes(e) === 0
).length;

const nombreAvecPlaces = evenement.filter(
  e => placesRestantes(e) > 0
).length;

const sommePlacesRestantes = evenement.reduce(
  (total, e) => total + placesRestantes(e),
  0
);
const atelierOuverts = evenement.filter(
  e => e.categorie == 'Atelier' && placesRestantes(e) > 0
);
type BadgeEtatProps={
  statut:string;
};
function BadgeEtat({ statut }: BadgeEtatProps) {
  let couleur = '';
 if (statut === 'Complet') {
    couleur = '#f10505';
 } else if (statut === 'Presque complet') {
    couleur = '#17b973';
 } else {
    couleur = '#1ad61a';
 }
return (
    <View style={{ backgroundColor: couleur, padding: 8 }}>
      <Text>{statut}</Text>
    </View>
  );
}
type CarteEvenementProps = {
  evenement: Evenement;
};

function CarteEvenement({ evenement }: CarteEvenementProps) {
  return (
    <View style={styles.carte}>
      <Text style={styles.titreCarte}>
        {evenement.titre}
      </Text>

      <Text style={styles.categorie}>
        {evenement.categorie}
      </Text>

      <Text>
        {placesRestantes(evenement)} places libres
      </Text>

      <BadgeEtat statut={statutEvenement(evenement)} />
    </View>
  );
}
type BlocStatistiqueProps = {
  libelle: string;
  nombre: number;
};

function BlocStatistique({ libelle, nombre }: BlocStatistiqueProps) {
  return (
    <View style={styles.bloc}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.libelle}>{libelle}</Text>
    </View>
  );
}
const mode = 'tous';

const evenementsAffiches =
  mode === 'tous'
    ? evenement
    : evenement.filter(
        e => e.categorie === 'Atelier' && placesRestantes(e) > 0
      );
export default function App() {
return (
    <View style={styles.container}>

      <Text style={styles.header}>
        CampusAgenda
      </Text>

      <Text style={styles.subtitle}>
        Événements du campus
      </Text>

      <View style={styles.statistiques}>

        <BlocStatistique
          libelle="Événements au total"
          nombre={nombreEvenement}
        />

        <BlocStatistique
          libelle="Événements complets"
          nombre={nombreComplets}
        />

        <BlocStatistique
          libelle="Événements avec des places"
          nombre={nombreAvecPlaces}
        />

        <BlocStatistique
          libelle="Places restantes"
          nombre={sommePlacesRestantes}
        />

      </View>

      <Text style={styles.titreListe}>
        {mode === 'tous'
          ? 'Tous les événements'
          : 'Ateliers disponibles'}
      </Text>

      <FlatList
        data={evenementsAffiches}

        renderItem={({ item }) => (
          <CarteEvenement evenement={item} />
        )}

        keyExtractor={item => item.id}

        ListEmptyComponent={
          <Text style={styles.messageVide}>
            Aucun événement disponible.
          </Text>
        }
      />

    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F6F2',
    padding: 20,
    paddingTop: 50
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333'
  },

  subtitle: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 20
  },

  statistiques: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  bloc: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center'
  },

  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333'
  },

  libelle: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
    marginTop: 5
  },

  titreListe: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333'
  },

  carte: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },

  titreCarte: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    flexShrink: 1
  },

  categorie: {
    color: '#888888',
    marginVertical: 5
  },

  badge: {
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginTop: 10
  },

  messageVide: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 30,
    fontSize: 16
  }

});
