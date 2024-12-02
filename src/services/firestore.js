import { db } from '../config/firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where,
  updateDoc,
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';

// Job Postings
export const createJobPosting = async (userId, jobData) => {
  const jobRef = doc(collection(db, 'jobPostings'));
  await setDoc(jobRef, {
    ...jobData,
    userId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return jobRef.id;
};

export const getJobPostings = async (userId) => {
  const q = query(collection(db, 'jobPostings'), where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Candidates
export const addCandidate = async (jobId, candidateData) => {
  const candidateRef = doc(collection(db, 'candidates'));
  await setDoc(candidateRef, {
    ...candidateData,
    jobId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return candidateRef.id;
};

export const updateCandidateStage = async (candidateId, newStage) => {
  const candidateRef = doc(db, 'candidates', candidateId);
  await updateDoc(candidateRef, {
    stage: newStage,
    updatedAt: serverTimestamp()
  });
};

export const getCandidates = async (jobId) => {
  const q = query(collection(db, 'candidates'), where('jobId', '==', jobId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Contact Form Submissions
export const submitContactForm = async (formData) => {
  const contactRef = doc(collection(db, 'contactSubmissions'));
  await setDoc(contactRef, {
    ...formData,
    createdAt: serverTimestamp()
  });
  return contactRef.id;
};

// User Profiles
export const updateUserProfile = async (userId, profileData) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    ...profileData,
    updatedAt: serverTimestamp()
  });
};

export const getUserProfile = async (userId) => {
  const userRef = doc(db, 'users', userId);
  const snapshot = await getDoc(userRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};