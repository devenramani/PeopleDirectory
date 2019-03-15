/// <reference types="react" />
import * as React from 'react';
import { IPeopleListProps } from '.';
import { IPeopleListState } from './IPeopleListState';
export declare class PeopleList extends React.Component<IPeopleListProps, IPeopleListState> {
    constructor(props: IPeopleListProps);
    render(): React.ReactElement<IPeopleListProps>;
    private _showPanel;
    private _hidePanel;
    private _onRenderCompactCard;
    private _onRenderExpandedCard;
}
