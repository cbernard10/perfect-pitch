"use client";

import "react-piano/dist/styles.css";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import StartButton from "../components/StartButton";
import ReplayButton from "../components/ReplayButton";
import { Howl, Howler } from "howler";

export default function Home() {
  const [noteToGuess, setNoteToGuess] = useState(null);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)

  const notes = ["C", "D", "E", "F", "G", "A", "B"];

  const pickRandomNote = () => {
    let randomIndex = Math.floor(Math.random() * notes.length);

    while (notes[randomIndex] === noteToGuess) {
      randomIndex = Math.floor(Math.random() * notes.length);
    }
    return notes[randomIndex];
  };

  const handleReplay = () => {
    const newNote = noteToGuess;
    let snd = new Howl({
      src: [`/sounds/${newNote}4.mp3`],
      volume: 0.5,
      playbackRate: 1,
      interrupt: true,
    });
    snd.play();
  }

  const handleStart = () => {
    const newNote = pickRandomNote();
    let snd = new Howl({
      src: [`/sounds/${newNote}4.mp3`],
      volume: 0.5,
      playbackRate: 1,
      interrupt: true,
    });
    snd.play();
    console.log(newNote);
    setNoteToGuess(newNote);
  };

  const handleCheckAnswer = (note) => {
    console.log(note);
    console.log(noteToGuess);

    if (note === noteToGuess) {
      setMessage2("Correct!");
      setScore(score + 1);
      setTotal(total + 1);
    } else {
      setMessage2("Try again!");
      setTotal(total + 1);
    }

    const newNote = pickRandomNote();
    // console.log("new note:", newNote);

    let snd = new Howl({
      src: [`/sounds/${newNote}4.mp3`],
      volume: 0.5,
      playbackRate: 1,
      interrupt: true,
    });
    snd.play();

    setNoteToGuess(newNote);
  };

  useEffect(() => {}, []);

  return (
    <main className="bg-neutral-100 flex flex-col items-center justify-center h-screen gap-12 w-screen pt-24">
      <div className="flex flex-row min-w-48 text-black gap-2">
        {["C", "D", "E", "F"].map((note) => (
          <Button
            name={note}
            key={note}
            noteToGuess={noteToGuess}
            handleClick={(note) => handleCheckAnswer(note)}
          />
        ))}
      </div>      
      <div className="flex flex-row min-w-48 text-black gap-2">
        {["G", "A", "B"].map((note) => (
          <Button
            name={note}
            key={note}
            noteToGuess={noteToGuess}
            handleClick={(note) => handleCheckAnswer(note)}
          />
        ))}
      </div>
      {noteToGuess === null ? (
        <StartButton
          name={"Start"}
          handleClick={handleStart}
          noteToGuess={noteToGuess}
        />
      ) : <ReplayButton handleReplay={handleReplay} />}
      <span>{message}</span>
      <span className="font-mono">score: {score}/{total} | accuracy = {(100 * score/total).toFixed(2)}%</span>
    </main>
  );
}
