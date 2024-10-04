const {
  app, // アプリケーションのイベントライフサイクルを制御する
  BrowserWindow // ウィンドウを作成、管理するクラス
} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
