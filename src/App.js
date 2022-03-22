import logo from './logo.svg';
import './App.css';

function App() {

// javascript code om de API aan te roepen



  return (
    <div>
    <header>Filmzoeker</header>
    <div class="zoeken">     
          <input type="text" placeholder="search..."></input>
        <button type="submit" class="search-button"> Search </button> 
    </div>
        <main>
    <div class="gridContainer">
    <div class="posterBox"> 
        <div class="titel">spiderman</div> 
        <img src="images/spiderman.webp" alt="Spiderman" class="poster" /> 
        <div class="beschrijving"> Dit is een beschrijving </div>
    </div>
    <div class="posterBox">
        <div class="titel">Dumbo</div> 
        <img src="images/dumbo.jpg" alt="Dumbo" class="poster" /> 
        <div class="beschrijving"> Dit is een beschrijving </div>
    </div>
    <div class="posterBox">
        <div class="titel">1917</div> 
        <img src="images/1917.webp" alt="1917" class="poster" /> 
        <div class="beschrijving"> Dit is een beschrijving </div>
    </div>
    <div class="posterBox">
        <div class="titel">Dune</div> 
        <img src="images/dune.jpg" alt="dune" class="poster" /> 
        <div class="beschrijving"> Dit is een beschrijving </div>
    </div>
    
    </div>
    
    
    
    
        </main>
    
        <footer>
    
    
        </footer>
        </div>
  );
}

export default App;