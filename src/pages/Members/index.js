import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import API_URL from "../../constant/API";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMember = async () => {
      let serializedData = await fetch(API_URL);
      let data = await serializedData.json();

      setMembers(data);
    };
    getMember();
  }, []);

  return (
    <div>
      <h1>Members</h1>
      <div className="card-wrapper">
        {members.map((member, key) => {
          return (
            <Link to={`${member.id}`} key={key} className="card">
              <p>Name : {member.username}</p>
              <p>Age : {member.age}</p>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Members;
