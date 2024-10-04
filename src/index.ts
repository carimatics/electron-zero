const {
  app, // アプリケーションのイベントライフサイクルを制御する
  BrowserWindow, // ウィンドウを作成、管理するクラス
  ipcMain,
} = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  ipcMain.handle('ping', () => 'pong')

  // アクティブになった時にBrowserWindowがない場合はウィンドウを作成する
  app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// macOSの場合は、ウィンドウが閉じられてもアプリケーションを終了しない
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
