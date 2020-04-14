import React from 'react';
import { Query } from 'react-apollo';
import { StyleSheet, css } from 'aphrodite/no-important';
import gql from 'graphql-tag';

const GET_COLLECTIONS = gql`
  query getCollectionsQuery($handle: String!) {
    shop {
      collectionByHandle(handle: $handle) {
        handle
        title
      }
    }
  }
`;

const Top5 = ({ collections }) => {
  const handles = collections.edges.map(c => c.node.data.collection_handle);

  return (
    <div className={css(styles.collections)}>
      {handles.map((handle, index) => (
        <Query query={GET_COLLECTIONS} variables={{ handle }} key={index}>
          {({ data, loading, error }) => {
            if (loading || error || !data.shop.collectionByHandle) {
              return null;
            }

            return (
              <div className={css(styles.collection)}>
                {data.shop.collectionByHandle.title}
              </div>
            );
          }}
        </Query>
      ))}
    </div>
  );
};

export default Top5;

const styles = StyleSheet.create({
  collections: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: 20,
    maxWidth: 1000,
    margin: 'auto',
  },
  collection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
