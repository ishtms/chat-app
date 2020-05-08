const _0x5ebb = ['run', 'username', 'socket', 'dispatch'];
(function(_0x149632, _0x5ebb5b) {
    const _0x34aac0 = function(_0x3113f3) {
        while (--_0x3113f3) {
            _0x149632['push'](_0x149632['shift']());
        }
    };
    _0x34aac0(++_0x5ebb5b);
}(_0x5ebb, 0xba));
const _0x34aa = function(_0x149632, _0x5ebb5b) {
    _0x149632 = _0x149632 - 0x0;
    let _0x34aac0 = _0x5ebb[_0x149632];
    return _0x34aac0;
};
import _0x1b3fd0 from 'react';
import _0x4c3c5c from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import _0x22f5ec from 'redux-saga';
import './index.css';
import _0xbbb88e from './App';
import _0x2d9a62 from './registerServiceWorker';
import _0x594b31 from './sockets';
import _0x46fd92 from './reducers';
import _0xc099eb from './sagas';
import _0x2f6fd8 from './utils/name';
const sagaMiddleware = _0x22f5ec();
const store = createStore(_0x46fd92, applyMiddleware(sagaMiddleware));
const socket = _0x594b31(store[_0x34aa('0x1')], _0x2f6fd8);
const _0x3113f3 = {};
_0x3113f3[_0x34aa('0x0')] = socket;
_0x3113f3[_0x34aa('0x3')] = _0x2f6fd8;
sagaMiddleware[_0x34aa('0x2')](_0xc099eb, _0x3113f3);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);

_0x2d9a62();


