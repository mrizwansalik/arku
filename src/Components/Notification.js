import { useSelector } from "react-redux"
const Notification = () => {
    const state = useSelector(state=> state.jobs.entities)
    console.log(state)
    return (
      <div className="notification">
        <ul class="list-group">
          {state?.map((job) => (
            <li class="list-group-item">
              <i className="fa fa-list pr-2"></i>
              {job.title}
              <p>{job.experience}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default Notification