import { createElement as h } from 'react';
import { render } from 'react-dom';

const iconElemnt = h('img', {
  key: 'dsfkljsdfs',
  src: '/assets/icons/spinner.svg',
  alt: '',
  height: 12,
});

const buttonElement = h(
  'button',
  {
    type: 'button',
    className: 'button button__upload button--pending',
    onClick(e) {
      console.log(e.target);
    },
  },
  '업로드 중',
  iconElemnt
);

const root = document.getElementById('root');
render(buttonElement, root);
