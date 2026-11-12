// Installation photography, bundled so it is embedded in the build.

import bedroomWindow from "./bedroom-window.webp";
import birdNet from "./bird-net.webp";
import birdSpikes from "./bird-spikes.webp";
import buildingNet from "./building-net.webp";
import cableDetail from "./cable-detail.webp";
import ceilingHanger from "./ceiling-hanger.webp";
import cricketNet from "./cricket-net.webp";
import familyBalcony from "./family-balcony.webp";
import footballNet from "./football-net.webp";
import heroBalcony from "./hero-balcony.webp";
import heroReference from "./hero-reference.webp";
import parkingNet from "./parking-net.webp";
import poolNet from "./pool-net.webp";
import safetyNet from "./safety-net.webp";
import serviceDuct from "./service-duct.webp";
import staircase from "./staircase.webp";

export const IMG = {
  heroBalcony,
  heroReference,
  bedroomWindow,
  familyBalcony,
  safetyNet,
  birdNet,
  birdSpikes,
  cableDetail,
  serviceDuct,
  staircase,
  buildingNet,
  parkingNet,
  poolNet,
  cricketNet,
  footballNet,
  ceilingHanger,
};

export type ImageKey = keyof typeof IMG;
