import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import JobPostingCard from '../../components/hiring/JobPostingCard';
import KanbanBoard from '../../components/hiring/KanbanBoard';
import CandidateModal from '../../components/hiring/CandidateModal';

const stages = ['Sourcing', 'Screening', 'Interview', 'Finish Interview'];

const jobPostings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    location: 'Remote',
    department: 'Engineering',
    candidates: [
      {
        id: 1,
        name: 'Sarah Chen',
        stage: 'Interview',
        cv: '/path/to/cv.pdf',
        email: 'sarah.chen@email.com',
        phone: '+84 123 456 789',
        salary: '$4,000',
        country: 'Vietnam'
      },
      {
        id: 2,
        name: 'Michael Nguyen',
        stage: 'Screening',
        cv: '/path/to/cv.pdf',
        email: 'michael.n@email.com',
        phone: '+84 987 654 321',
        salary: '$3,800',
        country: 'Vietnam'
      }
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    location: 'Remote',
    department: 'Infrastructure',
    candidates: [
      {
        id: 3,
        name: 'David Wang',
        stage: 'Finish Interview',
        cv: '/path/to/cv.pdf',
        email: 'david.w@email.com',
        phone: '+84 555 666 777',
        salary: '$4,200',
        country: 'Vietnam'
      }
    ]
  }
];

const HiringProgress = () => {
  const [selectedJob, setSelectedJob] = useState(jobPostings[0]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Job Postings Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Job Postings</h2>
            <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              <FaPlus className="mr-2" />
              New Job Posting
            </button>
          </div>

          {/* Job Postings List */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            {jobPostings.map((job) => (
              <JobPostingCard
                key={job.id}
                job={job}
                isSelected={selectedJob.id === job.id}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>

          {/* Kanban Board */}
          <KanbanBoard
            stages={stages}
            candidates={selectedJob.candidates}
            onCandidateClick={setSelectedCandidate}
          />

          {/* Candidate Modal */}
          {selectedCandidate && (
            <CandidateModal
              candidate={selectedCandidate}
              onClose={() => setSelectedCandidate(null)}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default HiringProgress;