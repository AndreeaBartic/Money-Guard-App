import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  pointer-events: all;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
  }
  svg:first-child {
    transform: translate(-50%, -30%);
    animation: 3s infinite alternate loadF;
  }
  svg:nth-child(2) {
    transform: translate(-65%, 25%);
    animation: 3s infinite alternate loadS;
    animation-delay: 100ms;
  }
  svg:nth-child(3) {
    transform: translate(-5%, 40%);
    animation: 3s infinite alternate loadTh;
    animation-delay: 200ms;
  }
  svg:nth-child(4) {
    transform: translate(-105%, 115%);
    animation: 3s infinite alternate loadFourth;
    animation-delay: 300ms;
  }
  svg:nth-child(5) {
    transform: translate(5%, 115%);
    animation: 3s infinite alternate loadL;
    animation-delay: 400ms;
  };

  @keyframes loadF {
    0% {
        transform: translate(-50%, -30%);
    };
    50% {
        transform: translate(-50%, -60%);
    };
    100% {
        transform: translate(-50%, -30%);
    }
  };
  @keyframes loadS {
    0% {
        transform: translate(-65%, 25%);
    };
    50% {
        transform: translate(-80%, -10%);
    };
    100% {
        transform: translate(-65%, 25%);
    }
  };
  @keyframes loadTh {
    0% {
        transform: translate(-5%, 40%);
    };
    50% {
        transform: translate(15%, -10%);
    };
    100% {
        transform: translate(-5%, 40%);
    }
  };
  @keyframes loadFourth {
    0% {
        transform: translate(-105%, 115%);
    };
    50% {
        transform: translate(-130%, 95%);
    };
    100% {
        transform: translate(-105%, 115%);
    }
  };
  @keyframes loadL {
    0% {
        transform: translate(5%, 115%);
    };
    50% {
        transform: translate(35%, 95%);
    };
    100% {
        transform: translate(5%, 115%);
    }
  };
`;
