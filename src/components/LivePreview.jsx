import React from 'react';

const LivePreview = ({ jobDetails }) => {
    if (!jobDetails) {
        return <div className="live-preview"><h2>Select a job to preview</h2></div>;
    }

    return (
        <div className="live-preview">
            <h2 className="live-preview">Live Preview</h2>
            <div id="live-preview-content">
                {jobDetails.titleCheckbox && <h3>{jobDetails.title}</h3>}
                {jobDetails.introCheckbox && <p>{jobDetails.introduction}</p>}
                {jobDetails.rolesCheckbox && <p>{jobDetails.rolesResponsibilities}</p>}
                {jobDetails.experienceCheckbox && (
                    <p>Experience: {jobDetails.minExperience} - {jobDetails.maxExperience} years</p>
                )}
                {jobDetails.qualificationCheckbox && <p>{jobDetails.qualification}</p>}
                {jobDetails.salaryCheckbox && (
                    <p>Salary: ${jobDetails.minSalary} - ${jobDetails.maxSalary}</p>
                )}
                {jobDetails.conclusionCheckbox && <p>{jobDetails.conclusion}</p>}
                {jobDetails.companyCheckbox && <p>Company: {jobDetails.company}</p>}
                {jobDetails.locationCheckbox && <p>Location: {jobDetails.location}</p>}
                {jobDetails.jobTypeCheckbox && <p>Job Type: {jobDetails.jobType}</p>}
                {jobDetails.labelsCheckbox && (
                    <p>Labels: {Array.from(jobDetails.jobLabels || []).join(', ')}</p>
                )}
            </div>
        </div>
    );
};

export default LivePreview;
