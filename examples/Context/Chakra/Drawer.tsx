// reference: https://www.pdftron.com/documentation/web/guides/advance-text-search/
import * as React from "react";
import useInstance from "../../../src";
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
    useDisclosure
} from "@chakra-ui/react";

function DrawerI() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { instance } = useInstance();
    const btnRef = React.useRef();

    function searchText(e) {
        const { documentViewer, Annotations, Search } = instance.Core;
        documentViewer.setSearchHighlightColors({
            searchResult: new Annotations.Color(0, 0, 255, 0.7),
            activeSearchResult: "rgba(0, 255, 0, 0.7)"
        });

        const searchText = e.target.value;
        console.log('textQiad', searchText)
        const mode = Search.Mode.HIGHLIGHT;
        const searchOptions = {
            fullSearch: false,
            onResult: (result) => {
                if (result.resultCode === Search.ResultCode.FOUND) {
                    const textQuad = result.quads[0].getPoints();
                    documentViewer.displaySearchResult(result)
                }
            }
        };
        documentViewer.textSearchInit(searchText, mode, searchOptions);
    }

    return (
        <>
            <Button ref={btnRef} colorScheme="blue" mr={3} onClick={onOpen}>
                Search Inside Drawer
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
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Text Search</DrawerHeader>
                    <DrawerBody>
                        <Input placeholder="Type here..." onKeyUp={searchText} />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default DrawerI;
