import { useState } from "react";

function PutApi() {
    const [endpoint, setEndpoint] = useState("");
    const [body, setBody] = useState("");

    function hitPut() {
        if (!endpoint) {
            alert("Please enter an API URL");
            return;
        }

        fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: body, //  you will type JSON here
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("PUT response:", data);
                alert("PUT done  (check console)");
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Something went wrong ");
            });
    }

    return (
        <div className="space-y-2 mt-6">
            <input
                placeholder="PUT API endpoint"
                className="py-2 px-4 border w-full"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
            />

            <textarea
                placeholder='PUT body (JSON)  e.g.  {"name": "niri"}'
                className="py-2 px-4 border w-full h-28"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            <button
                onClick={hitPut}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
                Send PUT
            </button>
        </div>
    );
}

export default PutApi;
