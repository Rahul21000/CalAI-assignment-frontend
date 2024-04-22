import { useDrag, useDrop } from 'react-dnd';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';


// Draggable component
const DraggableBox = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'BOX', name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {name}
    </div>
  );
};



// Droppable component
const DroppableBox = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'BOX',
    drop: () => ({ name: 'Dropped Box' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isActive ? 'lightgreen' : 'white',
        width: 200,
        height: 200,
      }}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};
