import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 50 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path d="M 2.88 28 L 0 28 L 0 0.04 L 2.88 0.04 L 2.88 12.48 L 18.92 12.48 L 18.92 0.04 L 21.8 0.04 L 21.8 28 L 18.92 28 L 18.92 15.04 L 2.88 15.04 L 2.88 28 Z M 31 28 L 28.12 28 L 28.12 0 L 39.96 0 Q 42.52 0 44.64 1.16 Q 46.76 2.32 48.02 4.38 A 8.577 8.577 0 0 1 49.211 7.922 A 10.827 10.827 0 0 1 49.28 9.16 A 9.772 9.772 0 0 1 48.861 12.062 A 8.609 8.609 0 0 1 48.06 13.88 Q 46.84 15.96 44.7 17.12 A 9.599 9.599 0 0 1 41.223 18.198 A 12.061 12.061 0 0 1 39.8 18.28 L 31 18.28 L 31 28 Z M 31 2.56 L 31 15.72 L 39.48 15.72 A 8.163 8.163 0 0 0 41.686 15.431 A 7.136 7.136 0 0 0 42.96 14.94 Q 44.52 14.16 45.46 12.7 A 5.797 5.797 0 0 0 46.279 10.575 A 7.901 7.901 0 0 0 46.4 9.16 A 7.664 7.664 0 0 0 46.22 7.459 A 5.7 5.7 0 0 0 45.46 5.62 Q 44.52 4.16 42.98 3.36 A 7.192 7.192 0 0 0 39.729 2.561 A 8.392 8.392 0 0 0 39.6 2.56 L 31 2.56 Z" vector-effect="non-scaling-stroke"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
