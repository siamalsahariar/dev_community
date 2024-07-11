// custom.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      'rdf:rdf': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'cc:work': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'rdf:about': string };
      'dc:format': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'dc:type': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'rdf:resource': string };
    }
  }
  