import { IPerson } from "../PeopleDirectory/index";

export interface IPeopleListState {
  showCallOut: boolean;
  calloutElement: number;
  person: IPerson;
  showPanel: boolean;
}