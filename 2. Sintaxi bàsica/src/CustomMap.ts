interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(elementId: string, lat: number, lng: number) {
        this.googleMap = new google.maps.Map(document.querySelector('#' + elementId) as HTMLElement, {
            zoom: 3,
            center: {
                lat: lat,
                lng: lng
            }
        });
    }
    putMarkers(marker: Mappable) {
        const mark = new google.maps.Marker({
            map: this.googleMap,
            position: marker.location,
        });
        mark.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: marker.markerContent()
            });
            infoWindow.open(this.googleMap, mark);
        })
    }
}