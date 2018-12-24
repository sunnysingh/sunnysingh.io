import { css, keyframes } from 'styled-components';

export function wave(options = {}) {
  const config = { ...{ delay: 0, count: 3 }, ...options };
  const { delay, count } = config;
  const animation = keyframes`
    0% {
      transform: rotate(20deg) translate(0, 0);
    }
    100% {
      transform: rotate(30deg) translate(-1px, -1px);
    }
  `;
  return css`
    animation-name: ${animation};
    animation-delay: ${delay}ms;
    animation-duration: 400ms;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: ${typeof count === 'number' ? count * 2 : count};
    transform: rotate(20deg);
    transform-origin: bottom right;
  `;
}

export function fly(options = {}) {
  const config = { ...{ delay: 0 }, ...options };
  const { delay, count } = config;
  const animation = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-2px, -5px);
    }
  `;
  return css`
    animation-name: ${animation};
    animation-delay: ${delay}ms;
    animation-duration: 600ms;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: rotate(20deg);
    transform-origin: bottom right;
  `;
}

export function rotate(options = {}) {
  const config = { ...{ delay: 0, count: 1 }, ...options };
  const { delay, count } = config;
  const animation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
  return css`
    animation-name: ${animation};
    animation-delay: ${delay}ms;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: ${count};
    transform-origin: center;
  `;
}

export function slideInFrom(direction) {
  if (direction !== 'left' && direction !== 'right') {
    throw new Error('slideInFrom expects a direction left or right');
  }
  const animation = keyframes`
    0% {
      opacity: 0;
      transform: translateX(${direction === 'left' ? '-20%' : '20%'});
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;
  return css`
    animation-name: ${animation};
    animation-duration: 650ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  `;
}

export function fadeIn() {
  const animation = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;
  return css`
    animation-name: ${animation};
    animation-duration: 650ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  `;
}

export function swingIn(options = {}) {
  const config = { ...{ duration: 650 }, ...options };
  const { duration } = config;
  const animation = keyframes`
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  `;
  return css`
    animation-name: ${animation};
    animation-duration: ${duration}ms;
    animation-timing-function: cubic-bezier(0.36, -0.64, 0.34, 1.76);
    animation-iteration-count: 1;
  `;
}

export function fillInColor(color, options = {}) {
  if (typeof color !== 'string') {
    throw new Error('fillInColor expects a color string');
  }
  const config = { ...{ delay: 0 }, ...options };
  const { delay } = config;
  const animation = keyframes`
    25% {
      fill: ${color};
    }
    50% {
      fill: #111;
    }
    100% {
      fill: ${color};
    }
  `;
  return css`
    animation-name: ${animation};
    animation-delay: ${delay}ms;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  `;
}
