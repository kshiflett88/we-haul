import React from 'react';


const JobShow = (props) => {
    return (
      <div className="job-idx-pad">
        <div className="job-idx-left-container">
          <label className="job_label">
            <div className='job-title-haul'>Haul Details:</div>
            <div className="job-info">{props.job.details}</div>
          </label>
          <label className="job_label">
            <div className='job-title'>Origin:</div>
            <div className="job-info">{props.job.startAddress}</div>
          </label>
          <label className="job_label">
            <div className='job-title'>Destination:</div>
            <div className="job-info">{props.job.endAddress}</div>
          </label>
          <div className='div-btn'>
            <button
              className='route-btn'
              onClick={() =>
                props.updateAddress({
                  startAddress: props.job.startAddress,
                  endAddress: props.job.endAddress,
                })
              }
            >
              View Route
            </button>
            <button className='accept-btn'>Accept Job</button>
          </div>
        </div>
      </div>
      // cancel job?
      //
      // <div>
      //   <div></div>
      //   <Link onClick={console.log(this.state.details)}>
      //     <h1>Job Details</h1>
      //   </Link>
      //   <p>Job Details</p>
      //   <div className="job-listings">
      //     <div>Requester name:</div>
      //     {/* <span>{job.user.firstName} </span>
      //               <div>Phone number:</div>
      //                   <span>{job.user.phoneNumber}</span> */}
      //     <div>Haul details:</div>
      //       <span>{this.props.details}</span>
      //     <div>Pick up address:</div>
      //       <span>{this.props.startAddress}</span>
      //     <div>Drop off address:</div>
      //       <span>{this.props.endAddress}</span>
      //     <div>Status:</div>
      //     {/* <span>{this.props.job.status}</span>  */}
      //   </div>
      //   <div>
      //     {/* <button onClick={() => handleClaim()}>Job Complete</button>
      //               <button onClick={() => handleCancel()}>Cancel Job</button> */}
      //   </div>
      // </div>
    );
  }
//   }
// };

export default JobShow;

// class JobShow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.job
//     this.handleModal = this.handleModal.bind(this);
//     // console.log(this.state);
//   }

  // handleClaim = () => {
  //     setState({
  //         status: state.status + 1,
  //         hauler: this.props.currentUserId
  //     })

  // componentDidMount() {
  //   this.props.fetchJobs();
  // }


  // handleModal() {
  //   this.props
  //     .fetchJob(this.props.key)
  //     .then(() => this.props.openModal("jobShow"));
  // }

  // render() {
    // const { job } = this.props;
    // const details = this.props.details
    