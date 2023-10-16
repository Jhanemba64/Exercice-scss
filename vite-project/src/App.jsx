import "/App.scss";

function Card() {
  return (
    <div className="card">
      <img src="https://picsum.photos/500/500" alt="Album" className="image" />
      <h1>Les Belles choses</h1>
      <p className="text">⭐⭐⭐⭐ 500 </p>
      <h2 className="Stitle text">Pourquoi c'est beau?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, fuga.
        Voluptatem pariatur inventore ipsa tempora.
      </p>
      <hr />
      <h2 className="Stitle text">Subtitle</h2>
      <button className="Item">Forme</button>
      <button className="Item">Couleur</button>
      <button className="Item">Peau</button>
      <button className="Item">Vitesse</button>
      <button className="Action">Imagination</button>
    </div>
  );
}

export default Card;
