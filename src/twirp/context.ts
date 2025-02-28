import * as http from "http";
import {TwirpContentType} from "./server";

export interface TwirpContext<Request = http.IncomingMessage, Response = http.ServerResponse> {
    readonly packageName: string
    readonly serviceName: string
    readonly methodName: string

    readonly contentType: TwirpContentType
    readonly req: Request,
    readonly res: Response,
}