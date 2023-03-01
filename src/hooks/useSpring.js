import { useEffect } from 'react';
import { useSpring } from 'react-spring'

function useAnimation(){
    const [props, propsSet] = useSpring(() => ({
        opacity: 0,
        translateX: -45,
      }));

      useEffect(() => {
        function handleScroll() {
            const position = window.pageYOffset;
            propsSet({
                opacity: position > 100 ? 1 : 0,
                translateX: position > 100 ? 0 : -45,
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
      }, [propsSet])

      return props
}

export default useAnimation