import { useMemo } from 'react';

const images = import.meta.glob('/src/assets/img/*.jpg', { eager: true, import: 'default' });

function Background(props) {
  const imageList = useMemo(() => Object.values(images), []);

  const bgImage = useMemo(() => {
    const idx = Math.floor(Math.random() * imageList.length);
    return imageList[idx];
  }, [imageList]);

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
  };

  return <div style={backgroundStyle}>{props.children}</div>;
}

export default Background;
