console.log("TP2 : gestion des notes");
const etudiants=[
    {id:1,nom:"Amine",note:16},
    {id:2,nom:"Youssef",note:8},
    {id:3,nom:"Slama",note:14},
    {id:4,nom:"Omar",note:12},
];
console.log(etudiants);
console.log("Premier :", etudiants[0].nom);
console.log("Effectif :", etudiants.length);
function noteValide(note) {
  return Number.isFinite(note) &&
   note >= 0 && note <= 20;
}
console.log(noteValide(16));
console.log(noteValide(25));
function moyenne(notes) {
 if (notes.length === 0) return null;
 const total = notes.reduce(
      (somme, note) => somme + note, 0
 );
 return total / notes.length;
};
const notes = etudiants.map((e) => e.note);
console.log("Moyenne :", moyenne(notes));
const admis = etudiants.filter(
  (e) => e.note >= 10
);
console.log("Admis :", admis.length);
const lignes = etudiants.map((e) => {
 const decision = e.note >= 10 ? "Admis" : "Ajourné";
 return `${e.nom} - ${e.note}/20 - ${decision}`;
});
for (const ligne of lignes) {
 console.log(ligne);
};
console.log(10=="10");
console.log(10==="10");
const {nom,note}=etudiants[0];
console.log(`${nom}:${note}/20`);
