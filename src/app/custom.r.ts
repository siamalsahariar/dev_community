// custom.d.ts
import 'react';

declare module 'react' {
  interface SVGProps<T> extends React.SVGAttributes<T> {
    'xmlns:dc'?: string;
    'xmlns:cc'?: string;
    'xmlns:rdf'?: string;
    'xmlns:svg'?: string;
  }
}
