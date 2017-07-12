tabs = document.querySelectorAll('.tab-top')

tabs.forEach((header) => {
  header.addEventListener('click', function() {
    console.log('clicked');
    const tabContent = this.nextElementSibling
    if(tabContent.classList.contains('visible-tab')) {
      tabContent.classList.remove('visible-tab')
      this.classList.remove('visible-top')
    } else {
      removeAllVisibility()
      tabContent.classList.add('visible-tab')
      this.classList.add('visible-top')
    }

  })
})

const removeAllVisibility = function() {
  tabs.forEach((tab) => {
      tab.classList.remove('visible-top')
      tab.nextElementSibling.classList.remove('visible-tab')
  })
}
