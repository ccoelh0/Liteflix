import { useState, useEffect } from 'react'

type device = 'mobile' | 'desktop'

const useWindowSize = (): {device: device} => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  
  return {
    device: width <= 1024 ? 'mobile' : 'desktop'
  }

}

export default useWindowSize