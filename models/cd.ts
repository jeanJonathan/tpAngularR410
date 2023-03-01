
/*Declaration de la classe Modele cd */
export class Cd {
  id!:number ; //id est un identifiant unique pour chaque Cd
  title!:string;//title est le titre du Cd.
  author!:string;//author est le nom de l'artiste ou du groupe qui a créé le Cd
  price!:number;//price est le prix du Cd
  thumbnail!:string;//thumbnail est l'image miniature associée au Cd
  dateDeSortie!:Date;//dateDeSortie est la date à laquelle le Cd a été publié
  quantite!:number;//quantite représente la quantité de Cd en stockd
  onsale?:boolean;//onsale est une propriété optionnelle qui indique si le Cd est en vente ou non
  constructor(
    id: number,
    title: string,
    author: string,
    price: number,
    thumbnail: string,
    dateDeSortie: Date,
    quantite: number,
    onsale?: boolean
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.thumbnail = thumbnail;
    this.dateDeSortie = dateDeSortie;
    this.quantite = quantite;
    if(onsale!=undefined){
      this.onsale = onsale;
    }
    }

}
//Prof: Angular exploite a fond les design pattern
/* exemple dans main
const newCd = new cd();
newCd.id = 1;
newCd.title = 'Thriller';
newCd.author = 'Michael Jackson';
newCd.price = 10;
newCd.thumbnail = 'https://example.com/thriller.jpg';
newCd.dateDeSortie = new Date('1982-11-30');
newCd.quantite = 20;
newCd.onsale = true;
*/
