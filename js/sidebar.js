export default function sidebar() {
  const d = document
  const body = d.querySelector('body')

  d.addEventListener('click', (e) => {
    const sidebar = d.querySelector('.sidebar')
    const modeText = d.querySelector('.mode-text')

    if (e.target.matches('.toggle') || e.target.matches('.toggle *')) {
      sidebar.classList.toggle('close')
    }

    if (
      e.target.matches('.toggle-switch') ||
      e.target.matches('.toggle-switch *')
    ) {
      body.classList.toggle('dark')
      if (body.classList.contains('dark')) {
        modeText.innerText = 'Light mode'
      } else {
        modeText.innerText = 'Dark mode'
      }
    }
  })
}
