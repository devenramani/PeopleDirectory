"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var _1 = require("./components/PeopleDirectory/");
var PeopleDirectoryWebPart = (function (_super) {
    __extends(PeopleDirectoryWebPart, _super);
    function PeopleDirectoryWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeopleDirectoryWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(_1.PeopleDirectory, {
            webUrl: this.context.pageContext.web.absoluteUrl,
            spHttpClient: this.context.spHttpClient,
            title: this.properties.title,
            displayMode: this.displayMode,
            locale: this.getLocaleId(),
            onTitleUpdate: function (newTitle) {
                // after updating the web part title in the component
                // persist it in web part properties
                _this.properties.title = newTitle;
            }
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(PeopleDirectoryWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    PeopleDirectoryWebPart.prototype.getLocaleId = function () {
        return this.context.pageContext.cultureInfo.currentUICultureName;
    };
    PeopleDirectoryWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: []
        };
    };
    return PeopleDirectoryWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = PeopleDirectoryWebPart;

//# sourceMappingURL=PeopleDirectoryWebPart.js.map
