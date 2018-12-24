import { observable, action } from 'mobx';

let appState = observable({
	count: 0,
	incCounter: action.bound(function() {
		appState.count += 1;
	}),
	decCounter: action.bound(function() {
		appState.count -= 1;
	})
});

export default appState;
