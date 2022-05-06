import React from "react";
import { useParams } from "react-router-dom";

function withRouter(Task) {
  return (props) => {
    const params = useParams();
    return <Task {...props} params={params} />;
  };
}

export default withRouter;