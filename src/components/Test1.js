// import React from "react";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
// import "./Profil.css";
// const Profil = () => {
//   return (
//     <div className="profil">
//       <NavBar />
//       <div className="main-body">
//         <div className="row">
//           <div className="col-lg-4">
//             <div className="card">
//               <div className="card-body">
//                 <div className="d-flex flex-column align-items-center text-center">
//                   <img
//                     src={require("../../assets/rym.jpg")}
//                     alt=""
//                     className="profile-picture"
//                   />
//                   <div className="mt-3"></div>
//                 </div>
//                 <hr className="my-4 profile-divider " />
//                 <div className="details1 d-flex flex-column align-items-center text-center">
//                   <div>
//                   <i
//                           className="align-items-flex-start fa-solid fa-user"
//                           style={{ color: "#ffffff" }}
//                         />
//                         <span>Rym Jbeli</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8">
//             <div className="details">
//               <div className="card-body">
//                 <div className="row mb-3">
//                   <div className="col-sm-3">
//                     <h6 className="mb-0">Full Name</h6>
//                   </div>
//                   <div className="col-sm-9 text-secondary">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="John Doe"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <div className="col-sm-3">
//                     <h6 className="mb-0">Email</h6>
//                   </div>
//                   <div className="col-sm-9 text-secondary">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="john@example.com"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <div className="col-sm-3">
//                     <h6 className="mb-0">Phone</h6>
//                   </div>
//                   <div className="col-sm-9 text-secondary">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="(239) 816-9029"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <div className="col-sm-3">
//                     <h6 className="mb-0">Mobile</h6>
//                   </div>
//                   <div className="col-sm-9 text-secondary">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="(320) 380-4539"
//                     />
//                   </div>
//                 </div>
//                 <div className="row mb-3">
//                   <div className="col-sm-3">
//                     <h6 className="mb-0">Address</h6>
//                   </div>
//                   <div className="col-sm-9 text-secondary">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="Bay Area, San Francisco, CA"
//                     />
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-sm-3" />
//                   <div className="col-sm-9 text-secondary">
//                     <input
//                       type="button"
//                       className="btn btn-primary px-4"
//                       defaultValue="Save Changes"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="d-flex align-items-center mb-3">
//                       Project Status
//                     </h5>
//                     <p>Web Design</p>
//                     <div className="progress mb-3" style={{ height: 5 }}>
//                       <div
//                         className="progress-bar bg-primary"
//                         role="progressbar"
//                         style={{ width: "80%" }}
//                         aria-valuenow={80}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                     <p>Website Markup</p>
//                     <div className="progress mb-3" style={{ height: 5 }}>
//                       <div
//                         className="progress-bar bg-danger"
//                         role="progressbar"
//                         style={{ width: "72%" }}
//                         aria-valuenow={72}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                     <p>One Page</p>
//                     <div className="progress mb-3" style={{ height: 5 }}>
//                       <div
//                         className="progress-bar bg-success"
//                         role="progressbar"
//                         style={{ width: "89%" }}
//                         aria-valuenow={89}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                     <p>Mobile Template</p>
//                     <div className="progress mb-3" style={{ height: 5 }}>
//                       <div
//                         className="progress-bar bg-warning"
//                         role="progressbar"
//                         style={{ width: "55%" }}
//                         aria-valuenow={55}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                     <p>Backend API</p>
//                     <div className="progress" style={{ height: 5 }}>
//                       <div
//                         className="progress-bar bg-info"
//                         role="progressbar"
//                         style={{ width: "66%" }}
//                         aria-valuenow={66}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Profil;
