export default {
	emit(type: string) {
		window.dispatchEvent(new Event(type));
	},

	on(type: string, callback: (ev: Event) => void) {
		window.addEventListener(type, callback);
	},

	PlaceHolder: 'event-placeholder',
};
