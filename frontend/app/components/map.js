import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from 'frontend/config/environment';

export default class MapComponent extends Component {
  MAPBOX_API =
    'https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/pin-l-embassy+f74e4e';

  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${this.MAPBOX_API}(${lng},${lat})/${lng},${lat},16/${dimensions}?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

  @action
  handleImageClick(event) {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    
    const { lat, lng } = this.calculateLatLngFromImageClick(offsetX, offsetY);

    // Perform any navigation action using the calculated latitude and longitude
    // For demonstration purposes, we'll open Google Maps in a new tab with the clicked location.
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      '_blank'
    );
  }

  calculateLatLngFromImageClick(offsetX, offsetY) {
    const { lat, lng, width, height } = this.args;

    const latScale = (lat - lat) / height;
    const lngScale = (lng - lng) / width;

    const clickedLat = lat + offsetY * latScale;
    const clickedLng = lng + offsetX * lngScale;
    return { lat: clickedLat, lng: clickedLng };
  }
}
