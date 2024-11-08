
import { Search } from './components/Search';
import './App.css';
import { List } from './components/List';
import { Create } from './components/Create';
import { useState } from 'react';

function App() {

  //desde aqui envio el estado a los componentes que necesite
  const [listState, setListState] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div class="layout">
          <header class="header">
            <div class="logo">
              <div class="play"></div>
            </div>
            <h1>Mis Pelis</h1>
          </header>

          <nav class="nav">
            <ul>
              <li><a href="#">INICIO</a></li>
              <li><a href="#">PELICULAS</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CONTACTO</a></li>
            </ul>
          </nav>

          <section class="content">
            {/* paso 2 propiedades para compartir componentes del padre App
              al hijo List */}
            <List listState={listState} setListState={setListState} />
          </section>

          <aside class="lateral">
            {/* paso 2 propiedades para compartir componentes del padre App
              al hijo Search */}
            <Search listState={listState} setListState={setListState} />
            {/* paso 1 propiedad para compartir componentes del padre App
              al hijo Create,   */}
            <Create setListState={setListState} />
          </aside>

          <footer class="footer">
            &copy; Máster en JS ES12 yTypeScript
          </footer>

        </div>
      </header>
    </div>
  );
}

export default App;
