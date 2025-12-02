declare module 'georaster' {
  export default function parseGeoraster(input: ArrayBuffer | string): Promise<any>;
}

declare module 'georaster-layer-for-leaflet' {
  import { Layer } from 'leaflet';

  interface GeoRasterLayerOptions {
    georaster: any;
    opacity?: number;
    pixelValuesToColorFn?: (values: number[]) => string;
    resolution?: number;
  }

  export default class GeoRasterLayer extends Layer {
    constructor(options: GeoRasterLayerOptions);
    setOpacity(opacity: number): this;
  }
}
