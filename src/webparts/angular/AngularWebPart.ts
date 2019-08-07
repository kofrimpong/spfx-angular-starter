import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

//import styles from './AngularWebPart.module.scss';
import * as strings from 'AngularWebPartStrings';

//Include Polyfills for unsupported browsers
import "core-js/es7/reflect";

//import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
//import { environment } from './environments/environment';

export interface IAngularWebPartProps {
  description: string;
}

// if (environment.production) {
//   enableProdMode();
// }

export default class AngularWebPart extends BaseClientSideWebPart<IAngularWebPartProps> {

  public render(): void {
    //this.properties;
    //this.context;
    this.domElement.innerHTML = `<app-root context="${this.context}" properties="${this.properties}"></app-root>`;
    platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
      .catch(err => console.log(err));
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
