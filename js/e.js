const el = document.getElementById('e')
const el_value = document.getElementById('e_value')

el.onclick = (e) => {
  e.preventDefault();

  setTimeout(() => {
    const val = ['dan','@','dmontgomery','.','net']
    el_value.innerText = val.join('')
    el.href = 'mailto: '+el.innerText
    el.title = ''
  }, 10)
}