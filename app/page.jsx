"use client";

import "react-piano/dist/styles.css";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import StartButton from "../components/StartButton";
import ReplayButton from "../components/ReplayButton";
import { ScoreTracker } from "../components/ScoreTracker";
import { Howl, Howler } from "howler";
import { TotalScoreChart } from "@/components/TotalScoreChart";
import Header from "@/components/Header";

export default function Home() {
  const [noteToGuess, setNoteToGuess] = useState(null);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const notes = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];

  const dict = {
    C: "ハ",
    Db: "嬰ハ",
    D: "ニ",
    Eb: "嬰ニ",
    E: "ホ",
    F: "ヘ",
    Gb: "嬰ヘ",
    G: "ト",
    Ab: "嬰ト",
    A: "イ",
    Bb: "嬰イ",
    B: "ロ",
  };

  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [totals, setTotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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
  };

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

      const newScores = [...scores];
      newScores[notes.indexOf(noteToGuess)] += 1;
      setScores(newScores);

      const newTotals = [...totals];
      newTotals[notes.indexOf(noteToGuess)] += 1;
      setTotals(newTotals);
    } else {
      setMessage2("Try again!");
      setTotal(total + 1);

      const newTotals = [...totals];
      newTotals[notes.indexOf(noteToGuess)] += 1;
      setTotals(newTotals);
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
    <main className="flex flex-col items-center justify-center h-full">
      <Header />
      <div className="flex flex-col items-center gap-12 w-screen pt-16 justify-center">
        <div className="grid grid-cols-6 text-black gap-2 font-extrabold">
          {notes.map((note) => (
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
        ) : (
          <ReplayButton handleReplay={handleReplay} />
        )}
        <span>{message}</span>
      </div>
      <div className="flex flex-row w-full justify-center gap-16 p-6">
        <ScoreTracker scores={scores} totals={totals} dict={dict} />
        <TotalScoreChart score={score} total={total} />
      </div>
    </main>
  );
}
