import { useMemo } from "react";
import useBibleStats from "./useBibleStats";

interface InternalChapter extends Chapter {
  averageNumberOfVerses: number;
}

export interface Chapter {
  bookName: string;
  chapter: number;
}

const useBibleChaptersSplitByNumbers = (
  partitionCount: number
): Chapter[][] => {
  const bibleStats = useBibleStats();
  const internalChapters = useMemo<InternalChapter[]>(
    () =>
      bibleStats.reduce(
        (accumulator: InternalChapter[], { chapters, name, verses }) => {
          const newInternalChapters: InternalChapter[] = Array.from(
            { length: chapters },
            (v, i) => ({
              bookName: name,
              chapter: i,
              averageNumberOfVerses: verses / chapters,
            })
          );
          return accumulator.concat(newInternalChapters);
        },
        []
      ),
    [bibleStats]
  );
  return [internalChapters];
};

export default useBibleChaptersSplitByNumbers;
