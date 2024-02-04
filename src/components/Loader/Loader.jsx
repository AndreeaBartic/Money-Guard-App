import { LoaderWrapper } from './Loader.styled';
import { ReactComponent as TopIcon } from '../../images/svg/loader/top-part.svg';
import { ReactComponent as LeftMid } from '../../images/svg/loader/left-mid-part.svg';
import { ReactComponent as LeftBottom } from '../../images/svg/loader/left-bottom-part.svg';
import { ReactComponent as RightTop } from '../../images/svg/loader/right-top-part.svg';
import { ReactComponent as RightBottom } from '../../images/svg/loader/right-bottom-part.svg';
import { useEffect } from 'react';

export const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'scroll');
  });
  return (
    <LoaderWrapper>
      <div>
        <TopIcon width={35} height={35} />
        <LeftMid width={45} height={45} />
        <RightTop width={30} height={30} />
        <LeftBottom width={30} height={30} />
        <RightBottom width={30} height={30} />
      </div>
    </LoaderWrapper>
  );
};
