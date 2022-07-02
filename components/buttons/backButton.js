import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';
import styles from '../../styles/BackButton.module.css';

const BackButton = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <BiArrowBack
        className={styles.backIcon}
        size={50}
        onClick={() => router.back()}
      />
    </div>
  );
};

export default BackButton;
