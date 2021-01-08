import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Hammer from 'react-hammerjs';

import styles from './slider.styl';


const Slider = ({ autoplay, delay, children, showExtra, slideClassName, slidesToShow, arrows, className, wrapperClassName, onChange }) => {
  const [current, setCurrent] = useState(0);
  const [command, setCommand] = useState('next');
  const [loop, setLoop] = useState(null);

  function updateLoop(nextFunction) {
    if (autoplay) {
      setLoop(setInterval(() => {
        nextFunction();
      }, delay))
    }
  }

  useEffect(() => {
    if (onChange) {
      onChange(current)
    }
  }, [current])

  function nextSlide(clear) {
    const childrenLen = children.length / slidesToShow;

    if (current + 1 < childrenLen) {
      setCurrent(current + 1);
      setCommand('next');
    } else {
      setCurrent(0);
      setCommand('next');
    }

    if (clear) {
      clearInterval(loop);
      updateLoop(nextSlide);
    }
  }

  useEffect(() => {
    updateLoop(nextSlide);
    return () => {
      clearInterval(loop);
    }
  }, []);

  function prevSlide() {
    const childrenLen = children.length / slidesToShow;
    clearInterval(loop);

    if (current !== 0) {
      setCurrent(current - 1);
      setCommand('prev');
    } else {
      setCurrent(childrenLen - 1);
      setCommand('prev');
    }

    updateLoop(nextSlide);
  }

  function divideChildContent() {
    if (!Array.isArray(children)) {
      return (
        <div className={cx(styles.slide, slideClassName)}>
          {children}
        </div>
      );
    }

    return React.Children.map(children, (_, index) => {
      const indexPlus = index + 1;
      if (indexPlus % slidesToShow === 0) {
        return (
          <div className={cx(styles.slide, slideClassName)}>
            {children.slice(indexPlus - slidesToShow, indexPlus)}
            {showExtra && children.slice(indexPlus, indexPlus + 1)}
          </div>
        );
      }

      return null;
    });
  }

  function renderChildren() {
    const dividedChildren = divideChildContent();

    if (!Array.isArray(dividedChildren)) {
      return React.cloneElement(dividedChildren, {
        className: cx(styles.currentSlide, styles[command], dividedChildren.props.className),
      });
    }

    return React.Children.map(dividedChildren, (child, index) => {
      const isCurrent = cx({ [styles.currentSlide]: current === index });
      return React.cloneElement(child, {
        className: cx(isCurrent, styles[command], child.props.className),
      });
    });
  }

  function renderArrows() {
    return (
      <div className={styles.arrow}>
        <button type="button" className={styles.arrowLeft} onClick={() => prevSlide()}>
          &lsaquo;
        </button>

        <button type="button" className={styles.arrowRight} onClick={() => nextSlide(true)}>
          &rsaquo;
        </button>
      </div>
    );
  }

  return (
    <Hammer onSwipeRight={prevSlide} onSwipeLeft={nextSlide}>
      <div className={cx(styles.content, className, { [styles.withArrow]: arrows })}>
        <div className={cx(styles.wrapper, wrapperClassName)}>
          {renderChildren()}
        </div>

        {arrows && children.length > 1 && renderArrows()}
      </div>
    </Hammer>
  );
}

Slider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  showExtra: PropTypes.bool,
  arrows: PropTypes.bool,
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  slidesToShow: PropTypes.number,
  slideClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  onChange: PropTypes.func,
}

Slider.defaultProps = {
  delay: 5000,
  autoplay: false,
  slidesToShow: 1,
}

export default Slider
