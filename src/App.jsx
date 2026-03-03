import CardJogo from './components/CardJogo/CardJogo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="games">
        <CardJogo
          capa = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6vHAXhRVOv-BM2DW_BGHG5iQxI1us2VARg&s'
          titulo = 'Pokemon Diamond'
          generos = 'Turn Based, Monster Tamer'
          preco = 'R$349.00'
          onsale = {false}
        />
        <CardJogo
          capa='https://s2-techtudo.glbimg.com/2LsNulRJZqBtyfkjyLcp2XehTHw=/0x0:300x200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/B/v/umypMrRmaEBqroWEoOIA/glbimg.com-po-tt-f-300x200-2013-07-30-screen-shot-2013-07-30-at-11.02.35-am.png'
          titulo='Deadpool - The Game'
          generos='Hack and Slash, Heróis'
          preco='R$59.99'
          onsale={false}
        />
        <CardJogo
          capa='https://www.adrenaline.com.br/wp-content/uploads/2024/10/Vessel-of-Hatred-diablo-iv-novidades-1-912x569.jpg'
          titulo='Diablo IV'
          generos='Dungeon Crawler, RPG'
          preco='R$199.99'
          onsale={true}
        />
        <CardJogo
          capa='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBWC8NSh8q8u90hIOZK2bKmb63GqglQM_6Q&s'
          titulo='The Outlast Trials'
          generos='Survival Horror, Coop'
          preco='R$87.00'
          onsale={true}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;