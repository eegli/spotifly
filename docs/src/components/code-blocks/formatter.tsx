import CodeBlock from '@theme/CodeBlock';
import React from 'react';

type Props = {
  children: string;
};

export const Formatter = ({ children }: Props) => {
  return <CodeBlock language="npx">{children}</CodeBlock>;
};
