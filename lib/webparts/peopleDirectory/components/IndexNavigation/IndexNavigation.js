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
var IndexNavigation_module_scss_1 = require("./IndexNavigation.module.scss");
var Search_1 = require("../Search");
var Pivot_1 = require("office-ui-fabric-react/lib/Pivot");
var IndexNavigation = (function (_super) {
    __extends(IndexNavigation, _super);
    function IndexNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Event handler for selecting a tab in the navigation
         */
        _this._handleIndexSelect = function (item, ev) {
            _this.props.onIndexSelect(item.props.linkText);
        };
        return _this;
    }
    IndexNavigation.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        // Component should update only if the selected tab has changed.
        // This check helps to avoid unnecessary renders
        return this.props.selectedIndex !== nextProps.selectedIndex;
    };
    IndexNavigation.prototype.render = function () {
        // build the list of alphabet letters A..Z
        var az = Array.apply(null, { length: 26 }).map(function (x, i) { return String.fromCharCode(65 + i); });
        if (this.props.locale === "sv-SE") {
            az.push('Å', 'Ä', 'Ö');
        }
        // for each letter, create a PivotItem component
        var indexes = az.map(function (index) { return React.createElement(Pivot_1.PivotItem, { linkText: index, itemKey: index, key: index }); });
        // as the last tab in the navigation, add the Search option
        // indexes.push(<PivotItem linkText={strings.SearchButtonText} itemKey='Search'>
        //   <Search
        //     searchQuery={this.props.searchQuery}
        //     onSearch={this.props.onSearch}
        //     onClear={this.props.onSearchClear} />
        // </PivotItem>);
        return (React.createElement("div", { className: IndexNavigation_module_scss_1.default.indexNavigation },
            React.createElement("div", null,
                React.createElement(Search_1.Search, { searchQuery: this.props.searchQuery, onSearch: this.props.onSearch, onClear: this.props.onSearchClear })),
            React.createElement(Pivot_1.Pivot, { onLinkClick: this._handleIndexSelect, selectedKey: this.props.selectedIndex }, indexes)));
    };
    return IndexNavigation;
}(React.Component));
exports.IndexNavigation = IndexNavigation;

//# sourceMappingURL=IndexNavigation.js.map
