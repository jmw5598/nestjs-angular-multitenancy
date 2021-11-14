import { ResponseStatus } from '../enums/response-status.enum';

export interface ResponseMessage {
  status: ResponseStatus;
  message: string;
}
