"use client";
export default function ArchiveErrorPage({ error }) {
  console.log("EEE", error);
  return (
    <div id="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
    </div>
  );
}
