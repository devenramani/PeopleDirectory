import * as React from 'react';
import { IPeopleListProps } from '.';
import {
  Persona,
  PersonaSize
} from 'office-ui-fabric-react/lib/Persona';
import * as strings from 'PeopleDirectoryWebPartStrings';
import styles from './PeopleList.module.scss';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { IPeopleListState } from './IPeopleListState';
import { PeopleCallout } from '../PeopleCallout';

import { HoverCard, IExpandingCardProps } from 'office-ui-fabric-react/lib/HoverCard';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class PeopleList extends React.Component<IPeopleListProps, IPeopleListState> {
  constructor(props: IPeopleListProps) {
    super(props);

    this.state = {
     
      showPanel: false,
      panelData: ""
    };
  }

  public render(): React.ReactElement<IPeopleListProps> {
    return (
      <div className={`ms-Grid ms-Grid-row`}>
        {this.props.people.length === 0 &&
          (this.props.selectedIndex !== 'Search' ||
            (this.props.selectedIndex === 'Search' &&
              this.props.hasSearchQuery)) &&
          // Show the 'No people found' message if no people have been retrieved
          // and the user either selected a letter in the navigation or issued
          // a search query (but not when navigated to the Search tab without
          // providing a query yet)
          <div className='ms-textAlignCenter'>{strings.NoPeopleFoundLabel}</div>}

        <Panel isOpen={this.state.showPanel} type={PanelType.medium} onDismiss={this._hidePanel}>
            <Persona primaryText={this.state.panelData.name} secondaryText={this.state.panelData.email} tertiaryText={this.state.panelData.phone} imageUrl={this.state.panelData.photoUrl} imageAlt={this.state.panelData.name} size={PersonaSize.size100} /> 
            
            <div><b> Email :</b> {this.state.panelData.email} </div>
      
            <div><b> Department :</b> {this.state.panelData.department} </div>
            
            <div><b> Function :</b>   {this.state.panelData.function} </div>
            
            <div><b> Mobile :</b>   {this.state.panelData.mobile} </div>

            <div><b> Phone :</b>   {this.state.panelData.phone} </div>

            <div><b> Skills :</b>   {this.state.panelData.skills} </div>

            <div><b> Projects :</b>   {this.state.panelData.projects} </div>

        </Panel>

        {this.props.people.length > 0 &&
          // for each retrieved person, create a persona card with the retrieved
          // information
          //this.props.people.map(p => <Persona primaryText={p.name} secondaryText={p.email} tertiaryText={p.phone} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size72} />)

          this.props.people.map((p, i) => {
            const phone: string = p.phone && p.mobile ? `${p.phone}/${p.mobile}` : p.phone ? p.phone : p.mobile;
            // const toggleClassName: string = this.state.toggleClass ? `ms-Icon--ChromeClose ${styles.isClose}` : "ms-Icon--ContactInfo";
            if (!p.photoUrl) {
              p.photoUrl = "/_layouts/15/userphoto.aspx?size=L&accountname";
            }

            const expandingCardProps: IExpandingCardProps = {
              onRenderCompactCard: this._onRenderCompactCard,
              onRenderExpandedCard: this._onRenderExpandedCard,
              renderData: p
            };

            return (
              <div className={`ms-Grid-col  ${styles.persona_card}`}>

                <HoverCard expandingCardProps={expandingCardProps} instantOpenOnClick={true}>
                  <div className={styles.card}>
                    <img src={p.photoUrl} className={styles.profile_image} />
                    <div className={styles.container}>
                      <h4><b>{p.name}</b></h4>
                    </div>
                  </div>
                </HoverCard>
              </div>
            );
          })
        }
      </div>
    );
  }

  private _showPanel = (p): void => {
    this.setState({ showPanel: true, panelData : p});
  }

  private _hidePanel = (): void => {
    this.setState({ showPanel: false });
  }

  private _onRenderCompactCard = (p): JSX.Element => {
    return (
      <div className={styles.compactCard}>
        <Persona primaryText={p.name} secondaryText={p.email} tertiaryText={p.phone} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size100} />
      </div>
    );
  }

  private _onRenderExpandedCard = (p): JSX.Element => {

    return (
      <div className={styles.expandedCard}>

      <div><b> Email :</b> {p.email} </div>
      
       <div><b> Department :</b> {p.department} </div>
        
       <div><b> Function :</b>   {p.function} </div>
        
       <div><b> Mobile :</b>   {p.mobile} </div>

       <div><b> Phone :</b>   {p.phone} </div>
        
        <div>
          <Link onClick={ () => this._showPanel(p) }> Show more</Link>
        </div>  
      </div>
    );
  }
}
