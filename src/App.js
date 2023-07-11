import './App.css';
import Texto from './components/texto/texto.js';
import Button from './components/button/button.js';

const showAlert = (label) => {
  alert(`A label do botão é: '${label}' `)
}

function App() {
  return (
    <div className='app'>

    <Texto 
      color='red'
      textTransform='uppercase'
    />

    <Texto />

    <Button
      label='Clique aqui para receber um alert' 
      showAlert={showAlert}
    />

    <Button
      label='Mais um alert para testar' 
      showAlert={showAlert}
    />
    
    </div>
  );
}

export default App;
