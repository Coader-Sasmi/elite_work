/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ProgressBar({ progress }: any) {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#e0e0de", borderRadius: "5px" }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#192324",
          height: "11px",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
}
