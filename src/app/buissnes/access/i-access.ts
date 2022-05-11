import {IType} from "../type/i-type";

export interface IAccess {
  readonly id: string;
  readonly cid: string;
  readonly insertDate: Date;
  modifyDate:Date;
  accessCount: number;
  type: IType;
}
