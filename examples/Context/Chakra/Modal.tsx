import * as React from "react";
import useInstance from "../../../src";
import { getRandomLocalDocUrl, buildRandomRectAnnot } from "../utils.js";
import {
    Stack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
let last = -1
function ModalI() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { instance } = useInstance();

    function zoomIn() {
        instance.UI.setZoomLevel(instance.UI.getZoomLevel() + 0.2);
    }

    function zoomout() {
        instance.UI.setZoomLevel(instance.UI.getZoomLevel() - 0.2);
    }

    function ReplaceDocument() {
        instance.UI.loadDocument(getRandomLocalDocUrl(last));
    }

    function addRandomAnnotation() {
        const rectAnnot = buildRandomRectAnnot(instance);
        const manager = instance.Core.annotationManager;
        manager.addAnnotation(rectAnnot);
        manager.redrawAnnotation(rectAnnot);
    }

    function enableToolsHeader() {
        const el = ["toolsHeader"];
        instance.UI.enableElements(el);
    }

    function disableToolsHeader() {
        const el = ["toolsHeader"];
        instance.UI.disableElements(el);
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme="blue" mr={3}>
                Controls Inside Modal
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Try Some Document Controls Here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Modal text body here.</p>
                        <p>And maybe more texts here?</p>
                        <Stack direction="row" mb={3} mt={3}>
                            <Button onClick={ReplaceDocument} colorScheme="teal">
                                Change Document
                            </Button>
                            <Button onClick={zoomIn} colorScheme="teal">
                                Zoom In
                            </Button>
                            <Button onClick={zoomout} colorScheme="teal">
                                Zoom Out
                            </Button>
                        </Stack>
                        <Stack direction="row">
                            <Button onClick={addRandomAnnotation} colorScheme="teal">
                                Add Annotation
                            </Button>
                            <Button onClick={enableToolsHeader} colorScheme="teal">
                                Enable Header UI
                            </Button>
                            <Button onClick={disableToolsHeader} colorScheme="teal">
                                Disable Header UI
                            </Button>
                            <button>
                                Add Resizebar Here
                            </button>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} colorScheme="blue" mr={2}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalI;
