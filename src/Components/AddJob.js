import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJob } from '../Storage/jobslice'
import { useHistory } from 'react-router'

export default function AddJob() {
const dispatch = useDispatch()
  const [job, setJob] = useState({
      title:"",
      experience:"",
      image:"",
      rate:0,
      start:"",
      end:"",
    })
  const [tab, setTab] = useState(1)
  const [error, setError] = useState(false)
  const history = useHistory()
  const handleChange = (e) => {

    if (e.target.id === "rate") {
      if (e.target.value < 10) {
           return null
      }
       }
       setJob((job) => {
         return { ...job, [e.target.id]: e.target.value };
       });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addJob(job));
    history.push("/")
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (tab === 1) {
       if (job.title !== "" && job.experience !== "" && job.image !== "") {
         setTab((tab) => tab + 1);
         setError(false)
       } else {
         setError(true)
       }
    }
    if (tab === 2) {
      if (job.rate > 9) {
        setTab((tab) => tab + 1);
        setError(false)
      } else {
        setError(true)
       }
    }
  }
console.log(job)
    return (
      <div className="">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div class="card shadow">
              <div className="card-header bg-white ">
                <h5 class="card-title text-primary">Create A Job Post</h5>
                <p>
                  Complete the following steps to create a affective job post
                </p>
              </div>
              <div class="card-body">
                <span className="text-primary">Step {tab} of 3</span>
                <p class="card-text">
                  <div className="above__tabs d-flex justify-content-between my-3">
                    <div
                      className={tab === 1 ? "bg__change bg-primary" : "px-5"}
                    >
                      <p className="pt-3 text-center">Job Information</p>
                    </div>
                    <div
                      className={tab === 2 ? "bg__change bg-primary" : "px-5"}
                    >
                      <p className="pt-3 text-center">Candidate Type</p>
                    </div>
                    <div
                      className={
                        tab === 3 ? "bg__change bg-primary rounded-0" : "px-5"
                      }
                    >
                      <p className="pt-3 text-center">Shift Timing</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {tab === 1 && (
                      <div className="form-group text-left mb-5">
                        <label>Job Title</label>
                        <input
                          type="text"
                          className="form-control bg-green-800"
                          id="title"
                          required
                          aria-describedby="emailHelp"
                          onChange={(e) => handleChange(e)}
                        />
                        {error && job.title === "" && (
                          <div className="alert alert-danger" role="alert">
                            This field is required
                          </div>
                        )}
                        <label>Experience</label>
                        <input
                          type="text"
                          className="form-control bg-green-800"
                          id="experience"
                          required
                          aria-describedby="emailHelp"
                          onChange={(e) => handleChange(e)}
                        />
                        {error && job.experience === "" && (
                          <div className="alert alert-danger" role="alert">
                            This field is required
                          </div>
                        )}
                        <label>Image</label>
                        <input
                          type="file"
                          className="form-control bg-green-800"
                          id="image"
                          accept="image/*"
                          required
                          aria-describedby="emailHelp"
                          onChange={(e) => handleChange(e)}
                        />
                        {error && job.image === "" && (
                          <div className="alert alert-danger" role="alert">
                            This field is required
                          </div>
                        )}
                      </div>
                    )}
                    {tab === 2 && (
                      <div className="form-group text-left mb-5">
                        <label>Hourly Rate</label>
                        <input
                          type="Number"
                          className="form-control bg-green-800"
                          id="rate"
                          required
                          onChange={(e) => handleChange(e)}
                        />
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            Hourly Rate at least 10
                          </div>
                        )}
                      </div>
                    )}
                    {tab === 3 && (
                      <div className="form-group text-left mb-5">
                        <label>Start Time</label>
                        <input
                          type="datetime-local"
                          className="form-control bg-green-800"
                          id="start"
                          required
                          onChange={(e) => handleChange(e)}
                        />
                        <label>End Time</label>
                        <input
                          type="datetime-local"
                          className="form-control bg-green-800"
                          id="end"
                          required
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    )}
                    <button
                      class="btn btn-outline-secondary rounded-full px-5 mb-5 mt-3 py-1.5"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        if (tab !== 1) {
                          setTab(tab - 1);
                        } else setTab(1);
                      }}
                    >
                      Previous
                    </button>
                    {tab === 3 ? (
                      <button
                        class="btn-success btn rounded-full px-5 mb-5 mt-3 py-1.5"
                        style={{ float: "right" }}
                        type="submit"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        class="btn-primary btn rounded-full px-5 mb-5 mt-3 py-1.5 "
                        style={{ float: "right" }}
                        onClick={(e) => handleNext(e)}
                      >
                        Next
                      </button>
                    )}
                  </form>
                </p>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
}
