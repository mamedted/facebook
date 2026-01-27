import { sendText } from "../utils/helper";
import { sendFile } from "../utils/helper";
const api = import.meta.env.VITE_API;

export function Tester() {
  async function login() {
    let firstname = "Jonatahn";
    let lastname = "Kai";

    const result = await sendText(`${api}tester`, JSON.stringify({ firstname, lastname }));
    if (result.success) {
      alert(result.data.status);
    } else {
      alert("brooo");
    }
  }
  return (
    <>
      <h1 className="tc">Tester</h1>
      <button className="btn bg-blue-700 rounded-2xl white p-2" onClick={login}>
        SEND
      </button>
    </>
  );
}
