const url = 'https://norma.nomoreparties.space/api'

async function getIngredients() {
  return (
    await fetch(`${url}/ingredients`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Err ${res.status}`)
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
  )
}

export {getIngredients};
