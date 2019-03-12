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

import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class PeopleList extends React.Component<IPeopleListProps, IPeopleListState> {
  constructor(props: IPeopleListProps) {
    super(props);

    this.state = {
      showCallOut: false,
      calloutElement: null,
      person: null,
      showPanel: false
    };

    //this._onPersonaClicked = this._onPersonaClicked.bind(this);
    this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
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
                {/* <Persona primaryText={p.name} secondaryText={p.email} tertiaryText={phone} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size48} />
                  <div id={`callout${i}`} onClick={this._onPersonaClicked(i, p)} className={styles.persona}>
                    <i className="ms-Icon ms-Icon--ContactInfo" aria-hidden="true"></i>
                  </div> */}
                <HoverCard expandingCardProps={expandingCardProps} instantOpenOnClick={true}>
                  <div className={styles.card}>
                    <img src={p.photoUrl} className={styles.profile_image} />
                    <div className={styles.container}>
                      <h4><b>{p.name}</b></h4>
                    </div>
                  </div>
                </HoverCard>
                
                <Panel isOpen={this.state.showPanel} type={PanelType.medium} headerText="Panel" onDismiss={this._hidePanel}>
                  <span>Test</span>
                </Panel>
              </div>
            );
          })
        }
      </div>
    );
  }

  private _showPanel = (): void => {
    this.setState({ showPanel: true });
  };

  private _hidePanel = (): void => {
    this.setState({ showPanel: false });
  };

  private _onRenderCompactCard = (p): JSX.Element => {
    return (
      
      <div className={styles.compactCard}>
          <h2>{p.name}</h2>
      </div>
    );
  };

  private _onRenderExpandedCard = (p): JSX.Element => {
    return (
      <div className={styles.expandedCard}>
        {p.department}
        {p.function}
        {p.skills}
        {p.projects}
        <DefaultButton text="Open panel" onClick={this._showPanel} />
      </div>
    );
  };


  private _onPersonaClicked = (index, person) => event => {
    this.setState({
      showCallOut: !this.state.showCallOut,
      calloutElement: index,
      person: person
    });
  }

  private _onCalloutDismiss = (event) => {
    this.setState({
      showCallOut: false,
    });
  }
}
