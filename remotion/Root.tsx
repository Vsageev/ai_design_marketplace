import React from 'react';
import { Composition } from 'remotion';
import { DemoVideo } from './DemoVideo';

export const RemotionRoot: React.FC = () => {
  const FPS = 30;
  const SCENE_DURATION = 90; // 3 seconds per scene
  const TOTAL_SCENES = 6;
  const TOTAL_FRAMES = SCENE_DURATION * TOTAL_SCENES; // 18 seconds total

  return (
    <>
      <Composition
        id="DemoVideo"
        component={DemoVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemoVideo4K"
        component={DemoVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={3840}
        height={2160}
      />
      <Composition
        id="DemoVideoSquare"
        component={DemoVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1080}
      />
    </>
  );
};
