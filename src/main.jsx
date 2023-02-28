import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Font awesome
import './assets/library/fontawesome/css/all.min.css';

// Linea icons
import './assets/library/linea/arrows/styles.css';
import './assets/library/linea/basic/styles.css';
import './assets/library/linea/ecommerce/styles.css';
import './assets/library/linea/software/styles.css';
import './assets/library/linea/weather/styles.css';

// Animate
import './assets/library/animate/animate.css';

// Stylesheet
import './assets/css/style.css';
import './assets/css/media.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
