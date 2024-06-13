import React from 'react';

const JobForm = ({ jobDetails, onFormChange }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedValue = type === 'checkbox' ? checked : value;
        onFormChange({ ...jobDetails, [name]: updatedValue });
    };

    return (
        <form>
            <label>
                <input className='title'
                    type="checkbox"
                    name="titleCheckbox"
                    checked={jobDetails.titleCheckbox || false}
                    onChange={handleChange}
                />
                Job Post Title
                <input className='title'
                    type="text"
                    name="title"
                    value={jobDetails.title || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="introCheckbox"
                    checked={jobDetails.introCheckbox || false}
                    onChange={handleChange}
                />
                Introduction
                <textarea className='title'
                    name="introduction"
                    value={jobDetails.introduction || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="rolesCheckbox"
                    checked={jobDetails.rolesCheckbox || false}
                    onChange={handleChange}
                />
                Roles and Responsibilities
                <textarea className='title'
                    name="rolesResponsibilities"
                    value={jobDetails.rolesResponsibilities || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="experienceCheckbox"
                    checked={jobDetails.experienceCheckbox || false}
                    onChange={handleChange}
                />
                Experience Range
                <input className='title'
                    type="number"
                    name="minExperience"
                    value={jobDetails.minExperience || ''}
                    onChange={handleChange}
                    placeholder="Min"
                />
                <input className='title'
                    type="number"
                    name="maxExperience"
                    value={jobDetails.maxExperience || ''}
                    onChange={handleChange}
                    placeholder="Max"
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="qualificationCheckbox"
                    checked={jobDetails.qualificationCheckbox || false}
                    onChange={handleChange}
                />
                Qualification
                <textarea className='title'
                    name="qualification"
                    value={jobDetails.qualification || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="salaryCheckbox"
                    checked={jobDetails.salaryCheckbox || false}
                    onChange={handleChange}
                />
                Salary Range
                <input className='title'
                    type="number"
                    name="minSalary"
                    value={jobDetails.minSalary || ''}
                    onChange={handleChange}
                    placeholder="Min"
                />
                <input className='title'
                    type="number"
                    name="maxSalary"
                    value={jobDetails.maxSalary || ''}
                    onChange={handleChange}
                    placeholder="Max"
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="conclusionCheckbox"
                    checked={jobDetails.conclusionCheckbox || false}
                    onChange={handleChange}
                />
                Concluding Statement
                <textarea className='title'
                    name="conclusion"
                    value={jobDetails.conclusion || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="companyCheckbox"
                    checked={jobDetails.companyCheckbox || false}
                    onChange={handleChange}
                />
                Company
                <input className='title'
                    type="text"
                    name="company"
                    value={jobDetails.company || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="locationCheckbox"
                    checked={jobDetails.locationCheckbox || false}
                    onChange={handleChange}
                />
                Job Location
                <input className='title'
                    type="text"
                    name="location"
                    value={jobDetails.location || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="jobTypeCheckbox"
                    checked={jobDetails.jobTypeCheckbox || false}
                    onChange={handleChange}
                />
                Job Type
                <select className='title'
                    name="jobType"
                    value={jobDetails.jobType || ''}
                    onChange={handleChange}
                >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                </select>
            </label>
            <label>
                <input className='title'
                    type="checkbox"
                    name="labelsCheckbox"
                    checked={jobDetails.labelsCheckbox || false}
                    onChange={handleChange}
                />
                Labels
                <select className='title'
                    name="jobLabels"
                    value={jobDetails.jobLabels || []}
                    onChange={handleChange}
                // multiple
                >
                    <option value="Remote">Remote</option>
                    <option value="5 day week">5 day week</option>
                </select>
            </label>
        </form>
    );
};

export default JobForm;
