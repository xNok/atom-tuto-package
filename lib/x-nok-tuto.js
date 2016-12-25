'use babel';

import XNokTutoView from './x-nok-tuto-view';
import { CompositeDisposable } from 'atom';

export default {

  xNokTutoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.xNokTutoView = new XNokTutoView(state.xNokTutoViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.xNokTutoView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'x-nok-tuto:toggle': () => this.toggle()
    }));
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

  toggle() {
    console.log('XNokTuto was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
