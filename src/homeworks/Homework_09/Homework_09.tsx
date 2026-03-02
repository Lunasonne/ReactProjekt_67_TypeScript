 
import { useState, type ChangeEvent } from "react";
 import { v4 } from "uuid";
 import Input from "components/Input/Input";
import Button from "components/Button/Button";
import type { Note } from "./types";
import { Container, Title, InputButtonContainer, TaskList, TaskItem,InputWrapper, ButtonWrapper } from "./styles";
  
export default function Homework_09() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>("");
    
   
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value);
  };

  
  const addNote = () => {
    if (!newNote.trim()) return;

    const note: Note = {
      id: v4(),
      text: newNote.trim(),
      createdAt: new Date(),
    };

    setNotes([...notes, note]);
    setNewNote("");
  };

  
  const noteItems = notes.map((note) => (
    <TaskItem key={note.id}>
      { note.createdAt.toLocaleString() + " " + note.text }
    </TaskItem>
  ));

  return (
    <Container>
      <Title>Homework 09</Title>

      <InputButtonContainer>
       <InputWrapper> 
        <Input
          id="note"
          name="note"
          label="Note"
          placeholder="Enter your note..."
          value={newNote}
          onChange={handleChange}
        />
        </InputWrapper>
        <ButtonWrapper> 
        <Button
          name="Add"
          onClick={addNote}
          disabled={!newNote.trim()}
        />
       </ButtonWrapper> 
      </InputButtonContainer>

      <TaskList>
        {noteItems}
      </TaskList>
    </Container>
  );
}