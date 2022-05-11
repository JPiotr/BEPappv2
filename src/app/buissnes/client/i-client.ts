import {IAccess} from "../access/i-access";
import {EDefaultState} from "./e-default-state";

export interface IClient {
  readonly code: string;
  readonly insertDate: Date;
  access: IAccess;
  name: string;
  number: number;
  status: EDefaultState;
  modifyDate: Date;
  isBR: boolean;
  brClients: IClient[] | null;
}
