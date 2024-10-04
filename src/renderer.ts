const information = document.getElementById('info');
// @ts-ignore
information.innerText = `This app is using Chrome(v${versions.chrome()}) and Node(v${versions.node()}) with Electron(v${versions.electron()}).`

const func = async () => {
  // @ts-ignore
  const response = await window.versions.ping()
  console.log(response)
}

func()
