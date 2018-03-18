import template from './modal.template.html'

/** Class representing a modal window. */
export default class Modal {
  /**
 * Represents modal window..
 * @param {object} Object - Object in DOM.
 */
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.close-button')
    closeButton.addEventListener('click', this.close.bind(this))

    overlay.addEventListener('click', e => {
      if (e.srcElement.className === this.overlay.className) {
        this.close()
      }
    })
  }
  /**
   * Opens the modal.
   */
  open() {
    this.overlay.classList.remove('is-hidden')
  }
  /**
 * Closes the modal.
 */
  close() {
    let overlay = this.overlay
    overlay.querySelector('.user-name').value = ''
    overlay.querySelector('.user-pass').value = ''
    overlay.classList.add('is-hidden')
  }

  handleChange(usrInput) {
    this.name = usrInput;
  }
  login(e) {
    let overlay = this.overlay
    var name = overlay.querySelector('.user-name').value
    var pass = overlay.querySelector('.user-pass').value
    if(name && pass) {
      console.log(name, pass)
      console.log('LOGIN IN')
      this.close()
    } else {
      return
    }
  }
}

document.getElementById('modal').innerHTML = template;

