/**
 * A small globe with real coastlines (world-atlas TopoJSON via d3-geo's
 * orthographic projection), rotated to face whatever country is passed in,
 * with a blinking pin marking it dead-center.
 *
 * The country list/coordinates here must stay in sync with the "Country"
 * dropdown options in admin/index.html (COUNTRY_LIST there) — the admin
 * only ever sends back one of those exact names.
 */
import { useMemo } from "react";
import { geoGraticule, geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import landTopologyJson from "world-atlas/land-110m.json";

const CX = 50;
const CY = 50;
const R = 40;

export const COUNTRY_COORDS: Record<string, [number, number]> = {
  "afghanistan": [33.9, 67.7],
  "albania": [41.2, 20.2],
  "algeria": [28.0, 3.0],
  "andorra": [42.5, 1.5],
  "angola": [-11.2, 17.9],
  "antigua and barbuda": [17.1, -61.8],
  "argentina": [-38.4, -63.6],
  "armenia": [40.1, 45.0],
  "australia": [-25.3, 133.8],
  "austria": [47.5, 14.6],
  "azerbaijan": [40.1, 47.6],
  "bahamas": [24.3, -76.6],
  "bahrain": [26.0, 50.6],
  "bangladesh": [23.7, 90.4],
  "barbados": [13.2, -59.5],
  "belarus": [53.7, 27.9],
  "belgium": [50.8, 4.5],
  "belize": [17.2, -88.5],
  "benin": [9.3, 2.3],
  "bhutan": [27.5, 90.4],
  "bolivia": [-16.3, -63.6],
  "bosnia and herzegovina": [43.9, 17.7],
  "botswana": [-22.3, 24.7],
  "brazil": [-10.3, -53.2],
  "brunei": [4.5, 114.7],
  "bulgaria": [42.7, 25.5],
  "burkina faso": [12.2, -1.6],
  "burundi": [-3.4, 29.9],
  "cambodia": [12.6, 104.9],
  "cameroon": [6.0, 12.0],
  "canada": [56.1, -106.3],
  "cape verde": [16.0, -24.0],
  "central african republic": [6.6, 20.9],
  "chad": [15.5, 19.0],
  "chile": [-35.7, -71.5],
  "china": [35.9, 104.2],
  "colombia": [4.6, -74.3],
  "comoros": [-11.9, 43.3],
  "congo": [-0.7, 15.8],
  "costa rica": [9.7, -84.0],
  "croatia": [45.1, 15.2],
  "cuba": [21.5, -79.0],
  "cyprus": [35.1, 33.4],
  "czech republic": [49.8, 15.5],
  "dr congo": [-2.9, 23.6],
  "denmark": [56.0, 10.0],
  "djibouti": [11.6, 43.0],
  "dominica": [15.4, -61.4],
  "dominican republic": [18.7, -70.2],
  "ecuador": [-1.8, -78.2],
  "egypt": [26.8, 30.8],
  "el salvador": [13.8, -88.9],
  "equatorial guinea": [1.6, 10.5],
  "eritrea": [15.2, 39.8],
  "estonia": [58.6, 25.0],
  "eswatini": [-26.5, 31.5],
  "ethiopia": [9.1, 40.5],
  "fiji": [-17.7, 178.1],
  "finland": [64.0, 26.0],
  "france": [46.2, 2.2],
  "gabon": [-0.8, 11.6],
  "gambia": [13.4, -15.3],
  "georgia": [42.3, 43.4],
  "germany": [51.2, 10.4],
  "ghana": [7.9, -1.0],
  "greece": [39.1, 21.8],
  "grenada": [12.1, -61.7],
  "guatemala": [15.8, -90.2],
  "guinea": [10.0, -11.0],
  "guinea-bissau": [12.0, -15.0],
  "guyana": [4.9, -58.9],
  "haiti": [19.0, -72.4],
  "honduras": [15.2, -86.2],
  "hong kong": [22.3, 114.2],
  "hungary": [47.2, 19.5],
  "iceland": [64.9, -19.0],
  "india": [22.0, 79.0],
  "indonesia": [-0.8, 113.9],
  "iran": [32.4, 53.7],
  "iraq": [33.2, 43.7],
  "ireland": [53.4, -8.2],
  "israel": [31.0, 34.8],
  "italy": [41.9, 12.6],
  "ivory coast": [7.5, -5.5],
  "jamaica": [18.1, -77.3],
  "japan": [36.2, 138.3],
  "jordan": [30.6, 36.2],
  "kazakhstan": [48.0, 67.0],
  "kenya": [0.0, 37.9],
  "kiribati": [1.9, -157.4],
  "kosovo": [42.6, 20.9],
  "kuwait": [29.3, 47.5],
  "kyrgyzstan": [41.2, 74.8],
  "laos": [19.9, 102.5],
  "latvia": [56.9, 24.6],
  "lebanon": [33.9, 35.9],
  "lesotho": [-29.6, 28.2],
  "liberia": [6.4, -9.4],
  "libya": [26.3, 17.2],
  "liechtenstein": [47.2, 9.5],
  "lithuania": [55.2, 23.9],
  "luxembourg": [49.8, 6.1],
  "madagascar": [-18.8, 47.0],
  "malawi": [-13.3, 34.3],
  "malaysia": [4.2, 101.9],
  "maldives": [3.2, 73.2],
  "mali": [17.6, -4.0],
  "malta": [35.9, 14.4],
  "marshall islands": [7.1, 171.2],
  "mauritania": [21.0, -10.9],
  "mauritius": [-20.3, 57.6],
  "mexico": [23.6, -102.6],
  "micronesia": [6.9, 158.2],
  "moldova": [47.4, 28.4],
  "monaco": [43.7, 7.4],
  "mongolia": [46.9, 103.8],
  "montenegro": [42.7, 19.4],
  "morocco": [31.8, -7.1],
  "mozambique": [-18.7, 35.5],
  "myanmar": [21.9, 95.9],
  "namibia": [-22.9, 18.5],
  "nauru": [-0.5, 166.9],
  "nepal": [28.4, 84.1],
  "netherlands": [52.1, 5.3],
  "new zealand": [-41.0, 174.9],
  "nicaragua": [12.9, -85.2],
  "niger": [17.6, 8.1],
  "nigeria": [9.1, 8.7],
  "north korea": [40.3, 127.5],
  "north macedonia": [41.6, 21.7],
  "norway": [60.5, 8.5],
  "oman": [21.5, 55.9],
  "pakistan": [30.4, 69.3],
  "palau": [7.5, 134.6],
  "palestine": [31.9, 35.2],
  "panama": [8.5, -80.8],
  "papua new guinea": [-6.3, 143.9],
  "paraguay": [-23.4, -58.4],
  "peru": [-9.2, -75.0],
  "philippines": [12.9, 121.8],
  "poland": [51.9, 19.1],
  "portugal": [39.4, -8.2],
  "qatar": [25.3, 51.2],
  "romania": [45.9, 25.0],
  "russia": [61.5, 105.3],
  "rwanda": [-1.9, 30.0],
  "saint kitts and nevis": [17.4, -62.8],
  "saint lucia": [13.9, -60.9],
  "saint vincent and the grenadines": [13.0, -61.2],
  "samoa": [-13.8, -172.1],
  "san marino": [43.9, 12.5],
  "sao tome and principe": [0.2, 6.6],
  "saudi arabia": [24.0, 45.0],
  "senegal": [14.5, -14.5],
  "serbia": [44.0, 21.0],
  "seychelles": [-4.7, 55.5],
  "sierra leone": [8.5, -11.8],
  "singapore": [1.35, 103.8],
  "slovakia": [48.7, 19.7],
  "slovenia": [46.1, 14.8],
  "solomon islands": [-9.6, 160.2],
  "somalia": [5.2, 46.2],
  "south africa": [-29.0, 24.0],
  "south korea": [36.5, 127.9],
  "south sudan": [7.0, 30.0],
  "spain": [40.5, -3.7],
  "sri lanka": [7.9, 80.7],
  "sudan": [12.9, 30.2],
  "suriname": [4.0, -56.0],
  "sweden": [62.0, 15.0],
  "switzerland": [46.8, 8.2],
  "syria": [34.8, 39.0],
  "taiwan": [23.7, 121.0],
  "tajikistan": [38.9, 71.3],
  "tanzania": [-6.4, 34.9],
  "thailand": [15.9, 101.0],
  "timor-leste": [-8.9, 125.7],
  "togo": [8.6, 0.8],
  "tonga": [-21.2, -175.2],
  "trinidad and tobago": [10.7, -61.2],
  "tunisia": [34.0, 9.5],
  "turkey": [38.9, 35.2],
  "turkmenistan": [38.9, 59.6],
  "tuvalu": [-7.1, 179.2],
  "uganda": [1.4, 32.3],
  "ukraine": [48.4, 31.2],
  "united arab emirates": [24.0, 54.0],
  "united kingdom": [54.0, -2.0],
  "united states": [39.8, -98.6],
  "uruguay": [-32.5, -55.8],
  "uzbekistan": [41.4, 64.6],
  "vanuatu": [-15.4, 166.9],
  "vatican city": [41.9, 12.45],
  "venezuela": [6.4, -66.6],
  "vietnam": [14.1, 108.3],
  "yemen": [15.6, 48.0],
  "zambia": [-13.1, 27.9],
  "zimbabwe": [-19.0, 29.2],
};

const DEFAULT_COORDS: [number, number] = COUNTRY_COORDS["japan"]!;

function resolveCoords(country: string | undefined): [number, number] {
  if (!country) return DEFAULT_COORDS;
  return COUNTRY_COORDS[country.toLowerCase()] ?? DEFAULT_COORDS;
}

// Real, simplified world coastlines (~55KB) instead of hand-drawn blobs.
// world-atlas ships pre-built TopoJSON at a few resolutions; 110m is plenty
// at the size this renders.
const landTopology = landTopologyJson as any;
const landFeature = feature(landTopology, "land") as GeoJSON.FeatureCollection;

export function DestinationGlobe({
  country,
  className,
}: {
  country: string | undefined;
  className?: string;
}) {
  const [lat, lon] = resolveCoords(country);
  const oceanGradId = "globe-ocean";
  const shadeGradId = "globe-shade";
  const glowId = "globe-glow";
  const clipId = "globe-clip";

  const { landPath, graticulePath } = useMemo(() => {
    // Orthographic = "looking at a sphere from space". Rotating by
    // [-lon, -lat] brings that exact point to dead center, so the pin (and
    // whatever coastline surrounds it) is always the visible, front-facing
    // hemisphere — no manual visibility math needed, d3 clips it for us.
    const projection = geoOrthographic().scale(R).translate([CX, CY]).rotate([-lon, -lat, 0]).clipAngle(90);
    const path = geoPath(projection);
    const graticule = geoGraticule().step([30, 30]);
    return {
      landPath: path(landFeature) ?? "",
      graticulePath: path(graticule()) ?? "",
    };
  }, [lat, lon]);

  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={`Map showing ${country || "the destination"}`}>
      <defs>
        <clipPath id={clipId}>
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>

        {/* ocean base: a lit sphere, lighter toward the upper-left "sun" — fully
            opaque so it reads as a solid globe rather than a tinted wash */}
        <radialGradient id={oceanGradId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="var(--color-globe-ocean-light)" />
          <stop offset="55%" stopColor="var(--color-globe-ocean)" />
          <stop offset="100%" stopColor="var(--color-globe-ocean-deep)" />
        </radialGradient>

        {/* rim shading overlay for a rounded, 3D feel */}
        <radialGradient id={shadeGradId} cx="35%" cy="30%" r="75%">
          <stop offset="55%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.4" />
        </radialGradient>

        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="var(--color-globe-ocean)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-globe-ocean)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft atmosphere glow behind the globe */}
      <circle cx={CX} cy={CY} r={R + 6} fill={`url(#${glowId})`} />

      <circle cx={CX} cy={CY} r={R} fill={`url(#${oceanGradId})`} stroke="var(--color-border)" strokeWidth="0.8" />

      <g clipPath={`url(#${clipId})`}>
        <path d={graticulePath} fill="none" stroke="white" strokeWidth="0.4" opacity="0.25" />
        <path d={landPath} fill="var(--color-globe-land)" stroke="var(--color-globe-land)" strokeWidth="0.3" />

        {/* rim shading + a soft gloss highlight, for a rounded rather than flat look */}
        <circle cx={CX} cy={CY} r={R} fill={`url(#${shadeGradId})`} />
        <ellipse cx={CX - 12} cy={CY - 14} rx="14" ry="9" fill="white" opacity="0.15" />
      </g>

      <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--color-border)" strokeWidth="0.8" />

      {/* the destination is always centered by construction (we rotated the
          globe to face it), so the pin sits dead-center — a vivid, high-
          contrast color against both the blue ocean and green land */}
      <circle
        cx={CX}
        cy={CY}
        r="8"
        fill="var(--color-globe-pin)"
        opacity="0.45"
        style={{ transformBox: "fill-box", transformOrigin: "center", animation: "globe-ping 2.4s ease-out infinite" }}
      />
      <circle
        cx={CX}
        cy={CY}
        r="4.2"
        fill="var(--color-globe-pin)"
        stroke="white"
        strokeWidth="1.2"
        style={{ animation: "globe-dot-blink 2.4s ease-in-out infinite" }}
      />
    </svg>
  );
}
