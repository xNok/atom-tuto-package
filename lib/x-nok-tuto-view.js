'use babel';

export default class XNokTutoView {

  constructor(serializedState) {
    /********
    * It is good practice to create main element in the constructor, so we can
    * manage there life cycle more easily. Moreover, It act a bit like a content
    * table
    *********/

    // 1. Create root modalElement
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('x-nok-tuto');

    //
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.modalElement.remove();
  }

  // 1. Provide the Model Panel content
  getModalElement() {
    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Display a simple message box';
    message.classList.add('message');
    this.modalElement.appendChild(message);

    return this.modalElement;
  }

}
