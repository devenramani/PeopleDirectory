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
var PeopleCallout_module_scss_1 = require("./PeopleCallout.module.scss");
var strings = require("PeopleDirectoryWebPartStrings");
var PeopleCallout = (function (_super) {
    __extends(PeopleCallout, _super);
    function PeopleCallout(props) {
        var _this = _super.call(this, props) || this;
        _this._onCopyClicked = function (elementName) { return function (event) {
            var copyText = document.getElementById(elementName);
            var range = document.createRange();
            range.selectNode(copyText);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            event.target.className = "ms-Icon ms-Icon--StatusCircleCheckmark";
        }; };
        _this.state = {};
        return _this;
    }
    PeopleCallout.prototype.render = function () {
        return (React.createElement("div", { className: PeopleCallout_module_scss_1.default.calloutCard },
            React.createElement("h1", { className: "ms-font-xl" }, this.props.person.name),
            React.createElement("ul", { className: PeopleCallout_module_scss_1.default.PeopleCallout },
                this.props.person.function &&
                    React.createElement("li", null, this.props.person.function),
                this.props.person.department &&
                    React.createElement("li", null, this.props.person.department),
                this.props.person.email &&
                    React.createElement("li", { id: "personcopyemail" },
                        React.createElement("i", { className: "ms-Icon ms-Icon--Mail icon", "aria-hidden": "true" }),
                        React.createElement("a", { href: "mailto:" + this.props.person.email, className: PeopleCallout_module_scss_1.default.info }, this.props.person.email),
                        React.createElement("i", { className: "ms-Icon ms-Icon--Copy " + PeopleCallout_module_scss_1.default.clipboard, "aria-hidden": "true", title: strings.CopyEmailLabel, onClick: this._onCopyClicked('personcopyemail') })),
                this.props.person.phone &&
                    React.createElement("li", { id: "personcopyphone" },
                        React.createElement("i", { className: "ms-Icon ms-Icon--Phone icon", "aria-hidden": "true" }),
                        React.createElement("a", { href: "tel:" + this.props.person.phone, className: PeopleCallout_module_scss_1.default.info }, this.props.person.phone),
                        React.createElement("i", { className: "ms-Icon ms-Icon--Copy " + PeopleCallout_module_scss_1.default.clipboard, "aria-hidden": "true", title: strings.CopyPhoneLabel, onClick: this._onCopyClicked('personcopyphone') })),
                this.props.person.mobile &&
                    React.createElement("li", { id: "personcopymobile" },
                        React.createElement("i", { className: "ms-Icon ms-Icon--CellPhone icon", "aria-hidden": "true" }),
                        React.createElement("a", { href: "tel:" + this.props.person.mobile, className: PeopleCallout_module_scss_1.default.info }, this.props.person.mobile),
                        React.createElement("i", { className: "ms-Icon ms-Icon--Copy " + PeopleCallout_module_scss_1.default.clipboard, "aria-hidden": "true", title: strings.CopyMobileLabel, onClick: this._onCopyClicked('personcopymobile') })),
                this.props.person.projects &&
                    React.createElement("li", { className: PeopleCallout_module_scss_1.default.info + ' ' + PeopleCallout_module_scss_1.default.fl_column },
                        React.createElement("label", { className: "ms-fontSize-xl ms-fontWeight-light" }, strings.ProjectsLabel),
                        React.createElement("div", null, this.props.person.projects)),
                this.props.person.skills &&
                    React.createElement("li", { className: PeopleCallout_module_scss_1.default.info + ' ' + PeopleCallout_module_scss_1.default.fl_column },
                        React.createElement("label", { className: "ms-fontSize-xl ms-fontWeight-light" }, strings.SkillsLabel),
                        React.createElement("div", null, this.props.person.skills)))));
    };
    return PeopleCallout;
}(React.Component));
exports.PeopleCallout = PeopleCallout;

//# sourceMappingURL=PeopleCallout.js.map
