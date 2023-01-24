import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import AllPosts from "./AllPosts";
import Post from "./Post";

export default function Profile() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
