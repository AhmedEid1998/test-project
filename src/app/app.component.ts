import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomLayoutComponent } from 'grid-layout-lib';
import { GridOneComponent } from './grid-one/grid-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cols = 12; // Number of columns in the grid layout
  gap = 10; // Number of gab in the grid layout
  rowHeight = 50; // Height of each row in pixels
  disableRemove = false; // Flag to disable item removal
  layout: any[] = [
    { id: '1', x: 0, y: 0, w: 2, h: 4, compName: 'GridOneComponent' },
    { id: '2', x: 2, y: 0, w: 3, h: 2, compName: 'GridTwoComponent' },
    { id: '3', x: 5, y: 0, w: 2, h: 3, compName: 'GridThreeComponent' },
    { id: '4', x: 7, y: 0, w: 1, h: 3, compName: 'GridFourComponent' },
    { id: '5', x: 9, y: 0, w: 2, h: 4, compName: 'GridFiveComponent' },
    { id: '6', x: 0, y: 4, w: 1, h: 3, compName: 'GridOneComponent' },
    { id: '7', x: 2, y: 2, w: 1, h: 2, compName: 'GridTwoComponent' },
    { id: '8', x: 3, y: 2, w: 2, h: 5, compName: 'GridThreeComponent' },
    { id: '9', x: 3, y: 7, w: 1, h: 2, compName: 'GridFourComponent' },
    { id: '10', x: 5, y: 3, w: 2, h: 3, compName: 'GridFiveComponent' },
    { id: '11', x: 9, y: 4, w: 2, h: 2, compName: 'GridOneComponent' },
  ]; // Current grid layout array
  cursorStyle = 'grab'; // CSS cursor value to indicate dragging state
  compactType: any = 'vertical'; // Type of compacting to be used in the grid layout
  componentMap: Record<string, Type<any>> = {
    // Map that links component names as strings to their corresponding component types.
    GridOneComponent: GridOneComponent,
    GridTwoComponent: GridOneComponent,
    GridThreeComponent: GridOneComponent,
    GridFourComponent: GridOneComponent,
    GridFiveComponent: GridOneComponent,
  };

  backgroundConfig: any = {
    show: 'always',
    borderColor: '#ff800040',
    gapColor: '#000',
    rowColor: '#8080801a',
    columnColor: '#8080801a',
    borderWidth: 1,
  };
  disableDrag: boolean = false; // Flag to disable dragging of items
  disableResize: boolean = false; // Flag to disable resizing of items
}
