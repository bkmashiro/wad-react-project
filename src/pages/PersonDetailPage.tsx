import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const PersonDetailPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery<any, any, any, any>(
    ["person-detail", { id: id }],
    ({ queryKey: [_, { id }] }) => ({}) //TODO
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2>Movie Details</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default PersonDetailPage;
