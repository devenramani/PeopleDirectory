/// <reference types="react" />
import * as React from 'react';
import { IIndexNavigationProps } from '.';
export declare class IndexNavigation extends React.Component<IIndexNavigationProps, {}> {
    /**
     * Event handler for selecting a tab in the navigation
     */
    private _handleIndexSelect;
    shouldComponentUpdate(nextProps: IIndexNavigationProps, nextState: {}, nextContext: any): boolean;
    render(): React.ReactElement<IIndexNavigationProps>;
}
