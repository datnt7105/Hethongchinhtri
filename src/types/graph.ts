export type GraphNodeConfig = {
  id: string;
  entityId: string;
  x: number;
  y: number;
  nodeVariant: string;
  parentNodeId?: string;
};

export type GraphEdgeConfig = {
  id: string;
  relationshipId: string;
  edgeVariant: string;
};

export type GraphConfig = {
  nodes: GraphNodeConfig[];
  edges: GraphEdgeConfig[];
};

