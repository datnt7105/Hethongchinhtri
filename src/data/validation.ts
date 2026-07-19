import { allEntities, allRelationships } from "@/data/all-data";
import { glossaryTerms } from "@/data/glossary";
import { legalSources } from "@/data/legal-sources";
import { politicalSystemGraph } from "@/data/graphs/political-system-graph";
import {
  centralStateGraph,
  localGovernmentGraph,
  stateApparatusGraph,
} from "@/data/graphs/state-apparatus-graphs";
import { timelineEvents } from "@/data/timeline";
import { validateStaticData } from "@/lib/validate-data";

export const phaseOneValidationIssues = validateStaticData({
  entities: allEntities,
  relationships: allRelationships,
  legalSources,
  graphs: [
    politicalSystemGraph,
    stateApparatusGraph,
    centralStateGraph,
    localGovernmentGraph,
  ],
  timelineEvents,
  glossaryTerms,
});

export function assertPhaseOneData() {
  if (!phaseOneValidationIssues.length) return;
  throw new Error(
    `Phase 1 static data validation failed:\n${phaseOneValidationIssues
      .map((issue) => `${issue.code}: ${issue.recordId}.${issue.field} -> ${issue.referencedId ?? ""}`)
      .join("\n")}`,
  );
}
