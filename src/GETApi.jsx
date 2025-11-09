import { useState } from "react";

function GETApi() {
    const [endpoint, setEndpoint] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function hitApi() {
        if (!endpoint) return; // nothing to call

        try {
            setLoading(true);
            setError(null);
            setResult(null);

            const res = await fetch(endpoint);          //  hit the API
            const bodyText = await res.text();          // read body as text

            setResult({
                ok: res.ok,
                status: res.status,
                statusText: res.statusText,
                body: bodyText,
            });
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-4">
            <input
                placeholder="Enter your API endpoint"
                className="py-3 px-4 border rounded w-full"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
            />

            <button
                onClick={hitApi}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                {loading ? "Checking..." : "Check"}
            </button>

            {error && <div className="text-red-500 text-sm">Error: {error}</div>}

            {result && (
                <pre className="mt-2 p-3 bg-gray-100 text-xs rounded overflow-x-auto">
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </div>
    );
}

export default GETApi;
