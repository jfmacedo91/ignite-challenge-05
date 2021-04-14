import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={ styles.contentContainer }>
      <img src="/images/logo.svg" alt="Logo"/>
    </header>
  );
};
