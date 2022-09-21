import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMember = async () => {
      let serializedData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
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
          let age = Math.floor(Math.random() * 90 + 10);
          return (
            <Link to={`${member.id}`} key={key} className="card">
              <p>Name : {member.username}</p>
              <p>Age : {age}</p>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Members;
