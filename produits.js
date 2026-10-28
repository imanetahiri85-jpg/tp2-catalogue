let produits =[
    {id:1,Nom:"Clavier",Categorie:"Accessoires",Prix:120,Stock:5},
    {id:2,Nom:"souris",Categorie:"Accessoires",Prix:80,Stock:8},
    {id:3,Nom:"Ecran",Categorie:"Informatique",Prix:900,Stock:0},
    {id:4,Nom:"Casque",Categorie:"Accessoires",Prix:240,Stock:3},

]
console.log ("catalogue des produits");
for(let i=0;i<produits.length;i++){
    console.log(produits[i].Nom +"-"+produits[i].Prix +"MAD");
}
let produitsDisponibles=[];
for (i=0;i<produits.length;i++){
    if (produits[i].Stock > 0){
      produitsDisponibles.push(produits[i]);  
    }
}
console.log("Produits disponibles :");
console.log(produitsDisponibles);
console.log("Nombre de produits disponibles : " + produitsDisponibles.length);
let valeurStock = produits.reduce((total, produit) => {
    return total + produit.Prix * produit.Stock;
}, 0);

console.log("Valeur totale du stock : " + valeurStock + " MAD");
let produitsEnStock = produits.filter(p => p.Stock > 0);

if (produitsEnStock.length > 0) {
    let moinsCher = produitsEnStock.reduce((min, p) => {
        return p.Prix < min.Prix ? p : min;
    });

    console.log("Produit le moins cher : " + moinsCher.Nom);
    console.log("Prix : " + moinsCher.Prix + " MAD");
} else {
    console.log("Aucun produit disponible");
}
let resume =produits.map(p =>{
    return p.Nom +"-"+p.Prix +"MAD"+"-"+ p.Stock +"unites";

});
console.log("le resume des produits est:");
console.log(resume);