import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/button/src/vaadin-button.js';
import '@vaadin/checkbox/src/vaadin-checkbox.js';

@customElement('calculator-view')
export class CalculatorView extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      `;
  }

  render() {
    return html`
<vaadin-vertical-layout style="width: 320px; height: 100%; align-items: center;">
 <h2 style="color:dark">Calculatrice</h2>
 <vaadin-checkbox id="extendedChk" style="align-self: flex-start;" checked type="checkbox" value="on">
   Extended 
 </vaadin-checkbox>
 <label style="align-self: stretch; color:white; background-color:DodgerBlue; text-align:right; padding-right: var(--lumo-space-s);" id="ecran"></label>
 <vaadin-horizontal-layout theme="spacing-s" style="align-self: stretch; justify-content: space-between;">
  <vaadin-button tabindex="0" id="chf7">
    7 
  </vaadin-button>
  <vaadin-button tabindex="0" id="chf8">
    8 
  </vaadin-button>
  <vaadin-button tabindex="0" id="chf9">
    9 
  </vaadin-button>
  <vaadin-button tabindex="0" style=" background-color:   #f7b783 " id="clear">
    CE 
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing-s" style="align-self: stretch; justify-content: space-between;">
  <vaadin-button tabindex="0" id="chf4">
    4 
  </vaadin-button>
  <vaadin-button tabindex="0" id="chf5">
    5 
  </vaadin-button>
  <vaadin-button tabindex="0" id="chf6">
    6 
  </vaadin-button>
  <vaadin-button tabindex="0" style=" background-color:  #c0d2dc " id="mul">
    x 
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing-s" style="align-self: stretch; justify-content: space-between;">
  <vaadin-button tabindex="0" id="chf1">
    1 
  </vaadin-button>
  <vaadin-button tabindex="0" id="chf2">
    2 
  </vaadin-button>
  <vaadin-button tabindex="0" id="chf3">
    3 
  </vaadin-button>
  <vaadin-button tabindex="0" style=" background-color:  #c0d2dc " id="div">
    / 
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing-s" style="align-self: stretch; justify-content: space-between;">
  <vaadin-button tabindex="0" id="chf0">
    0 
  </vaadin-button>
  <vaadin-button tabindex="0" style=" background-color: #dcc5c0 " id="equal">
    = 
  </vaadin-button>
  <vaadin-button tabindex="0" style=" background-color:  #c0d2dc " id="plus">
    + 
  </vaadin-button>
  <vaadin-button tabindex="0" style=" background-color:  #c0d2dc " id="minus">
    - 
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="spacing-s" id="extendedLayout" style="align-self: stretch; justify-content: space-between; flex-shrink: 1;">
  <vaadin-button id="inverse" tabindex="0" style="padding: var(--lumo-space-s);">
    1/x 
  </vaadin-button>
  <vaadin-button tabindex="0" id="cos" style="padding: var(--lumo-space-s);">
    cos 
  </vaadin-button>
  <vaadin-button tabindex="0" id="sin" style="padding: var(--lumo-space-s);">
    sin 
  </vaadin-button>
  <vaadin-button tabindex="0" id="tan" style="padding: var(--lumo-space-s);">
    tan 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
