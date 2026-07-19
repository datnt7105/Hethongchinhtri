import { politicalSystemEntities } from "@/data/entities/political-system";
import { stateApparatusEntities } from "@/data/entities/state-apparatus";
import { politicalSystemRelationships } from "@/data/relationships/political-system";
import {
  centralStateRelationships,
  localGovernmentRelationships,
  stateOverviewRelationships,
} from "@/data/relationships/state-apparatus";

export const allEntities = [
  ...politicalSystemEntities,
  ...stateApparatusEntities,
];

export const allRelationships = [
  ...politicalSystemRelationships,
  ...stateOverviewRelationships,
  ...centralStateRelationships,
  ...localGovernmentRelationships,
];

export const allEntityById = new Map(
  allEntities.map((entity) => [entity.id, entity]),
);

export const graphDataSets = {
  political: {
    entities: politicalSystemEntities,
    relationships: politicalSystemRelationships,
  },
  state: {
    entities: [
      allEntityById.get("people")!,
      allEntityById.get("central-apparatus")!,
      allEntityById.get("local-government-system")!,
    ],
    relationships: stateOverviewRelationships,
  },
  central: {
    entities: [
      allEntityById.get("people")!,
      ...stateApparatusEntities.filter((entity) =>
        [
          "national-assembly",
          "state-president",
          "government",
          "peoples-courts",
          "peoples-procuracies",
          "state-audit",
          "national-election-council",
        ].includes(entity.id),
      ),
    ],
    relationships: centralStateRelationships,
  },
  local: {
    entities: [
      allEntityById.get("people")!,
      ...stateApparatusEntities.filter((entity) =>
        [
          "central-apparatus",
          "provincial-level",
          "provincial-council",
          "provincial-committee",
          "commune-level",
          "commune-council",
          "commune-committee",
        ].includes(entity.id),
      ),
    ],
    relationships: localGovernmentRelationships,
  },
};
