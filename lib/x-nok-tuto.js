'use babel';

import XNokTutoView from './x-nok-tuto-view';
import { CompositeDisposable } from 'atom';

export default {

  xNokTutoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.xNokTutoView = new XNokTutoView(state.xNokTutoViewState);

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    /*----------------------------------------------------------------------*/
    // Tuto n°1 Modal Panel

    // 1. Define a Modal Panel
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.xNokTutoView.getModalElement(),
      visible: false
    });

    // 1. Register command that toggles the Modal message
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'x-nok-tuto:toggle': () => this.toggleModalPanel()
    }));

    /*----------------------------------------------------------------------*/

  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.xNokTutoView.destroy();
  },

  serialize() {
    return {
      xNokTutoViewState: this.xNokTutoView.serialize()
    };
  },

  // 1. Display/Hide the Model Pane
  toggleModalPanel() {
    console.log('XNokTuto was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
