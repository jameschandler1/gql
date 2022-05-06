import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";


const GET_MODULE_DETAILS = gql`
    query getModuleDetails($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
        id
        title
        content
        videoUrl
    }
    track(id: $trackId) {
        id
        title
    modules {
        id
        title
        length
    }
  }
}
`;

const Module = ({ trackId, moduleId  }) => {
  const { loading, error, data } = useQuery(GET_MODULE_DETAILS, {
    variables: { 
        trackId,
        moduleId
     },
  });

  return (
    <Layout fullWidth='true'>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module}/>
      </QueryResult>
    </Layout>
  );
};

export default Module;