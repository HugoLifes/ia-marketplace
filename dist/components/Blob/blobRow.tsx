import { useThree } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { blobPersonalities } from './blobLibrary';
import Blob from './Blob';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const getDeviceType = (): DeviceType => {
  if (isMobile && !isTablet) return 'mobile';
  if (isTablet) return 'tablet';
  return 'desktop';
};

const BlobRow = () => {
  const { viewport } = useThree();
  const [effectiveDevice, setEffectiveDevice] = useState<DeviceType>(() => getDeviceType());

  useEffect(() => {
    const device = getDeviceType();
    const isSmallScreen = viewport.width < 6;

    if (device === 'desktop' && isSmallScreen) {
      setEffectiveDevice('tablet');
    } else {
      setEffectiveDevice(device);
    }
  }, []); // ❗ Only run once on mount

  const positonsMap: Record<DeviceType, [number, number, number][]> = {
    mobile: [
      [0, 1.8, 0],
      [15, 0, 0],
      [30, 0.1, 0],
      [50, 0.1, 0],
      [70, 0.1, 0],
    ],
    tablet: [
      [0, 0, 0],
      [15, 0, 0],
      [30, 0, 0],
      [50, 0, 0],
      [70, 0, 0],
    ],
    desktop: [
      [0, 0, 0],
      [15, 0, 0],
      [30, 0, 0],
      [50, 0, 0],
      [70, 0, 0],
    ],
  };

  const scaleMap: Record<DeviceType, number[]> = {
    mobile: [0.4, 0.18, 0.2, 0.2, 0.2],
    tablet: [0.35, 0.25, 0.25, 0.25, 0.25],
    desktop: [0.4, 0.3, 0.3, 0.3, 0.3],
  };

  const personalities: (keyof typeof blobPersonalities)[] = [
    'alien',
    'lava',
    'lava2',
    'ghostFlame',
    'lightning',
  ];

  const scales = scaleMap[effectiveDevice];
  const positions = positonsMap[effectiveDevice];

  return (
    <>
      {[...Array(5)].map((_, i) => {
        const personalityKey = personalities[i];
        const config = blobPersonalities[personalityKey];
        const position = positions[i];
        const scale = scales[i];

        return (
          <Blob
            key={i}
            position={position}
            scale={scale}
            r={config.r}
            g={config.g}
            b={config.b}
            distortion={config.distortion}
            speed={config.speed}
            phase={config.phase}
            vertexShader={config.vertex}
            fragmentShader={config.fragment}
            color1={config.color1}
            color2={config.color2}
            color3={config.color3}
            glowStrength={config.glowStrength.value}
            pulseSpeed={config.pulseSpeed.value}
            iTime={config.iTime}
          />
        );
      })}
    </>
  );
};

export default BlobRow;