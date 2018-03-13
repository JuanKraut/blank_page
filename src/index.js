import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css' // Just the styles to give things some sugar...

/** Class representing a modal window. */
class Modal {
      /**
     * Represents modal window..
     * @param {object} Object - Object in DOM.
     */
  constructor(overlay) {
    this.overlay = overlay;
    console.log(typeof overlay)
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
     * @return {number}
     */
  open() {
    this.overlay.classList.remove('is-hidden')
  }
      /**
     * Closes the modal.
     * @return {number}
     */
  close() {
    this.overlay.classList.add('is-hidden')
  }
}

const modal = new Modal(document.querySelector('.modal-overlay'))
window.openModal = modal.open.bind(modal)