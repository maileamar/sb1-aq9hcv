import React from 'react';
import { motion } from 'framer-motion';
import CandidateCard from './CandidateCard';

const KanbanBoard = ({ stages, candidates, onCandidateClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stages.map((stage) => (
        <div key={stage} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-900">{stage}</h3>
            <span className="text-xs text-gray-500">
              {candidates.filter(c => c.stage === stage).length} candidates
            </span>
          </div>
          <div className="space-y-4">
            {candidates
              .filter((candidate) => candidate.stage === stage)
              .map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onClick={() => onCandidateClick(candidate)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;