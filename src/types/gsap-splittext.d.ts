declare global {
    interface Window {
      SplitText: new (
        target: Element | string,
        vars?: {
          type?: 'chars' | 'words' | 'lines'
          [key: string]: any
        }
      ) => {
        chars: HTMLElement[]
        words: HTMLElement[]
        lines: HTMLElement[]
        revert?: () => void
      }
    }
  }
  
export {}