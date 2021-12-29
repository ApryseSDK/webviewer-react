//collection of tools
import React from 'react';
import { ChatIcon as StickyNote, EditIcon as TextTool } from '@chakra-ui/icons';
import useInstance from '../../../www/lib';
import {
  Flex,
  PopoverHeader,
  PopoverBody,
  Popover,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { buildRandomStickyAnnot } from '../utils';

export default function Annotate() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { instance } = useInstance();
  const colors = ['red', 'blue', 'black', 'green'];
  function edit(e) {
    const color = e.target.dataset.color;
    switch (color) {
      case 'red':
        instance.UI.setToolMode('AnnotationCreateFreeHand');
        break;
      case 'green':
        instance.UI.setToolMode('AnnotationCreateFreeHand4');
        break;
      case 'blue':
        instance.UI.setToolMode('AnnotationCreateFreeHand2');
        break;
      case 'black':
        instance.UI.setToolMode('AnnotationCreateFreeHand3');
        break;
      default:
        break;
    }
  }
  function addSticky(e) {
    const color = e.target.dataset.color;
    let rgb = {};
    switch (color) {
      case 'red':
        rgb = { r: 229, g: 62, b: 62 };
        break;
      case 'green':
        rgb = { r: 56, g: 161, b: 105 };
        break;
      case 'blue':
        rgb = { r: 49, g: 130, b: 206 };
        break;
      case 'black':
        rgb = { r: 0, g: 0, b: 0 };
        break;
      default:
        break;
    }
    const annot = buildRandomStickyAnnot(instance, rgb);
    instance.Core.annotationManager.addAnnotation(annot);
    instance.Core.annotationManager.redrawAnnotation(annot);
  }
  return (
    <Popover
      placement="right"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button colorScheme="blue" mr={3}>
          Popover Add Annotation
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="white">
        <PopoverHeader pt={4} fontSize="22" fontWeight="bold" border="0">
          Annotation
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Sticky Notes
          <Flex justifyContent={'space-between'} mb={3}>
            {colors.map(color => (
              <Button
                transform="scaleX(-1)"
                key={color + '_sticky'}
                data-color={color}
                colorScheme="black"
                variant="outline"
                onClick={addSticky}
              >
                <StickyNote
                  pointerEvents="none"
                  w={7}
                  h={7}
                  color={`${color}.500`}
                  data-color={color}
                />
              </Button>
            ))}
          </Flex>
          Freehand Drawing
          <Flex justifyContent={'space-between'} mb={3}>
            {colors.map(color => (
              <Button
                onClick={edit}
                key={color + '_draw'}
                data-color={color}
                colorScheme="black"
                variant="outline"
              >
                <TextTool
                  pointerEvents="none"
                  w={7}
                  h={7}
                  color={`${color}.500`}
                  data-color={color}
                />
              </Button>
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
