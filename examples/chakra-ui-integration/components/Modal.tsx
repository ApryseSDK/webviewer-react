import * as React from 'react';
import useInstance from '../../../www/lib';
import { getRandomLocalDocUrl, buildRandomRectAnnot } from '../utils.js';
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
  useDisclosure,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

function ModalI() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { instance } = useInstance();

  function openDoc(e) {
    const file = e.target.files[0];
    if (!file) return;
    instance.UI.loadDocument(file, { filename: file.name });
  }

  function updateZoom(val) {
    instance.UI.setZoomLevel(val / 50 + 0.01);
  }

  function zoomIn() {
    instance.UI.setZoomLevel(instance.UI.getZoomLevel() + 0.2);
  }

  function zoomout() {
    instance.UI.setZoomLevel(instance.UI.getZoomLevel() - 0.2);
  }

  function ReplaceDocument() {
    instance.UI.loadDocument(getRandomLocalDocUrl());
  }

  function addRandomAnnotation() {
    const rectAnnot = buildRandomRectAnnot(instance);
    const manager = instance.Core.annotationManager;
    manager.addAnnotation(rectAnnot);
    manager.redrawAnnotation(rectAnnot);
  }

  function enableToolsHeader() {
    const el = ['toolsHeader'];
    instance.UI.enableElements(el);
  }

  function disableToolsHeader() {
    const el = ['toolsHeader'];
    instance.UI.disableElements(el);
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" mr={3}>
        Document Controls In Modal
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <ModalContent color="white" bg="blue.700" borderColor="blue.700">
          <ModalHeader>Try Some Document Controls Here</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Modal text body</p>
            <p>Placeholder texts</p>
            <Stack direction="row" mb={5} mt={3}>
              <Button
                onClick={() => document.getElementById('openFile').click()}
                colorScheme="teal"
              >
                Open...
              </Button>
              <Button onClick={addRandomAnnotation} colorScheme="teal">
                Add Random Rectangle
              </Button>
              <Button onClick={zoomIn} colorScheme="teal">
                Zoom In
              </Button>
              <Button onClick={zoomout} colorScheme="teal">
                Zoom Out
              </Button>
              <input
                type="file"
                id="openFile"
                hidden
                multiple={false}
                onChange={openDoc}
              />
            </Stack>
            <Stack direction="row" mb={5}>
              <Button onClick={ReplaceDocument} colorScheme="teal">
                Change Document
              </Button>
              <Button onClick={enableToolsHeader} colorScheme="teal">
                Enable Header UI
              </Button>
              <Button onClick={disableToolsHeader} colorScheme="teal">
                Disable Header UI
              </Button>
            </Stack>
            <p>Zoom Slider</p>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={50}
              onChange={val => updateZoom(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="outline" mr={2}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalI;
