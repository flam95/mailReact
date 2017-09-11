import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Emaily!</h1>
          <p>Collect feedback from your users</p>

          <a href={this.props.auth ? "/surveys" : "/auth/google"} className="btn-large">Go to my Dashboard</a>
        </div>
      </div>
    );  
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);