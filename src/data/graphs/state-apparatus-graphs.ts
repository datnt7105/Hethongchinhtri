import type { GraphConfig } from "@/types/graph";

export const stateApparatusGraph: GraphConfig = {
  nodes: [
    { id: "state-people", entityId: "people", x: 380, y: 0, nodeVariant: "people" },
    { id: "state-central", entityId: "central-apparatus", x: 100, y: 240, nodeVariant: "central" },
    { id: "state-local", entityId: "local-government-system", x: 660, y: 240, nodeVariant: "local" },
  ],
  edges: [
    { id: "state-e1", relationshipId: "people-central-apparatus", edgeVariant: "representation" },
    { id: "state-e2", relationshipId: "people-local-government", edgeVariant: "election" },
    { id: "state-e3", relationshipId: "central-local-overview", edgeVariant: "central-local" },
  ],
};

export const centralStateGraph: GraphConfig = {
  nodes: [
    { id: "central-people", entityId: "people", x: 530, y: 0, nodeVariant: "people" },
    { id: "central-assembly", entityId: "national-assembly", x: 530, y: 190, nodeVariant: "assembly" },
    { id: "central-president", entityId: "state-president", x: 150, y: 420, nodeVariant: "state-body" },
    { id: "central-government", entityId: "government", x: 430, y: 420, nodeVariant: "state-body" },
    { id: "central-courts", entityId: "peoples-courts", x: 710, y: 420, nodeVariant: "state-body" },
    { id: "central-procuracies", entityId: "peoples-procuracies", x: 990, y: 420, nodeVariant: "state-body" },
    { id: "central-audit", entityId: "state-audit", x: 290, y: 670, nodeVariant: "state-body" },
    { id: "central-election", entityId: "national-election-council", x: 850, y: 670, nodeVariant: "state-body" },
  ],
  edges: [
    { id: "central-e1", relationshipId: "people-national-assembly", edgeVariant: "election" },
    { id: "central-e2", relationshipId: "assembly-president-election", edgeVariant: "election" },
    { id: "central-e3", relationshipId: "assembly-government-formation", edgeVariant: "approval" },
    { id: "central-e4", relationshipId: "assembly-peoples-courts-supervision", edgeVariant: "supervision" },
    { id: "central-e5", relationshipId: "assembly-peoples-procuracies-supervision", edgeVariant: "supervision" },
    { id: "central-e6", relationshipId: "assembly-state-audit-supervision", edgeVariant: "supervision" },
    { id: "central-e7", relationshipId: "assembly-national-election-council-supervision", edgeVariant: "supervision" },
    { id: "central-e8", relationshipId: "government-president-accountability", edgeVariant: "accountability" },
    { id: "central-e9", relationshipId: "courts-procuracies-coordination", edgeVariant: "coordination" },
  ],
};

export const localGovernmentGraph: GraphConfig = {
  nodes: [
    { id: "local-people", entityId: "people", x: 480, y: 0, nodeVariant: "people" },
    { id: "local-central", entityId: "central-apparatus", x: 80, y: 190, nodeVariant: "central" },
    { id: "local-prov-level", entityId: "provincial-level", x: 480, y: 190, nodeVariant: "level" },
    { id: "local-prov-council", entityId: "provincial-council", x: 340, y: 420, nodeVariant: "council" },
    { id: "local-prov-committee", entityId: "provincial-committee", x: 680, y: 420, nodeVariant: "committee" },
    { id: "local-commune-level", entityId: "commune-level", x: 480, y: 650, nodeVariant: "level" },
    { id: "local-commune-council", entityId: "commune-council", x: 340, y: 880, nodeVariant: "council" },
    { id: "local-commune-committee", entityId: "commune-committee", x: 680, y: 880, nodeVariant: "committee" },
  ],
  edges: [
    { id: "local-e1", relationshipId: "people-provincial-council-election", edgeVariant: "election" },
    { id: "local-e2", relationshipId: "provincial-council-committee-election", edgeVariant: "election" },
    { id: "local-e3", relationshipId: "provincial-committee-accountability", edgeVariant: "accountability" },
    { id: "local-e4", relationshipId: "people-commune-council-election", edgeVariant: "election" },
    { id: "local-e5", relationshipId: "commune-council-committee-election", edgeVariant: "election" },
    { id: "local-e6", relationshipId: "commune-committee-accountability", edgeVariant: "accountability" },
    { id: "local-e7", relationshipId: "central-provincial-guidance", edgeVariant: "central-local" },
    { id: "local-e8", relationshipId: "provincial-commune-guidance", edgeVariant: "administrative-guidance" },
  ],
};
