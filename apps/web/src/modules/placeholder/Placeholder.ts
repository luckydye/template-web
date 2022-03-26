import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './Placeholder.scss';

@customElement('web-placeholder')
export default class Settings extends LitElement {
	static get styles() {
		return [
			styles
		];
	}

	render() {
		return html`
			<div>Placeholder</div>
		`;
	}
}
