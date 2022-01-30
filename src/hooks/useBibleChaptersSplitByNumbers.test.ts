import { renderHook } from "@testing-library/react-hooks";
import useBibleChaptersSplitByNumbers from "./useBibleChaptersSplitByNumbers";

describe("useBibleChaptersSplitByNumbers", () => {
  it("should put all chapters into a single array", () => {
    const partitionCount = 1;

    const { result } = renderHook(() =>
      useBibleChaptersSplitByNumbers(partitionCount)
    );

    expect(result.current.length).toBe(partitionCount);
  });
  it("should put all chapters into two arrays", () => {
    const partitionCount = 2;

    const { result } = renderHook(() =>
      useBibleChaptersSplitByNumbers(partitionCount)
    );

    expect(result.current.length).toBe(partitionCount);
  });
});
