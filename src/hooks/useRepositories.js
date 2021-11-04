import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = (orderBy, keyword) => {
    
    var search = {}

    if(keyword !== '') {
        search = {...search, 
            searchKeyword: keyword
        }
    }

    if(orderBy && orderBy === 'latest') {
    search = { ...search,
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC'
        } 
    }
    else if(orderBy === 'highest_rated') {
        search = { ...search,
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'DESC'
        }
    }
    else if(orderBy === 'lowest_rated') {
        search = { ...search,
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'ASC'
        }
    }

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          variables: {
            after: data.repositories.pageInfo.endCursor,
            ...variables,
          },
        });
      };

    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: search
      });

  return { repositories: data ? data.repositories : undefined,
        fetchMore: handleFetchMore,
        loading };
};

export default useRepositories;