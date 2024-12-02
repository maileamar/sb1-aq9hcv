import { useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import * as firestoreService from '../services/firestore';

export const useFirestore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const handleRequest = useCallback(async (operation, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await operation(...args);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createJob = useCallback((jobData) => {
    return handleRequest(firestoreService.createJobPosting, user?.uid, jobData);
  }, [user, handleRequest]);

  const getJobs = useCallback(() => {
    return handleRequest(firestoreService.getJobPostings, user?.uid);
  }, [user, handleRequest]);

  const addCandidate = useCallback((jobId, candidateData) => {
    return handleRequest(firestoreService.addCandidate, jobId, candidateData);
  }, [handleRequest]);

  const updateCandidateStage = useCallback((candidateId, newStage) => {
    return handleRequest(firestoreService.updateCandidateStage, candidateId, newStage);
  }, [handleRequest]);

  const getCandidates = useCallback((jobId) => {
    return handleRequest(firestoreService.getCandidates, jobId);
  }, [handleRequest]);

  const submitContact = useCallback((formData) => {
    return handleRequest(firestoreService.submitContactForm, formData);
  }, [handleRequest]);

  return {
    loading,
    error,
    createJob,
    getJobs,
    addCandidate,
    updateCandidateStage,
    getCandidates,
    submitContact
  };
};