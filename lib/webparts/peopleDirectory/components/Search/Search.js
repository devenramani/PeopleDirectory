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
var Search_module_scss_1 = require("./Search.module.scss");
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
var strings = require("PeopleDirectoryWebPartStrings");
var Search = (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleSearch = function (searchQuery) {
            _this.props.onSearch(searchQuery);
        };
        _this._handleClear = function () {
            _this.props.onClear();
        };
        return _this;
    }
    Search.prototype.render = function () {
        return (React.createElement("div", { className: Search_module_scss_1.default.search },
            React.createElement(SearchBox_1.SearchBox, { placeholder: strings.SearchBoxPlaceholder, onSearch: this._handleSearch, onClear: this._handleClear, value: this.props.searchQuery, className: Search_module_scss_1.default.searchBox })));
    };
    return Search;
}(React.Component));
exports.Search = Search;

//# sourceMappingURL=Search.js.map
