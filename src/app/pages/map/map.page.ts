import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})
export class MapPageComponent {
  // google maps zoom level
  zoom = 7;

  // initial center position for the map
  lat = 28.340356;
  lng = -82.706189;

  markers: IMarker[] = [
    {
      lat: 28.340356,
      lng: -82.706189,
      label: 'A',
      draggable: false
    }
    // {
    //   lat: 51.373858,
    //   lng: 7.215982,
    //   label: 'B',
    //   draggable: false
    // },
    // {
    //   lat: 51.723858,
    //   lng: 7.895982,
    //   label: 'C',
    //   draggable: true
    // }
  ];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }

  markerDragEnd(m: IMarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

// just an interface for type safety.
interface IMarker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
