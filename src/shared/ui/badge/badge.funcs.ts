export function getRandomBadgeColor(value: string | number) {
    const index = Math.abs(hashString(value.toString())) % badgeColors.length;

    return badgeColors[index];
}

const badgeColors = [
    { bg: "bg-green-500/15 dark:bg-green-400/20", text: "text-green-700 dark:text-green-300" },
    { bg: "bg-blue-500/15 dark:bg-blue-400/20", text: "text-blue-700 dark:text-blue-300" },
    { bg: "bg-purple-500/15 dark:bg-purple-400/20", text: "text-purple-700 dark:text-purple-300" },
    { bg: "bg-yellow-500/15 dark:bg-yellow-400/20", text: "text-yellow-700 dark:text-yellow-300" },
    { bg: "bg-red-500/15 dark:bg-red-400/20", text: "text-red-700 dark:text-red-300" },
    { bg: "bg-indigo-500/15 dark:bg-indigo-400/20", text: "text-indigo-700 dark:text-indigo-300" },
    { bg: "bg-pink-500/15 dark:bg-pink-400/20", text: "text-pink-700 dark:text-pink-300" },
    { bg: "bg-teal-500/15 dark:bg-teal-400/20", text: "text-teal-700 dark:text-teal-300" },
];

function hashString(str: string) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}
