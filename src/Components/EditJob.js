import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editJob } from "../Storage/jobslice";
import { useHistory } from "react-router";

export default function EditJob(props) {
  const dispatch = useDispatch();
  const [job, setJob] = useState({});
  const [tab, setTab] = useState(1);

  const history = useHistory();
  const handleChange = (e) => {
    setJob((job) => {
      return { ...job, [e.target.id]: e.target.value };
    });
  };
  const data = useSelector(
    (state) => state.jobs.entities[props.match.params.id - 1]
  );
  useEffect(() => {
    setJob(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editJob(job));
    history.push("/");
  };
  console.log(job);
  return (
    <div className="">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Create Job</h5>
              <p class="card-text">
                <div className="above__tabs">
                  <a className={tab === 1 ? "bg__change" : ""}>Tab1</a>
                  <a className={tab === 2 ? "bg__change" : ""}>Tab2</a>
                  <a className={tab === 3 ? "bg__change" : ""}>Tab3</a>
                </div>
                <form onSubmit={handleSubmit}>
                  {tab === 1 && (
                    <div className="form-group text-left">
                      <label>Job Title</label>
                      <input
                        type="text"
                        className="form-control bg-green-800"
                        id="title"
                        required
                        value={job.title ? job.title : ""}
                        aria-describedby="emailHelp"
                        onChange={(e) => handleChange(e)}
                      />
                      <label>Experience</label>
                      <input
                        type="text"
                        className="form-control bg-green-800"
                        id="experience"
                        value={job.experience ? job.experience : ""}
                        required
                        aria-describedby="emailHelp"
                        onChange={(e) => handleChange(e)}
                      />
                      <label>Image</label>
                      <input
                        type="file"
                        className="form-control bg-green-800"
                        id="image"
                        accept="image/*"
                        value={job.image ? job.image : ""}
                        required
                        aria-describedby="emailHelp"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  )}
                  {tab === 2 && (
                    <div className="form-group text-left">
                      <label>Hourly Rate</label>
                      <input
                        type="Number"
                        className="form-control bg-green-800"
                        id="rate"
                        value={job.rate ? job.rate : ""}
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  )}
                  {tab === 3 && (
                    <div className="form-group text-left">
                      <label>Start Time</label>
                      <input
                        type="datetime-local"
                        className="form-control bg-green-800"
                        id="start"
                        value={job.start ? job.start : ""}
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      <label>End Time</label>
                      <input
                        type="datetime-local"
                        className="form-control bg-green-800"
                        id="end"
                        value={job.end ? job.end : ""}
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  )}
                  <button
                    class="btn-primary btn rounded-full px-5 mb-5 mt-3 py-1.5"
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
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(tab + 1);
                      }}
                    >
                      Continue
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
