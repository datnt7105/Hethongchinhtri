import type { GraphConfig } from "@/types/graph";

export const politicalSystemGraph: GraphConfig = {
  nodes: [
    { id: "n-people", entityId: "people", x: 360, y: 0, nodeVariant: "people" },
    { id: "n-party", entityId: "party", x: 0, y: 210, nodeVariant: "party" },
    { id: "n-state", entityId: "state", x: 360, y: 210, nodeVariant: "state" },
    { id: "n-front", entityId: "front", x: 720, y: 210, nodeVariant: "front" },
    { id: "n-trade-union", entityId: "trade-union", x: 300, y: 480, nodeVariant: "organization" },
    { id: "n-youth-union", entityId: "youth-union", x: 520, y: 480, nodeVariant: "organization" },
    { id: "n-womens-union", entityId: "womens-union", x: 740, y: 480, nodeVariant: "organization" },
    { id: "n-farmers-union", entityId: "farmers-union", x: 960, y: 480, nodeVariant: "organization" },
    { id: "n-veterans-association", entityId: "veterans-association", x: 1180, y: 480, nodeVariant: "organization" },
  ],
  edges: [
    { id: "e-people-state", relationshipId: "people-state", edgeVariant: "representation" },
    { id: "e-party-state", relationshipId: "party-state", edgeVariant: "leadership" },
    { id: "e-party-front", relationshipId: "party-front", edgeVariant: "leadership" },
    { id: "e-front-state", relationshipId: "front-state", edgeVariant: "participation" },
    { id: "e-front-trade-union", relationshipId: "front-trade-union", edgeVariant: "member-organization" },
    { id: "e-front-youth-union", relationshipId: "front-youth-union", edgeVariant: "member-organization" },
    { id: "e-front-womens-union", relationshipId: "front-womens-union", edgeVariant: "member-organization" },
    { id: "e-front-farmers-union", relationshipId: "front-farmers-union", edgeVariant: "member-organization" },
    { id: "e-front-veterans-association", relationshipId: "front-veterans-association", edgeVariant: "member-organization" },
  ],
};
