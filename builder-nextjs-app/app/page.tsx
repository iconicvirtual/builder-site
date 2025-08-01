'use client';
import { builder, BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';


builder.init('0ed22311ac6a4dbebeda1b4230c2746c');

export default function Home() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    builder
      .get('page', { url: '/' }) // Homepage
      .toPromise()
      .then((res) => {
        console.log('Builder content:', res);
        setContent(res);
      });
  }, []);

  return (
    <div>
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
