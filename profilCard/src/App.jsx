import { useState } from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import Hailu from "./assets/commonResources/image/image/1689959227757.png";
import Chaltu from "./assets/commonResources/image/image/download.png";
import Hagos from "./assets/commonResources/image/image/images.jpeg";
import profile from "./prof.js";
import "./App.css";

/*function App() {
  return (
    <>
      <ProfileCard
        profileimage={Hailu}
        name="Hailu"
        age="35"
        occupation="MERN developer"
      />

      <ProfileCard
        profileimage={Chaltu}
        name="Chaltu"
        age="42"
        occupation="devOps"
      />

      <ProfileCard
        profileimage={Hagos}
        name="Hagose"
        age="37"
        occupation="QA/Tetser"
      />
    </>
  );
}

export default App;*/

function App() {
  return (
    <>
      {profile.map((profilelist, i) => {
        console.log(profilelist);

        return (
          <ProfileCard
            key={i}
            profileimage={profilelist.img}
            name={profilelist.name}
            age={profilelist.age}
            occupation={profilelist.occupation}
          />
        );
      })}
    </>
  );
}

export default App;
