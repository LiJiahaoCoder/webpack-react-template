import classnames from 'classnames';

import styles from './index.css';

const Loading = () => (
  <div className="py-5 d-flex justify-content-center">
    <div className={classnames('spinner-border', styles.color)} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loading;
