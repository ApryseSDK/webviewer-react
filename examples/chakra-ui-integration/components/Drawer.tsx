// reference: https://www.pdftron.com/documentation/web/guides/advance-text-search/
import React, { useState } from 'react';
import useInstance from '../../../www/lib';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

function DrawerI() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { instance } = useInstance();
  const [resIndex, setResIndex] = useState(-1);
  const [searchResults, setSearchResults] = useState([]);
  const btnRef = React.useRef();

  function searchText(e) {
    const { documentViewer, Annotations, Search } = instance.Core;
    const searchText = e.target.value;
    documentViewer.clearSearchResults();
    setSearchResults([]);
    setResIndex(-1);
    if (!searchText) return;
    const newResults = [];
    const mode = Search.Mode.PAGE_STOP | Search.Mode.HIGHLIGHT;
    documentViewer.setSearchHighlightColors({
      searchResult: new Annotations.Color(0, 0, 255, 0.4),
      activeSearchResult: new Annotations.Color(255, 255, 0, 0.6),
    });
    const searchOptions = {
      fullSearch: true,
      onResult: result => {
        if (result.resultCode === Search.ResultCode.FOUND) {
          newResults.push(result);
          documentViewer.displayAdditionalSearchResult(result);
        }
      },
    };
    documentViewer.textSearchInit(searchText, mode, searchOptions);
    setSearchResults(newResults);
  }
  function next(searchResults = [], activeResultIndex) {
    const { documentViewer } = instance.Core;
    if (searchResults.length > 0) {
      const nextResultIndex =
        activeResultIndex === searchResults.length - 1
          ? 0
          : activeResultIndex + 1;
      documentViewer.setActiveSearchResult(searchResults[nextResultIndex]);
      setResIndex(nextResultIndex);
    }
  }

  function prev(searchResults = [], activeResultIndex) {
    const { documentViewer } = instance.Core;
    if (searchResults.length > 0) {
      const prevResultIndex =
        activeResultIndex <= 0
          ? searchResults.length - 1
          : activeResultIndex - 1;
      documentViewer.setActiveSearchResult(searchResults[prevResultIndex]);
      setResIndex(prevResultIndex);
    }
  }

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" m="2" width="100%" onClick={onOpen}>
        Search Texts in Drawer
      </Button>
      <Drawer
        size={'xs'}
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color="white" bg="blue.700" borderColor="blue.700">
          <DrawerCloseButton />
          <DrawerHeader>Text Search and Highlight</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." onKeyUp={searchText} />
          </DrawerBody>
          <DrawerFooter justifyContent="flex-start">
            <Button
              marginRight="20px"
              colorScheme="teal"
              onClick={() => next(searchResults, resIndex)}
            >
              Next
            </Button>
            <Button
              colorScheme="teal"
              onClick={() => prev(searchResults, resIndex)}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              position="absolute"
              right="12px"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerI;
