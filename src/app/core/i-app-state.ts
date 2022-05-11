import {EDataState} from "./e-data-state";

export interface IAppState<G> {
  dataState: EDataState;
  appData?: G;
  error?: string;
}
