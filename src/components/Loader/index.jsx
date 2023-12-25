import { createPortal } from 'react-dom';
import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div className={css.Wrapper}>
      <Triangle
        visible={true}
        height="200"
        width="200"
        color="#1976d2"
        ariaLabel="triangle-loading"
        wrapperClass={css.Loader}
      />
    </div>,
    loaderRoot
  );
};

export default Loader;
