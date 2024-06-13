// src/components/JobManager.js
import React, { useState } from 'react';
import JobList from './JobList';
import JobForm from './JobForm';
import LivePreview from './LivePreview';
import './JobManager.css';

const JobManager = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({});

    const createJob = () => {
        const title = prompt('Enter the job title:');
        if (title) {
            const newJob = { id: Date.now(), title, details: { title } };
            setJobs([...jobs, newJob]);
            setSelectedJob(newJob);
            setFormData(newJob.details);
        }
    };

    const duplicateJob = (job) => {
        const duplicatedJob = { ...job, id: Date.now(), title: job.title + ' (Copy)' };
        setJobs([...jobs, duplicatedJob]);
    };

    const deleteJob = (jobId) => {
        setJobs(jobs.filter(job => job.id !== jobId));
        if (selectedJob?.id === jobId) setSelectedJob(null);
    };

    const handleFormChange = (updatedDetails) => {
        const updatedJob = { ...selectedJob, details: updatedDetails, title: updatedDetails.title || 'New Job' };
        setSelectedJob(updatedJob);
        setFormData(updatedDetails);
        setJobs(jobs.map(job => (job.id === updatedJob.id ? updatedJob : job)));
    };

    return (
        <div className="job-manager">

            <div className="job-management-panel">
                <div className="heading">
                    <h3>HandySolver Job-Portal</h3>
                </div>
                <button class="button2" onClick={createJob}>Create Job</button>
                <JobList
                    jobs={jobs}
                    onDuplicate={duplicateJob}
                    onDelete={deleteJob}
                    onSelect={(job) => {
                        setSelectedJob(job);
                        setFormData(job.details);
                    }}
                    selectedJobId={selectedJob?.id}
                />
                {selectedJob && (
                    <JobForm
                        jobDetails={formData}
                        onFormChange={handleFormChange}
                    />
                )}
            </div>
            <LivePreview jobDetails={formData} />
        </div>
    );
};

export default JobManager;
