import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

export default connectSearchBox(({ refine }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="What can we help you find?"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        className={css(styles.search)}
      />
    </form>
  );
});

const styles = StyleSheet.create({
  search: {
    fontSize: 14,
    width: 300,
    padding: '5px 10px',
  },
});
