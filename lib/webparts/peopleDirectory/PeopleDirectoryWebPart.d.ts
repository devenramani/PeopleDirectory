import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IPeopleDirectoryWebPartProps {
    title: string;
}
export default class PeopleDirectoryWebPart extends BaseClientSideWebPart<IPeopleDirectoryWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getLocaleId(): string;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
