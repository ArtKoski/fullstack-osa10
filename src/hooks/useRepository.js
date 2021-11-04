import { useState, useEffect } from 'react';
import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (id) => {
    const { data, error, loading } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: {id: id}
      });

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }

      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...variables,
        },
      });
    };


    return { repository: data ? data.repository : undefined,
        fetchMore: handleFetchMore,
        loading};
};

export default useRepository;