import React from "react";
import Display from "./Display";
import { Text, Heading } from "@chakra-ui/react";

function Body() {
  return (
    <>
      <Heading>Webviewer-React Chakra UI Component</Heading>
      <Heading>Integration Examples</Heading>
      <Text fontSize="lg">
        Not only it wraps the WebViewer inside a React component, you will also
        have control over the WebViewer instance everywhere in your app.
      </Text>
      <Text fontSize="lg">
        Want to handle your document inside you cool modal component? No
        problem!
      </Text>
      <Text fontSize="lg">
        Want to search texts inside a custom drawer? You got it!
      </Text>
      <div>
        <Display />
      </div>
    </>
  )
}

export default Body
