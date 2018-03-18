import './styles.scss';
import './components/UserCard/UserCard.scss'
import 'bootstrap/dist/css/bootstrap.min.css' // Just the styles to give things some sugar...

import Modal from './components/Modal/Modal'
import './components/UserCard/UserCard'

export class Main {
  constructor(e) {
    const modal = new Modal(document.querySelector('.modal-overlay'))
    window.openModal = modal.open.bind(modal)
    window.handleChange = modal.handleChange.bind(modal)
    window.login = modal.login.bind(modal)
  }
  
}

document.addEventListener('DOMContentLoaded', (e) => {window.app = new Main()});