import React from 'react';
import { Link } from 'gatsby';
import ContextConsumer from '../../layouts/context';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../utils/constants';

const CartLink = () => (
  <ContextConsumer>
    {({ set, store }) => {
      return (
        <>
          &nbsp;
          <Link
            to="/cart"
            className={css(styles.link)}
            onClick={() => {
              set({
                isCartOpen: true,
              });
            }}
          >
            <div className={css(styles.linkInner)}>
              <svg
                ariaHidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 20 20"
                width="20px"
                className={css(styles.icon)}
              >
                <path
                  fill={colors.blue}
                  d="M18.936 5.564c-.144-.175-.35-.207-.55-.207h-.003L6.774 4.286c-.272 0-.417.089-.491.18-.079.096-.16.263-.094.585l2.016 5.705c.163.407.642.673 1.068.673h8.401c.433 0 .854-.285.941-.725l.484-4.571c.045-.221-.015-.388-.163-.567z"
                ></path>
                <path
                  fill={colors.blue}
                  d="M17.107 12.5H7.659L4.98 4.117l-.362-1.059c-.138-.401-.292-.559-.695-.559H.924c-.411 0-.748.303-.748.714s.337.714.748.714h2.413l3.002 9.48c.126.38.295.52.942.52h9.825c.411 0 .748-.303.748-.714s-.336-.714-.748-.714zm-6.683 3.73a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0zm6.429 0a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0z"
                ></path>
              </svg>
              <span>Cart</span>
            </div>
            <span className={css(styles.count)}>{store.cartCount}</span>
          </Link>
        </>
      );
    }}
  </ContextConsumer>
);

export default CartLink;

const styles = StyleSheet.create({
  link: {
    color: colors.blue,
    textDecoration: 'none',
    position: 'relative',
  },
  linkInner: {
    display: 'flex',
  },
  icon: {
    marginRight: 10,
  },
  count: {
    background: colors.red,
    color: colors.white,
    border: `2px solid ${colors.white}`,
    boxSizing: 'border-box',
    width: 21,
    height: 21,
    display: 'inline-block',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: '17px',
    borderRadius: '50%',
    left: 10,
    top: -10,
    fontWeight: 600,
  },
});
