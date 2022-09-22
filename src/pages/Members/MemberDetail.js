import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API_URL from "../../constant/API";

const MemberDetail = () => {
  const { id } = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    const getMember = async () => {
      let serializedData = await fetch(`${API_URL}/${id}`);
      let data = await serializedData.json();
      setMember(data);
    };
    getMember();
  }, [id]);

  return (
    <div>
      <h3>Hello,{member.name}</h3>
      <p>Email : {member.email}</p>
      {member.address && (
        <p>
          Address : {`${member.address.street},${member.address.suite}`}
          <br />
          {member.address.city}
        </p>
      )}
    </div>
  );
};

export default MemberDetail;
