import { useState, useEffect } from 'react';
import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (id) => {
    const { data, error, loading } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: {id: id}
      });


  return { repository: data ? data.repository : undefined,
     loading};
};

export default useRepository;