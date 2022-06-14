import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <BiArrowBack
        className="backButton"
        size={50}
        onClick={() => router.back()}
      />
    </div>
  );
};

export default BackButton;
