import React from "react";
import Section from "./Section";
import Heading from "./Heading";

export interface PostProps {
  title: string;
  body: string;
}

export default function Post({ title, body }: PostProps) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
