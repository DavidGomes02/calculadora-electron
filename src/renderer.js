function calcularMedia() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const num3 = parseFloat(document.getElementById('num3').value);
  const num4 = parseFloat(document.getElementById('num4').value);
  const aluno = String(document.getElementById('aluno').value);

  const media = (num1 + num2 + num3 + num4) / 4;

  if (media < 7) {
    document.getElementById('result').innerText = `O aluno ${aluno} não conseguiu a média.`;
  } else {
    document.getElementById('result').innerText = `A média do aluno ${aluno} é: ${media.toFixed(2)}`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
  });
});

const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('path');

app.on('ready', function createWindow() {
  nativeTheme.themeSource = 'dark';
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    resizable: false,
    icon: 'src/cal.ico',
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js')
    }
  });
  mainWindow.loadFile('src/index.html');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
