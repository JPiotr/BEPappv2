import {IClient} from "../buissnes/client/i-client";

export interface IResponse {
  timestamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  messege: string;
  devMessege: string;
  data:{
    clients?:IClient[],
    client? :IClient
  }
}
