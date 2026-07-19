import type { Entity } from "@/types/entity";
import type { LegalSource } from "@/types/legal-source";
import type { Relationship } from "@/types/relationship";
import type { GraphConfig } from "@/types/graph";
import type { TimelineEvent } from "@/types/timeline";
import type { GlossaryTerm } from "@/types/glossary";

export type ValidationIssue = {
  code:
    | "duplicate-id"
    | "missing-entity"
    | "missing-source"
    | "missing-translation"
    | "missing-relationship";
  recordId: string;
  field: string;
  referencedId?: string;
};

function duplicateIds(ids: string[]) {
  const seen = new Set<string>();
  return new Set(ids.filter((id) => (seen.has(id) ? true : !seen.add(id))));
}

export function validateStaticData({
  entities,
  relationships,
  legalSources,
  graphs = [],
  timelineEvents = [],
  glossaryTerms = [],
}: {
  entities: Entity[];
  relationships: Relationship[];
  legalSources: LegalSource[];
  graphs?: GraphConfig[];
  timelineEvents?: TimelineEvent[];
  glossaryTerms?: GlossaryTerm[];
}): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const entityIds = new Set(entities.map((entity) => entity.id));
  const sourceIds = new Set(legalSources.map((source) => source.id));

  duplicateIds(entities.map((entity) => entity.id)).forEach((id) =>
    issues.push({ code: "duplicate-id", recordId: id, field: "entity.id" }),
  );
  duplicateIds(relationships.map((relationship) => relationship.id)).forEach((id) =>
    issues.push({ code: "duplicate-id", recordId: id, field: "relationship.id" }),
  );
  duplicateIds(legalSources.map((source) => source.id)).forEach((id) =>
    issues.push({ code: "duplicate-id", recordId: id, field: "legalSource.id" }),
  );

  entities.forEach((entity) => {
    if (!entity.name.vi || !entity.name.en || !entity.summary.vi || !entity.summary.en) {
      issues.push({ code: "missing-translation", recordId: entity.id, field: "entity.localizedText" });
    }
    entity.relatedEntityIds.forEach((relatedId) => {
      if (!entityIds.has(relatedId)) {
        issues.push({
          code: "missing-entity",
          recordId: entity.id,
          field: "entity.relatedEntityIds",
          referencedId: relatedId,
        });
      }
    });
    entity.legalSourceIds.forEach((sourceId) => {
      if (!sourceIds.has(sourceId)) {
        issues.push({
          code: "missing-source",
          recordId: entity.id,
          field: "entity.legalSourceIds",
          referencedId: sourceId,
        });
      }
    });
  });

  relationships.forEach((relationship) => {
    [relationship.sourceEntityId, relationship.targetEntityId].forEach((entityId) => {
      if (!entityIds.has(entityId)) {
        issues.push({
          code: "missing-entity",
          recordId: relationship.id,
          field: "relationship.entityId",
          referencedId: entityId,
        });
      }
    });
    relationship.legalSourceIds.forEach((sourceId) => {
      if (!sourceIds.has(sourceId)) {
        issues.push({
          code: "missing-source",
          recordId: relationship.id,
          field: "relationship.legalSourceIds",
          referencedId: sourceId,
        });
      }
    });
  });

  const relationshipIds = new Set(relationships.map((relationship) => relationship.id));
  graphs.forEach((graph, graphIndex) => {
    graph.nodes.forEach((node) => {
      if (!entityIds.has(node.entityId)) {
        issues.push({
          code: "missing-entity",
          recordId: `graph-${graphIndex}:${node.id}`,
          field: "graph.node.entityId",
          referencedId: node.entityId,
        });
      }
    });
    graph.edges.forEach((edge) => {
      if (!relationshipIds.has(edge.relationshipId)) {
        issues.push({
          code: "missing-relationship",
          recordId: `graph-${graphIndex}:${edge.id}`,
          field: "graph.edge.relationshipId",
          referencedId: edge.relationshipId,
        });
      }
    });
  });

  timelineEvents.forEach((event) => {
    event.relatedEntityIds.forEach((entityId) => {
      if (!entityIds.has(entityId)) {
        issues.push({ code: "missing-entity", recordId: event.id, field: "timeline.relatedEntityIds", referencedId: entityId });
      }
    });
    event.legalSourceIds.forEach((sourceId) => {
      if (!sourceIds.has(sourceId)) {
        issues.push({ code: "missing-source", recordId: event.id, field: "timeline.legalSourceIds", referencedId: sourceId });
      }
    });
  });

  glossaryTerms.forEach((term) => {
    term.relatedEntityIds.forEach((entityId) => {
      if (!entityIds.has(entityId)) {
        issues.push({ code: "missing-entity", recordId: term.id, field: "glossary.relatedEntityIds", referencedId: entityId });
      }
    });
    term.legalSourceIds.forEach((sourceId) => {
      if (!sourceIds.has(sourceId)) {
        issues.push({ code: "missing-source", recordId: term.id, field: "glossary.legalSourceIds", referencedId: sourceId });
      }
    });
  });

  return issues;
}
