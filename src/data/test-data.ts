import { IRecord } from "src/models/fish.model";

export const singleRecordsObjects = {
    blackDrum: {
        species: 'Black Drum',
        scientificName: 'Pogonias cromis',
        weight: 96,
        location: 'Fernandina Beach',
        date: 'April 12, 2001',
        angler: 'James E. Cartwright'
    },
    redDrum: {
        species: 'Red Drum',
        scientificName: 'Sciaenops ocellatus',
        weight: 52.3125,
        location: 'Cocoa',
        date: 'Feb. 24, 1996',
        angler: 'George E. Hogan, Jr.'
    },
    flounder: {
        species: 'Flounder',
        scientificName: 'Bothidae or Pleuronectidae',
        weight: 20.5625,
        location: 'Nassau County',
        date: 'Dec. 23, 1983',
        angler: 'Larenza W. Mungin'
    },
    cobia: {
        species: 'Cobia',
        scientificName: 'Rachycentron canadum',
        weight: 130.0625,
        location: 'Destin',
        date: 'Mar. 21, 1997',
        angler: 'Peter McCollester'
    },
    atlanticCroaker: {
        species: 'Atlantic Croaker',
        scientificName: 'Micropogonias undulatus',
        weight: 4.9375,
        location: 'St. Lucie',
        date: 'Dec. 15, 2002',
        angler: 'Anthony de Foster'
    },
    dolphinfish: {
        species: 'Dolphinfish',
        scientificName: 'Coryphaena hippurus',
        weight: 81,
        location: 'Lantana',
        date: 'June 9, 2007',
        angler: 'Robert Vail'
    }
};

export const testRecordsArray: IRecord[] = Object.values(singleRecordsObjects);