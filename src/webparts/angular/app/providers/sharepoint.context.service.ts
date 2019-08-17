import { WebPartContext } from "@microsoft/sp-webpart-base";
import { Injectable } from "@angular/core";
import { IAngularWebPartProps } from "../../AngularWebPart";

@Injectable()
export class SharePointContextService {

    constructor(public context: WebPartContext, public properties: IAngularWebPartProps) {

    }
}