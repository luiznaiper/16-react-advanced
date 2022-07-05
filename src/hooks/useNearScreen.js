import {useEffect, useState, useRef} from 'react'

function useNearScreen() {
    const ref = useRef(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        (async () => {
          typeof window.IntersectionObserver !== 'undefined' ?
            window.IntersectionObserver :
            await import('intersection-observer');
    
          const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0];
            if (isIntersecting) {
              setShow(true);
              console.log('Sí');
              observer.disconnect();
            }
          });
          observer.observe(ref.current);
        })();
      }, [ref]);
      return [show, ref]
}

export {useNearScreen}