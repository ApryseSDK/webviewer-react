import React from 'react';
import Display from './Display';
import { Text, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

function Body() {
  return (
    <>
      <Heading>Webviewer-React Chakra UI Component</Heading>
      <Heading>Integration Examples</Heading>
      <Text fontSize="lg">
        The component {`<DocumentViewerSimpleDisplay />`} not only wraps the
        WebViewer as a React component, but also provides you controls over the
        WebViewer instance everywhere in your app.
      </Text>
      <UnorderedList marginInlineStart={'1.3em'}>
        <ListItem>
          <Text fontSize="lg">
            Want to handle your document inside you cool modal component? No
            problem!
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg">
            Want to search texts inside a custom drawer? You got it!
          </Text>
        </ListItem>
      </UnorderedList>
      <Text fontSize="lg">
        Here are some examples of how it can be integrated with UI component
        libraries such as Chakra UI.
      </Text>
      <div>
        <Display />
      </div>
    </>
  );
}

export default Body;
