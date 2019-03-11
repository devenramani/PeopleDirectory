/// <reference types="react" />
import * as React from 'react';
import { IPeopleDirectoryProps, IPeopleDirectoryState } from './index';
export declare class PeopleDirectory extends React.Component<IPeopleDirectoryProps, IPeopleDirectoryState> {
    constructor(props: IPeopleDirectoryProps);
    private _handleIndexSelect;
    private _handleSearch;
    private _handleSearchClear;
    /**
     * Loads information about people using SharePoint Search
     * @param index Selected tab in the index navigation or 'Search', if the user is searching
     * @param searchQuery Current search query or empty string if not searching
     */
    private _loadPeopleInfo(index, searchQuery);
    /**
     * Retrieves the value of the particular managed property for the current search result.
     * If the property is not found, returns an empty string.
     * @param key Name of the managed property to retrieve from the search result
     * @param cells The array of cells for the current search result
     */
    private _getValueFromSearchResult(key, cells);
    componentDidMount(): void;
    render(): React.ReactElement<IPeopleDirectoryProps>;
}
