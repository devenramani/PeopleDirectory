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
var sp_http_1 = require("@microsoft/sp-http");
var PeopleDirectory_module_scss_1 = require("./PeopleDirectory.module.scss");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var WebPartTitle_1 = require("@pnp/spfx-controls-react/lib/WebPartTitle");
var IndexNavigation_1 = require("../IndexNavigation");
var PeopleList_1 = require("../PeopleList");
var strings = require("PeopleDirectoryWebPartStrings");
var PeopleDirectory = (function (_super) {
    __extends(PeopleDirectory, _super);
    function PeopleDirectory(props) {
        var _this = _super.call(this, props) || this;
        _this._handleIndexSelect = function (index) {
            // switch the current tab to the tab selected in the navigation
            // and reset the search query
            _this.setState({
                selectedIndex: index,
                searchQuery: ''
            }, function () {
                // load information about people matching the selected tab
                this._loadPeopleInfo(index, null);
            });
        };
        _this._handleSearch = function (searchQuery) {
            // activate the Search tab in the navigation and set the
            // specified text as the current search query
            _this.setState({
                selectedIndex: 'Search',
                searchQuery: searchQuery
            }, function () {
                // load information about people matching the specified search query
                this._loadPeopleInfo(null, searchQuery);
            });
        };
        _this._handleSearchClear = function () {
            // activate the A tab in the navigation and clear the previous search query
            _this.setState({
                selectedIndex: 'A',
                searchQuery: ''
            }, function () {
                // load information about people whose last name begins with A
                this._loadPeopleInfo('A', null);
            });
        };
        _this.state = {
            loading: false,
            errorMessage: null,
            selectedIndex: 'A',
            searchQuery: '',
            people: []
        };
        return _this;
    }
    /**
     * Loads information about people using SharePoint Search
     * @param index Selected tab in the index navigation or 'Search', if the user is searching
     * @param searchQuery Current search query or empty string if not searching
     */
    PeopleDirectory.prototype._loadPeopleInfo = function (index, searchQuery) {
        var _this = this;
        // update the UI notifying the user that the component will now load its data
        // clear any previously set error message and retrieved list of people
        this.setState({
            loading: true,
            errorMessage: null,
            people: []
        });
        var headers = new Headers();
        // suppress metadata to minimize the amount of data loaded from SharePoint
        headers.append("accept", "application/json;odata.metadata=none");
        // if no search query has been specified, retrieve people whose last name begins with the
        // specified letter. if a search query has been specified, escape any ' (single quotes)
        // by replacing them with two '' (single quotes). Without this, the search query would fail
        var query = searchQuery === null ? "LastName:" + index + "*" : searchQuery.replace(/'/g, "''");
        // retrieve information about people using SharePoint People Search
        // sort results ascending by the last name
        this.props.spHttpClient
            .get(this.props.webUrl + "/_api/search/query?querytext='" + query + "'&selectproperties='FirstName,LastName,PreferredName,WorkEmail,PictureURL,WorkPhone,MobilePhone,JobTitle,Department,Skills,PastProjects'&sortlist='LastName:ascending'&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'&rowlimit=500", sp_http_1.SPHttpClient.configurations.v1, {
            headers: headers
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (res) {
            if (res.error) {
                // There was an error loading information about people.
                // Notify the user that loading data is finished and return the
                // error message that occurred
                _this.setState({
                    loading: false,
                    errorMessage: res.error.message
                });
                return;
            }
            if (res.PrimaryQueryResult.RelevantResults.TotalRows == 0) {
                // No results were found. Notify the user that loading data is finished
                _this.setState({
                    loading: false
                });
                return;
            }
            // convert the SharePoint People Search results to an array of people
            var people = res.PrimaryQueryResult.RelevantResults.Table.Rows.map(function (r) {
                return {
                    name: _this._getValueFromSearchResult('PreferredName', r.Cells),
                    firstName: _this._getValueFromSearchResult('FirstName', r.Cells),
                    lastName: _this._getValueFromSearchResult('LastName', r.Cells),
                    phone: _this._getValueFromSearchResult('WorkPhone', r.Cells),
                    mobile: _this._getValueFromSearchResult('MobilePhone', r.Cells),
                    email: _this._getValueFromSearchResult('WorkEmail', r.Cells),
                    //photoUrl: this._getValueFromSearchResult('PictureURL', r.Cells),
                    photoUrl: "" + ("/_layouts/15/userphoto.aspx?size=L&accountname=" + _this._getValueFromSearchResult('WorkEmail', r.Cells)),
                    function: _this._getValueFromSearchResult('JobTitle', r.Cells),
                    department: _this._getValueFromSearchResult('Department', r.Cells),
                    skills: _this._getValueFromSearchResult('Skills', r.Cells),
                    projects: _this._getValueFromSearchResult('PastProjects', r.Cells)
                };
            });
            var selectedIndex = _this.state.selectedIndex;
            if (_this.state.searchQuery === '') {
                // An Index is used to search people.
                //Reduce the people collection if the first letter of the lastName of the person is not equal to the selected index
                people = people.reduce(function (result, person) {
                    if (person.lastName && person.lastName.indexOf(selectedIndex) === 0) {
                        result.push(person);
                    }
                    return result;
                }, []);
            }
            if (people.length > 0) {
                // notify the user that loading the data is finished and return the loaded information
                _this.setState({
                    loading: false,
                    people: people
                });
            }
            else {
                // People collection could be reduced to zero, so no results
                _this.setState({
                    loading: false
                });
                return;
            }
        }, function (error) {
            // An error has occurred while loading the data. Notify the user
            // that loading data is finished and return the error message.
            _this.setState({
                loading: false,
                errorMessage: error
            });
        })
            .catch(function (error) {
            // An exception has occurred while loading the data. Notify the user
            // that loading data is finished and return the exception.
            _this.setState({
                loading: false,
                errorMessage: error
            });
        });
    };
    /**
     * Retrieves the value of the particular managed property for the current search result.
     * If the property is not found, returns an empty string.
     * @param key Name of the managed property to retrieve from the search result
     * @param cells The array of cells for the current search result
     */
    PeopleDirectory.prototype._getValueFromSearchResult = function (key, cells) {
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].Key === key) {
                return cells[i].Value;
            }
        }
        return '';
    };
    PeopleDirectory.prototype.componentDidMount = function () {
        // load information about people after the component has been
        // initiated on the page
        this._loadPeopleInfo(this.state.selectedIndex, null);
    };
    PeopleDirectory.prototype.render = function () {
        var _a = this.state, loading = _a.loading, errorMessage = _a.errorMessage, selectedIndex = _a.selectedIndex, searchQuery = _a.searchQuery, people = _a.people;
        return (React.createElement("div", { className: PeopleDirectory_module_scss_1.default.peopleDirectory },
            !loading &&
                errorMessage &&
                // if the component is not loading data anymore and an error message
                // has been returned, display the error message to the user
                React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error, isMultiline: false },
                    strings.ErrorLabel,
                    ": ",
                    errorMessage),
            React.createElement(WebPartTitle_1.WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.onTitleUpdate }),
            React.createElement(IndexNavigation_1.IndexNavigation, { selectedIndex: selectedIndex, searchQuery: searchQuery, onIndexSelect: this._handleIndexSelect, onSearch: this._handleSearch, onSearchClear: this._handleSearchClear, locale: this.props.locale }),
            loading &&
                // if the component is loading its data, show the spinner
                React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: strings.LoadingSpinnerLabel }),
            !loading &&
                !errorMessage &&
                // if the component is not loading data anymore and no errors have occurred
                // render the list of retrieved people
                React.createElement(PeopleList_1.PeopleList, { selectedIndex: selectedIndex, hasSearchQuery: searchQuery !== '', people: people })));
    };
    return PeopleDirectory;
}(React.Component));
exports.PeopleDirectory = PeopleDirectory;

//# sourceMappingURL=PeopleDirectory.js.map
