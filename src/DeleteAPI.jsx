import { useState } from "react";

function DeleteApi() {
    const [endpoint, setEndpoint] = useState("");

    function hitDelete() {
        if (!endpoint) {
            alert("Please enter an API URL");
            return;
        }

        fetch(endpoint, {
            method: "DELETE",
        })
            .then((res) => {
                console.log("DELETE status:", res.status, res.statusText);
                alert("Delete request sent  (check console)");
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Something went wrong ");
            });
    }

    return (
        <div className="space-y-2 mt-6">
            <input
                placeholder="DELETE API endpoint"
                className="py-2 px-4 border w-full"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
            />

            <button
                onClick={hitDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
                Delete
            </button>
        </div>
    );
}

export default DeleteApi;
