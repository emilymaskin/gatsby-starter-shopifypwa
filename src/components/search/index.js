import React, { useState } from 'react';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../utils/constants';

import Input from './Input';
import * as hitComps from './hitComps';

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => {
    if (!state.query) {
      return null;
    }
    if (res && res.nbHits > 0) {
      return (
        <div className={css(styles.results, state.query ? styles.show : null)}>
          {children}
        </div>
      );
    }
    return (
      <div className={css(styles.results, state.query ? styles.show : null)}>
        No results for {state.query}
      </div>
    );
  },
);

export default function Search({ indices, collapse, hitsAsGrid }) {
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  );

  return (
    <InstantSearch searchClient={searchClient} indexName={indices[0].name}>
      <div className={css(styles.searchWrapper)}>
        <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
        {indices.map(({ name, hitComp }) => (
          <Index key={name} indexName={name}>
            <Results>
              <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
      </div>
    </InstantSearch>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'relative',
  },
  results: {
    position: 'absolute',
    display: 'none',
    height: 300,
    width: 500,
    left: -100,
    zIndex: 1000,
    background: colors.white,
    padding: 20,
    overflow: 'scroll',
    border: `1px solid ${colors.grayBorder}`,
  },
  show: {
    display: 'block',
  },
});
