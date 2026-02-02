import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useGSAP = (callback, config = []) => {
  const internalRef = useRef();
  
  const isConfigArray = Array.isArray(config);
  const deps = isConfigArray ? config : (config.dependencies || []);
  const scope = (!isConfigArray && config.scope) ? config.scope : internalRef;

  useIsomorphicLayoutEffect(() => {
    const contextScope = scope.current || scope;
    const ctx = gsap.context(callback, contextScope);

    return () => ctx.revert();
  }, deps);

  return scope;
};
