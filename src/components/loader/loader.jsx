import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <ColorRing
    visible={true}
    height="130"
    width="130"
    ariaLabel="blocks-loading"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
);
