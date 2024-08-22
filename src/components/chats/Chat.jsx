import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import useContacts from '../../hooks/useContacts';

export default function Chat({ customClick }) {
  const { contacts } = useContacts()
  const [menuItems, setMenuItems] = useState(contacts);

  useEffect(() => {
    if (contacts !== "O Usuário ainda não possui contatos") {
      setMenuItems(contacts);
    }
  }, [contacts]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(menuItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMenuItems(items);
    const ids = items.map(item => item.chat_id).join(', ');
    localStorage.setItem('contacts_order', ids);
  };


  return (
    <div className="flex flex-col border-2 w-3/12 rounded-lg mr-8 items-center pt-8">
      {contacts == "O Usuário ainda não possui contatos" ? <h1 className='text-xl text-gray-600'>Ainda Não Tem Contatos</h1> :
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="menu">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="menu flex  flex-col w-11/12 overflow-y-auto"
              >
                {menuItems.map(({ chat_id, chat_name }, index) => (
                  <Draggable key={String(chat_id)} draggableId={String(chat_id)} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex-col border-2 rounded-lg m-2 items-center p-3 text-gray-600 bg-white"
                      >
                        {chat_name}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>}

      <ul className="flex flex-1 flex-col w-8/12">
        <li className="flex-col border-2 rounded-lg m-2 items-center p-2 text-gray-400 text-center select-none text-3xl cursor-pointer" onClick={customClick}>+</li>
      </ul>
    </div>
  );
}