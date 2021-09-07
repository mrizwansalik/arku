import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeJob, searchJob } from "../Storage/jobslice";

export default function JobBoard() {
  const state = useSelector((state) => state.jobs.entities);
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(state);
  }, [state]);

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <div className="">
          <Link to="/addjob">
            <button className="btn btn-primary">AddJob</button>
          </Link>
        </div>
        <div className="w-75">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search this blog"
              />
              {/* <button className="btn btn-secondary" type="button" onClick={()=>dispatch(searchJob(search))}> */}
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  setJobs(
                    state.filter((job) => {
                      console.log(
                        "testing ",
                        job.title
                          ?.toLowerCase()
                          ?.includes(search?.toLowerCase())
                      );
                      return (
                        job.title
                          ?.toLowerCase()
                          ?.includes(search?.toLowerCase()) && job
                      );
                    })
                  );
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <a
            className="fa fa-bell"
            onClick={() => {
              setIsShow(!isShow);
            }}
          ></a>
          <span class="position-absolute translate-middle badge rounded-pill bg-danger">
            {state?.length}
          </span>
        </div>
      </div>
      {isShow && <Notification />}
      <table className="table table-striped table-bordered mt-3">
        <thead className="text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {jobs?.map((job, index) => {
            return (
              <tr className="content-justify" key={index}>
                <th scope="row">{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.experience}</td>
                <td>
                  <Link to={"/job/" + (index + 1)}>
                    <button className="btn btn-primary m-1">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => dispatch(removeJob(job.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
