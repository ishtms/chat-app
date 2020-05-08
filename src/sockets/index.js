const _0x4070 = ['parse', 'data', 'type', 'users', 'send', 'message', 'stringify', 'ws://localhost:8989', 'name', 'ADD_USER', 'onopen'];
(function(_0x49edbc, _0x407029) {
    const _0x3a5bb9 = function(_0x42d896) {
        while (--_0x42d896) {
            _0x49edbc['push'](_0x49edbc['shift']());
        }
    };
    _0x3a5bb9(++_0x407029);
}(_0x4070, 0x19a));
const _0x3a5b = function(_0x49edbc, _0x407029) {
    _0x49edbc = _0x49edbc - 0x0;
    let _0x3a5bb9 = _0x4070[_0x49edbc];
    return _0x3a5bb9;
};
import * as _0x9a6635 from '../constants/ActionTypes';
import {addUser, messageReceived, populateUsersList} from '../actions';
const setupSocket = (_0x3e3aa6,_0xfc20da)=>{
    const _0x4a6ab9 = new WebSocket(_0x3a5b('0x4'));
    _0x4a6ab9[_0x3a5b('0x7')] = ()=>{
        const _0x4f3ceb = {};
        _0x4f3ceb[_0x3a5b('0xa')] = _0x9a6635[_0x3a5b('0x6')];
        _0x4f3ceb[_0x3a5b('0x5')] = _0xfc20da;
        _0x4a6ab9[_0x3a5b('0x1')](JSON[_0x3a5b('0x3')](_0x4f3ceb));
    }
    ;
    _0x4a6ab9['onmessage'] = _0x3ab2af=>{
        const _0x1bed8e = JSON[_0x3a5b('0x8')](_0x3ab2af[_0x3a5b('0x9')]);
        switch (_0x1bed8e[_0x3a5b('0xa')]) {
        case _0x9a6635['ADD_MESSAGE']:
            _0x3e3aa6(messageReceived(_0x1bed8e[_0x3a5b('0x2')], _0x1bed8e['author']));
            break;
        case _0x9a6635[_0x3a5b('0x6')]:
            _0x3e3aa6(addUser(_0x1bed8e[_0x3a5b('0x5')]));
            break;
        case _0x9a6635['USERS_LIST']:
            _0x3e3aa6(populateUsersList(_0x1bed8e[_0x3a5b('0x0')]));
            break;
        default:
            break;
        }
    }
    ;
    return _0x4a6ab9;
}
;
export default setupSocket;
