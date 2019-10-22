window.addEventListener('load', function() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    const svgObject = <HTMLObjectElement>button.querySelector('.btn__svg-icon_object');

    if (svgObject) {
      const svgObjectIcon = svgObject.contentDocument.querySelector('svg');

      button.addEventListener('mouseenter', function() {
        svgObjectIcon.setAttribute('stroke', '#000');
      });

      button.addEventListener('mouseleave', function() {
        svgObjectIcon.setAttribute('stroke', '#fff');
      });
    }
  });

  const checkBox = document.querySelector('.btn_checkbox');
  if (checkBox) {
    let checked = false;

    checkBox.addEventListener('click', function() {
      if (checked) {
        checked = false;
        window.location.href = '#';
      } else {
        checked = true;
        window.location.href = '#check-square';
      }
    });
  }
});
