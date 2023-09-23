import { SplashScreen } from '@capacitor/splash-screen';
import { runningOnM1 } from 'capacitor-m1-checker';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `Running on m1-checker `;
    }

    connectedCallback() {
      const self = this;
    
      self.shadowRoot.querySelector('#take-photo').addEventListener('click', async function (e) {
        try {
          const runningOnM1 = await runningOnM1();

          this.innerHTML = `Running on m1-checker ${runningOnM1}`;
        } catch (e) {
          console.warn('User cancelled', e);
        }
      });
    }
  }
);
