window.addEventListener('load', function() {
  const buttons = document.querySelectorAll('.btn')

  buttons.forEach(button => {
    const svgObject = <HTMLObjectElement>button.querySelector('.btn__svg-icon_object')

    if (svgObject) {
      const svgObjectIcon = svgObject.contentDocument.querySelector('svg')

      button.addEventListener('mouseenter', function() {
        svgObjectIcon.setAttribute('stroke', '#000')
      })

      button.addEventListener('mouseleave', function() {
        svgObjectIcon.setAttribute('stroke', '#fff')
      })
    }
  })
})
