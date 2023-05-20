import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      name: this.newServerName,
      type: "server",
      content: this.newServerContent
    });
  }

  onAddBlueprint(){
    this.serverElements.push({
      name: this.newServerName,
      type: "blueprint",
      content: this.newServerContent
    });
  }
}
