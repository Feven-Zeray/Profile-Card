import React, { Component } from "react";

class ProfileCard extends Component {
  render() {
    //let { name, age, occupation, profileimage } = this.props;

    return (
      <div className="profileCard">
        <img src={this.props.profileimage} />
        <h1>name:{this.props.name}</h1>
        <h2>Age:{this.props.age}</h2>
        <h2>Occupation:{this.props.occupation}</h2>
      </div>
    );
  }
}

export default ProfileCard;

/*class ProfileCard extends Component {
  render() {
    let { name, age, occupation, profileimage } = this.props;
    return (
      <div className="profileCard">
        <img src={profileimage} />
        <h1>name:{name}</h1>
        <h2>Age:{age}</h2>
        <h2>Occupation:{occupation}</h2>
      </div>
    );
  }
}

export default ProfileCard;*/
