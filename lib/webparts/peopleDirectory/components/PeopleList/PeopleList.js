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
var strings = require("PeopleDirectoryWebPartStrings");
var PeopleList_module_scss_1 = require("./PeopleList.module.scss");
var HoverCard_1 = require("office-ui-fabric-react/lib/HoverCard");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var PeopleList = (function (_super) {
    __extends(PeopleList, _super);
    function PeopleList(props) {
        var _this = _super.call(this, props) || this;
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._hidePanel = function () {
            _this.setState({ showPanel: false });
        };
        _this._onRenderCompactCard = function (p) {
            return (React.createElement("div", { className: PeopleList_module_scss_1.default.compactCard },
                React.createElement("h2", null, p.name)));
        };
        _this._onRenderExpandedCard = function (p) {
            return (React.createElement("div", { className: PeopleList_module_scss_1.default.expandedCard },
                p.department,
                p.function,
                p.skills,
                p.projects,
                React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: _this._showPanel })));
        };
        _this._onPersonaClicked = function (index, person) { return function (event) {
            _this.setState({
                showCallOut: !_this.state.showCallOut,
                calloutElement: index,
                person: person
            });
        }; };
        _this._onCalloutDismiss = function (event) {
            _this.setState({
                showCallOut: false,
            });
        };
        _this.state = {
            showCallOut: false,
            calloutElement: null,
            person: null,
            showPanel: false
        };
        //this._onPersonaClicked = this._onPersonaClicked.bind(this);
        _this._onCalloutDismiss = _this._onCalloutDismiss.bind(_this);
        return _this;
    }
    PeopleList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "ms-Grid ms-Grid-row" },
            this.props.people.length === 0 &&
                (this.props.selectedIndex !== 'Search' ||
                    (this.props.selectedIndex === 'Search' &&
                        this.props.hasSearchQuery)) &&
                // Show the 'No people found' message if no people have been retrieved
                // and the user either selected a letter in the navigation or issued
                // a search query (but not when navigated to the Search tab without
                // providing a query yet)
                React.createElement("div", { className: 'ms-textAlignCenter' }, strings.NoPeopleFoundLabel),
            this.props.people.length > 0 &&
                // for each retrieved person, create a persona card with the retrieved
                // information
                //this.props.people.map(p => <Persona primaryText={p.name} secondaryText={p.email} tertiaryText={p.phone} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size72} />)
                this.props.people.map(function (p, i) {
                    var phone = p.phone && p.mobile ? p.phone + "/" + p.mobile : p.phone ? p.phone : p.mobile;
                    // const toggleClassName: string = this.state.toggleClass ? `ms-Icon--ChromeClose ${styles.isClose}` : "ms-Icon--ContactInfo";
                    if (!p.photoUrl) {
                        p.photoUrl = "/_layouts/15/userphoto.aspx?size=L&accountname";
                    }
                    var expandingCardProps = {
                        onRenderCompactCard: _this._onRenderCompactCard,
                        onRenderExpandedCard: _this._onRenderExpandedCard,
                        renderData: p
                    };
                    return (React.createElement("div", { className: "ms-Grid-col  " + PeopleList_module_scss_1.default.persona_card },
                        React.createElement(HoverCard_1.HoverCard, { expandingCardProps: expandingCardProps, instantOpenOnClick: true },
                            React.createElement("div", { className: PeopleList_module_scss_1.default.card },
                                React.createElement("img", { src: p.photoUrl, className: PeopleList_module_scss_1.default.profile_image }),
                                React.createElement("div", { className: PeopleList_module_scss_1.default.container },
                                    React.createElement("h4", null,
                                        React.createElement("b", null, p.name))))),
                        React.createElement(Panel_1.Panel, { isOpen: _this.state.showPanel, type: Panel_1.PanelType.medium, headerText: "Panel", onDismiss: _this._hidePanel },
                            React.createElement("span", null, "Test"))));
                })));
    };
    return PeopleList;
}(React.Component));
exports.PeopleList = PeopleList;

//# sourceMappingURL=PeopleList.js.map
