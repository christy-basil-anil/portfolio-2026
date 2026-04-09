import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import './GridMotion.css';

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseYRef = useRef(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const colPositions = useRef([0, 0, 0, 0, 0, 0, 0]);
  const isHovering = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const colsCount = 7;
  const itemsPerCol = 4;
  
  // Get unique image URLs to preload
  const uniqueImages = Array.from(new Set(items.filter(item => typeof item === 'string' && (item.startsWith('http') || item.startsWith('/')))));

  useEffect(() => {
    if (uniqueImages.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loaded = 0;
    const total = uniqueImages.length;

    uniqueImages.forEach((src) => {
      const img = new Image();
      img.src = src as string;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === total) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === total) {
          setIsLoaded(true);
        }
      };
    });
  }, [items]);

  const getColItems = (colIndex: number) => {
    const colItems = items.slice(colIndex * itemsPerCol, (colIndex + 1) * itemsPerCol);
    // Fill with placeholders if not enough items
    while (colItems.length < itemsPerCol) {
      colItems.push(`https://picsum.photos/seed/placeholder${colItems.length + colIndex * itemsPerCol}/800/1200`);
    }
    // Triple the items for seamless looping
    return [...colItems, ...colItems, ...colItems];
  };

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    const updateMotion = () => {
      const baseSpeeds = [0.4, -0.4, 0.6, -0.6, 0.5, -0.5, 0.7];
      
      // Calculate mouse influence based on vertical position
      // Only active when hovering
      const mouseInfluence = isHovering.current 
        ? (mouseYRef.current / window.innerHeight - 0.5) * 6 
        : 0;

      colRefs.current.forEach((col, index) => {
        if (col && col.children.length >= itemsPerCol * 2) {
          // Update position
          const speed = baseSpeeds[index] + mouseInfluence;
          colPositions.current[index] -= speed;

          // Seamless loop logic (bidirectional)
          // Calculate the exact height of one set of items (including the gap)
          const firstItem = col.children[0] as HTMLElement;
          const secondSetFirstItem = col.children[itemsPerCol] as HTMLElement;
          const loopHeight = secondSetFirstItem.offsetTop - firstItem.offsetTop;
          
          // Use modulo to keep position within [0, loopHeight]
          // Adding loopHeight before modulo handles negative values for bidirectional looping
          colPositions.current[index] = ((colPositions.current[index] % loopHeight) + loopHeight) % loopHeight;

          gsap.set(col, {
            y: -colPositions.current[index],
            force3D: true,
            z: 0.01 // Force sub-pixel rendering for smoother motion
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);
    
    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('mouseenter', handleMouseEnter);
      gridElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (gridElement) {
        gridElement.removeEventListener('mouseenter', handleMouseEnter);
        gridElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className={`noscroll ${!isLoaded ? 'is-loading' : 'is-ready'}`} ref={gridRef}>
      {!isLoaded && (
        <div className="grid-loader">
          <div className="loader-content">
            <div className="loader-spinner"></div>
            <p className="loader-text">Loading Visuals {Math.round((loadedCount / (uniqueImages.length || 1)) * 100)}%</p>
          </div>
        </div>
      )}
      <section
        className="intro-grid"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div className="gridMotion-container">
          {[...Array(colsCount)].map((_, colIndex) => (
            <div key={colIndex} className="column" ref={el => (colRefs.current[colIndex] = el)}>
              {getColItems(colIndex).map((content, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="row__item"
                  onClick={() => typeof content === 'string' && setSelectedImage(content)}
                >
                  <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                    {typeof content === 'string' && (content.startsWith('http') || content.startsWith('/')) ? (
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url("${content}"), url("https://picsum.photos/seed/fallback/800/1200")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    ) : (
                      <div className="row__item-content">{content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Poster Detail" 
                className="lightbox-image"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GridMotion;
