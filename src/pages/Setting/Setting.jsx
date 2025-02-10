import React from "react";
import { useState } from "react";
import look from "../../assets/look.png";

import "./Setting.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Setting = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"} `}>
        <div className="cap">
          <div className="fr1">
            <div className="fr1-acc">
              <h4> Account</h4>
              <h3>Choose how you appear and what you see on YouTube</h3>
              <h5>Signed in as vynkse180305@fpt.edu.vn</h5>
            </div>

            <img src={look} alt="" />
          </div>
          <h6></h6>
          <div className="fr2">
            <h3>Your YouTube channel</h3>
            <h5>
              This is your public presence on YouTube. You need a channel to
              upload your own videos, comment on videos, or create playlists.
            </h5>
            <div className="ytchan">
              <p>Your channel</p>
              
                <p className="bl">Create a chanel</p>
              
            </div>
          </div>
          <h6></h6>
          <div className="fr3">
            <div>
              <h3>Your Account</h3>
              <h5>You sign in to YouTube with your Google Account</h5>
            </div>
            <div className="fr3-form">
              <p>Google account</p>
              <div>
                <button>
                  <p className="bl">
                    View or change your Google Account settings
                  </p>
                </button>
                <h5>You will be redirected to your Google Account page</h5>
              </div>
            </div>
            <div className="fr3-form">
              <p>Family Center</p>
              <div>
                <button>
                  <p className="bl">
                    Manage kids profiles and features for teens
                  </p>
                </button>
                <h5>Tools to connect parents, kids, and teens on YouTube</h5>
              </div>
            </div>
            <div className="fr3-form">
              <p>Membership</p>
              <div>
                <div className="fr3-form1">
                  <p>No membership</p>
                  <p>|</p>
                  <button>
                    <p className="bl">Get YouTube Premium</p>
                  </button>
                </div>
                <h5>You will be redirected to your Google Account page</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
