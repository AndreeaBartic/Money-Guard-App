import styles from './Container.module.css';

export const Container = ({ children, size }) => {
  const containerClasses =
    size === 'statistics'
      ? `${styles.container} ${styles.statistics}`
      : styles.container;

  return <div className={containerClasses}>{children}</div>;
};
