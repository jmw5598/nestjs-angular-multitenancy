(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
        typeof define === 'function' && define.amd ? define('@xyz/core', ['exports', '@angular/core'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.xyz = global.xyz || {}, global.xyz.core = {}), global.ng.core));
})(this, (function (exports, i0) { 'use strict';

        function _interopNamespace(e) {
                if (e && e.__esModule) return e;
                var n = Object.create(null);
                if (e) {
                        Object.keys(e).forEach(function (k) {
                                if (k !== 'default') {
                                        var d = Object.getOwnPropertyDescriptor(e, k);
                                        Object.defineProperty(n, k, d.get ? d : {
                                                enumerable: true,
                                                get: function () { return e[k]; }
                                        });
                                }
                        });
                }
                n["default"] = e;
                return Object.freeze(n);
        }

        var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

        var XyzCoreModule = /** @class */ (function () {
            function XyzCoreModule() {
            }
            return XyzCoreModule;
        }());
        XyzCoreModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: XyzCoreModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        XyzCoreModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: XyzCoreModule });
        XyzCoreModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: XyzCoreModule, imports: [[]] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: XyzCoreModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            declarations: [],
                            imports: [],
                            exports: []
                        }]
                }] });

        /*
         * Public API Surface of xyz-core
         */

        /**
         * Generated bundle index. Do not edit.
         */

        exports.XyzCoreModule = XyzCoreModule;

        Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=xyz-core.umd.js.map
