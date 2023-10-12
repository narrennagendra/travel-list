export default function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>start adding some items to your packing list 🚀</em>
            </footer>
        );
    }
    const numItems = items.length;
    const numPacked = items.reduce((acc, item) => acc + item.packed, 0);
    const percentage = Math.floor((numPacked / numItems) * 100) || 0;
    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Ready to go ✈️"
                    : `💼 you have ${numItems} items on your list, and you already
                packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
