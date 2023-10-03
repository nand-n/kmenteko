import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "react-uuid";

const itemsCommit = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
];
const itemsFollow = [{ id: uuid(), content: "First task" }];
const itemsLost = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "First task" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Connect",
    items: itemsCommit,
    color: "#f3f1c4",
  },
  [uuid()]: {
    name: "Propose",
    items: itemsFollow,
    color: "#a2d0a8",
  },
  [uuid()]: {
    name: "Quality",
    items: itemsLost,
    color: "#96daff",
  },
  [uuid()]: {
    name: "Locked",
    items: itemsCommit,
    color: "#f3c4c4",
  },
};

console.log(columnsFromBackend, "columnsFromBackend");
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export default function LeadKanban() {
  const [columns, setColumns] = useState(columnsFromBackend);
  console.log(columns, "LeadKanban");
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <div
                style={{ background: column?.color }}
                className={`flex-initial text-[#000] hover:bg-[#f3f1c4b9] py-1 w-11/12	 text-center`}
              >
                {column.name}
              </div>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "#0f3a620f",
                          padding: 4,
                          width: 208,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "164px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#F5FAFD",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <div className="text-black text-sm">
                                      WKU Backup and VMmare
                                    </div>
                                    <div className="text-[#A9ABA9] text-sm">
                                      Deal
                                    </div>
                                    <div className="text-black text-sm">
                                      092-934-3990
                                    </div>
                                    <div className="text-[#A9ABA9] text-sm">
                                      Contact Phone
                                    </div>
                                    <div className="text-black text-sm">
                                      Jany_Deckow@gmail.com
                                    </div>
                                    <div className="text-[#A9ABA9] text-sm">
                                      Contact Email
                                    </div>
                                    <div className="text-[rgb(15,58,98)] text-sm">
                                      ERA
                                    </div>
                                    <div className="text-[#A9ABA9] text-sm">
                                      Client
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
