const _0x5c38 = ['env', 'This\x20web\x20app\x20is\x20being\x20served\x20cache-first\x20by\x20a\x20service\x20', 'indexOf', 'onstatechange', 'origin', 'reload', 'controller', 'register', 'unregister', 'get', '[::1]', 'Content\x20is\x20cached\x20for\x20offline\x20use.', 'load', 'serviceWorker', 'catch', 'log', 'addEventListener', 'javascript', 'error', 'match', 'then', 'status', '/service-worker.js', 'NODE_ENV', 'No\x20internet\x20connection\x20found.\x20App\x20is\x20running\x20in\x20offline\x20mode.', 'localhost', 'Error\x20during\x20service\x20worker\x20registration:', 'hostname', 'ready', 'location', 'state', 'PUBLIC_URL', 'production'];
(function(_0x5351e7, _0x5c3829) {
    const _0x224051 = function(_0x1ac147) {
        while (--_0x1ac147) {
            _0x5351e7['push'](_0x5351e7['shift']());
        }
    };
    _0x224051(++_0x5c3829);
}(_0x5c38, 0x1c2));
const _0x2240 = function(_0x5351e7, _0x5c3829) {
    _0x5351e7 = _0x5351e7 - 0x0;
    let _0x224051 = _0x5c38[_0x5351e7];
    return _0x224051;
};
const isLocalhost = Boolean(window[_0x2240('0x8')][_0x2240('0x6')] === _0x2240('0x4') || window[_0x2240('0x8')][_0x2240('0x6')] === _0x2240('0x16') || window[_0x2240('0x8')][_0x2240('0x6')][_0x2240('0x1f')](/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
export default function register() {
    if (process[_0x2240('0xc')][_0x2240('0x2')] === _0x2240('0xb') && _0x2240('0x19')in navigator) {
        const _0x1c322e = new URL(process[_0x2240('0xc')][_0x2240('0xa')],window[_0x2240('0x8')]);
        if (_0x1c322e['origin'] !== window[_0x2240('0x8')][_0x2240('0x10')]) {
            return;
        }
        window[_0x2240('0x1c')](_0x2240('0x18'), ()=>{
            const _0x220801 = process[_0x2240('0xc')][_0x2240('0xa')] + _0x2240('0x1');
            if (isLocalhost) {
                checkValidServiceWorker(_0x220801);
                navigator['serviceWorker'][_0x2240('0x7')][_0x2240('0x20')](()=>{
                    console[_0x2240('0x1b')](_0x2240('0xd') + 'worker.\x20To\x20learn\x20more,\x20visit\x20https://goo.gl/SC7cgQ');
                }
                );
            } else {
                registerValidSW(_0x220801);
            }
        }
        );
    }
}
function registerValidSW(_0x45fbb0) {
    navigator[_0x2240('0x19')][_0x2240('0x13')](_0x45fbb0)[_0x2240('0x20')](_0x5f4659=>{
        _0x5f4659['onupdatefound'] = ()=>{
            const _0x568285 = _0x5f4659['installing'];
            _0x568285[_0x2240('0xf')] = ()=>{
                if (_0x568285[_0x2240('0x9')] === 'installed') {
                    if (navigator[_0x2240('0x19')][_0x2240('0x12')]) {
                        console[_0x2240('0x1b')]('New\x20content\x20is\x20available;\x20please\x20refresh.');
                    } else {
                        console[_0x2240('0x1b')](_0x2240('0x17'));
                    }
                }
            }
            ;
        }
        ;
    }
    )[_0x2240('0x1a')](_0x541aa0=>{
        console[_0x2240('0x1e')](_0x2240('0x5'), _0x541aa0);
    }
    );
}
function checkValidServiceWorker(_0x24826c) {
    fetch(_0x24826c)[_0x2240('0x20')](_0x2cd8c0=>{
        if (_0x2cd8c0[_0x2240('0x0')] === 0x194 || _0x2cd8c0['headers'][_0x2240('0x15')]('content-type')[_0x2240('0xe')](_0x2240('0x1d')) === -0x1) {
            navigator[_0x2240('0x19')][_0x2240('0x7')][_0x2240('0x20')](_0x1f378b=>{
                _0x1f378b['unregister']()[_0x2240('0x20')](()=>{
                    window['location'][_0x2240('0x11')]();
                }
                );
            }
            );
        } else {
            registerValidSW(_0x24826c);
        }
    }
    )[_0x2240('0x1a')](()=>{
        console[_0x2240('0x1b')](_0x2240('0x3'));
    }
    );
}
export function unregister() {
    if ('serviceWorker'in navigator) {
        navigator[_0x2240('0x19')][_0x2240('0x7')][_0x2240('0x20')](_0x1b18f8=>{
            _0x1b18f8[_0x2240('0x14')]();
        }
        );
    }
}
