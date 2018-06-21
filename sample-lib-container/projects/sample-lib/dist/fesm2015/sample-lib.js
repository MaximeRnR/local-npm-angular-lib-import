import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeaderComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-from-lib',
                template: `<div class="header">
  <div class="burger-and-logo">
    <div class="logo">LOGO</div>
  </div>
  <div class="punchline">Punchline</div>
</div>
`,
                styles: [`:host{z-index:15}.header{width:100%;height:64px;position:fixed;top:0;z-index:19;background-color:#fff;color:#3d414b;display:flex;flex-direction:row;justify-content:space-around;align-content:center;line-height:64px;box-shadow:0 4px 5px 0 rgba(0,0,0,.66)}.header div{height:100%}.header .burger-and-logo{height:100%;align-self:flex-start;display:flex}.header .logo{font-size:20px;margin-left:10px}`],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    HeaderComponent
                ],
                imports: [
                    FormsModule,
                    BrowserAnimationsModule
                ],
                exports: [
                    HeaderComponent,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MyLocalLibModule {
}
MyLocalLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    HeaderModule
                ],
                exports: [
                    HeaderModule,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MyLocalLibModule, HeaderComponent as ɵb, HeaderModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2FtcGxlLWxpYi9saWIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovL3NhbXBsZS1saWIvbGliL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9zYW1wbGUtbGliL2xpYi9teS1sb2NhbC1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFkZXItZnJvbS1saWInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgPGRpdiBjbGFzcz1cImJ1cmdlci1hbmQtbG9nb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+TE9HTzwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInB1bmNobGluZVwiPlB1bmNobGluZTwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ei1pbmRleDoxNX0uaGVhZGVye3dpZHRoOjEwMCU7aGVpZ2h0OjY0cHg7cG9zaXRpb246Zml4ZWQ7dG9wOjA7ei1pbmRleDoxOTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzNkNDE0YjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7YWxpZ24tY29udGVudDpjZW50ZXI7bGluZS1oZWlnaHQ6NjRweDtib3gtc2hhZG93OjAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjY2KX0uaGVhZGVyIGRpdntoZWlnaHQ6MTAwJX0uaGVhZGVyIC5idXJnZXItYW5kLWxvZ297aGVpZ2h0OjEwMCU7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0O2Rpc3BsYXk6ZmxleH0uaGVhZGVyIC5sb2dve2ZvbnQtc2l6ZToyMHB4O21hcmdpbi1sZWZ0OjEwcHh9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgXHRIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZWFkZXJNb2R1bGV9IGZyb20gXCIuL2hlYWRlci9oZWFkZXIubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIZWFkZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEhlYWRlck1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxvY2FsTGliTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBZ0JFLFFBQVE7S0FDUDs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0NBTVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsOFlBQThZLENBQUM7YUFDelo7Ozs7Ozs7QUNaRDs7O1lBTUMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDYixlQUFlO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7aUJBQ2hCO2FBQ0Y7Ozs7Ozs7QUNqQkQ7OztZQUlDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7In0=