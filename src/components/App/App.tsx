import huskyIcon from '@/assets/husky.png';
import reactIcon from '@/assets/react.png';
import reduxIcon from '@/assets/redux.png';
import typescriptIcon from '@/assets/typescript.png';
import webpackIcon from '@/assets/webpack.png';
import * as styles from './App.module.scss';
import type { FC } from 'react';

export const App: FC = () => (
  <div className={styles.container}>
    <h1 className={styles.main_text}>
      React + Webpack + Husky + Redux + Typescript <br /> template
    </h1>
    <div className={styles.images}>
      <img src={reactIcon} alt="react" />
      <img src={webpackIcon} alt="webpack" />
      <img src={huskyIcon} alt="husky" />
      <img src={reduxIcon} alt="redux" />
      <img src={typescriptIcon} alt="typescript" />
    </div>
  </div>
);
