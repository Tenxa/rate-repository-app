import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USER } from "../graphql/queries";


const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();

  const getUser = useQuery(GET_USER);

  useEffect(() => {
    if (getUser.data) {
      setCurrentUser(getUser.data.authorizedUser);
    }
  }, [getUser]);

  return currentUser;
};

export default useCurrentUser;