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
var PeopleDirectory_module_scss_1 = require("./PeopleDirectory.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var PeopleDirectory = (function (_super) {
    __extends(PeopleDirectory, _super);
    function PeopleDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeopleDirectory.prototype.render = function () {
        return (React.createElement("div", { className: PeopleDirectory_module_scss_1.default.peopleDirectory },
            React.createElement("div", { className: PeopleDirectory_module_scss_1.default.container },
                React.createElement("div", { className: PeopleDirectory_module_scss_1.default.row },
                    React.createElement("div", { className: PeopleDirectory_module_scss_1.default.column },
                        React.createElement("span", { className: PeopleDirectory_module_scss_1.default.title }, "Welcome to SharePoint!"),
                        React.createElement("p", { className: PeopleDirectory_module_scss_1.default.subTitle }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: PeopleDirectory_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("a", { href: "https://aka.ms/spfx", className: PeopleDirectory_module_scss_1.default.button },
                            React.createElement("span", { className: PeopleDirectory_module_scss_1.default.label }, "Learn more")))))));
    };
    return PeopleDirectory;
}(React.Component));
exports.default = PeopleDirectory;

//# sourceMappingURL=PeopleDirectory.js.map
