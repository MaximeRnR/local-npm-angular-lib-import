(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser/animations'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('sample-lib', ['exports', '@angular/core', '@angular/platform-browser/animations', '@angular/forms'], factory) :
    (factory((global['sample-lib'] = {}),global.ng.core,global.ng.platformBrowser.animations,global.ng.forms));
}(this, (function (exports,core,animations,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderComponent = (function () {
        function HeaderComponent() {
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'header-from-lib',
                        template: "<div class=\"header\">\n  <div class=\"burger-and-logo\">\n    <div class=\"logo\">LOGO</div>\n  </div>\n  <div class=\"punchline\">Punchline</div>\n</div>\n",
                        styles: [":host{z-index:15}.header{width:100%;height:64px;position:fixed;top:0;z-index:19;background-color:#fff;color:#3d414b;display:flex;flex-direction:row;justify-content:space-around;align-content:center;line-height:64px;box-shadow:0 4px 5px 0 rgba(0,0,0,.66)}.header div{height:100%}.header .burger-and-logo{height:100%;align-self:flex-start;display:flex}.header .logo{font-size:20px;margin-left:10px}"],
                    },] },
        ];
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderModule = (function () {
        function HeaderModule() {
        }
        HeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            HeaderComponent
                        ],
                        imports: [
                            forms.FormsModule,
                            animations.BrowserAnimationsModule
                        ],
                        exports: [
                            HeaderComponent,
                        ]
                    },] },
        ];
        return HeaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MyLocalLibModule = (function () {
        function MyLocalLibModule() {
        }
        MyLocalLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            HeaderModule
                        ],
                        exports: [
                            HeaderModule,
                        ]
                    },] },
        ];
        return MyLocalLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.MyLocalLibModule = MyLocalLibModule;
    exports.ɵb = HeaderComponent;
    exports.ɵa = HeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NhbXBsZS1saWIvbGliL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9zYW1wbGUtbGliL2xpYi9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vc2FtcGxlLWxpYi9saWIvbXktbG9jYWwtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyLWZyb20tbGliJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJidXJnZXItYW5kLWxvZ29cIj5cbiAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPkxPR088L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwdW5jaGxpbmVcIj5QdW5jaGxpbmU8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3otaW5kZXg6MTV9LmhlYWRlcnt3aWR0aDoxMDAlO2hlaWdodDo2NHB4O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3otaW5kZXg6MTk7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzZDQxNGI7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2xpbmUtaGVpZ2h0OjY0cHg7Ym94LXNoYWRvdzowIDRweCA1cHggMCByZ2JhKDAsMCwwLC42Nil9LmhlYWRlciBkaXZ7aGVpZ2h0OjEwMCV9LmhlYWRlciAuYnVyZ2VyLWFuZC1sb2dve2hlaWdodDoxMDAlO2FsaWduLXNlbGY6ZmxleC1zdGFydDtkaXNwbGF5OmZsZXh9LmhlYWRlciAubG9nb3tmb250LXNpemU6MjBweDttYXJnaW4tbGVmdDoxMHB4fWBdLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIFx0SGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7XG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVhZGVyTW9kdWxlfSBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyLm1vZHVsZVwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgSGVhZGVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBIZWFkZXJNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXlMb2NhbExpYk1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztRQWdCRSxrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsK0pBTVg7d0JBQ0MsTUFBTSxFQUFFLENBQUMsOFlBQThZLENBQUM7cUJBQ3paOzs4QkFaRDs7Ozs7OztBQ0FBOzs7O29CQU1DQyxhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFOzRCQUNiLGVBQWU7eUJBQ2Y7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQQyxpQkFBVzs0QkFDWEMsa0NBQXVCO3lCQUN4Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsZUFBZTt5QkFDaEI7cUJBQ0Y7OzJCQWpCRDs7Ozs7OztBQ0FBOzs7O29CQUlDRixhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLEVBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLFlBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLFlBQVk7eUJBQ2I7cUJBQ0Y7OytCQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9