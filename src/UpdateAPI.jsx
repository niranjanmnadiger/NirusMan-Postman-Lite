import { useState } from "react";

function UpdateApi() {
    const [endpoint, setEndpoint] = useState("");
    const [body, setBody] = useState("");

    function hitUpdate() {
        if (!endpoint) {
            alert("Please enter an API URL");
            return;
        }

        fetch(endpoint, {
            method: "PATCH", //  PATCH for updating part of the resource
            headers: {
                "Content-Type": "application/json",
            },
            body: body, // You’ll type JSON here
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("UPDATE (PATCH) response:", data);
                alert("Update successful  (check console)");
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Something went wrong ");
            });
    }

    return (
        <div className="space-y-2 mt-6">
            <input
                placeholder="UPDATE API endpoint"
                className="py-2 px-4 border w-full"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
            />

            <textarea
                placeholder='PATCH body (JSON)  e.g.  {"status": "active"}'
                className="py-2 px-4 border w-full h-28"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            <button
                onClick={hitUpdate}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
                Update (PATCH)
            </button>
        </div>
    );
}

export default UpdateApi;
