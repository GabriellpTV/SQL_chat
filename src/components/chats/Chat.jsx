import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';

export default function Chat() {
    const [menuItems, setMenuItems] = useState([
        { id: '1', text: 'Gabriel Alves ' },
        { id: '2', text: 'Luiz Eduardo Lima' },
        { id: '3', text: 'Marcos Andrade Costa' },
        { id: '4', text: 'Leticia Alves Lopes' },
      ]);
    
      const handleOnDragEnd = (result) => {
        if (!result.destination) return;
    
        const items = Array.from(menuItems);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setMenuItems(items);
      };
    
      return (
        <div className="flex flex-col border-2 w-3/12 rounded-lg mr-8 items-center pt-8">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="menu">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="menu flex flex-1 flex-col w-11/12 overflow-y-auto"
                >
                  {menuItems.map(({ id, text }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex-col border-2 rounded-lg m-2 items-center p-3 text-gray-600"
                        >
                          {text}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      );
    }