import { useRef, useEffect } from 'react';

const useDragToScroll = (ref: React.RefObject<HTMLElement>) => {
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const element = ref.current;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startPos.current = e.pageX - element!.offsetLeft;
      scrollLeft.current = element!.scrollLeft;
      element!.style.cursor = 'grabbing'; // Change cursor to grabbing during the drag
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - element!.offsetLeft;
      const walk = (x - startPos.current); // Adjusted for higher sensitivity
      element!.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      element!.style.cursor = 'grab'; // Revert cursor back to grab after dragging
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      element!.style.cursor = 'grab'; // Ensure cursor is consistent
    };

    element?.addEventListener('mousedown', onMouseDown);
    element?.addEventListener('mousemove', onMouseMove);
    element?.addEventListener('mouseup', onMouseUp);
    element?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element?.removeEventListener('mousedown', onMouseDown);
      element?.removeEventListener('mousemove', onMouseMove);
      element?.removeEventListener('mouseup', onMouseUp);
      element?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref]);

  return ref;
};

export default useDragToScroll;