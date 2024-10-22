declare module 'particles.js' {
    export interface ParticlesOptions {
      selector?: string;
      maxParticles?: number;
      sizeVariations?: number;
      color?: string;
      connectParticles?: boolean;
      speed?: number;
      responsive?: Array<{
        breakpoint: number;
        options: ParticlesOptions;
      }>;
    }
  
    export function init(options: ParticlesOptions): void;
    export function destroy(): void;
  }
  